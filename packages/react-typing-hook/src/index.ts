import { useLayoutEffect, RefObject } from "react";
import './index.css'

/**
 * React Hook Wrapper
 * @param ref 
 * @param param1 
 */
export default function useTyping(ref: RefObject<HTMLDocument>, { steps, loop, speed = 60 } : TypingOptions) {
  const loopedType = typing;
  useLayoutEffect(() => {
    if(ref.current === null) return undefined;
    
    if (loop === Infinity) {
      typing(ref.current, speed, ...steps, loopedType);
    } else if (typeof loop === "number") {
      typing(
        ref.current,
        speed,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      typing(ref.current, speed, ...steps);
    }
  });
}

/**
 * Typing core logic
 * @param node 
 * @param args 
 */
export async function typing(node: HTMLDocument, speed: number, ...args: TypingSteps): Promise<void> {
  for (const arg of args) {
    switch (typeof arg) {
      case "string":
        await edit(node, speed, arg);
        break;
      case "number":
        await wait(arg);
        break;
      case "function":
        await arg(node, speed, ...args);
        break;
      default:
        await arg;
    }
  }
}

async function edit(node: HTMLDocument, speed: number, text: string): Promise<void> {
  const textContent = node.textContent || '';
  const overlap = getOverlap(textContent, text);
  await perform(node, speed, [
    ...deleter(textContent, overlap) as Iterable<string>,
    ...writer(text, overlap) as Iterable<string>,
  ]);
}

async function wait(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function perform(node: HTMLDocument, speed: number, edits: Iterable<string>): Promise<void> {
  for (const op of editor(edits) as Iterable<Editor>) {
    op(node);
    await wait(speed + speed * (Math.random() - 0.5));
  }
}

export function* editor(edits: Iterable<string>): GeneratorEditor {
  for (const edit of edits) {
    yield (node: HTMLDocument) => requestAnimationFrame(() => (node.textContent = edit));
  }
}

export function* writer([...text]: Iterable<string>, startIndex = 0, endIndex = text.length): Generator<string, void, string> {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join("");
  }
}

export function* deleter([...text]: Iterable<string>, startIndex = 0, endIndex = text.length): Generator<string, void, string> {
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join("");
  }
}

export function getOverlap(start: string, [...end]: string): number {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}