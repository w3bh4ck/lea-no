import { useState, useEffect } from "react";

interface ProfileInitialsProps {
  name: string;
  className?: string;
  isLarge?: boolean;
}

export default function ProfileInitials({ name, className = "", isLarge }: ProfileInitialsProps) {
  const [initials, setInitials] = useState("");

  useEffect(() => {
    const getInitials = (name: string) => {
      const names = name.split(" ");
      if (names.length === 1) return names[0].charAt(0).toUpperCase();
      return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
    };

    setInitials(name ? getInitials(name) : "?");
  }, [name]);

  return (
    <>
      {!isLarge ? (
        <div
          className={`flex items-center justify-center md:w-8 md:h-8 h-6 w-6 rounded-full bg-primary text-primary-foreground font-semibold text-[9px] md:text-sm ${className}`}
          aria-label={`Profile initials for ${name}`}
        >
          {initials}
        </div>
      ) : (
        <div
          className={`flex items-center justify-center md:w-16 md:h-16 h-6 w-6 rounded-full bg-primary text-primary-foreground font-semibold text-[9px] md:text-sm ${className}`}
          aria-label={`Profile initials for ${name}`}
        >
          {initials}
        </div>
      )}
    </>
  );
}
