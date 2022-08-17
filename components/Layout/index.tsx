import ThemeButton from "./ThemeButton";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ThemeButton />
      {children}
    </>
  );
};

export default Layout;
