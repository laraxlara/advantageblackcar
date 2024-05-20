import React from "react";
import FrequentlyAskedQuestion from "@/components/faq/FrequentlyAskedQuestion";

import { faqs } from "@/components/faq/Faq";

type Props = {};

function FAQS({}: Props) {
  return (
    <div className="flex justify-center items-center bg-black xl:bg-transparent pt-12">
      <div className="py-6 max-w-screen-xl">
        <h4 className="mb-4 text-center text-2xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h4>
        <div className="space-y-4 py-6 w-[350px] md:w-[750px]">
          {faqs.map((faq) => {
            return (
              <>
                <FrequentlyAskedQuestion
                  keyProp={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQS;
