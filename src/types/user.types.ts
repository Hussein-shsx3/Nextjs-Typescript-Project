// types/user.types.ts

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  picture?: string;
  createdAt: string;
  updatedAt: string;
}

// Payloads for requests
export interface UpdateProfileData {
  name?: string;
  email?: string;
}

export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface UpdateUserByIdData {
  name?: string;
  email?: string;
  role?: "user" | "admin";
}

// Generic API response
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface PaginatedUsersResponse {
  success: boolean;
  message: string;
  data: User[];
  count: number;
  page: number;
  totalPages: number;
  totalDocuments: number;
}
