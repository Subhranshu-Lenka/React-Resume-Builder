import { useRef } from "react";

function useScrollToView() {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return [elementRef, scrollToElement];
}

export default useScrollToView;
