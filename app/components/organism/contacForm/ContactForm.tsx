import React, { useState } from "react";
import Input from "@/app/components/atoms/form/Input";
import Textarea from "@/app/components/atoms/form/Textarea";
import SubmitButton from "@/app/components/atoms/submitButton/SubmitButton";
import { useSubmitContactForm } from "@/app/hooks/use_Submit_Contact_Form";
import { submitContactFormData } from "@/app/types";

interface ContactFormProps {
  children?: React.ReactNode;
}

export default function ContactForm({ children }: ContactFormProps) {
  const [formData, setFormData] = useState<submitContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { successMessage, errorMessage, handleSubmit } = useSubmitContactForm("https://formspree.io/f/mgvewldb");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <section className="flex w-full flex-col gap-20 lg:flex-row lg:justify-between">
      {/* Section gauche avec texte et informations */}
      <section className="lg:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-slate-400 md:text-5xl md:mb-10">CONTACT</h2>
        <ul className="space-y-4 text-slate-400 md:text-xl">
          <li>
            <span role="img" aria-label="address">🏠</span>{" "}
            Fréjus 83600
          </li>
          <li>
            <span role="img" aria-label="phone">📞</span>{" "}
            +33 6 74 32 48 32
          </li>
          <li>
            <span role="img" aria-label="email"> 📧</span>{" "}
            Web&apos;ibou@outlook.com
          </li>
        {children}
        </ul>
      </section>

      <section className="lg:w-1/2">
        <form onSubmit={onSubmit} className="space-y-6 ">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Input
                label="Prénom"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <Input
                label="Nom"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Tel"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
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
