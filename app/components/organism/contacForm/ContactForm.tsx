import React, { useState } from "react";
import InputField from "@/app/components/atoms/inputField/InputField";
import TextareaField from "@/app/components/atoms/textareaField/TextareaField";
import SubmitButton from "@/app/components/atoms/submitButton/SubmitButton";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/mgvewldb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex w-full max-w-4xl flex-col space-y-8 p-8 lg:flex-row lg:space-x-16 lg:space-y-0">
        {/* Section gauche avec texte et informations */}
        <div className="lg:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Get in touch</h2>
          <p className="mb-8 text-gray-400">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
          </p>
          <ul className="space-y-4 text-gray-400">
            <li>
              <span role="img" aria-label="address">
                🏠
              </span>{" "}
              545 Mavis Island, Chicago, IL 99191
            </li>
            <li>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              +1 (555) 234-5678
            </li>
            <li>
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              hello@example.com
            </li>
          </ul>
        </div>

        {/* Section droite avec le formulaire */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <InputField
                  label="First name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <InputField
                  label="Last name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Phone number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextareaField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <SubmitButton />
          </form>
          {successMessage && (
            <div className="mt-4 text-green-500">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="mt-4 text-red-500">{errorMessage}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;