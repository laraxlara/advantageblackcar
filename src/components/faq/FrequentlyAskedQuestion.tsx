import React, { useState } from "react";

type Props = {
  keyProp: number;
  question: string;
  answer: string;
};

function FrequentlyAskedQuestion(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details key={props.keyProp} className="group border bg-black rounded-xl">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-6 text-white"
        onClick={toggleFAQ}
      >
        <h2 className="font-medium">{props.question}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </summary>

      <p
        className={`${
          isOpen ? "block" : "hidden"
        } px-4 leading-relaxed text-gray-300 p-6`}
      >
        {props.answer}
      </p>
    </details>
  );
}

export default FrequentlyAskedQuestion;
