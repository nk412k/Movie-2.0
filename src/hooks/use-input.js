import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const IsValid = validateValue(enteredValue);
  const hasError = !IsValid && enteredValueTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = () => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    IsValid: IsValid,
    hasError,
    inputChangeHandler: valueInputChangeHandler,
    inputBlurHandler: valueInputBlurHandler,
    reset,
  };
};

export default useInput;
