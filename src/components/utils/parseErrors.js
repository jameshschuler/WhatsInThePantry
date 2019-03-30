const parseErrors = response => {
  let parsedErrors = {};

  parsedErrors.message = response.message;

  console.log(response);

  // TODO:

  return parsedErrors;
};

export default parseErrors;
