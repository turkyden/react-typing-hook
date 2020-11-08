import React, { useRef } from 'react';
import useTyping from 'react-typing-hook';
import "react-typing-hook/dist/index.css";

export interface TypingProps {
  /**
   * Step array assign to the typing
   */
  steps: Array<string | number | (() => any)>, 
  /**
   * The number of loop typing animation effect
   */
  loop: number, 
  /**
   * The speed of typing animation effect
   */
  speed: number
}

export function Typing(props: TypingProps) {
  const ref = useRef(null);
  
  useTyping(ref, { ...props });

  return (
    <p ref={ref}></p>
  )
}