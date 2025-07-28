"use client";

import Container from "@/components/layout/Container";
import { useVerifyEmail } from "./useVerifyEmail";
import AlertMessage from "@/components/ui/feedback/AlertMessage";
import Link from "next/link";

export const VerifyEmail = () => {
  const { loading, message, error } = useVerifyEmail(true);

  return (
    <Container className="items-center justify-center">
      <div className="w-full max-w-xl rounded-lg p-8 shadow-md bg-white">
        {loading && (
          <AlertMessage
            type="info"
            message="Verifying your email, please wait..."
          />
        )}

        {!loading && message && (
          <>
            <AlertMessage type="success" message={message} />
            <p className="mt-2 text-gray-500 text-sm">
              Redirecting to login...
            </p>
          </>
        )}

        {!loading && error && (
          <>
            <AlertMessage type="error" message={error} />
            <p className="mt-4 text-gray-500 text-sm">
              Your verification link may have expired or is invalid.
            </p>
            <Link
              href="/resend-verification"
              className="mt-4 inline-block text-sm text-primary font-medium hover:underline"
            >
              Click here to resend verification email
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};
