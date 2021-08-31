import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import React, { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const updateUserList = (userName, userAge) => {
    console.log(userList);
    setUserList((prevList) => {
      return [...prevList, { name: userName, age: userAge }];
    });
  };
  return (
    <div className='container'>
      <AddUser addUserHandle={updateUserList} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
