
type Typing = (node: HTMLDocument, speed: number, ...args: TypingSteps) => Promise<void>

type Editor = (node: HTMLDocument) => number

type TypeArgs = unknown

type GeneratorEditor = Generator<Editor, void, Editor>

type TypingSteps = Array<string | number | (() => any) | Typing>

declare interface TypingOptions {
  steps: TypingSteps,
  loop?: number,
  speed?: number
}