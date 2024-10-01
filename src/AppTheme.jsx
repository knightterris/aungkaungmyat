import { Theme } from "@radix-ui/themes";
import { useState } from "react";
import App from "./App";

export default function AppTheme() {
  const [theme, setTheme] = useState("dark");
  return (
    <Theme value={{ theme, setTheme }}>
      <App />
    </Theme>
  );
}
