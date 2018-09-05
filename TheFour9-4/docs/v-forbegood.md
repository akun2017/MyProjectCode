# 关于v-for的使用

> ###  在vue中v-for主要被用于列表的渲染

> 基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression`
```js
sups:[
    {name:'腾讯', people:'8000',field:'IT'},
    {name:'华为', people:'12000',field:'通信电子'},
    {name:'大疆', people:'4000',field:'无人机'},
    {name:'联想', people:'7000',field:'电脑'},
    {name:'索尼', people:'9000',field:'相机'},
    {name:'索尼', people:'9000',field:'相机'},
]
```
* ## 一般的用法(1)
```html
<ul v-for="sup in sups" :key="sup.id">
    <li>{{sup.name}}</li>
    <li>{{sup.people}}</li>
    <li>{{sup.field}}</li>
</ul>
```
* ## 另一种用法(2)
> 本用法适用于解决数据的双向绑定，例如页面从简略页面跳到详细页面，其中详细页面的数据需要依赖简略页面的数据。
```html
<ul v-for="(sup,id) in sups" :key="id" @click="getid(id)">
    <li>{{sup.name}}</li>
    <li>{{sup.people}}</li>
    <li>{{sup.field}}</li>
</ul>
```
> 在方法2中`alias`是由两个参数组成，第1个参数是别名，第2个参数可以理解为`索引值`，注意后面的`:key的值必须要与第2个参数的值相同`
```js
getid(iid){
    console.log(iid);
    this.$store.state.postId = iid;//利用vuex，将获得索引值赋给state里面的postId
	this.$router.push({path: '/index/NewsItem'});//做路由跳转
}
```
### 配合vuex使用
```js
export default new Vuex.Store({
    state: {
        postId: null,//设置默认为空
    },
})
```
```js
// 在详细页面中对接数据
data(){
    return{
        det:[]//创建空数组来装从简略页面索取来的数据
    }
},
mounted(){
    let index =  this.$store.state.postId;//获取索引值
    this.det = postsData.postList[index];//将数据赋值给det
}
```
