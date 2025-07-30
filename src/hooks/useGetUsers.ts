import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/userService";
import { User } from "@/types/user.types";
import { PaginatedUsersResponse } from "@/types/user.types";

export const useGetMeQuery = () =>
  useQuery<User>({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await userService.getMe();
      return response.user;
    },
  });

export const useGetAllUsersQuery = (params?: {
  page?: number;
  limit?: number;
}) =>
  useQuery<PaginatedUsersResponse>({
    queryKey: ["users", params],
    queryFn: () => userService.getAllUsers(params),
  });

export const useGetUserByIdQuery = (id: string) =>
  useQuery<User>({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await userService.getUserById(id);
      return response.user;
    },
    enabled: !!id,
  });
