import Link from "next/link";
import { Home } from "lucide-react";
import { Text } from "@/components/ui/typography/Text";
import { Heading } from "@/components/ui/typography/Heading";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <Heading
            as="h1"
            className="text-8xl text-primary mb-4"
            align="center"
            weight="bold"
          >
            404
          </Heading>

          <Heading
            as="h2"
            size="xl"
            weight="semibold"
            align="center"
            className="text-title mb-2"
          >
            Page Not Found
          </Heading>

          <Text size="md" align="center" className="text-text mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </Text>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
