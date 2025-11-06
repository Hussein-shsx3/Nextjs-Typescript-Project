import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "@/services/userService";
import {
  UpdateProfileData,
  ChangePasswordData,
  UpdateUserByIdData,
  User,
} from "@/types/user.types";
import { getErrorMessage } from "@/lib/axios";

// ========================
// UPDATE SELF
// ========================
export const updateMeThunk = createAsyncThunk<
  { user: User; message?: string },
  UpdateProfileData,
  { rejectValue: string }
>("user/updateMe", async (data, { rejectWithValue }) => {
  try {
    return await userService.updateMe(data);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// CHANGE PASSWORD
// ========================
export const changePasswordThunk = createAsyncThunk<
  { message: string },
  ChangePasswordData,
  { rejectValue: string }
>("user/changePassword", async (data, { rejectWithValue }) => {
  try {
    return await userService.changePassword(data);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// DELETE ACCOUNT
// ========================
export const deleteMeThunk = createAsyncThunk<
  { message: string },
  void,
  { rejectValue: string }
>("user/deleteMe", async (_, { rejectWithValue }) => {
  try {
    return await userService.deleteMe();
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// UPDATE PROFILE PICTURE
// ========================
export const updateProfilePictureThunk = createAsyncThunk<
  { picture: string; message?: string },
  File,
  { rejectValue: string }
>("user/updateProfilePicture", async (file, { rejectWithValue }) => {
  try {
    return await userService.updateProfilePicture(file);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// UPDATE USER BY ID (ADMIN)
// ========================
export const updateUserByIdThunk = createAsyncThunk<
  { user: User; message?: string },
  { id: string; data: UpdateUserByIdData },
  { rejectValue: string }
>("user/updateUserById", async ({ id, data }, { rejectWithValue }) => {
  try {
    return await userService.updateUserById(id, data);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// ========================
// DELETE USER BY ID (ADMIN)
// ========================
export const deleteUserByIdThunk = createAsyncThunk<
  { message: string },
  string,
  { rejectValue: string }
>("user/deleteUserById", async (id, { rejectWithValue }) => {
  try {
    return await userService.deleteUserById(id);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});
