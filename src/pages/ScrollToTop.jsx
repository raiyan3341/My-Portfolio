import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // প্রতিবার পাথ পরিবর্তন হলে উইন্ডো স্ক্রল হয়ে উপরে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;