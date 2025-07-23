import { api } from "../lib/axios";
import axios from "axios";
import {
  RegisterData,
  LoginCredentials,
  ForgotPasswordData,
  ResetPasswordData,
  VerifyEmailParams,
  AuthResponse,
  ApiMessage,
} from "../types/auth.types";

export const authService = {
  register: async (data: RegisterData): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/register", data);
    if (!res.data.success) throw new Error(res.data.message);
    return res.data;
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/auth/login", credentials);

    if (!res.data.success || !res.data.data) {
      throw new Error(res.data.message || "Login failed");
    }

    return res.data.data; 
  },

  forgotPassword: async (data: ForgotPasswordData): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/forgot-password", data);
    if (!res.data.success) throw new Error(res.data.message);
    return res.data;
  },

  resetPassword: async (data: ResetPasswordData): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/reset-password", data);
    if (!res.data.success) throw new Error(res.data.message);
    return res.data;
  },

  verifyEmail: async (params: VerifyEmailParams): Promise<ApiMessage> => {
    const res = await api.get<ApiMessage>("/auth/verify-email", { params });
    if (!res.data.success) throw new Error(res.data.message);
    return res.data;
  },

  resendVerification: async (email: string): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/resend-verification", {
      email,
    });
    if (!res.data.success) throw new Error(res.data.message);
    return res.data;
  },

  logout: async (): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/logout");
    if (!res.data.success) throw new Error(res.data.message);
    return res.data;
  },

  refreshToken: async (): Promise<{ accessToken: string }> => {
    const res = await axios.post<{ accessToken: string }>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      {},
      { withCredentials: true }
    );
    return res.data; 
  },
};
