"use client";

import Link from "next/link";
import LogoutButton from "../buttons/LogoutButton";
import { Heading } from "../typography/Heading";
import { useAppSelector } from "@/redux/hooks";
import { useIsClient } from "@/lib/useIsClient";

const Header = () => {
  const isClient = useIsClient();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isClient) return null; // avoid mismatch before hydration

  return (
    <header className="p-5 flex justify-between">
      <Heading as="h1" size="xl">
        Header
      </Heading>

      {isAuthenticated ? (
        <>
          <Link href="/profile">Hello,</Link>
          <LogoutButton />
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
};

export default Header;
