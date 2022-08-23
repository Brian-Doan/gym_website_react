import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";

import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };

  return (
    <div className="testimonials" id="testimonials">
      {/* Left side of Testimonials */}
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="testimonial-name">
            {testimonialsData[selected].name}{" "}
          </span>
          <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>

      {/* Right side of Testimonials */}
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="testimonial-avatar"
        />
        <div className="arrows">
          <span
            className="prev-arrow"
            onClick={() =>
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1)
            }
          >
            &larr;
          </span>
          <span
            className="next-arrow"
            onClick={() =>
              selected === testimonialLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          >
            &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
