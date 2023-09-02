"use client";
import React, { useEffect, useState } from "react";

export default function Notices() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Define an async function to fetch the quote from the API
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    // Call the fetchQuote function when the component mounts
    fetchQuote();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <h2>Random Quote</h2>
      <blockquote>{quote}</blockquote>
    </div>
  );
}
