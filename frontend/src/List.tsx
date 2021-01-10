import React, { Component } from 'react';
import axios from 'axios';
import { ListItem } from './ListItem';

interface IUserListState {
  userList: Array<any>
}

export default class List extends Component<{}, IUserListState> {
  constructor(props: any) {
    super(props)
    this.state = { userList: [] }
  }

  public componentWillMount(): void {
    const apiUrl = 'https://jonruna.github.io/tapi/userList.json'
    axios.get(apiUrl).then(response => {
      this.setState({ userList: response.data.userList })
      console.log(this.state.userList)
    })
  }

  render() {
    return (
      <div className="list-conatiner">
        <ul>
          {this.state.userList.map((user: any) => {
            return <ListItem key={user.id} avatar={user.avatar} name={user.name} />
          })}
        </ul>
      </div>
    )
  }
}