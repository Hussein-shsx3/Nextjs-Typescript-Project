"use client";

import Container from "@/components/layout/Container";
import { Heading } from "@/components/ui/typography/Heading";
import Input from "@/components/ui/forms/Input";
import AlertMessage from "@/components/ui/feedback/AlertMessage";
import Button from "@/components/ui/buttons/Button";
import { useResetPassword } from "./useResetPassword";

const ResetPassword = () => {
  const { formData, handleChange, handleSubmit, loading, error, message } =
    useResetPassword();

  return (
    <Container className="items-center justify-center">
      <div className="w-full max-w-xl rounded-lg p-8 shadow-md bg-white">
        <Heading as="h1" align="center" className="mb-5">
          Reset Password
        </Heading>

        {!formData.token ? (
          <AlertMessage type="error" message="Invalid or expired token" />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              value={formData.confirmPassword || ""}
              onChange={handleChange}
            />

            <Button
              type="submit"
              size="md"
              className="w-full mt-6"
              loading={loading}
              disabled={loading || !formData.newPassword}
            >
              Submit
            </Button>
          </form>
        )}

        {message && <AlertMessage type="success" message={message} />}
        {error && <AlertMessage type="error" message={error} />}
      </div>
    </Container>
  );
};

export default ResetPassword;
