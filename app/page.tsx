"use client";

import React, { useState, useRef } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState<{ name: string; quote: string }[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const quoteRef = useRef<HTMLInputElement>(null);

  const clearInputs = () => {
    if (nameRef.current) nameRef.current.value = '';
    if (quoteRef.current) quoteRef.current.value = '';
  };

  const handleQuote = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!nameRef.current || !quoteRef.current) return;

    const name = nameRef.current.value;
    const quote = quoteRef.current.value;

    if (!name || !quote || e.key !== 'Enter') return;

    setQuotes([{ name, quote }, ...quotes]);
    clearInputs();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-sans text-4xl tracking-wide text-purple-700 text-center">Quotify</h2>
      <div className="flex flex-col w-3/5 gap-2 mt-4">
        <input placeholder="Name" ref={nameRef} className="outline-none border border-black px-2 py-1 text-lg" />
        <input placeholder="Quote" ref={quoteRef} onKeyPress={handleQuote} className="outline-none border border-black px-2 py-1 text-lg" />
      </div>
      <div className="quotes flex flex-col w-3/5 mt-8 gap-4">
        {quotes.map((q, i) => (
          <div key={i} className="flex flex-col p-4 rounded-lg bg-gray-200 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md">
            <i className="text-lg">"{q.quote}"</i>
            <b className="text-lg self-end">~ {q.name}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
