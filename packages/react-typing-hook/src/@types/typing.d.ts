declare type Editor = (node: HTMLDocument) => number

declare type GeneratorEditor = Generator<Editor, void, Editor>

declare type TypeArgs = unknown