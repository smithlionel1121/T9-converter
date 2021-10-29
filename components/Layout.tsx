import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};
const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
