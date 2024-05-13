import { useState } from "react";

export default function (defaultValue) {
  const [theme, setTheme] = useState(defaultValue);

  return { theme, setTheme };
}
