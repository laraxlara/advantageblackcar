import React from "react";
import Layout from "@/components/Layout";
import ContactInfo from "@/sections/ContactInfo";
import ContactSectionMap from "@/sections/ContactSectionMap";

type Props = {};

const Contact = (props: Props) => {
  return (
    <Layout>
      <ContactInfo />
      <ContactSectionMap />
    </Layout>
  );
};

export default Contact;
