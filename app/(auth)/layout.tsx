const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen  w-full bg-purple-200">
      {children}
    </div>
  );
};

export default Layout;
