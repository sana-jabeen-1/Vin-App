import React, { useState } from 'react';
import './Faqcom.css';

const FaqComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for accordion
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section py-20 md:pb-20 sm:pb-10 pb-3" id="faq-section">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="faq-subtitle">FAQ'S</h3>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
        <div className="accordion-container mt-20">
          <AccordionItem
            index={1}
            title="What Can You Learn From a Vehicle History Report?"
            content="Vehicle history reports reveal key information such as accidents, title issues, and odometer readings."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            index={2}
            title="What information is included in a car history report?"
            content="It typically includes accident history, title status, odometer readings, and service records."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            index={3}
            title="Is there a cheaper alternative to Carfax?"
            content="Yes, several other services provide similar reports at a lower cost, such as AutoCheck and VINCheckPro."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            index={4}
            title="Can I change my VIN number?"
            content="No, changing a VIN number is illegal unless authorized by a government agency."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            index={5}
            title="Are VIN and chassis numbers the same?"
            content="VIN and chassis numbers are not the same. The chassis number is part of the VIN and provides vehicle-specific information."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            index={6}
            title="Which vehicle history report is the best?"
            content="Carfax is considered the most comprehensive, but AutoCheck offers similar quality at a lower price."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            index={7}
            title="How to get a free vehicle history report?"
            content="Some services, like VINCheck and the National Insurance Crime Bureau (NICB), provide free basic reports."
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>
    </section>
  );
};

// Accordion Item Component
const AccordionItem = ({ index, title, content, activeIndex, toggleAccordion }) => (
  <div className="accordion-item">
    <h2
      className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
      onClick={() => toggleAccordion(index)}
      role="tab"
      aria-expanded={activeIndex === index}
      aria-controls={`panel-${index}`}
    >
      <span className={`accordion-icon ${activeIndex === index ? 'rotate' : ''}`}>
        {activeIndex === index ? '▲' : '▼'}
      </span>
      {title}
    </h2>
    <div
      id={`panel-${index}`}
      className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
      role="tabpanel"
    >
      <p>{content}</p>
    </div>
  </div>
);

export default FaqComp;
