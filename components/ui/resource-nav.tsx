"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { SuggestionForm } from "./suggestion-dialog";

export default function ResourceNav() {
  interface Resourcelinks {
    name: string;
    href: string;
  }

  const componentsData: Resourcelinks[] = [
    { name: "Early Careers", href: "/early-careers" },
    { name: "Organizations", href: "/organizations" },
  ];

  return (
    <nav className="flex justify-between sm:items-center gap-4 flex-col sm:flex-row">
      <SuggestionForm />

      <div className="flex gap-2 order-2 sm:order-1">
        {componentsData.map((nav, index) => (
          <Button
            size="sm"
            key={index}
            className="rounded-full"
            variant="outline"
          >
            {nav.name}
          </Button>
        ))}
      </div>
    </nav>
  );
}
