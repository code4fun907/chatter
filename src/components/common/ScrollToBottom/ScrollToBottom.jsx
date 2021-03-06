import { useRef, useEffect } from "react";

const ScrollToBottom = () => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView();
  });

  return <div ref={scrollRef} />;
};

export default ScrollToBottom;
