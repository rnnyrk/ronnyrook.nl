import type * as i from 'types';

import { Footer } from 'modules/layouts/Footer';

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

type Props = i.NextPageProps<{
  children: React.ReactNode;
}>;

export default Layout;
