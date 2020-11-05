/**
 *
 * @param node
 * @param args
 */
export default function type(node: HTMLDocument, ...args: Array<TypeArgs>): Promise<void>;
export declare function editor(edits: Iterable<string>): GeneratorEditor;
export declare function writer([...text]: Iterable<string>, startIndex?: number, endIndex?: number): Generator<string, void, string>;
export declare function deleter([...text]: Iterable<string>, startIndex?: number, endIndex?: number): Generator<string, void, string>;
export declare function getOverlap(start: string, [...end]: string): number;
