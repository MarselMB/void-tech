declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}
// declare module '*.sass';
// declare module '*.scss';
declare module '*.css';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

declare module '*.svg?react' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
