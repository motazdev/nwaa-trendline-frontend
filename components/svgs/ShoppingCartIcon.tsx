import React from "react";
import { Button } from "../ui/button";

const ShoppingCartIcon = () => {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="relative"
      aria-label="Open notifications"
    >
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5C14 2.79086 12.2091 1 9.99999 1C7.79085 1 5.99999 2.79086 5.99999 5M4.8197 21H15.1803C17.6848 21 19.5733 18.7245 19.1118 16.2628L17.6118 8.26285C17.257 6.37095 15.6051 5 13.6803 5H6.3197C4.39484 5 2.74294 6.37096 2.38821 8.26285L0.888209 16.2628C0.426649 18.7245 2.31515 21 4.8197 21Z"
          stroke="#020202"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default ShoppingCartIcon;
