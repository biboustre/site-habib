import { submitContactFormData } from "@/app/types";
  
  export const submitContactForm = async (url: string, formData: submitContactFormData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send your message. Please try again.");
      }
  
      return "Your message has been sent successfully!";
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred. Please try again.");
    }
  };