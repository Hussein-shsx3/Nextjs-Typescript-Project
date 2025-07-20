import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "@/services/authService";
import {
  RegisterData,
  LoginCredentials,
  ForgotPasswordData,
  ResetPasswordData,
  VerifyEmailParams,
  AuthResponse,
  ApiMessage,
} from "../../types/auth.types";
import { getErrorMessage } from "../../lib/axios";

// ========================
// REGISTER USER
// ========================
export const registerThunk = createAsyncThunk<
  { success: boolean; message: string }, // Return type
  RegisterData, // Input type
  { rejectValue: string }
>("auth/register", async (data, { rejectWithValue }) => {
  try {
    return await authService.register(data);
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// LOGIN USER
// ========================
export const loginThunk = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await authService.login(credentials);

    return response;
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// LOGOUT USER
// ========================
export const logoutThunk = createAsyncThunk<
  ApiMessage,
  void,
  { rejectValue: string }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    return await authService.logout();
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// FORGOT PASSWORD
// ========================
export const forgotPasswordThunk = createAsyncThunk<
  ApiMessage,
  ForgotPasswordData,
  { rejectValue: string }
>("auth/forgotPassword", async (data, { rejectWithValue }) => {
  try {
    return await authService.forgotPassword(data);
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// RESET PASSWORD
// ========================
export const resetPasswordThunk = createAsyncThunk<
  ApiMessage,
  ResetPasswordData,
  { rejectValue: string }
>("auth/resetPassword", async (data, { rejectWithValue }) => {
  try {
    return await authService.resetPassword(data);
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// VERIFY EMAIL
// ========================
export const verifyEmailThunk = createAsyncThunk<
  ApiMessage,
  VerifyEmailParams,
  { rejectValue: string }
>("auth/verifyEmail", async (params, { rejectWithValue }) => {
  try {
    return await authService.verifyEmail(params);
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// RESEND VERIFICATION EMAIL
// ========================
export const resendVerificationThunk = createAsyncThunk<
  ApiMessage,
  string, // email
  { rejectValue: string }
>("auth/resendVerification", async (email, { rejectWithValue }) => {
  try {
    return await authService.resendVerification(email);
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// REFRESH ACCESS TOKEN
// ========================
export const refreshTokenThunk = createAsyncThunk<
  { accessToken: string },
  void,
  { rejectValue: string }
>("auth/refreshToken", async (_, { rejectWithValue }) => {
  try {
    return await authService.refreshToken();
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error));
  }
});
