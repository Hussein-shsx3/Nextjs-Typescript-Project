interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default Layout;
