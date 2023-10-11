import { useState } from "react";
import classes from "./UserInput.module.css";

const initialuserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialuserInput);

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);

    // console.log("SUBMIT");
  };

  const resetHandler = (event) => {
    // console.log("RESET");
    // event.preventDefault();
    setUserInput(initialuserInput);
  };

  const inputChangeHandler = (input, value) => {
    // console.log(input, value);

    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  // const calculateHandler = (event) => {
  //   event.preventDefault();
  //   props.onCalculate(userInput);
  // };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={userInput["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes["buttonAlt"]}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          // onClick={calculateHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
