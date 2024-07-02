import { useEffect, useState } from "react";
import WidthContext from "./WidthContext";

function WidthProvider({ children }) {
  const [widthOfScreen, setWidthOfScreen] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthOfScreen(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidthOfScreen(window.innerWidth);
      });
    };
  }, []);
  return <WidthContext value={widthOfScreen}>{children}</WidthContext>;
}

export default WidthProvider;
