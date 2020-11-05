declare type func = () => any

declare type TypingOptions = {
  steps: Array<string | number | func>,
  loop: number
}