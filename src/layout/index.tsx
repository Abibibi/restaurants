import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
