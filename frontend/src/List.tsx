import React, { Component } from 'react';
import axios from 'axios';
import { ListItem } from './ListItem';

interface IUserListState {
  userList: Array<any>
}

interface User {
  avatar: {
    url: string
  }
  name: {
    first: string
    last: string
  }
  email?: string
  id?: string
}

export default class List extends Component<{}, IUserListState> {
  constructor(props: IUserListState) {
    super(props)
    this.state = { userList: [] }
  }

  public componentWillMount(): void {
    const apiUrl = 'http://localhost:3000/api/users'
    axios.get(apiUrl).then(response => {
      this.setState({ userList: response.data.userList })
      console.log(this.state.userList)
    })
  }

  render() {
    return (
      <div className="list-conatiner">
        <ul>
          {this.state.userList.map((user: User) => {
            return <ListItem key={user.id} avatar={user.avatar} name={user.name} />
          })}
        </ul>
      </div>
    )
  }
}