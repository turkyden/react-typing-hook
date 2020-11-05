import { useEffect, RefObject } from "react";
import type from './typing'

const loopedType = type;

const useTyping = (ref: RefObject<HTMLDocument>, { steps, loop } : TypingOptions) => {

  useEffect(() => {
    //if(ref.current === null) return undefined;
    if(ref.current !== null) {
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
    }
  });
}

export default useTyping