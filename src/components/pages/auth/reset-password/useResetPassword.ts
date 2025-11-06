"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetPasswordThunk } from "@/store/thunks/authThunks";
import { clearAuthMessages } from "@/store/slices/authSlice";
import { ResetPasswordData } from "@/types/auth.types";

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const { loading, error, message } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<ResetPasswordData>({
    token: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    dispatch(clearAuthMessages());

    const tokenFromQuery = searchParams.get("token");
    if (tokenFromQuery) {
      setFormData((prev) => ({
        ...prev,
        token: tokenFromQuery,
      }));
    }
  }, [dispatch, searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(resetPasswordThunk(formData));
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

export default useResetPassword;
