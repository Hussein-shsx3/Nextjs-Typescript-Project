// const HomePage = () => <Home />;

// export default HomePage;
import React, { useEffect } from "react";
import Home from "@/components/pages/home";

const HomePage = () => {
  console.log(
    "Render:",
    typeof window === "undefined" ? "Server (SSR)" : "Client (CSR)"
  );

  return <Home />;
};

export default HomePage;
