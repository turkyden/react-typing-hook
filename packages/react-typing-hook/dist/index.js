'use strict';

var react = require('react');

/**
 * React Hook Wrapper
 * @param ref
 * @param param1
 */
function useTyping(ref, { steps, loop, speed = 60 }) {
    async function typing(node, speed, ...args) {
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
    async function edit(node, speed, text) {
        const textContent = node.textContent || '';
        const overlap = getOverlap(textContent, text);
        await perform(node, speed, [
            ...deleter(textContent, overlap),
            ...writer(text, overlap),
        ]);
    }
    async function wait(ms) {
        await new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function perform(node, speed, edits) {
        for (const op of editor(edits)) {
            op(node);
            await wait(speed + speed * (Math.random() - 0.5));
        }
    }
    function* editor(edits) {
        for (const edit of edits) {
            yield (node) => requestAnimationFrame(() => (node.textContent = edit));
        }
    }
    function* writer([...text], startIndex = 0, endIndex = text.length) {
        while (startIndex < endIndex) {
            yield text.slice(0, ++startIndex).join("");
        }
    }
    function* deleter([...text], startIndex = 0, endIndex = text.length) {
        while (endIndex > startIndex) {
            yield text.slice(0, --endIndex).join("");
        }
    }
    function getOverlap(start, [...end]) {
        return [...start, NaN].findIndex((char, i) => end[i] !== char);
    }
    const loopedType = typing;
    react.useEffect(() => {
        if (ref.current === null)
            return undefined;
        if (loop === Infinity) {
            typing(ref.current, speed, ...steps, loopedType);
        }
        else if (typeof loop === "number") {
            typing(ref.current, speed, ...Array(loop)
                .fill(steps)
                .flat());
        }
        else {
            typing(ref.current, speed, ...steps);
        }
    });
}

module.exports = useTyping;
//# sourceMappingURL=index.js.map
