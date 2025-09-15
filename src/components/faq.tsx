"use client";
import React, { useState } from "react";
import "../styles/faq.css";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla crasport tititore ismod nulla.",
  },
  {
    id: 2,
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla crasport tititore ismod nulla.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla crasport tititore ismod nulla.",
  },
  {
    id: 4,
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla crasport tititore ismod nulla.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <div className="faq-container" id="faq">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className={`faq-item ${activeId === faq.id ? "active" : ""}`}
        >
          <div className="faq-header" onClick={() => toggleFAQ(faq.id)}>
            <span className="faq-number">
              {faq.id < 10 ? `0${faq.id}` : faq.id}
            </span>
            <span className="faq-question">{faq.question}</span>
            <span className={`${activeId === faq.id ?"faq-icon-cross" : "faq-icon-plus"}`}>{activeId === faq.id ? "✖" : "＋"}</span>
          </div>
          <div
            className="faq-content"
            style={{
              maxHeight: activeId === faq.id ? "500px" : "0px",
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
