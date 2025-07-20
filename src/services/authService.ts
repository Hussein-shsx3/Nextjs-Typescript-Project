import { api } from "../lib/axios";
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
  register: async (
    data: RegisterData
  ): Promise<{ success: boolean; message: string }> => {
    const res = await api.post("/auth/register", data);
    return res.data; // { success, message }
  },

  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/auth/login", credentials);
    return res.data.data!; // unwrap .data.data from ApiResponse
  },

  forgotPassword: async (data: ForgotPasswordData): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/forgot-password", data);
    return res.data.data!;
  },

  resetPassword: async (data: ResetPasswordData): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/reset-password", data);
    return res.data.data!;
  },

  verifyEmail: async (params: VerifyEmailParams): Promise<ApiMessage> => {
    const res = await api.get<ApiMessage>("/auth/verify-email", { params });
    return res.data.data!;
  },

  resendVerification: async (email: string): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/resend-verification", {
      email,
    });
    return res.data.data!;
  },

  logout: async (): Promise<ApiMessage> => {
    const res = await api.post<ApiMessage>("/auth/logout");
    return res.data.data!;
  },

  refreshToken: async (): Promise<{ accessToken: string }> => {
    const res = await api.get<{ accessToken: string }>("/auth/refresh-token");
    return res.data.data!;
  },
};
