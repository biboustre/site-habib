import { useState } from "react";
import { submitContactForm } from "@/app/API/contact/Submit_Contact_Form";
import { submitContactFormData } from "@/app/types/form/submitContactFormData";

export const useSubmitContactForm = (url: string) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (formData: submitContactFormData) => {
    try {
      const message = await submitContactForm(url, formData);
      setSuccessMessage(message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return {
    successMessage,
    errorMessage,
    handleSubmit,
  };
};