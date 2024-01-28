import {
  useEffect,
  useState,
} from "react";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

export const useScrollTop = (
  threshold = 10,
) => {
  const [scrolled, setScroll] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, [threshold]);

  return scrolled;
};
