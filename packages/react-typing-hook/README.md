# React ImageHover

A react components

封装鼠标经过/点击图层时，切换正反面的 UI 逻辑。

```html
<figure class="imghvr-reveal-right">
  <img src="https://jdc.jd.com/img/300x300" />
  <figcaption>
    <!-- Hover Content -->
  </figcaption>
</figure>
```

## Usage

```tsx
import { ImageHover } from 'react-imagehover'
;<ImageHover>
  <div>// your front layer content</div>
  <div>// your back layer content</div>
</ImageHover>
```

## Hook

```tsx
import { ImageHover, useImageHover } from 'react-imagehover'

function App() {
  const [frontProps, backProps] = useImageHover({
    effect: 'reveal-right',
    mode: 'hover',
    duration: 0.35,
    speed: 'fast'
  })

  return (
    <ImageHover.div>
      <div {...frontProps}>// your front layer content</div>
      <div {...backProps}>// your back layer content</div>
    </ImageHover.div>
  )
}
```
