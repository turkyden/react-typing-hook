declare type TypingSteps = Array<string | number | (() => any) | Typing>

declare type Typing = (node: HTMLDocument, speed: number, ...args: TypingSteps) => Promise<void>

declare interface TypingOptions {
  steps: TypingSteps,
  loop?: number,
  speed?: number
}

declare type Editor = (node: HTMLDocument) => number

declare type GeneratorEditor = Generator<Editor, void, Editor>

declare type TypeArgs = unknown