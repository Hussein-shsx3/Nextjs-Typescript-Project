"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { forgotPasswordThunk } from "@/store/thunks/authThunks";
import { clearAuthMessages } from "@/store/slices/authSlice";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();
  const { loading, message, error } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    dispatch(forgotPasswordThunk({ email }));
  };

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, []);

  return {
    email,
    setEmail,
    loading,
    message,
    error,
    handleSubmit,
  };
};
