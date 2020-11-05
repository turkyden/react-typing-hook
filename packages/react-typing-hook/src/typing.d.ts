type Editor = (node: HTMLDocument) => number
type GeneratorEditor = Generator<Editor, void, Editor>
type TypeArgs = unknown