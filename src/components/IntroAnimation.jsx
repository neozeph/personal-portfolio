import { useState, useEffect } from "react";

export const IntroAnimation = () => {
  // Check session storage on initial render
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem("introPlayed");
  });
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    // Mark as played so it doesn't show again during this browser session
    sessionStorage.setItem("introPlayed", "true");

    // Start the fade-out transition after 1.2 seconds (faster UX)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1200);

    // Completely remove the component from the DOM after 1.7 seconds
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [isVisible]);

  // Prevent scrolling while the animation is visible
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img 
        src="/jafs.svg" 
        alt="JAFS Logo" 
        className="w-20 h-20 md:w-24 md:h-24 mb-6" 
      />
      <h1
        className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-wider text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(90deg, #222 0%, #20B2A6 40%, #60A5FA 50%, #20B2A6 60%, #222 100%)",
          backgroundSize: "200% auto",
          animation: "shine 1.5s linear forwards",
        }}
      >
        Josef Alanrey Soriente
      </h1>
      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
};