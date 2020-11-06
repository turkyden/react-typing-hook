import React, { useRef, useState } from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  number,
  boolean,
  select,
  color
} from '@storybook/addon-knobs'
import useTyping from 'react-typing-hook'
import 'react-typing-hook/dist/index.css'

storiesOf('react-typing-hook', module)
  .addDecorator(withKnobs)
  .add('hello world', () => {
    const ref = useRef(null);
    useTyping(ref, {
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: Infinity
    })
    return (
      <p ref={ref}></p>
    )
  })
  .add('callback set color', () => {
    const [ color, setColor ] = useState('#c7161e');
    const setRandomColor = () => {
      setColor('#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6))
    }
    const ref = useRef(null);
    useTyping(ref, {
      steps: ['This', 500, 'This is a random', 800, `This is a random color. ${color}`, 1000, setRandomColor, 500],
      loop: Infinity
    })
    return (
      <p ref={ref} style={{ color }}></p>
    )
  })
  .add('blink cursor', () => {
    const ref = useRef(null);
    useTyping(ref, {
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: Infinity
    })
    return (
      <p ref={ref} className="typingWrapper"></p>
    )
  })
  .add('rtl', () => {
    const ref = useRef(null);
    useTyping(ref, {
      steps: ['Hello', 1000, 'Hello world', 500],
      loop: Infinity
    })
    return (
      <p ref={ref} style={{ direction: 'rtl' }} className="typingWrapper"></p>
    )
  })
  .add('vertical-rl', () => {
    const ref = useRef(null);
    useTyping(ref, {
      steps: ['天行贱', 1000, '天行健君子以自强不息', 500, '天行健君子以自强不息；地势坤', 1000, '天行健君子以自强不息；地势坤君子以厚德载物', 500],
      loop: 4
    })
    return (
      <div style={{ height: 100, display: 'flex', justifyContent: 'flex-end' }}>
        <p ref={ref} style={{ writingMode: 'vertical-rl' }} className="typingWrapper"></p>
      </div>
    )
  })
  .add('chinese poetry', () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useTyping(ref1, {
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: Infinity
    })

    useTyping(ref2, {
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: Infinity
    })

    return (
      <ul>
        <li ref={ref1}></li>
        <li ref={ref2}></li>
      </ul>
    )
  })