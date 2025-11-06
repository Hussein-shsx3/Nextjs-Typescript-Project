"use client";

import { useAppDispatch } from "@/store/hooks";
import { logoutThunk } from "@/store/thunks/authThunks";
import Button from "./Button";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Button variant="primary" size="sm" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
