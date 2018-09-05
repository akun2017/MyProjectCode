# css的flex布局

> flex布局在现在的开发中有着明显的优势，它可以让我们已更快的速度实现想要的布局。

1. 首先需要在盒子模型中定义：`display:flex;`

> 本人最常用的配置是：
```css
display:flex;
flex-direction: row;
justify-content: center;

```

## 属性值介绍：
```css
1.flex-direction //决定主轴的方向 
值:
row(默认值) | 主轴为水平方向，起点在左端
row-reverse | 主轴为水平方向，起点在右端。
column | 主轴为垂直方向，起点在上沿。
column-reverse | 主轴为垂直方向，起点在下沿。

2.flex-wrap // 如果一条轴线排不下，如何换行
值：
nowrap | 不换行。
wrap | 换行，第一行在上方。
wrap-reverse | 换行，第一行在下方。

3.flex-flow // flex-direction属性和flex-wrap属性的简写形式（ 基本用不上）

4.justify-content // 定义了项目在主轴上的对齐方式。
值：
flex-start | 左对齐
flex-end | 右对齐
center | 居中
space-between | 两端对齐，项目之间的间隔都相等
space-around | 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。


5.align-items // 定义项目在交叉轴上如何对齐。
值：
flex-start | 交叉轴的起点对齐。
flex-end | 交叉轴的终点对齐。
center | 交叉轴的中点对齐。
baseline | 项目的第一行文字的基线对齐。
stretch（默认） | 如果项目未设置高度或设为auto，将占满整个容器的高度。


6.align-content  // 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
值：
flex-start | 与交叉轴的起点对齐。
flex-end | 与交叉轴的终点对齐。
center | 与交叉轴的中点对齐。
space-between | 与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around | 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch | 轴线占满整个交叉轴。

```
