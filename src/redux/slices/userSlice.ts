import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/user.types";
import {
  updateMeThunk,
  changePasswordThunk,
  deleteMeThunk,
  updateProfilePictureThunk,
  updateUserByIdThunk,
  deleteUserByIdThunk,
} from "../thunks/userThunks";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserMessages(state) {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Update Me
      .addCase(updateMeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.message = action.payload.message ?? null;
      })
      .addCase(updateMeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update profile";
      })

      // Change Password
      .addCase(changePasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(changePasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to change password";
      })

      // Delete Me
      .addCase(deleteMeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.user = null;
      })
      .addCase(deleteMeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete account";
      })

      // Update Profile Picture
      .addCase(updateProfilePictureThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfilePictureThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user.picture = action.payload.picture;
        }
        state.message = action.payload.message ?? null;
      })
      .addCase(updateProfilePictureThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update profile picture";
      })

      // Update User By ID
      .addCase(updateUserByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message ?? null;
      })
      .addCase(updateUserByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update user";
      })

      // Delete User By ID
      .addCase(deleteUserByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteUserByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete user";
      });
  },
});

export const { clearUserMessages } = userSlice.actions;

export default userSlice.reducer;
