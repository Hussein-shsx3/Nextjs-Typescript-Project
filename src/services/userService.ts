import { api, isApiSuccess } from "../lib/axios";
import {
  User,
  UpdateProfileData,
  ChangePasswordData,
  UpdateUserByIdData,
  PaginatedUsersResponse,
} from "@/types/user.types";

export const userService = {
  getMe: async (): Promise<{ user: User; message?: string }> => {
    const res = await api.get<User>("/users/me");
    if (!isApiSuccess(res) || !res.data.data) {
      throw new Error(res.data.message || "Failed to fetch user profile");
    }
    return { user: res.data.data, message: res.data.message };
  },

  updateMe: async (
    data: UpdateProfileData
  ): Promise<{ user: User; message?: string }> => {
    const res = await api.patch<User>("/users/me", data);
    if (!isApiSuccess(res) || !res.data.data) {
      throw new Error(res.data.message || "Failed to update profile");
    }
    return { user: res.data.data, message: "Profile updated successfully" };
  },

  changePassword: async (
    data: ChangePasswordData
  ): Promise<{ message: string }> => {
    const res = await api.patch<null>("/users/change-password", data);
    if (!isApiSuccess(res)) {
      throw new Error(res.data.message || "Failed to change password");
    }
    return { message: res.data.message };
  },

  deleteMe: async (): Promise<{ message: string }> => {
    const res = await api.delete<null>("/users/me");
    if (!isApiSuccess(res)) {
      throw new Error(res.data.message || "Failed to delete account");
    }
    return { message: res.data.message };
  },

  updateProfilePicture: async (
    file: File
  ): Promise<{ picture: string; message?: string }> => {
    const formData = new FormData();
    formData.append("picture", file);

    const res = await api.patch<{ picture: string }>(
      "/users/profile-picture",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!isApiSuccess(res) || !res.data.data) {
      throw new Error(res.data.message || "Failed to update profile picture");
    }

    return {
      picture: res.data.data.picture,
      message: res.data.message || "Profile picture updated successfully",
    };
  },

  getAllUsers: async (params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedUsersResponse> => {
    const res = await api.getRaw<PaginatedUsersResponse>("/users", { params });

    if (!res.data.success || !res.data.data) {
      throw new Error(res.data.message || "Failed to fetch users");
    }

    return res.data;
  },

  getUserById: async (
    id: string
  ): Promise<{ user: User; message?: string }> => {
    const res = await api.get<User>(`/users/${id}`);
    if (!isApiSuccess(res) || !res.data.data) {
      throw new Error("User not found");
    }
    return { user: res.data.data, message: res.data.message };
  },

  updateUserById: async (
    id: string,
    data: UpdateUserByIdData
  ): Promise<{ user: User; message?: string }> => {
    const res = await api.patch<User>(`/users/${id}`, data);
    if (!isApiSuccess(res) || !res.data.data) {
      throw new Error(res.data.message || "Failed to update user");
    }
    return { user: res.data.data, message: "User updated successfully" };
  },

  deleteUserById: async (id: string): Promise<{ message: string }> => {
    const res = await api.delete<null>(`/users/${id}`);
    if (!isApiSuccess(res)) {
      throw new Error(res.data.message || "Failed to delete user");
    }
    return { message: res.data.message };
  },
};
