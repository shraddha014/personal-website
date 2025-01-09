// src/utils/fontConfig.ts
import localFont from "next/font/local";

export const neue = localFont({
  src: [
    {
      path: "../../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-Book.otf",
      weight: "400",
    },
  ],
});
