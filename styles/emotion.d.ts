import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      bgColor: string;
      boxColor: string;
      textColor: string;
      shadowColor: string;
    };
    name: "light" | "dark";
  }
}
