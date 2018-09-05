# less在vue中的使用

## 安装
`npm install less less-loader --save`

## 在build/webpack.base.config.js在追加配置

```js
{
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader",
},
```