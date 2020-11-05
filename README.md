# react-typing-hook

There are some hook designed by Turkyden.

## `typing`

Generate the id of component.

```tsx
import useId from '@Thooks/use-id'

function App() {
  const id = useId()
  return <div id={id} />
  // <div id='A:1'>
}
```

## `useTyping`

Type some animate text on the web.

```tsx
import useId from '@Thooks/use-typing'

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
<p ref={ref} className={typingWrapper}></p>
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
