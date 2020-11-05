import React, { useEffect, RefObject } from "react";

type Editor = (node: HTMLDocument) => number
type GeneratorEditor = Generator<Editor, void, Editor>
type TypeArgs = unknown
type func = () => any
type TypingOptions = {
  steps: Array<string | number | func>,
  loop: number
}

/**
 * 
 * @param node 
 * @param args 
 */
export async function type(node: HTMLDocument, ...args: Array<TypeArgs>): Promise<void> {
  for (const arg of args) {
    switch (typeof arg) {
      case "string":
        await edit(node, arg);
        break;
      case "number":
        await wait(arg);
        break;
      case "function":
        await arg(node, ...args);
        break;
      default:
        await arg;
    }
  }
}

async function edit(node: HTMLDocument, text: string): Promise<void> {
  const overlap = getOverlap(node.textContent, text);
  await perform(node, [
    ...deleter(node.textContent, overlap),
    ...writer(text, overlap),
  ]);
}

async function wait(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function perform(node: HTMLDocument, edits: Iterable<string>, speed = 60): Promise<void> {
  for (const op of editor(edits)) {
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

const loopedType = type;

const useTyping = (ref: RefObject<HTMLDocument>, { steps, loop } : TypingOptions) => {

  useEffect(() => {
    if (loop === Infinity) {
      type(ref.current, ...steps, loopedType);
    } else if (typeof loop === "number") {
      type(
        ref.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(ref.current, ...steps);
    }
  });
}

export default useTyping