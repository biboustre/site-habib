import React, { useState } from "react";
import Input from "@/app/components/atoms/form/Input";
import Textarea from "@/app/components/atoms/form/Textarea";
import SubmitButton from "@/app/components/atoms/button/SubmitButton";
import { useSubmitContactForm } from "@/app/hooks/use_Submit_Contact_Form";
import { submitContactFormData } from "@/app/types";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState<submitContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { successMessage, errorMessage, handleSubmit } = useSubmitContactForm(
    "https://formspree.io/f/mgvewldb"
  );

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

  const pathname = usePathname();
  const bgForm = pathname === "/" ? "bgFooter" : "bg-gray-800";

  return (
    <section className="flex w-full flex-col  md:flex-row lg:w-[90%] lg:justify-between 2xl:h-[800px]">
      {/* Section gauche avec texte et informations */}
      <section className={`h-[400px] md:h-auto md:w-1/2 ${bgForm}`}>
        <figure className="relative size-full">
          <Image
            src="/images/pexel2.webp"
            alt="contact"
            fill
            loading="lazy"
            className="object-cover"
          />
        </figure>
      </section>

      <section className="rounded-b-2xl bg-white p-5 md:w-1/2 md:rounded-b-none md:p-10 xl:p-12">
        <form
          onSubmit={onSubmit}
          className="space-y-6 xl:w-full 2xl:space-y-20"
        >
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Input
                placeholder="Prénom"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <Input
                placeholder="Nom"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Tel"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
          <SubmitButton text="Envoyer un message" />
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
