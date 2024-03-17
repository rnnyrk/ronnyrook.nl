import { Footer } from 'modules/layouts/Footer';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
