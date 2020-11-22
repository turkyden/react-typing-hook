import { RefObject } from "react";
import './index.css';
declare type Typing = (node: HTMLDocument, speed: number, ...args: TypingSteps) => Promise<void>;
declare type TypingSteps = Array<string | number | (() => any) | Typing>;
interface TypingOptions {
    steps: TypingSteps;
    loop?: number;
    speed?: number;
}
/**
 * React Hook Wrapper
 * @param ref
 * @param param1
 */
export default function useTyping({ steps, loop, speed }: TypingOptions): RefObject<HTMLDocument>;
export {};
