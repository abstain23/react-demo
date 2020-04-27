### React-demo

```js

// 原生js创建dom
function c(tagName, children) {
  const ele = document.createElement(tagName);
  if (children) {
    if (typeof children === 'string') {
      children = document.createTextNode(children);
    }
    ele.appendChild(children);
  }
  return ele;
}

const div = (
  c('div',
    c('p',
      c('span', 'span')
    )
  )
)

// React 创建dom
const div = ( //虚拟dom
            React.createElement('div', null,
              React.createElement('p', null,
                React.createElement('span', null, 'span')))
            )
````