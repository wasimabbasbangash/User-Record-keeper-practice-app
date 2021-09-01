import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./error.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClickHandle} />;
};
const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};
function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClickHandle={props.onClickHandle} />,
        document.getElementById("backdrop_Root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          onClick={props.onClickHandle}
          title={props.title}
          message={props.message}
        ></Overlay>,
        document.getElementById("backdrop_Overlay")
      )}
    </>
  );
}

export default ErrorModal;
