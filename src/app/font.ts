import localFont from "next/font/local";

const figTree = localFont({
  src: [
    {
      path: "./fonts/Figtree-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "./fonts/Figtree-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Figtree-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Figtree-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-figtree",
});

export default figTree;
