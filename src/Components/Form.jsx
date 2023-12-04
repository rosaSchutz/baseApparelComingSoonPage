import React from "react";
import classes from "../styles/form.module.css";

const Form = () => {
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.divForm}`}>
        <input type="email" name="" id="" placeholder="Email Address" />
        <button type="submit">
          <img src="../../public/icon-arrow.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

export default Form;
