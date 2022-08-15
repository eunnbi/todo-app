const deviceSizes = {
  tablet: "900px",
  mobile: "600px",
  smallMobile: "350px",
};

const device = {
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  smallMobile: `screen and (max-width: ${deviceSizes.smallMobile})`,
};

export const lightTheme = {
  color: {
    bgColor: "#f2f2f2",
    boxColor: "#fff",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    mainColor: "#64E6AC",
  },
  name: "light" as const,
  device,
};

export const darkTheme = {
  color: {
    bgColor: "#000",
    boxColor: "#383838",
    textColor: "#fff",
    shadowColor: "#000",
    mainColor: "#45bf8b",
  },
  name: "dark" as const,
  device,
};
