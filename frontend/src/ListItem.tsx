import React from "react";

interface Props {
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

export const ListItem: React.FC<Props> = ({avatar, name}) => {
  return (
    <div className="list-item">
      <div>{name.first} {name.last}</div>
      <div><img alt="User avatar" src={avatar.url} /></div>
    </div>
  )
}
