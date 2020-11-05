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

storiesOf('ImageHover', module)
  .addDecorator(withKnobs)
  .add('with fixed A minor', () => (
    <h1>hola</h1>
  ))
