"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resendVerificationThunk } from "@/store/thunks/authThunks";
import { clearAuthMessages } from "@/store/slices/authSlice";

const UseResendVerification = () => {
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();
  const { loading, message, error } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    dispatch(resendVerificationThunk(email));
  };

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, []);

  return {
    email,
    setEmail,
    handleSubmit,
    loading,
    message,
    error,
  };
};

export default UseResendVerification;
