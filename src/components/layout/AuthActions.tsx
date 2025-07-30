"use client";

import Link from "next/link";
import LogoutButton from "../ui/buttons/LogoutButton";
import { useAppSelector } from "@/redux/hooks";
import { useIsClient } from "@/lib/useIsClient";
import { useGetMeQuery } from "@/hooks/useGetUsers";

const AuthActions = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const isClient = useIsClient();

  const { data: user, isLoading } = useGetMeQuery();

  if (!isClient) return null;

  if (!isAuthenticated) {
    return <Link href="/login">Login</Link>;
  }

  return (
    <>
      <Link href="/profile">
        {isLoading ? "Loading..." : `Hello, ${user?.name ?? "User"}`}
      </Link>
      <LogoutButton />
    </>
  );
};

export default AuthActions;
