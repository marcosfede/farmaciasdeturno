# gatsby-plugin-antd-mobile

Use Ant Design Mobile with Gatsby

## Install

`npm install antd gatsby-plugin-antd-mobile --save`

## How to use

1. Include the plugin in your `gatsby-config.js` file.

```javascript
// in gatsby-config.js
plugins: ['gatsby-plugin-antd-mobile']
// or if you want to use less
plugins: [
  {
    resolve: 'gatsby-plugin-antd-mobile',
    options: {
      style: true,
    },
  },
]
```

note: if you are using less then you need to install less

2. In your component(s) include the Ant Design component

```javascript
// in your component
import { Button } from 'antd-mobile'

export default () => <Button type="primary">Primary</Button>
```

3. It will pull in the component and the relevant css file using babel-plugin-import
