import { ReactElement } from 'react';
import Navbar from './Navbar';

type Props = {
  children: ReactElement;
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
