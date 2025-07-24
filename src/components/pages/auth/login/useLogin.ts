"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginThunk } from "@/redux/thunks/authThunks";
import { clearAuthMessages } from "@/redux/slices/authSlice";

interface LoginFormData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error, isAuthenticated, message } = useAppSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated, router]);

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
