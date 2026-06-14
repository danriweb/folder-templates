import { useState, useEffect } from "react"

export default function use[FTName | pascalcase]() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleIsOpen,
  };
}
