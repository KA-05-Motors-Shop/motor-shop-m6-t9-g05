import { useEffect, useState } from "react";
import theme from "../styles/theme";

const colors = [
  theme.colors.random1,
  theme.colors.random1,
  theme.colors.random3,
  theme.colors.random4,
  theme.colors.random5,
  theme.colors.random6,
  theme.colors.random7,
  theme.colors.random8,
  theme.colors.random9,
  theme.colors.random10,
  theme.colors.random11,
];

export const randomColors = () => {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return color;
};
