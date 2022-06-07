import { FC } from "react";
import { useMediaQuery } from "react-responsive";

import { ChildrenProps } from "../interfaces";

export const Mobile: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const isMobile = useMediaQuery({ maxWidth: 479 });
  return isMobile ? <>{children}</> : null;
};

export const Tablet: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1023 });
  return isTablet ? <>{children}</> : null;
};

export const TabletOrDesktop: FC<ChildrenProps> = ({
  children,
}: ChildrenProps) => {
  const isTablet = useMediaQuery({ minWidth: 480 });
  return isTablet ? <>{children}</> : null;
};

export const Desktop: FC<ChildrenProps> = ({ children }: ChildrenProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? <>{children}</> : null;
};
