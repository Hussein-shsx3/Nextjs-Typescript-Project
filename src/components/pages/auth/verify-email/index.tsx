"use client";

import { useVerifyEmail } from "./useVerifyEmail";
import AlertMessage from "@/components/ui/feedback/AlertMessage";

export const VerifyEmail = () => {
  const { loading, message, error } = useVerifyEmail(true); 

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-lg p-8 shadow-md bg-white text-center w-[400px]">
        {/* Loading State */}
        {loading && (
          <AlertMessage
            type="info"
            message="Verifying your email, please wait..."
          />
        )}

        {/* Success State */}
        {!loading && message && (
          <>
            <AlertMessage type="success" message={message} />
            <p className="mt-2 text-gray-500 text-sm">
              Redirecting to login...
            </p>
          </>
        )}

        {/* Error State */}
        {!loading && error && (
          <>
            <AlertMessage type="error" message={error} />
            <p className="mt-2 text-gray-500 text-sm">
              Your verification link may have expired. Please request a new one.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
