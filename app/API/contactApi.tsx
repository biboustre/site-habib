interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export const submitContactForm = async (formData: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mgvewldb", {
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