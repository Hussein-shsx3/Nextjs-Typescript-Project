"use client";

import { Loader2 } from "lucide-react";
import Container from "@/components/layout/Container";
import React from "react";

const LoadingPage = ({ message = "Loading..." }) => {
  return (
    <Container className="items-center justify-center">
      <div className="flex flex-col items-center space-y-6 p-8">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-8 shadow-xl border border-slate-200">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            {message}
          </h2>
          <p className="text-slate-500 text-sm">Just a moment please...</p>
        </div>

        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
      </div>
    </Container>
  );
};

export default LoadingPage;
