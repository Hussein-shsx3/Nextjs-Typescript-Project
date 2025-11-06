"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { verifyEmailThunk } from "@/store/thunks/authThunks";
import { clearAuthMessages } from "@/store/slices/authSlice";

export const useVerifyEmail = (autoRedirect: boolean = true) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const dispatch = useAppDispatch();
  const { loading, message, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(verifyEmailThunk({ token }));
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(clearAuthMessages());
  }, []);

  useEffect(() => {
    if (autoRedirect && message) {
      const timer = setTimeout(() => {
        router.push("/login");
        dispatch(clearAuthMessages());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, autoRedirect, router]);

  return { loading, message, error, token };
};
