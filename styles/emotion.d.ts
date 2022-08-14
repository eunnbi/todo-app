import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      bgColor: string;
      boxColor: string;
      textColor: string;
      shadowColor: string;
      mainColor: string;
    };
    name: "light" | "dark";
  }
}
