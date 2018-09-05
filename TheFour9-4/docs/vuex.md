# 关于vuex的应用

> 个人理解： vuex的作用可以理解为一个实现数据集中处理的工具，在里面的数据可以在任何组件中引用，里面还可以包含更改数据的方法。

## 1. 安装
`npm install --save vuex  `

## 2. 创建js文件

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 1,
        name: 'LING'
    },

    mutations: {
        increment (state) {
            // 变更状态
            state.count++
        },
        jian (state) {
            // 变更状态
            state.count--
        }
    }
})
```

## 3. 在vue项目中的`入口文件`中引入

> 入口文件一般会是`main.js`文件，如果不是可以查看`build`目录下的`base`文件

```js
// 查看引入文件
 entry: {
    app: './src/main.js'
  },
```

> 在`main.js`文件下引入`import store from './store'`

## 4. 使用

```html
<p>{{$store.state.name}}</p>
<p>{{$store.state.count}}</p>
<button @click="$store.commit('increment')">+</button>
<button @click="$store.commit('jian')">-</button>
```
> 引用的开头都需要带`$store`，后面的`state`和`commit()`都是`$store`的选项，再后面的就是具体的数据和方法。