import { useEffect, useRef, RefObject } from "react";

import './index.css'

type Typing<T> = (node: T, speed: number, ...args: TypingSteps<T>) => Promise<void>

type Editor<T> = (node: T) => number

type GeneratorEditor<T> = Generator<Editor<T>, void, Editor<T>>

type TypingSteps<T> = Array<string | number | (() => any) | Typing<T>>

export interface TypingOptions<T> {
  steps: TypingSteps<T>,
  loop?: number,
  speed?: number
}

export default function useTyping<T extends HTMLElement>({ steps, loop, speed = 60 } : TypingOptions<T>) : RefObject<T> {

  const ref = useRef<T>(null);

  async function typing<T extends HTMLElement>(node: T, speed: number, ...args: TypingSteps<T>): Promise<void> {
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

  async function edit<T extends HTMLElement>(node: T, speed: number, text: string): Promise<void> {
    const textContent = node.textContent || '';
    const overlap = getOverlap(textContent, text);
    await perform<T>(node, speed, [
      ...deleter(textContent, overlap) as Iterable<string>,
      ...writer(text, overlap) as Iterable<string>,
    ]);
  }

  async function wait(ms: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function perform<T>(node: T, speed: number, edits: Iterable<string>): Promise<void> {
    for (const op of editor(edits) as Iterable<Editor<T>>) {
      op(node);
      await wait(speed + speed * (Math.random() - 0.5));
    }
  }

  function* editor<T extends HTMLElement>(edits: Iterable<string>): GeneratorEditor<T> {
    for (const edit of edits) {
      yield (node: T) => requestAnimationFrame(() => (node.textContent = edit));
    }
  }

  function* writer([...text]: Iterable<string>, startIndex = 0, endIndex = text.length): Generator<string, void, string> {
    while (startIndex < endIndex) {
      yield text.slice(0, ++startIndex).join("");
    }
  }

  function* deleter([...text]: Iterable<string>, startIndex = 0, endIndex = text.length): Generator<string, void, string> {
    while (endIndex > startIndex) {
      yield text.slice(0, --endIndex).join("");
    }
  }

  function getOverlap(start: string, [...end]: string): number {
    return [...start, NaN].findIndex((char, i) => end[i] !== char);
  }

  const loopedType = typing;

  useEffect(() => {

    if(ref.current != null) {
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
    }
    
  }, []);

  return ref
}

