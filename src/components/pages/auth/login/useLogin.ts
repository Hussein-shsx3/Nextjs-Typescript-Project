"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginThunk } from "@/store/thunks/authThunks";
import { clearAuthMessages } from "@/store/slices/authSlice";
import { LoginCredentials } from "@/types/auth.types";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
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
    const resultAction = await dispatch(loginThunk(formData));

    if (loginThunk.fulfilled.match(resultAction)) {
      router.push("/");
    }
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
