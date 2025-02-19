"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Categories = () => {
  return (
    <div className="feature-card group">
      <p className="feature-card-title">Categories</p>
      <p className="feature-card-description">
        Discover resources tailored to your needs—more categories coming soon.
      </p>

      <motion.div className="feature-category-container">
        <Image
          src="/Landing/categories.png"
          alt="categoriesImg"
          width={2000}
          height={200}
          className=" feature-category-img"
        />
      </motion.div>
    </div>
  );
};

export default Categories;
