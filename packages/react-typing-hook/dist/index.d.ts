import { RefObject } from "react";
import './index.css';
declare type Typing = (node: HTMLDocument, speed: number, ...args: TypingSteps) => Promise<void>;
declare type TypingSteps = Array<string | number | (() => any) | Typing>;
export interface TypingOptions {
    steps: TypingSteps;
    loop?: number;
    speed?: number;
}
export default function useTyping({ steps, loop, speed }: TypingOptions): RefObject<HTMLDocument>;
export {};
