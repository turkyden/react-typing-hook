import { RefObject } from "react";
import './index.css';
/**
 * React Hook Wrapper
 * @param ref
 * @param param1
 */
export default function useTyping(ref: RefObject<HTMLDocument | null>, { steps, loop, speed }: TypingOptions): void;
