# vue_markdown_loder的使用

> vue_markdown_loder被用于在vue项目中实现前端解析.md文件，

## 安装
1. npm i vue-marked-loader -D 
 
2. npm install markdown-it-container --save  (用于自定义块级容器)

## 配置

> webpack.base.config配置:
```js
 {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          use: [
            [require('markdown-it-container'), 'demo', {

              validate: function (params) {
                return params.trim().match(/^demo\s+(.*)$/);
              },

              render: function (tokens, idx) {
                if (tokens[idx].nesting === 1) {
                  // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                  let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                  let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : '';
                  let descriptionHTML = description ? markdownRender.render(description) : '';
                  // 2.获取代码块内的html和js代码
                  let content = tokens[idx + 1].content;
                  // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                  return `<demo-block>
                  <div class="source" slot="source">${content}</div>
                  ${descriptionHTML}
                  <div class="highlight" slot="highlight">`;
                } else {
                  return '</div></demo-block>\n';
                }
              }
            }]
          ]

        }
      }
```

