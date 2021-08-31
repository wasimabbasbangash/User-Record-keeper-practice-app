import React from "react";
import Card from "../ui/Card";
import listClasses from "./UsersList.module.css";

function UserList(props) {
  console.log(props);
  return (
    <Card className={listClasses.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user}>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
