import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../ui/ErrorModal";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);

  const handleAddUser = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length !== 0 && enteredAge.trim.length !== 0) {
      props.addUserHandle(enteredUsername, enteredAge);
      setEnteredAge("");
      setEnteredUsername("");
    } else {
      setError({ title: "error Occured", message: "Something Went Wrong!" });
    }
  };

  const handleChangeUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const onclickHandle = () => {
    setError("");
  };
  return (
    <>
      {error && (
        <ErrorModal
          onClickHandle={onclickHandle}
          title={error.title}
          message={error.message}
        />
      )}
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
