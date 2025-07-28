"use client";

import Container from "@/components/layout/Container";
import UseResendVerification from "./useResendVerification";
import AlertMessage from "@/components/ui/feedback/AlertMessage";
import Button from "@/components/ui/buttons/Button";
import { Heading } from "@/components/ui/typography/Heading";
import Input from "@/components/ui/forms/Input";

const ResendVerifiction = () => {
  const { email, setEmail, handleSubmit, loading, message, error } =
    UseResendVerification();

  return (
    <Container className="items-center justify-center">
      <div className="w-full max-w-xl rounded-lg p-8 shadow-md bg-white">
        <Heading as="h1" align="center" className="mb-5">
          Resend Verification
        </Heading>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            size="md"
            className="w-full mt-6"
            loading={loading}
            disabled={loading}
          >
            Send Verification
          </Button>
        </form>

        {message && <AlertMessage type="success" message={message} />}
        {error && <AlertMessage type="error" message={error} />}
      </div>
    </Container>
  );
};

export default ResendVerifiction;
