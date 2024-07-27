import { useState } from "react";

const usePostFormValidation = () => {
  const [errors, setErrors] = useState({
    title: "",
    content: "",
    author: "",
  });

  const validateForm = (title, content, author) => {
    let valid = true;
    let errors = { title: "", content: "", author: "" };

    if (title.trim() === "") {
      errors.title = "El título es requerido.";
      valid = false;
    }

    if (content.trim() === "") {
      errors.content = "El contenido es requerido.";
      valid = false;
    }

    if (author.trim() === "") {
      errors.author = "El autor es requerido.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  return { errors, validateForm };
};

export default usePostFormValidation;
