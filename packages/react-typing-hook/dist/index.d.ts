import { RefObject } from "react";
import './index.css';
declare type Typing<T> = (node: T, speed: number, ...args: TypingSteps<T>) => Promise<void>;
declare type TypingSteps<T> = Array<string | number | (() => any) | Typing<T>>;
export interface TypingOptions<T> {
    steps: TypingSteps<T>;
    loop?: number;
    speed?: number;
}
export default function useTyping<T extends HTMLElement>({ steps, loop, speed }: TypingOptions<T>): RefObject<T>;
export {};
