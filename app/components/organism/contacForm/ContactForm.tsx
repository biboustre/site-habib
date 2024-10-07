import React, { useState } from "react";
import InputField from "@/app/components/atoms/inputField/InputField";
import TextareaField from "@/app/components/atoms/textareaField/TextareaField";
import SubmitButton from "@/app/components/atoms/submitButton/SubmitButton";
import { submitContactForm } from "@/app/API/contactApi";
import { FormData } from "@/app/types/form/formData";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const message = await submitContactForm(formData);
      setSuccessMessage(message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: unknown) {
      // Vérification si l'erreur est de type Error
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="flex w-full flex-col gap-20 lg:flex-row lg:justify-between">
      {/* Section gauche avec texte et informations */}
      <section className="lg:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-slate-400">CONTACT</h2>
        {/* <p className="mb-8 text-gray-400">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
          </p> */}
        <ul className="space-y-4 text-slate-400">
          <li>
            <span role="img" aria-label="address">
              🏠
            </span>{" "}
            Fréjus 83600
          </li>
          <li>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            +33 6 74 32 48 32
          </li>
          <li>
            <span role="img" aria-label="email">
              📧
            </span>{" "}
            Web&apos;ibou@outlook.com
          </li>
        </ul>
      </section>

      {/* Section droite avec le formulaire */}
      <section className="lg:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputField
                label="Prénom"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <InputField
                label="Nom"
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
            label="Tel"
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
      </section>
    </section>
  );
}
