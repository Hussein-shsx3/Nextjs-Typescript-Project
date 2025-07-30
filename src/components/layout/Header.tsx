import { Heading } from "../ui/typography/Heading";
import AuthActions from "./AuthActions";

const Header = () => {
  return (
    <header className="p-5 flex justify-between">
      <Heading as="h1" size="xl">
        Header
      </Heading>
      <AuthActions />
    </header>
  );
};

export default Header;
