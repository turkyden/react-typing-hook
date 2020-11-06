import { RefObject } from "react";
import './index.css';
/**
 * React Hook Wrapper
 * @param ref
 * @param param1
 */
export default function useTyping(ref: RefObject<HTMLDocument>, { steps, loop }: TypingOptions): void;
/**
 * Typing core logic
 * @param node
 * @param args
 */
export declare function typing(node: HTMLDocument, ...args: Array<TypeArgs>): Promise<void>;
export declare function editor(edits: Iterable<string>): GeneratorEditor;
export declare function writer([...text]: Iterable<string>, startIndex?: number, endIndex?: number): Generator<string, void, string>;
export declare function deleter([...text]: Iterable<string>, startIndex?: number, endIndex?: number): Generator<string, void, string>;
export declare function getOverlap(start: string, [...end]: string): number;
