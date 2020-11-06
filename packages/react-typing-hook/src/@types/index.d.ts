declare interface TypingOptions {
  steps: Array<string | number | func>,
  loop: number
}

declare type Editor = (node: HTMLDocument) => number

declare type GeneratorEditor = Generator<Editor, void, Editor>

declare type TypeArgs = unknown

declare type func = () => any