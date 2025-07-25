"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { forgotPasswordThunk } from "@/redux/thunks/authThunks";
import { clearAuthMessages } from "@/redux/slices/authSlice";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const { loading, message, error } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    dispatch(forgotPasswordThunk({ email }));
  };

  const clearMessages = () => {
    dispatch(clearAuthMessages());
  };

  return {
    email,
    setEmail,
    loading,
    message,
    error,
    handleSubmit,
    clearMessages,
  };
};
