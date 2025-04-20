import { useState } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const setSubmitting = (isSubmitting) => {
    setIsSubmitting(isSubmitting);
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    isSubmitting,
    setSubmitting,
    resetForm,
  };
};

export default useForm;
