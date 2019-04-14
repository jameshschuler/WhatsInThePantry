import { useEffect, useState } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    if (e) e.preventDefault();

    setIsSubmitting(true);
    setValidationErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(validationErrors).length === 0 && isSubmitting) {
      callback();
    }
  }, [validationErrors]);

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    validationErrors
  };
};

export default useForm;
