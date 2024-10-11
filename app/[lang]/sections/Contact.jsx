import React from "react";
import Headline from "@/app/components/Headline";
import ContactForm from "@/app/components/ContactForm";
import SocialLinks from "@/app/components/SocialLinks";

const Contact = () => {
  return (
    <div className="py-5 px-[10px] border-t border-secondary sm:px-5 md:px-[60px]">
      <Headline>Contact</Headline>

      <div className="py-[10px] md:grid md:grid-cols-12">
        <div className="py-[10px] md:col-start-6 md:col-end-13">
          <h4 className="text-2xl pb-5 md:text-4xl">
            Let me know if you have any questions or just wanted to say hi.
            Let's create something awesome together!
          </h4>
        </div>

        <div className="py-5 mt-5 md:col-start-6 md:col-end-13">
          <ContactForm />
        </div>

        <div className="py-5 md:col-start-1 md:col-end-3 md:row-start-1">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
