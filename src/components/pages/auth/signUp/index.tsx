"use client";

import Container from "@/components/layout/Container";
import { Heading } from "@/components/ui/typography/Heading";
import FormField from "@/components/ui/forms/FormField";
import Button from "@/components/ui/buttons/Button";
import { Text } from "@/components/ui/typography/Text";
import Link from "next/link";

const SignUp = () => {
  return (
    <Container className="items-center justify-center">
      <form className="w-full max-w-xl bg-white py-14 px-6 md:px-16 rounded-xl flex flex-col gap-2">
        <Heading size="lg" className="uppercase mb-7">
          Account Sign Up
        </Heading>
        <FormField label="Name" id="name" type="text" className="mb-6" />
        <FormField label="Email" id="email" type="email" className="mb-6" />
        <FormField label="Password" id="password" type="password" />
        <Button size="md" className="w-1/3 mt-6">
          Login
        </Button>
        <div className="flex flex-row justify-center items-center mt-6 text-sm">
          <Text size="sm">You have an account?</Text>
          <Link href="/login" className="hover:text-primary uppercase mx-2">
            Login
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
