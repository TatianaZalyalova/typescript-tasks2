import React from "react";

type FIXME = ReturnType<<T>(component: React.ComponentType<T>) => T>;

export const getDefaultProps = <T>(component: React.ComponentType<T>): FIXME =>
  component.defaultProps;
