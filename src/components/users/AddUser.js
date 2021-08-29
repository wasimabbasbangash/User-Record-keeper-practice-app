import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length !== 0 || !enteredAge.trim.length !== 0) {
      if (+enteredAge > 0) {
        console.log("in here");
        setEnteredAge("");
        setEnteredUsername("");
        console.log(enteredUsername + " " + enteredAge);
      }
    }
  };

  const handleChangeUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor='username'>Username</label>
          <input
            value={enteredUsername}
            type='text'
            name='username'
            onChange={handleChangeUsername}
          ></input>
          <label htmlFor='age'>Age (Years)</label>
          <input
            name='age'
            value={enteredAge}
            type='number'
            onChange={handleChangeAge}
          ></input>
          <Button type='submit'>Submit</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
