// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  loginThunk,
  registerThunk,
  logoutThunk,
  forgotPasswordThunk,
  resetPasswordThunk,
  verifyEmailThunk,
  resendVerificationThunk,
  refreshTokenThunk,
} from "../thunks/authThunks";
import { IUser, AuthState } from "@/types/auth.types";

// Initialize state from cookie if exists
const initialAccessToken =
  typeof window !== "undefined" ? Cookies.get("accessToken") || null : null;

const initialState: AuthState = {
  user: null,
  accessToken: initialAccessToken,
  isAuthenticated: !!initialAccessToken,
  loading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Manually set user (e.g., after fetching profile)
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    // Clear state manually (optional)
    resetAuthState(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.message = null;
      Cookies.remove("accessToken");
    },
  },
  extraReducers: (builder) => {
    // LOGIN
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.isAuthenticated = true;

        Cookies.set("accessToken", action.payload.accessToken, {
          expires: 1 / 24,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          httpOnly: false,
          path: "/",
        });
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false; 
        state.accessToken = null; 
        state.user = null; 
        state.error = action.payload || action.error?.message || "Login failed";
      });

    // REGISTER
    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      });

    // LOGOUT
    builder
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.message = "Logged out successfully";

        Cookies.remove("accessToken");
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });

    // FORGOT PASSWORD
    builder
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message; // "Reset link sent"
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to send reset email";
      });

    // RESET PASSWORD
    builder
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message; // "Password reset successfully"
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to reset password";
      });

    // VERIFY EMAIL
    builder
      .addCase(verifyEmailThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(verifyEmailThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message; // "Email verified successfully"
      })
      .addCase(verifyEmailThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Email verification failed";
      });

    // RESEND VERIFICATION
    builder
      .addCase(resendVerificationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(resendVerificationThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message; // "Verification email resent"
      })
      .addCase(resendVerificationThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to resend verification";
      });

    // REFRESH TOKEN
    builder
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;

        // Update cookie
        Cookies.set("accessToken", action.payload.accessToken, {
          expires: 1 / 24,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        Cookies.remove("accessToken");
      });
  },
});

// Export actions
export const { setUser, resetAuthState } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
