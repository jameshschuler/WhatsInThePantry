import React, { useState } from "react";

const Autocomplete = ({
  placeholder,
  name,
  suggestions,
  classes,
  getAutocompleteValue
}) => {
  const [values, setValues] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  });

  // Event fired when the input value is changed
  const onChange = e => {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setValues({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  const onClick = e => {
    // Update the user input and reset the rest of the state
    setValues({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });

    getAutocompleteValue(e.currentTarget.getAttribute("data-value"));
  };

  // Event fired when the user presses a key down
  const onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = values;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      e.preventDefault();
      setValues({
        ...values,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion].label
      });

      getAutocompleteValue(filteredSuggestions[activeSuggestion].value);
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setValues({ ...values, activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setValues({ ...values, activeSuggestion: activeSuggestion + 1 });
    }
  };

  let suggestionsListComponent;

  const {
    showSuggestions,
    userInput,
    filteredSuggestions,
    activeSuggestion
  } = values;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li
                className={className}
                key={index}
                onClick={onClick}
                data-value={suggestion.value}
              >
                {suggestion.label}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No items found.</em>
        </div>
      );
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        name={name}
        placeholder={placeholder}
        className={classes}
      />
      {suggestionsListComponent}
    </>
  );
};

export default Autocomplete;
