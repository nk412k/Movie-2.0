import React from "react";
import useInput from "../hooks/use-input";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const {
    value: titleInput,
    IsValid: titleValid,
    hasError: titleHasError,
    inputBlurHandler: titleBlurHandler,
    inputChangeHandler: titleChangeHandler,
    reset: titleReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: openingText,
    IsValid: openingTextValid,
    hasError: openingTextHasError,
    inputBlurHandler: openingTextBlurHandler,
    inputChangeHandler: openingTextChangeHandler,
    reset: openingTextReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: releaseDate,
    IsValid: releaseDateValid,
    hasError: releaseDateHasError,
    inputBlurHandler: releaseDateBlurHandler,
    inputChangeHandler: releaseDateChangeHandler,
    reset: releaseDateReset,
  } = useInput((value) => value.trim()!=='');

  let formIsvalid = false;

  if (titleValid && openingTextValid && releaseDateValid) formIsvalid = true;

  
  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleInput,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    titleReset();
    openingTextReset();
    releaseDateReset();

    props.onAddMovie(movie);
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div
        className={` ${classes.control} ${titleHasError && classes.invalid}`}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={titleInput}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        {titleHasError && (
          <p className={classes["error-text"]}>Title must not be empty.</p>
        )}
      </div>
      <div
        className={` ${classes.control} ${
          openingTextHasError && classes.invalid
        }`}
      >
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          value={openingText}
          onChange={openingTextChangeHandler}
          onBlur={openingTextBlurHandler}
        ></textarea>
        {openingTextHasError && (
          <p className={classes["error-text"]}>
            Opening Text must not be empty.
          </p>
        )}
      </div>
      <div
        className={` ${classes.control} ${
          releaseDateHasError && classes.invalid
        }`}
      >
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          value={releaseDate}
          onChange={releaseDateChangeHandler}
          onBlur={releaseDateBlurHandler}
        />
        {releaseDateHasError && (
          <p className={classes["error-text"]}>
            Release Date must not be empty.
          </p>
        )}
      </div>
      <button disabled={!formIsvalid}>Add Movie</button>
    </form>
  );
}

export default AddMovie;
