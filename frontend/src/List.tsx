import React, { Component } from 'react';
import axios from 'axios';
import { ListItem } from './ListItem';

interface IUserListState {
  userList: Array<any>
  filterString: string
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
    this.state = { userList: [], filterString: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  public componentWillMount(): void {
    // When I point this towards the written API it seems that this lifecycle method breaks (listed as unstable in this version of React)
    const apiUrl = 'https://jonruna.github.io/tapi/userList.json'
    axios.get(apiUrl).then(response => {
      this.setState({ userList: response.data.userList })
    })
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ filterString: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="list-container">
          <label htmlFor="name" className="label-name">
            <span className="content-name">Filter</span>
          </label>
          <div>
            <input className="filter" type="text" onChange={this.handleChange}/>
          </div>
          <ul>
            {/* The magic happens here. Text is filtered using the first and last name data and the onChange function of the input field and the 
            list is dynamically generated from there.*/}
            {this.state.userList.filter((user: User)=> {
              const fullName = user.name.first + ' ' + user.name.last
              return fullName.toLowerCase().includes(this.state.filterString.toLowerCase())
            }).map((user: User) => {
              return <ListItem key={user.id} avatar={user.avatar} name={user.name} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}