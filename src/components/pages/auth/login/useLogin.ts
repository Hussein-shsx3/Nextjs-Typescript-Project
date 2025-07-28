"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginThunk } from "@/redux/thunks/authThunks";
import { clearAuthMessages } from "@/redux/slices/authSlice";
import { LoginCredentials } from "@/types/auth.types";

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const { loading, error, message } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(loginThunk(formData));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    message,
  };
};
