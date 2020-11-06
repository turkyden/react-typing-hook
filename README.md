# react-typing-hook

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Animated typing in ~400 bytes 🐡 of React Hook.

## Install

```yarn
yarn add react-typing-hook
```

or

```yarn
npm install react-typing-hook
```

## Usage

Type some animate text on the web.

```tsx
import useTyping from 'react-typing-hook'

function App() {

  const ref = React.useRef();
  
  useTyping(ref, {
    steps: ['Hello', 1000, 'Hello world!', 500]
    loop: Infinity
  })
  
  return <p ref={ref}></p>
  // <p>Hello</p>
  // ... 1000ms
  // <p>Hello Hello</p>
  // ... 500ms
  // <p>Hello</p>
}
```

Added the classname to the dom:

```html
<p ref={ref} className="typingWrapper"></p>
```

Such as a blink cursor style:

```css
.typingWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

## MIT
