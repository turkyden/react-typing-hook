# react-typing-hook

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![GitHub](https://img.shields.io/github/license/Turkyden/react--typing--hook)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/Turkyden/react--typing-hook/REACT_TYPING_HOOK_BUILD/master)

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

  const ref = React.useRef(null);
  
  useTyping(ref, {
    steps: ['Hello', 1000, 'Hello world!', 500],
    loop: Infinity,
    speed: 60
  })
  
  return <p ref={ref}></p>
  // <p>Hello</p>
  // ... 1000ms
  // <p>Hello Hello</p>
  // ... 500ms
  // <p>Hello</p>
}
```

Add the classname on the dom.

```html
<p ref={ref} className="typingWrapper"></p>
```

Such as a blink cursor style like this.

```css
.typingWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

## API

| Name | Type | Default | Description |
| ---- | ----- | :----: | --- |
| ref | `React.RefObject<HTMLDocument>` | - | The ref of typical text wraper |
| steps | `Array<String | Number | Function>` | - | Step array assign to the typing |
| loop | `number | Infinity` | 1 | The number of loop typing animation effect |
| speed | `number` | 60 | The speed of typing animation effect |

## Contributing

```yarn
yarn install
```

Compiles and hot-reloads for development

```yarn
yarn start
```

Compiles and minifies for production

```yarn
yarn build
```

## LICENSE

MIT
