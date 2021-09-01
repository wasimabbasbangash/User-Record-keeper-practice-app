import React, { useState, useRef } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper";

export default function AddUser(props) {
  const [error, setError] = useState(false);
  const inputUsername = useRef();
  const inputAge = useRef();

  const handleAddUser = (event) => {
    event.preventDefault();
    const enteredUsername = inputUsername.current.value;
    const enteredAge = inputAge.current.value;

    console.log(enteredUsername.trim().length);
    console.log(enteredAge);

    if (enteredUsername.trim().length !== 0 && enteredAge > 0) {
      props.addUserHandle(enteredUsername, enteredAge);
    } else {
      setError({ title: "error Occured", message: "Something Went Wrong!" });
    }
  };

  const onclickHandle = () => {
    setError("");
  };
  return (
    <Wrapper>
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
          <input id='inputUsername' type='text' ref={inputUsername}></input>
          <label htmlFor='age'>Age (Years)</label>
          <input id='inputAge' name='age' ref={inputAge}></input>
          <Button type='submit'>Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
