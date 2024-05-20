import React from "react";
import Layout from "@/components/Layout";
import BookingSection from "@/sections/BookingSection";

type Props = {};

function book({}: Props) {
  return (
    <Layout>
      <div className="mt-24 bg-grey-100">
        <BookingSection />
      </div>
    </Layout>
  );
}

export default book;
