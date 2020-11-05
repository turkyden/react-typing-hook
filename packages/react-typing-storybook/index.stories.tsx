import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  number,
  boolean,
  select,
  color
} from '@storybook/addon-knobs'
import { useState } from '@storybook/addons'
import useTyping from 'react-typing-hook'

storiesOf('ImageHover', module)
  .addDecorator(withKnobs)
  .add('with fixed A minor', () => {
    const ref = React.useRef();
  
    useTyping(ref, {
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: Infinity
    })
    return (
      <p ref={ref}></p>
    )
  })
