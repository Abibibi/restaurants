import { FC } from "react";
import "./layout.sass";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="Layout">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
