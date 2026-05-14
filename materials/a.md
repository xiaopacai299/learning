# 一、HTML+浏览器
## <font style="color:#DF2A3F;">HTML</font>
## 1.html语义化的理解
1.当失去样式的时候，也能保持清晰的结构。

2.通过标签名增加了代码的可读性，就可以知道是哪一部分，有利于代码的维护。

3.有利于seo，提高搜索引擎的排名。

4.有利于其他设备的解析。（盲人阅读器，移动设备等）

## 2.H5新增的特性
1.语义化标签。（aside，article，nav，session，footer，header）

2.音视频标签（audio，video）

3.本地存储（localstorage，sessionstorage）

4.以data开头的自定义属性

5.表单控件（file，number，date，url，search，）

6.canvas

7.webworker，webstorage

## 3.href和src的区别，alt和titile的区别
1.共同点：都是对资源的引入

2.href：针对的网络资源所在的位置，指向的内容会嵌入到当前标签所在的位置。

src：针对的是外部资源的位置，建立当前元素和外部元素之间的连接。

3.alt：是资源加载失败之后显示的文本。（替换文本）

titile：当鼠标悬停到标签上提示的文本。（提示信息）

## 4.如何选择图片的格式
图片类型：位图png，jpg       矢量图svg

压缩类型：无压缩BMP格式     有损压缩jpg   无损压缩png，gif

图片位数：8 16 24 32  位数越大，能表达的颜色越多，体积也越大，越细腻。2的8次方=256种颜色

<img src="https://cdn.nlark.com/yuque/0/2024/png/40469080/1726296071787-9b15557d-8bc0-45cc-b1fc-ae4d07be3aea.png" width="532" title="" crop="0,0,1,1" id="u6bce52c5" class="ne-image">

## 5.input
### （1）如何控制输入字数
1.maxlength属性

2.监听oninput事件对输入值进行处理

（2）上传图片时，如何触发默认拍照功能

使用capture属性，设置为camera

（3）上传文件时，如何选择同时上传多张图片

设置multiple属性

（4）如何禁止展示输入的历史记录？

autocomplete=‘off’

## 6.页面导入样式时，link和@import有什么区别
link属于HTML标签，当页面加载时，会同时加载样式

@import是css提供的，会在页面加载完再加载，link的权重大于@import

## 7.常见的meta元素
chartset=‘utf-8’编码格式

name 作者名

content  内容

keywords关键词

description  描述

viewport页面视图进行定义  width=device-width  initial-scale初始缩放比例  

## <font style="color:#DF2A3F;">浏览器</font>
## 1.cookies、sessionStorage、localStorage的区别
| | cookies | sessionStorage | localStorage |
| --- | --- | --- | --- |
| 大小 | 4kb | 5mb | 5mb |
| 有效期 | 一般由服务器生成失效时间。如果是浏览器设置，默认是关闭浏览器失效 | 关闭页面，或者浏览器失效 | 除非主动清除，否则不会失效。 |
| 作用域 | 同源标签页共享 | 只有当前页面 | 同源标签页共享 |
| 与服务器通信 | 每次发起请求时，都会携带在请求头上 | 仅在客户端保存 | 仅在客户端保存 |


## 2.一个页面从输入地址到页面显示都发生了什么
1.浏览器进行DNS域名解析ip地址（先查看本地有没有缓存，如果有直接使用）

2.进行TCP连接（三次握手，四次挥手）

3.建立http连接

4.服务器返回响应。浏览器会获取HTML和CSS资源

5.将html解析成dom树，将css解析成样式树，合并成渲染树

<details class="lake-collapse"><summary id="u8978629b"></summary><p id="u348e2b75" class="ne-p"><span class="ne-text">首先服务器响应回来html资源，1.但是html资源浏览器不能够进行渲染，需要转化为dom结构，在进行html解析的时候，2.如果遇到了css资源（分为两种情况1.内联样式2.link外部资源），遇到第一种情况就同步的生成样式树，遇到第二种情况，就会下载css资源，然后生成样式树。3.如果遇到了js资源（分为两种情况1.内联样式2.l外部资源），如果是在html资源的中间，会对js资源进行加载，执行，然后再解析html（因为js代码可能会改变前面已经解析的样式或者dom），会浪费很多时间。所以最好将js代码放到最后。</span></p><p id="u00b0fe48" class="ne-p"><span class="ne-text">我们从上面的描述可以得知，js代码会影响html的解析，又因为js可能会改变css，需要提前解析css，js才能运行。所以css会影响js代码的解析，所以css可以通过影响js，而影响html的解析。</span></p><h3 id="MDiry"><span class="ne-text">1.dom树生成</span></h3><p id="ud1132cd6" class="ne-p"><span class="ne-text">（1）HTML解析器：将Html字节流转为tokens生成node节点，然后是dom结构</span></p><p id="u8466aabb" class="ne-p"><span class="ne-text"></span></p></details>
6.进行布局的计算，计算渲染树中每个元素的位置。

7.然后渲染到页面上。

8.处理其他的异步请求。

## 3.强制缓存和协商缓存
<img src="https://cdn.nlark.com/yuque/0/2024/jpeg/40469080/1726482721443-f2219ea5-1555-4413-996d-ae7a69a4a4e2.jpeg" width="213" title="" crop="0,0,1,1" id="u4ada858b" class="ne-image">

## 4.同源策略
同源：协议、域名、端口号都相同

同源策略：是一种安全机制，限制了一个源加载的文件或者脚本如何与另一个源资源进行交互

跨域：

1.jsonp

利用了script标签是src属性不受同源策略的限制，资源加载完之后会被当做js脚本进行执行，来达到跨域请求资源的限制。

2.cors

3.反向代理

webpack的devServer的proxy进行反向代理，将/api开头的请求转发到真实的服务器上。在生产环境下，进行nginx反向代理。

## 5.延迟加载js的方法
defer：在html解析完之后，顺次执行js代码。

async：js代码与html解析同步进行，而且不是顺次执行。

## 6.get和post的区别
1.get是请求资源，post是提交资源

2.get的参数是放到地址上，安全性差，长度有限制。post参数是放到请求体上，安全性好一点，长度没有限制。

3.当刷新页面时，get请求不会影响服务器当中的数据。post可能会影响服务器当中的数据。

4.get请求会被缓存，也会被放入到history栈当中。post请求不会被缓存，也不被放入到history栈当中。



# 二、CSS
## 1.css3新增特性
1.盒子模型属性：border-radius、box-shadow、border-image

2.过渡动画：animation、transtion

3.媒体查询

## 2.介绍盒模型
1.标准盒模型：盒子宽度为content，content不变，向外扩张内边距和外边距

2.怪异盒模型：盒子宽度为content+padding+border，整体不变，向内挤压content

设置方式box-sizing：content-box/border-box

## 3.选择器的优先级
1.选择器的类型：id选择器、类选择器、伪类选择器、属性选择器、标签选择器、伪元素选择器、交集选择器、并集选择器、子代选择器、通配符

2.优先级：！important>行内样式（1000）>id选择器（100）>类选择器=伪类选择器=属性选择器（10）>标签选择器=伪元素选择器（1）>通配符、继承（0）

## 4.单冒号与双冒号的区别
单冒号是伪类选择器，主要是用来向选择器添加特殊的效果，双冒号是伪元素，在特定的元素前后添加内容

区别是能不能抽象的创造一个新元素，伪类选择器能够重复的叠加使用，伪元素只能使用一次。

## 4.1清除浮动的方法
<font style="color:rgb(0, 0, 0);">当我们在 CSS 中使用浮动时，有几种方法可以清除浮动的影响。让我们详细了解一下这些方法：</font>

### <font style="color:rgb(0, 0, 0);">1. 额外标签法</font>
<font style="color:rgb(0, 0, 0);">这是一种简单的方法，通过在浮动元素的末尾添加一个空标签来清除浮动。例如：</font>

```html
<div class="parent">
  <div class="float-left">浮动元素1</div>
  <div class="float-left">浮动元素2</div>
  <div class="clear"></div> <!-- 额外标签法 -->
</div>
```

<font style="color:rgb(0, 0, 0);">这里，我们添加了一个空的 </font><font style="color:rgb(0, 0, 0);"><div></font><font style="color:rgb(0, 0, 0);"> 元素，并为其设置了 </font><font style="color:rgb(0, 0, 0);">clear: both;</font><font style="color:rgb(0, 0, 0);">。这样，父元素会自动检测子元素的最大高度，并与其同高。</font>

+ <font style="color:rgb(0, 0, 0);">优点：通俗易懂，方便。</font>
+ <font style="color:rgb(0, 0, 0);">缺点：添加无意义标签，语义化差，不建议使用。</font>

### <font style="color:rgb(0, 0, 0);">2. 父级添加 </font><font style="color:rgb(0, 0, 0);">overflow</font><font style="color:rgb(0, 0, 0);"> 属性</font>
<font style="color:rgb(0, 0, 0);">通过给父元素添加 </font><font style="color:rgb(0, 0, 0);">overflow: hidden;</font><font style="color:rgb(0, 0, 0);"> 属性，可以触发 BFC（块级格式化上下文），从而实现清除浮动的效果：</font>

```css
.parent {
  overflow: hidden;
}
```

+ <font style="color:rgb(0, 0, 0);">优点：代码简洁。</font>
+ <font style="color:rgb(0, 0, 0);">缺点：当内容增多时，可能导致不会自动换行，从而隐藏溢出的元素，不推荐使用。</font>

### <font style="color:rgb(0, 0, 0);">3. 使用 </font><font style="color:rgb(0, 0, 0);">::after</font><font style="color:rgb(0, 0, 0);"> 伪元素清除浮动（推荐）</font>
```css
.parent::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

+ <font style="color:rgb(0, 0, 0);">优点：符合闭合浮动思想，结构语义化正确。</font>
+ <font style="color:rgb(0, 0, 0);">缺点：IE 6-7 不支持 </font><font style="color:rgb(0, 0, 0);">::after</font><font style="color:rgb(0, 0, 0);"> 伪元素，但可以使用 </font><font style="color:rgb(0, 0, 0);">*zoom: 1;</font><font style="color:rgb(0, 0, 0);"> 触发 </font><font style="color:rgb(0, 0, 0);">hasLayout</font><font style="color:rgb(0, 0, 0);">。</font>

### <font style="color:rgb(0, 0, 0);">4. 使用 </font><font style="color:rgb(0, 0, 0);">::before</font><font style="color:rgb(0, 0, 0);"> 和 </font><font style="color:rgb(0, 0, 0);">::after</font><font style="color:rgb(0, 0, 0);"> 双伪元素清除浮动</font>
```css
.parent::before,
.parent::after {
  content: "";
  display: table;
}
.parent::after {
  clear: both;
}
.parent {
  *zoom: 1; /* IE 6-7 清除浮动方式 */
}
```

+ <font style="color:rgb(0, 0, 0);">优点：代码更简洁。</font>
+ <font style="color:rgb(0, 0, 0);">缺点：使用 </font><font style="color:rgb(0, 0, 0);">zoom: 1;</font><font style="color:rgb(0, 0, 0);"> 触发 </font><font style="color:rgb(0, 0, 0);">hasLayout</font><font style="color:rgb(0, 0, 0);">。</font>

<font style="color:rgb(0, 0, 0);">总之，推荐使用 ::after 伪元素清除浮动，因为它既简洁又符合语义化要求。</font><font style="color:rgb(0, 0, 0);">🌊</font>

## 5.说一下BFC
BFC块级格式化上下文，设置一个独立的容器，容器内外的内容互相不受影响。

触发方式：1.overflow：auto、scroll、hidden  2.positon：absolute、fixed  display：inline-block 3.float:left  right

解决的问题

1.父元素的高度垮塌问题。

在标准流中，父元素不会跟随内部的浮动元素扩展高度，将父元素设置成bfc就可以了。

2.非浮动元素被浮动元素覆盖的问题

非浮动元素会在浮动元素之下，将他们两个放到同一个bfc当中，不会覆盖而在下方，

3.解决垂直方向上的重合问题。

一般情况下，上面盒子的margin-bottom和下面盒子的margin-top的，不是两者叠加，而是取谁大，也就是两个盒子重合了，将两个盒子放到不同的bfc当中，就可以了。

IFC   FFC  GFC

## 6.flex布局
父盒子的属性：flex-direction：row/row-reverse/column

justify-content：主轴的对齐方式：start、end、center、space-around、space-between

单行侧轴的对齐方式：align-items      多行侧轴的对齐方式：align-content

flex-wrap：换行/默认不换行，会缩小元素、挤在一行

flex-flow为flex-direction、flex-wrap的缩写。

#### 说一下space-around、space-between的区别？
space-around左右有边距、space-between：是两端对齐



子元素的属性：order（默认是0）、flex（0 1 auto）（flex-grow、flex-shrink、flex-basis的缩写）

order定义项目的排列顺序。数值越小，排列越靠前，默认为0。

flex-grow属性定义项目的放大比例，默认为0，用来分配额外空间，容器的总宽度-flex的宽度

flex-shrink定义项目缩小比例，默认为1

flex-basis，定义了在分配多余空间之前，项目占据的主轴空间。（相当于width）

这三个属性是用来分配子元素在父元素所占的宽度。
flex-basis：设置拥有这个属性的子元素的基础宽度。（当所有的子元素都设置了宽度时，子元素的宽度之和与父元素的宽度有两种情况
，一是小于这时候，flex-grow发挥作用，分配额外的空间，二是大于，flex-shrink发挥作用，分配整个父元素的宽度）


## 7.隐藏页面中的某个元素的方法
1.display：none（移除了元素，不占据原来的空间，不能点击）

2.visibility：hidden（占据空间，不能点击）

3.opacity：0（占据空间，能被点击）

4.posioton为absolute或fixed，设置top，left的值，移出可视区。

## 8.transiton和animation的区别
transiton（过渡）

1.transiton-property

2.transiton-duration

3.transiton-time-fuction

4.transiton-delay

animation（动画）

1.animation-duration

2.animation-time-function

3.animation-delay

4.animation-directon

5.animation-name

## 9.渐进增强和优雅降级
渐进增强：针对低版本的浏览器构建基础的页面，保证基础的功能，然后针对高版本浏览器，追加功能以及改进，优化体验。

优雅降级：一开始构建完整的功能，再针对低版本浏览器进行兼容。

## 10.重绘和回流
当页面的属性发生改变时，如背景颜色，不会引起布局变化，只需要浏览器根据元素的新属性进行绘制。叫重绘。

如果改变了元素的位置大小，需要重新计算布局，那么会引起回流。

## 11.px、em、rem、vh、vw、%
px是相对于屏幕分辨率而言的，它是一个绝对单位，在一台设备当中是绝对的，在不同的设备中可能有区别。

em与%类似，是相对于父元素的大小决定的。rem是相对于根元素的大小。

vh、vw是相对于可视窗口区域的大小

## 14.css工程化的理解
1.宏观设计：css代码如何组织、如何拆分、模块结构设计

2.编码优化

3.构建：如何处理css，打包结果最优

4.可维护性：

工程实践化的工具

1.预处理器：less、sass

2.工程化插件postcss

css中的babel，通过ast去分析css代码，对分析的结果进行处理

使用场景：

（1）配合stylelint校验css语法

（2）自动添加浏览器前缀autoprefix

（3）编译css next语法

3.webpackloader

webpack中的loader  css-loader  导入css模块，对css代码进行编译处理。

style-loader  创建style，把css写入到标签当中。

## 15.怎么让chrome支持小于12px的文字
默认情况下，chrome浏览器的最小字体大小为12px，无法直接设置小于12px的文字大小

1.使用transform：scale（0.8），会导致文本外观变得模糊或者失真。

2.使用zoom：0.8

## 另外   实际小项目
### （1）如何实现左边固定右边自适应的效果。
方法一：flex布局

给父盒子设置为flex布局，里面左边的盒子固定的宽度，右边的盒子属性为flex-grow：1

方法二、float ×××

左边的盒子设置为左浮动，宽度为固定宽度，右边的盒子宽度设置为100%或者auto，左外边距设置为设置的那个固定宽度。再给父盒子设置bfc，防止下方元素飞到上方内容。

### （2）圣杯布局
思路：1.因为先加载中间块，所以盒子的顺序为center、left、right

2.将三个盒子设置为左浮动，左右的盒子为固定宽度，中间的盒子宽度为100%。

（因为中间的盒子宽度为100%，所以左右的盒子被挤下去了）

3.左边的盒子margin-left设置为-100%，右边的盒子设置为-固定宽度，

4.给中间的盒子套一个盒子，设置padding：0，固定宽度。

### （3）如果设置一个没有宽高的盒子垂直水平居中
方法一：flex布局，给父元素设置justify-content：center；aligin-items：center

方法二：利用position，子绝父相，top、left为50%，使用transform的translate属性移动自身的-50%，-50%。

### （4）如何用css实现多行省略效果
单行

```json
overflow:hidden
text-overflow:ellipsis
white-space:nowrap
```

多行

高度截断

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .demo{
        position: relative;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
      }
      .demo::after{
        position: absolute;
        content:'...';
        bottom: 0;
        right: 0;
        padding: 0 10px 0 50px;
      }
    </style>
  </head>

  <body>
    <div>
      <div class="demo">这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，这是一段很长的文本，</div>
    </div>
  </body>

</html>
```

行数截断

```html
overflow:hidden
display:-webkit-box
-webkit-box-orient:vertical
-webkit-line-clamp: 3;
text-overflow:ellipsis
```

### (5)使用css画三角形
方法一、设置一个宽高为0的盒子，设置边框的宽度，设置其中一边的颜色，其他的边为透明

```html
.demo {
width: 0px;
height: 0px;
border-bottom: 20px solid red;
border-left:20px solid transparent;
border-right:20px solid transparent;
border-top:20px solid transparent;
}
```

方法二、利用clip-path画多边形来

```html
 .demo {
            width: 20px;
            height: 20px;
            clip-path: polygon(50% 0,0 100%, 100% 100%);
            background-color: red;
        }
```

### （6）点击容器内的图标，图标边框变为border：1px solid red，点击空白处重置
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            position: relative;  
            height: 100vh;         
        }
        .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 50px;
            height: 50px;
            background-color: red;
        }
        .red{
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
</head>

<body>
    <div>
        <div class="box">
            <div class="icon"></div>
            <div class="red"></div>
        </div>
    </div>
    <script>
        const icon = document.querySelector('.icon')

        function isIcon(target){
            return target.className.includes('icon')
        }

        icon.addEventListener('click',function(e){
            e.stopPropagation()
            const target = e.target     
            target.style.border = '5px solid blue'           
        })
        const doc = document
        doc.addEventListener('click',function(){
           icon.style.border = 'none'         
        })
        
        
       
    </script>
</body>

</html>
```

### （7）实现一个宽高自适应的正方形
```css
.square {
  width: 10%;
  height: 10vw;
  background: tomato
}
```

# 三、JS
## <font style="color:#DF2A3F;">this（彻底搞懂）</font>
### 一、为何产生this
1.为了解决函数（函数内部需要调用它的对象的属性或者方法来完成自己的内部功能逻辑）和调用它的对象强耦合在一起的问题。

普通函数的本质是通过入参执行一个功能，它需要外界输入变量来做运算。而this就是用来指代这个外部变量，也就是说，函数有两个渠道解决入参问题，一个是通过常规的入参参数解决，二是通过this来自动判断调用者是谁，自动拿取属性，省略了自己传参的过程，也提高了准确性。<font style="color:#DF2A3F;">（this相当于传参的自动挡，传统传参相当于手动挡），但是从形式上来说，普通函数的this是固定指向window的，如果我们为普通函数在调用时和某个对象建立自动的链接，就需要使用apply,call,bind方法</font>

+ <font style="color:#000000;">对象方法里访问自身属性（</font>`<font style="color:#000000;">this.xxx</font>`<font style="color:#000000;">）</font>

```vue
<!-- 想一想,如果没有this,这种情况下函数如何能拿到外界的入参,从而做逻辑运算呢?答案是无法做到 -->
function sayName() {
  console.log(this.name);
}

const user = { name: 'Alice', sayName };
const admin = { name: 'Bob', sayName };

user.sayName();  // Alice
admin.sayName(); // Bob

// 不用this的版本，像普通函数一样，自己写入参数，然后自己传递
  function sayName(name) {
    console.log(name);
  }
  
  const user = { name: 'Alice', sayName };
  const admin = { name: 'Bob', sayName };
  
  user.sayName(user.name);  // Alice
  admin.sayName(admin.name); // Bob

```

+ 构造函数/类实例初始化（`this` 指向新实例）<font style="color:#DF2A3F;">（这里面的this规定指向了创建的实例，与前面的不同）</font>

```vue
// 构造函数写法
function User(name, role) {
  this.name = name;   // this -> 当前 new 出来的实例
  this.role = role;
  this.sayHi = function () {
    console.log(`我是 ${this.name}，角色是 ${this.role}`);
  };
}

const u1 = new User('Alice', 'admin');
const u2 = new User('Bob', 'editor');

u1.sayHi(); // 我是 Alice，角色是 admin
u2.sayHi(); // 我是 Bob，角色是 editor
```

+ 事件回调中获取触发者（视绑定方式而定）

省略......

+ 通过 `call/apply/bind` 显式指定执行上下文（<font style="color:#DF2A3F;">call,apply,bind就是为普通函数的调用提供自动传参的方法</font>） 

```vue
function introduce(city) {
  console.log(`我是${this.name}，来自${city}`);
}

const u = { name: 'Alice' };
const a = { name: 'Bob' };

introduce.call(u, '上海');
introduce.call(a, '北京');
```

简化this的指向场景，当在对象中作为方法时，会指向对象这个操作函数的对象，其他情况下都会指向window这个操作对象。（也就是window在进行操作）

### 2.this是什么时候产生的
（1）普通函数调用，（2）普通函数使用apply、call、bind方法调用 （3）作为对象方法调用 （4）创建实例

### 3.this的常见情景下的指向
this是一个特殊的关键词，在不同的上下文之中指向不同的值，取决于代码在<font style="background-color:#FBDE28;">何处被调用，以及调用的方式</font>

1.作为全局上下文当中的this

在window环境指向window，在node环境指向global

2.在函数内部的this

如果是普通的调用，在非严格模式下指向window，在严格模式下指向undefined（在文件的顶部写/*strict*/）

如果是作为方法调用，谁调用它，this指向谁

3.箭头函数的this

箭头函数没有自己的this，它继承外界的this

4.dom事件处理函数上的this

默认指向dom本身



例题：

```javascript
var length = 1
function fun() {
  console.log(this.length);
  console.log(this);
}
let arr = [fun, 'a', 'b']
arr[0]()//3  [fun,'a','b']
let fun2 = arr[0]
fun2() //1 window
```

### 4.this指向例题
```javascript
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a);
            console.log(this);
            
        }
    }
}

o.b.fn()// undefined  {fn:[Function: fn]}
```

```javascript
window.name = 'ByteDance'

function A(){
    this.name = '123'
}

A.prototype.getA =  function(){
    console.log(this);
    return this.name + 1
}
let a = new A()

let funcA = a.getA
funcA() //window
console.log(funcA());//ByteDance1
```

```javascript
window.name = 'ByteDance'

function A(){
  this.name = '123'
}

A.prototype.getA =  function(){
  console.log(this);
  return this.name + 1
}
let a = new A()

let funcB = a.getA()//A
console.log(funcB);//124
```

```javascript
var length = 10
function fn(){
    return this.length + 1
}
var obj = {
    length:5,
    test1:function(){
        return fn()
    }
}

obj.test2 = fn
console.log(obj.test1());//11
console.log(fn() === obj.test2());//false
console.log(obj.test1() == obj.test2());//fasle
```

## <font style="color:#DF2A3F;">变量</font>
## 1.说一下var、let、const的区别
1.作用域：var声明的是函数作用域，即在函数内部声明的变量在整个函数内都可见，let、const声明的是块作用域，在{}内有效

2.声明提升：var存在声明提升，将声明提升到当前作用域的顶部，但是初始化的值保留在原位置。

let、const虽然也存在声明提升，但是在变量初始化之前是不可以被访问的

3.重复声明：var是可以被重复声明的，let、const在同一个作用域中是不可以被重复声明的。

4.可变性：var、let是可以被重新赋值的。const声明的是常量，所以不能够重新赋值。

（const如果声明的是基本类型则不能重新赋值，如果是引用类型，因为它内部储存的是引用类型的引用地址，所以引用类型的属性是可以改变的）

5.全局对象属性：var声明的变量是全局变量，能够被window访问到。let、const声明的变量不是全局变量。

6.临时死区：let、const在声明之前存在临时死区，如果访问变量会报错。

## <font style="color:#DF2A3F;">数据类型</font>
## 1.说一下数据类型
1.基本类型：number、string、null、undefined、boolean、symbol、bigint

symbol：为对象创建唯一的属性名，防止命名冲突。

2.引用类型：object、array、function

基本类型和引用类型的区别：

基础类型的数据比较常用，占据空间小，储存在栈当中。引用类型，占据空间大，在栈当中储存引用地址，然后根据引用地址去查找堆当中的数据实体。

## 2.null和undefined的区别
1.null是声明了赋的是空值，undefined是声明了没有赋值。

2.null转化为数字为0，undefined转化为数字为0

3.产生的场景：null：使用js方法获取dom上没有的元素

undefined：（1）访问对象、数组没有的属性（2）函数没有返回值，没有传递参数、没有设置默认参数。

## 3.如何判断js的数据类型
1.type of 除了null以外的所有基本类型，和function类型。 否则返回object

2.instance of 判断引用类型。    原理：判断构造函数的原型是否出现在实例的原型链上。

3.  <font style="color:rgb(5, 7, 59);">Object.prototype.toString.call() 可以更为精细的判断引用类型</font>

<font style="color:rgb(5, 7, 59);">4.Array.isArray（） 判断是否是数组</font>

## <font style="color:rgb(5, 7, 59);">4.数据类型的转化</font>
### <font style="color:rgb(5, 7, 59);">（1）数据之间的转化规则</font>
1.其他值转化为字符串：String（）

（1）数字直接转化为字符串

（2）null转化为null

（3）undefined转化为undefined

（4）true转化为true，false转化为false

（5）引用类型如果不调用自定义的tostring（）方法，转化为[object,object]

2.其他值转化为数字   Number（）

（1）字符串如果是空值转化为0，如果是其他为NaN

(2)null转化为0

（3）undefined转化为NaN

（4）true转化为1，false转化为0

3.其他值转化为布尔值

（1）引用类型为true

（2）字符串0，空格为false，其余为true

（3）数字0为false，其余为true

（4）null、undefined为false

### （2）隐式类型转化和显式类型转化
隐式类型转化：是js内部根据规则将一种数据类型自动转化为另一种数据类型，

显式类型转化：需要代码或者方法来将一种数据类型转化为另一种数据类型

## <font style="color:#DF2A3F;">操作符</font>
## 1.new操作符做了哪些事情
1.创建一个新的空对象。

2.将构造函数的原型设置为实例的__proto__

3.将构造函数的this指向实例

4.如果构造函数没有返回一个对象，则返回新对象，如果返回了一个非对象的值，不会影响返回结果。

## 2.==与===的区别
<font style="background-color:#FBDE28;">==：等值符  只比较值是否相等</font>

1.如果两边的类型一样，则直接进行比较

2.如果不一样，要转化成一样类型。  数字》其他基础类型》引用类型

a==1&&a==2&&a==3

<details class="lake-collapse"><summary id="u77bc88ce"><span class="ne-text">知识补充</span></summary><p id="u865b358c" class="ne-p"><span class="ne-text">判断两个变量是否相等的方法：</span></p><p id="u332f9df3" class="ne-p"><span class="ne-text">== </span></p><p id="u4b446254" class="ne-p"><span class="ne-text">1.如果左右两个数据类型相同则比较值</span></p><p id="u6c7c2bfa" class="ne-p"><span class="ne-text">2.如果数据类型不相同，则进行数据类型的转化。如果是数字和基本类型的比较，则转化为数字。如果有引用类型，引用类型转化为原始值。数字》其他基本类型》引用类型</span></p><p id="u5c68aced" class="ne-p"><span class="ne-text">引用值转化为原始值两种方法：valueOf、toString，对象内部的方法，如果不声明则按默认的方法</span></p><p id="u2d9f4a53" class="ne-p"><span class="ne-text">执行顺序：（1）如果都声明了，先是valueOf，如果valueOf返回的引用类型，再去调用String</span></p><p id="u20fe0422" class="ne-p"><span class="ne-text">（2）如果没有声明，则返回[object,object]</span></p><pre data-language="javascript" id="Y4aSa" class="ne-codeblock language-javascript"><code>let myObject = {
    valueOf(){
        return 1
    },
    toString(){
        return 2
    }
}

console.log(myObject == 1);//true
console.log(myObject == 2);//false

let myObject2 = {
    valueOf(){
        return []
    },
    toString(){
        return 5
    }
}
console.log(myObject2 == []);//false
console.log(myObject2 == 5);//true</code></pre><p id="u913a44a7" class="ne-p"><span class="ne-text"></span></p></details>
思路：a==1相当于执行了一个判断语句，a是引用类型，会转化为原始值，如果a中定义了valueOf或者toString方法，会去调用a中定义的方法一次，a==2时也相当于执行了一个判断语句，还去调用a中定义的方法一次，依次类型。

```javascript
let a = {
    value:1,//value也是一个内置的属性
    valueOf(){
      return  this.value++
    }
}
console.log(a==1&&a==2&&a==3);
```

2.数组的隐式类型转化

```javascript
let arr = [0]
//1.arr是一个数组，引用类型转化为布尔值为true
if(arr){
    //2. arr先去调用valueOf方法，返回的是一个[]，
    //再去调用toString（）方法，返回字符串0，转为布尔值false
    console.log(arr == true);  
}else{
    console.log(arr);
    
}
```

3.如果两边都是引用类型，比较的是引用，而不是值

```javascript
var a = [],b=[]
console.log(a === b);//false
```

<font style="background-color:#FBDE28;">===：等同符  先比较数据类型是否一样，再比较值是否相等</font>

（对于引用类型来说，如果不是同一个引用地址，那么数据类型也是不相等的）

## 3.等号操作符
```javascript
var obj1 = {
    a:'hello'
}

var obj2 = obj1

obj2.a = '你好'
console.log(obj1.a);//你好
```

说明：= 操作符，基本类型是值的赋值，引用类型是引用的赋值，

所以题目中通过=，obj1和obj2共享同一份数据，所以它们都可以修改同一份数据，又同时查看修改后的数据。

## 4.扩展运算符
扩展运算符可以将可迭代的对象转化为一个个独立的元素。

作用：

1.可动态的传递参数

```javascript
function add(a,b,c){
    return a + b +c
}
const numbers = [1,2,3]
const result = add(...numbers)
console.log(result);
```

2.浅拷贝

3.合并数据或者合并对象的参数

```javascript
let a = {
    name:'zhangsan',
    age:18,
    sex:'male',
    hobby:'music'
}

let b = {
    name:'xiaowang',
    age:20,
    sex:'female'
}

let c = {...a,...b}
console.log(c);
//如果属性相同，后面的属性会覆盖前面的属性，所以可以利用这一点，修改之前的数据。
```

```javascript
let a = [1,2,3]
let b = [2,3,4]
let c = [...a,...b]
console.log(c);
//[ 1, 2, 3, 2, 3, 4 ]
//而数组是合并到一起。
```

4.将字符串转化为数组

```javascript
let a = 'helloword'
let b = [...a]
console.log(b);
```

## <font style="color:#DF2A3F;">对象</font>
## 1.创建对象的方式
普通对象

1.字面量的方式

2.new Object

实例对象

1.构造函数+原型方法

用this放到实例身上就是构造方法，在构造函数的原型上定义属性和方法就是原型方法

优点：新加的属性和方法既可以放到实例身上，也可以放到原型身上。

缺点：每次创建实例的时候，都要重新调用内部的方法。属性没事。（可以将方法在外面定义，然后内部调用就解决这个问题了）

<details class="lake-collapse"><summary id="u59905163"></summary><p id="u1890ca06" class="ne-p"><span class="ne-text">（1）静态方法和实例方法</span></p><p id="u9b8ad3fa" class="ne-p"><span class="ne-text">问题一：</span></p><p id="u7325b644" class="ne-p"><span class="ne-text">静态方法：为函数本身添加的方法</span></p><p id="u50428bb5" class="ne-p"><span class="ne-text">实例方法：函数为构造函数时添加的方法，一种是this，添加在实例上，一种是添加在原型上。</span></p><pre data-language="javascript" id="xZTdX" class="ne-codeblock language-javascript"><code>function Person (){
    Person.say = function(){
        console.log('a');        
    }
    this.say = function(){
        console.log('b');
        
    }
}

Person.prototype.say=function(){
    console.log('c');
    
}

Person.say = function(){
    console.log('d');
    
}

Person.say()//d

let person = new Person()
person.say()//b</code></pre><p id="u19d4c664" class="ne-p"><span class="ne-text">问题二：</span></p><pre data-language="javascript" id="oqTMV" class="ne-codeblock language-javascript"><code>function Foo(){
    getName = function(){console.log(1);}
    return this
}
Foo.getName = function(){//静态方法
    console.log(2);
}
Foo.prototype.getName = function(){
    console.log(3);
    
}
var getName = function(){
    console.log(4);
}
function getName(){
    console.log(5);
}

Foo.getName()//2  执行的是函数上的方法
getName()//4  执行的第一个全局的方法
Foo().getName()//1  foo（）函数执行了，所以里面的getName也执行了
getName()//1 与上面相同
new Foo().getName()//3  寻找实例上面的方法</code></pre><p id="u4a13fd31" class="ne-p"><span class="ne-text">说明：</span></p><p id="uec8ef703" class="ne-p"><span class="ne-text">1.函数的声明方式</span></p><pre data-language="javascript" id="dlj0d" class="ne-codeblock language-javascript"><code>getName = function(){
    console.log(1);
    
}

var getName = function(){
    console.log(2);
    
}

function getName (){
    console.log(3);
}
getName()//2
//函数式声明函数和变量式声明函数的区别，</code></pre><p id="u2409868e" class="ne-p"><span class="ne-text">2.fun代表的是函数体本身，不会执行内部的代码</span></p><p id="uec3e19bd" class="ne-p"><span class="ne-text">fun（）代码的是函数return的结果，会执行内部的代码</span></p><p id="u5196654c" class="ne-p"><span class="ne-text">3.函数上可以添加方法，但是此时只是普通函数上的方法，与实例无关。与实例相关的只有this声明的，和原型声明的。</span></p></details>
2.class（构造函数的语法糖）

<details class="lake-collapse"><summary id="u6ba7cc67"></summary><h3 id="Q5RhM"><span class="ne-text">（1）class简介</span></h3><p id="uf6b5e51f" class="ne-p"><span class="ne-text">与构造函数对比 </span></p><p id="uf8f5ffac" class="ne-p"><span class="ne-text">1.在constructor内定义this方法和构造函数内定义this方法等价，都是定义在实例身上上的方法。</span></p><p id="uabb51147" class="ne-p"><span class="ne-text">2.在constructor外定义的方法和构造函数原型上定义的方法等价，定义在原型链上的方法</span></p><p id="u649fc29c" class="ne-p"><span class="ne-text">4.在class中和构造函数中一样直接使用=就可以赋值了。</span></p><p id="uf8448b28" class="ne-p"><span class="ne-text">3.当使用new关键字创建实例的时候，相当于函数的调用会执行函数内的代码，class中constructor内的代码就会执行，constructor内部的代码就像函数内部的代码，当被当作构造函数时，主要负责初始化的工作</span></p><h3 id="lvUxS"><span class="ne-text">（2）constructor内外属性和方法的区别</span></h3><p id="u87b3acc7" class="ne-p"><span class="ne-text">1.constructor内定义的属性和方法绑定在了this上，所以指向实例本身，是实例所独享的，属于自有属性能够被Object.keys所遍历。</span></p><p id="ub7fc141e" class="ne-p"><span class="ne-text">2.constructor外定义的属性和方法绑定在了prototype上，是所有实例所共享的，属于共有属性。不能够被Object.keys所遍历。</span></p><pre data-language="javascript" id="LGdKc" class="ne-codeblock language-javascript"><code>class Person {
    constructor(name){
      //1.定义在实例身上
        this.name = name
        this.say1=()=&gt;{
            console.log('我在里面',this.name);
            
        }
    }
  //2.定义在构造函数的原型上
    say2(){
        console.log('我在外面',this.name);        
    }
    age = 18
  //3.定义在构造函数原型的getter和setter上。
  get name(){
    return 1
  }
  set name(){
    return 2
  }
  //3.定义在普通函数身上
    static sayHello = ()=&gt;{//静态方法，person作为普通函数，在函数上定义的方法
    console.log('你好')
  }
}

const A = new Person('A')
const B = new Person('B')

A.say1()//A
A.say2()//A
console.log(A.age)//18  如果构造函数中this.age = 10 那么就会是10，先访问自有属性

console.log(A.say1 === B.say1);//false

console.log(A.say2 === B.say2);//true</code></pre><p id="udb126801" class="ne-p"><span class="ne-text">用构造函数实现</span></p><pre data-language="javascript" id="DqZAL" class="ne-codeblock language-javascript"><code>function Person (name){
    this.name = name
    this.say1 = ()=&gt;{
        console.log('我在里面',this.name);
    }
  Person.sayHello = ()=&gt;{//静态方法，person作为普通函数，在函数上定义的方法
    console.log('你好')
  }
}
Person.prototype.say2 = ()=&gt;{
    console.log('我在外面',this.name);  //undefined ,放到函数内部为B，与class不一致的地方
}

const A = new Person('A')
const B = new Person('B')

A.say1()
A.say2()

console.log(A.say1 === B.say1);//false

console.log(A.say2 === B.say2);//true</code></pre><h2 id="X3z6y"><span class="ne-text">3.其他的属性</span></h2><p id="u439f9c08" class="ne-p"><span class="ne-text">（1）类的方法不可枚举的，所以无法使用for in 遍历实例对象的属性和方法</span></p><p id="u23781d8a" class="ne-p"><span class="ne-text"></span></p></details>


3.工厂模式：返回一个新对象的函数

新加上去的属性和方法只能挂载到Object的原型上

```javascript
function createPerson(name){
    const o = new Object()
    o.name = name
    o.getName = function(){
        console.log(this.name);       
    }
    return o
  }
  var person1 = createPerson('zhangsan')
 console.log( person1.name);
 person1.getName()
```



## 2.原型
### （1）原型链
1.在js中每一个函数都有prototype属性，它的属性值为一个对象，里面存储着属性或者方法。所以称为原型对象。

2.在js中每一个对象都有__proto__属性，它的属性值就是它对应的构造函数的prototype的属性值。

原型链

当我们去查找一个对象上的属性或者方法的时候，会首先在对象自身上去查找，如果没有，则去原型上去查找，如果还是没有，则去原型的原型上去查找，直到为null查找结束。这种查找机制为原型链。



继承的实现

1.原型链的继承优点：可以访问父类的属性和方法以及原型上的属性和方法。

2.缺点：如果是引用类型数据，（继承的是引用地址），其中一个子类进行修改，全部都会受到影响，造成实例共享。

<img src="https://cdn.nlark.com/yuque/0/2024/jpeg/40469080/1726480188128-e9a6ae59-a472-44a9-9cec-6cedd88279fc.jpeg" width="229" title="" crop="0,0,1,1" id="EdpOw" class="ne-image">

### （2）constructor
构造函数的prototype上除了我们可以在上面挂载我们定义的方法外，它也有自己的固有属性constructor，而这个constructor指向构造函数的本身



## 3.继承
继承就是一个函数（或对象）可以从别的函数（或对象）那里继承到属性。

| | 优点 | 缺点 | 解释 |
| --- | --- | --- | --- |
| 原型链继承 | | 1.原型链上的父类引用类型的属性被所有实例共享<br/>2.子不能向父传参 | 将父类的实例放到子类的原型上 |
| 构造函数继承 | 1.父类上的方法不被共享了<br/>2.子可以向父传参了 | 不能够访问到父类原型上的方法 | 父类使用call方法，改变this指向，和向父类传递参数 |
| 组合式继承 | 全是优点 | | 原型链继承+构造函数继承 |
| 原型继承 | | | |
| 寄生性继承 | | | |
| 类继承 | | | |


<details class="lake-collapse"><summary id="u4f3a9dff"></summary><p id="u9516e7ce" class="ne-p"><span class="ne-text">1.原型链继承</span></p><p id="ufa169c7f" class="ne-p"><span class="ne-text" style="color: rgb(44, 62, 80); background-color: rgb(243, 245, 247); font-size: 14px">缺点：他的父类上的引用类型的属性可以被修改（基础类型的不会），</span></p><p id="ue5aba85c" class="ne-p"><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">多个实例对象共用了同一个原型，属性会被修改</span></p><pre data-language="javascript" id="xvrUe" class="ne-codeblock language-javascript"><code>function Parent(){
    this.name = ['xiaowang','zhangsan','wangwu']
    this.classmate = {
        nums:1
    }
}

Child.prototype = new Parent()

function Child(age=18){
    this.age = age
}

let child1 = new Child()
child1.name.push('heizi')
console.log(child1.name);//[ 'xiaowang', 'zhangsan', 'wangwu', 'heizi' ]


let child2 = new Child()
console.log(child2.name);//[ 'xiaowang', 'zhangsan', 'wangwu', 'heizi' ]
</code></pre><p id="ud658b4c0" class="ne-p"><span class="ne-text" style="font-size: 16px">2.构造函数继承</span></p><p id="ue3573a00" class="ne-p"><span class="ne-text" style="font-size: 16px">优点：（1）避免了父类上的引用类型数据被共享（2）子类可以向父类传参</span></p><pre data-language="javascript" id="H48jw" class="ne-codeblock language-javascript"><code>function Parent(){
  this.name = 'Tom'
}
function Child(name){
  console.log(this);
  //this指向的是child对象，就相当于将parent的this由window变成了child
  Parent.call(this，name)

  this.age = 18
}

let c1 = new Child('wk')
console.log(c1.name);</code></pre><p id="uc71c89f7" class="ne-p"><span class="ne-text" style="font-size: 16px">但是却打断了原型链的继承链，导致无法继承父类原型上的属性</span></p><p id="u10726bfe" class="ne-p"><span class="ne-text" style="font-size: 16px">3.组合继承   原型链继承+构造函数的继承</span></p><pre data-language="javascript" id="KTceU" class="ne-codeblock language-javascript"><code>Parent.prototype.getName = function () {
    return this.name
}

function Parent(name) {
    this.name = name
}

Child.prototype = new Parent()

function Child(name) {
    Parent.call(this, name) // this.name = 'Tom'
    this.age = 18
}

let child = new Child('John')

console.log(child.getName()); // John
</code></pre><p id="u9376df02" class="ne-p"><span class="ne-text" style="font-size: 16px">缺点：将实例对象上的constructor弄混了，</span><span class="ne-text" style="color: rgb(71, 101, 130)">child</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">实例由</span><span class="ne-text" style="color: rgb(71, 101, 130)">Parent</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">创建的，而不是</span><span class="ne-text" style="color: rgb(71, 101, 130)">Child</span></p><p id="ud6364f2f" class="ne-p"><span class="ne-text" style="color: rgb(71, 101, 130)">Child.prototype.constructor = Child//直接加上就可以了</span></p><pre data-language="javascript" id="fGlUk" class="ne-codeblock language-javascript"><code>Parent.prototype.getName = function () {
    return this.name
}

function Parent(name) {
    this.name = name
}

Child.prototype = new Parent()
Child.prototype.constructor = Child//直接加上就可以了

function Child(name) {
    Parent.call(this, name) // this.name = 'Tom'
    this.age = 18
}

let child = new Child('John')

console.log(child.getName()); // John
</code></pre><p id="u6b326e6b" class="ne-p"><span class="ne-text">4.原型式继承</span></p><p id="u4ba574f4" class="ne-p"><span class="ne-text">也就是将父类继承到子类的原型上面去。</span></p><p id="u062ebbc2" class="ne-p"><span class="ne-text">利用Object.create（），</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">拷贝的对象，没有属性，其属性全部拷贝到了原型身上去了</span></p><p id="ucbaee4b8" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2024/webp/40469080/1715925295452-df810b60-2adc-4131-a6bc-5a4d1b0b15c5.webp" width="339" title="" crop="0,0,1,1" id="UTDzS" class="ne-image"></p><p id="u2689ff02" class="ne-p"><span class="ne-text">5.寄生组合继承</span></p><p id="ud62f0e3e" class="ne-p"><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">用来优化组合继承的两次调用父类这个缺点，删除new Parent，添加</span></p><p id="u7f7fa5bd" class="ne-p"><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">Child.prototype = Object.create(Parent.prototype)</span></p><pre data-language="javascript" id="DlqfO" class="ne-codeblock language-javascript"><code>Parent.prototype.getName = function () {
    return this.name
}

function Parent(name) {
    this.name = name
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

function Child(name) {
    Parent.call(this, name) // this.name = 'Tom'
    this.age = 18
}

let child = new Child('John')

console.log(child.getName()); // John
</code></pre><p id="u4cfdcf95" class="ne-p"><span class="ne-text" style="font-size: 16px">6.</span><span class="ne-text" style="color: rgb(44, 62, 80)">class继承</span></p><p id="u2ba8e078" class="ne-p"><span class="ne-text" style="color: rgb(71, 101, 130)">extends</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">和</span><span class="ne-text" style="color: rgb(71, 101, 130)">super</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">一起使用，</span><span class="ne-text" style="color: rgb(71, 101, 130)">super</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">用于子类向父类传参，不过</span><span class="ne-text" style="color: rgb(71, 101, 130)">super</span><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">要写上面去</span></p><p id="uad744187" class="ne-p"><span class="ne-text" style="color: rgb(44, 62, 80); font-size: 16px">由new Child（）的参数出发，由super向父类传递参数，然后由extends将父类接受到的参数再传递回来。</span></p><pre data-language="javascript" id="uWqEB" class="ne-codeblock language-javascript"><code>class Parent {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Child extends Parent{
    constructor(name) {
        super(name) // super让子类传参给父类
        this.age = 18
    }
}

let child = new Child('Tom')
console.log(child.name); // Tom
</code></pre></details>
## 4.js当中常见的内置对象
1.number（）

2.string（slice、includes、indexOf、substring、split）

3.object（assign、hasOwnProperty、keys、values）

4.array（push、pop、shift、unshift、reverse、sort、reduce、foreEach、map、filter、find、includes、splice等）

5.function（call、apply、bind）

7.math(random、ceil、floor、max、min)

8.date（getFullyear、getMonth、getDate、getDay、getHours）

## 5.object有哪些静态方法
keys：以数组的形式返回对象当中所有的key值

values：以数组的形式返回对象当中所有的value

## 6.如何判断对象当中有值
1.使用object.values（），获取对象当中的key值，判断它的长度是否为0，如果为0，则没有值，如果不为0，说明有值。

2.如果判定有没有某一个特定的值：使用hasOwnProperty方法判断

## 7.object和map、weakmap有什么区别
三者都是以键值对的形式储存数据

object：

1.里面的键值对是没有顺序的

2.键只能是字符串类型

map：

1.里面的键值对是有顺序的

2.键可以是引用类型，也可以是基础类型

3.支持迭代器，可以使用for  of进行遍历

weakmap：

1.键是对象类型

2.键是弱引用，可以被垃圾回收，避免内存泄漏。

## 8.浅拷贝和深拷贝
浅拷贝：当一个对象进行复制时，它会将原有的对象中的属性值复制到新的对象当中，如果属性值是基本数据类型，会直接进行复制，如果是引用类型，则会复制应用，造成新旧两个对象存在引用关系。

实现方法：1.object.assign（） 2.扩展运算符

深拷贝：当一个对象进行复制时，它会将原有的对象中属性值复制到新的对象当中，如果属性值基本类型，会直接复制，如果是引用类型，则会进行递归，直到属性值为基本类型，这样进行复制，会生成一个完全独立的对象，新旧两个对象不存在引用关系。

实现方法：

1.JSON.stringify（）转化为字符串，然后用JSON.parse（）转化为引用类型。

缺点：1.无法拷贝方法 ，无法拷贝特殊的属性，undefined: undefined, nan: NaN

2.无法处理循环引用  3.丢失对象的原型链

```javascript
let a = {
    name:'wangkui',
    age:18,
    friends:{
        friend1:'heihei',
        friend2:'haha'
    }
}

function deepClone(obj){
   let str = JSON.stringify(obj)
   let result = JSON.parse(str)
   return result
}

const result = deepClone(a)
a.friends.friend1 = 'xixox'
console.log(result);
```

2.递归的形式

```javascript
let a = {
    name: 'wangkui',
    age: 18,
    friends: {
        friend1: 'heihei',
        friend2: 'haha'
    }
}
let b = [1,2,3,4,5]
//假定传入的数值为引用类型
function deepClone(obj) {
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !==null ){
            result[key] = deepClone(obj[key])
        }else{
            result[key]=obj[key]
        }
    }
    return result
}

const result = deepClone(b)
a.friends.friend1 = 'xixox'
b.push(6)
console.log(result);
```

## 9.**<font style="color:rgb(5, 7, 59);">for of 和 for in 的区别</font>**
for of 主要是用来遍历可迭代的对象<font style="color:rgb(5, 7, 59);background-color:rgb(253, 253, 254);">iterable</font>，只遍历自身，不遍历原型上的。（数组，字符串，set、map等）

for in 主要是用来遍历对象的可枚举的属性，会遍历对象自身的属性以及原型上的属性（）

可枚举是对象的属性上的一个属性，来判断一个对象的属性是不是能够被遍历。

## 10.考题
### （2）将对象作为属性添加到另一个对象上
```javascript
let a = {

}
let b = {
    name:'xiaokui'
}
let c = {
    count:15
}

a[b] = '123'
a[c]='456'
console.log(a[b]);//456
```

说明：知识点1：对象的属性只能是字符串，知识点2：将对象转化为原始值，首先调用valueOf方法，然后调用toString方法、如果两种方法没有声明，默认转换为[object,object]

a[b],因为b不是字符串所以转化为原始值，又因为两种方法都没有声明，所以转化为[object,object]，所以结果为

a[[object,object]] = '123',a[c]同理，转化为了a[[object,object]] = '456'，覆盖了前者，所以打印a[b]相当于打印a[[object,object]]

### （3）构造函数生成的对象，对象上查找属性和对象的过程
```javascript
function Fun(){
  //1.在实例身上声明
  this.a = '在函数内声明的'
}
//3.原型上声明
Fun.prototype.a = '在构造函数的原型上声明'

let fun = new Fun()
//2.在实例上声明
fun.a = '在实例上声明的'
//4.原型上声明
fun.__proto__.a = '在实例的——proto——上声明的'
console.log(fun.a);
```

说明：查找属性方法，现在自身寻找，然后再去原型链上寻找。

1和2等价，3和4等价，后者覆盖前者，所以打印2

### 
## <font style="color:#DF2A3F;">数组</font>
##  数组与伪数组的区别
伪数组的本质就是拥有长度和索引属性的对象。



伪数组有也有下标和长度，但是不能使用数组的方法，原型也不一样

伪数组：arguments、字符串、

```javascript
var ArrayLike = {
    0:'name',
    1:'like',
    2:'sex',
    length:3
  }
//方法1.
  const arr = Object.assign([],ArrayLike)
  console.log(arr);
  //方法2.
  const arr1 = Array.from(ArrayLike)
  console.log(arr1);
```

## 伪数组转化数组的方法
1.Array.from()

2.展开运算符[...str]

3.for遍历push到空数组当中

## 合并数组的方法
1.扩展运算符

2.concat方法

3.push+扩展运算符 arr.push(...arr1)

## 如何删除数组当中的所有元素
```javascript
//1.直接置空
var a = [1,2,3]

a = []
//2.通过splice方法
a.splice(0,a.length)
//3.长度伪0
a.length = 0
```

## 数组与set类型之间转化
1.数组转化为set

使用new Set（）

2.set转化为数组

Array.from  扩展运算符

## <font style="color:#DF2A3F;">函数</font>
## 1.作用域（针对函数的）
**<font style="color:#DF2A3F;">js的作用域是静态作用域。（即你看到的作用域链结构是什么样的，就会按照这个链向上查找，不需要根据调用来拆解再看）但是this是在被调用的时候决定的。</font>**

函数作用域分为词法作用域和动态作用域

词法作用域/静态作用域（js）：函数的作用域在函数定义的时候就确定了

动态作用域：函数的作用域在函数调用的时候才确定。

```javascript
//情况1
var scope = 'global scope'

function checkscope (){
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f()
}

console.log(checkscope());//local scope

//情况2
var scope = 'global scope'

function checkscope (){
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f
}

console.log(checkscope()());//local scope

js的函数作用域不会随函数的调用的位置而改变，而this会发生改变
```

## 2.执行上下文（针对函数的）
如果是以函数的形式定义函数：那么函数体会优先提高到文件顶部。

如果是以var变量形式定义函数，那么在给变量赋值函数之前是不能够访问变量的。

（比如let、const最为严格，在声明之前存在临时死区，访问报错，var在赋值之前也存在报错，而以函数的形式定义函数，整体提升，都能够访问到，而且后者覆盖前者）

```javascript
var foo = function(){
    console.log('foo1');
}
foo()//foo1

var foo = function(){
    console.log('foo2');

}
foo()//foo2

function foo() {
    console.log('foo1');
}
foo()//foo2

function foo() {
    console.log('foo2');
}
foo()//foo2
```

## 3.函数的参数
1.当参数为基本类型时，是按照值传递。（也就是将传进函数的参数复制了一份，函数内部修改参数，不会影响外部的参数）

2.当参数为引用类型时，按照共享传递。（也就是如果我们整体修改了传进来的对象，那么不会影响外面的参数，如果只是修改对象的属性，那么外部对象的属性也会改变）

(函数的参数是伪数组，也就是具有length和索引属性的对象)

```javascript
var obj = {
    value:1
}

function f(o){
    o.value = 2
    console.log(o.value);
}
f(obj)
console.log(obj);//改变了外部obj的属性值


// 情况二
var obj = {
    value:1
}

function f(o){
    o = {
        name:'zhangsan'
    }
    console.log(o);   
}
f(obj)
console.log(obj);//没有改变
```

## 3.箭头函数与普通函数
1.简洁性

箭头函数更具有简洁性，如果参数只有一个，可以省略括号。如果表达式只有一行，可以省略大括号。

2.argument

箭头函数没有自己的argument，它可以继承外层的arguments

3.this

箭头函数没有自己的this，继承外层的this

4.箭头函数不能够作为构造函数，普通函数能够作为构造函数

5.箭头函数没有名字，普通函数有名字。

## 4.匿名函数和具名函数的区别
具名函数：

1.可以先使用，后声明。

2.可以作为构造函数。

匿名函数：

1.必须先声明后使用

2.可以作为事件处理函数。

## 5.构造函数和普通函数的区别
1.构造函数的this指向它创造的实例，普通函数是谁调用它，this指向谁

2.构造函数通过new来进行调用，普通函数直接调用就行了。

## 6.call、apply、bind的区别
1.共同点：都是改变this指向的方法。

2.call，apply，bind的第一个参数都是改变this指向的对象

3.call的第二个参数是以数据列表的形式传入函数的参数。apply是以数组的形式传入到函数的参数。这两种方法都是返回函数的参数。bind返回一个新的函数，接受的是参数列表。

（call、apply干了两个事情，一是改变了this指向，二是调用了这个函数）



call、apply方法实现：

思路：1.在函数的原型上添加call方法，传入两个参数，第一个参数是改变this指向的obj，第二个是传入函数的参数，以剩余参数的形式传入。

2.利用symbol给obj生成一个唯一的方法h，将this赋值给这个方法

3.将参数传入到这个方法中，进行调用

4.删除这个生成的方法

5.将调用的结果返回。

（apply就是将第二个参数直接接受args，传入参数的时候用数组的形式）

```javascript
Function.prototype.myCall = function (obj, ...args) {
  const h = Symbol()
  obj[h] = this
  const result = obj[h](...args)
  delete obj[h]
  return result
}

function Person(a, b) {
  console.log(this, a, b);
}

const wk = {
  name: 'wk',
  age: 18
}

Person.myCall(wk,1,2)
```



bind方法实现

1.因为bind方法返回的是一个改变了this指向的新函数，所以返回一个箭头函数。使内外的this一致。

2.箭头函数传递第二次赋值的参数，函数的函数内部，去调用call来改变this指向。

```javascript
Function.prototype.myBind = function (obj, ...args) {          
  return (...reArgs)=>{
    this.call(obj,...args,...reArgs)
  }
}

function Person(a, b) {
  console.log(this, a, b);
}

const wk = {
  name: 'wk',
  age: 18
}

const result = Person.myBind(wk,1,2)
result()
```



## 
## <font style="color:#DF2A3F;">代码执行</font>
## 1.动态执行
动态执行就是将字符串当作代码来执行

```javascript
//1.eval方法
let code = "console.log('hello word')";
eval(code)

//2.setTimeout  将字符串传递给第一个参数
// setTimeout("console.log('hello word')", 50)
let code2 = "console.log(x)"
var x = 1
function fun() {
  var x = 2
  setTimeout(code2, 0)
}
fun()

//3.使用<script>
let y = 1
let code3 = "console.log(y)"
var script = document.createElement("script")
script.textContent = code3
document.body.appendChild(script)
```

## 2.continue、break、return
for循环当中遇到continue，会终止本次循环，跳到下一次循环。

遇到break会终止之后的语句和之后的所有循环的执行

return是终止函数的运行。

```javascript
for(let i = 0; i < 4; i++){  
  if(i == 2){
    break
  }
  console.log(i);
}
//break 0 1 
//continue 0 1 3
```

## 4.事件循环（eventloop
定义：在执行js代码的时候，会将代码分为同步任务和异步任务，同步任务放到主线程的执行栈中，异步任务放到任务队列当中去，先执行执行栈中的同步任务，再去执行任务队列中的异步任务，异步任务分为宏任务和微任务，先执行一个宏任务，再去看有没有微任务，如果有就执行完所有的微任务，再去执行下一个宏任务，再去查看是否有微任务。。。。。依次执行。就叫做事件循环机制。

宏任务：ajax任务   定时器   文件操作  requestAnimationFrame

微任务：promise.then  promise.catch  promise.fianlly（）  $nextTick()   修改dom   MutationObserver

## 5.promise
### （1）回调函数和promise
回调函数的作用：1.在外部执行逻辑 2.传递内部参数

```javascript
// 模拟一个异步操作，比如读取文件
function asyncOperation(data, callback) {
  // 使用setTimeout来模拟异步行为
  setTimeout(() => {
    if (data === null || data === undefined) {
      // 如果数据无效，则通过回调函数返回错误
      const error = new Error('Invalid data provided');
      return callback(error, null);
    }
    // 模拟异步操作成功完成，通过回调函数返回结果
    const result = `Processed data: ${data}`;
    callback(null, result);
  }, 1000); // 假设异步操作需要1秒钟
}
// 调用异步操作，并传递回调函数
asyncOperation('Hello, World!', (error, result) => {
  if (error) {
    // 处理错误情况
    console.error('An error occurred:', error.message);
    return;
  }
  // 处理成功情况
  console.log('Operation successful:', result);
});
// 另一个调用，这次传递无效数据以触发错误处理
asyncOperation(null, (error, result) => {
  if (error) {
    // 处理错误情况
    console.error('An error occurred:', error.message);
    return;
  }
  // 如果操作成功，这里会处理结果（但在这个例子中，不会执行到这里）
  console.log('Operation successful:', result);
});
```





### (2)实现一个简单的promise
要求：1.传入一个回调函数，包含两个参数,成功的回调resolve和失败的回调reject

2.有三种状态pending、fullfiled、rejected

3.实例上有then方法

思路：将函数作为参数，跟普通参数一样，形参func代表一个参数，函数内部，为回调函数的执行。回调函数的执行，是内部的两个回调函数resolve、reject的执行，所以再去定义两个回调函数。

定义三种状态和结果在原型上，因为初始化时自身上没有这个属性，所以会访问原型上的，pending、undefined

在调用resolve和reject时，先判断是否为pending（做到fuilfiled和rejected不能互相跳转），然后将相应的状态添加到实例上，这样就会先访问到实例上的，原型上的就不会被访问了。



再在原型上添加then方法。如果状态是FULFILED，则执行第一个回调函数，如果状态是REJECTED，执行第二个回调函数。

```javascript
const PENDING = 'pending'
const FULFILED = 'fulfiled'
const REJECTED = 'rejected'

class MyPromise {
    //在原型上定义状态和结果
    state = PENDING
    result = undefined
    constructor(func) {
        const resolve = (result)=>{
            if(this.state === PENDING){
                //在实例身上定义
                this.state = FULFILED
                this.result = result
            }
        }
        const reject = (result)=>{
            if(this.state === PENDING){
                this.state = REJECTED
                this.result = result
            }
        }
        func(resolve,reject)
    }

    then(onFulfiled,onRejected){
        onFulfiled = typeof onFulfiled === "function" ? onFulfiled :(x)=>x
        onRejected = typeof onRejected === "function" ? onRejected : (x)=>{throw x}

        if(this.state === FULFILED){
            onFulfiled(this.result)
        }else if(this.state === REJECTED){
            onRejected(this.result)
        }
    }
    
}

const p = new MyPromise((resolve,reject)=>{
    // resolve('哈哈，resolve执行啦')
    reject('哈哈，reject执行啦')
})
p.then((res)=>{console.log(res);
},(err)=>{
    console.log(err); 
})
```

```javascript
let PENDING = 'pending'

let FULFILED = 'fulfiled'

let REJECTED = 'rejected'


class MyPromise {
    //采用了发布订阅这模式，在pending的时候，将传入的回调函数push到数组中，然后再resolve、和reject
    //的时候执行
    resolvers = []
    rejecters = []
    init() {
        this.state = PENDING
        this.result = null
    }
    constructor(func) {
        this.init()
        func(this._resolve,this._reject)
    }
    //因为resolve和reject都是静态方法，所以要写在外面
    _resolve = (value) => { 
        if(this.state !== PENDING) return//不可逆操作
        this.state = FULFILED
        this.result = value
        this.resolvers.forEach((fn)=>fn(value))
    }

    _reject = (err)=>{
        if(this.state !== PENDING) return
        this.state = REJECTED
        this.result = err
        this.resolvers.forEach((fn)=>fn(err))
    }

    then(onFulfiled, onRejected) {
        //进行参数校验
        typeof onFulfiled ==='function' ? onFulfiled : (x)=>x
        typeof onRejected === 'function' ? onRejected : (x)=>{throw x}

        if (this.state === 'fulfiled') {
            onFulfiled(this.result)
        }
        else if (this.state === 'rejected') {
            onRejected(this.result)
        }else{
            this.resolvers.push((value)=>onFulfiled(value))
            this.rejecters.push((err)=>onRejected(err))
        }
    }
}

let p = new MyPromise((resolve, reject) => {
    let a = 1, b = 2
    setTimeout(()=>{
        resolve(a + b)
    },1000)
})
p.then((res) => {
    console.log(res);

})
```

### （3）promise常见的方法
首先都是接受一个包含多个promise的数组，返回一个新的promise。

| promise.all（） | promise.allselected（ |
| --- | --- |
| all是当所有的promise都被解决时，返回结果。如果有一个被拒绝了，会立即以该拒绝理由拒绝 | allselected是不管被解决还是被拒绝，都返回一个包含promise状态的数组。 |
| promise.any（） | promise.race（） |
| any是当promise被解决时，返回被解决的promise的值，当所有promise都被拒绝，会返回拒绝的理由。 | race是基于第一个完成的promise返回结果。（无论是被解决还是被拒绝） |


### （4）reject和catch处理上有什么区别？
catch是then方法的第二个回调函数的语法糖。如果有第二个回调函数，那么优先执行，忽略到catch方法（也就是有了第二个回调函数，catch就是多余的）

```javascript
const p = new Promise((resolve,reject)=>{
    reject('被拒绝了')
})
p.then((res)=>{console.log('res:',res);
},(err)=>{console.log('err:',err);
}).catch((error)=>{
    console.log('catcherror',error);   
})
//err: 被拒绝了
```

```javascript
const p = new Promise((resolve,reject)=>{
    reject('被拒绝了')
})
p.then((res)=>{console.log('res:',res);
}).catch((error)=>{
    console.log('catcherror',error);   
})
// catcherror 被拒绝了
```

### （4）练习
须知：1.promise本身是同步的，then，catch，finally是异步的。async，await中await后面的代码是异步的。

2.在微任务中有宏任务，是宏任务，宏任务》微任务  但是带了微任务的宏任务，比其他宏任务，更晚执行。

宏任务中的微任务，虽然也是微任务，但是要在这个宏任务所执行的时间进行执行。属于宏任务内部的局部微任务。

## <font style="color:#DF2A3F;">进阶知识</font>
## 1.内存管理
### （1）js当中的垃圾回收机制
垃圾回收机制是js内部管理内存的机制，它不需要开发人员手动释放，会自动处理不再使用的内存对象。

有两种方法：1.计数引用法  2.标记清除法

1.计数引用法：是一种简单的算法，当一个对象被引用时，计数加1，当移除引用时，计数减1，当计数为0时，会进行回收。

2.标记清除法：是更为复杂的一种算法。它是从根对象开始，标记所有可以到达的对象。然后会进行遍历，如果有对象没有被标记，就会被清除。

<img src="https://cdn.nlark.com/yuque/0/2024/jpeg/40469080/1727925870143-7bb8f153-5d6f-4610-a568-1dd5afdd2d0d.jpeg" width="543" title="" crop="0,0,1,1" id="u8e9b8d7c" class="ne-image">

### （2）js有哪些情况会导致内存泄漏
1.循环引用：当两个或两个以上的变量互相引用，而没有其他的变量引用时，会产生循环引用。

2.闭包：

3.没有被及时清除的定时器或者事件监听。

4.没有清除的全局变量

5.没有及时清除的dom

## 2.闭包
定义：一个函数和函数能够访问的外部变量的组合

优点：（1）实现了数据的私有化，避免了全局污染（2）扩展了访问的范围

缺点：导致了内存泄漏。

## 3.模块化
1.外部模块的管理

2.内部模块的组织

3.模块源码到目标代码的编译和转化

| | 运行环境 | 加载模块方式 | 值的输出 | 确定依赖关系和输入输出变量 | 基本语法 |
| --- | --- | --- | --- | --- | --- |
| common.js | 服务端 | 同步 | 值的拷贝 | 运行阶段 | 1.模块的导出module.exports<br/>2.模块的引入require |
| AMD | 浏览器端 | 异步 |  | 运行阶段 | 1.模块的导出  define（）<br/>2.模块的导入require（） |
| CMD | 浏览器端 | 异步 |  | 运行阶段 | 1.模块的导出  define（）和exports<br/>2.模块的导入define和require |
| ESmodule | 浏览器端 | 异步 | 值的引用 | 编译阶段 | |
| UMD | 通用规范，同时满足common.js、amd、cmd，全部环境 |  |  |  | |


（1）node支持的是common.js还是esmodule？

答：都是支持的，可以通过npm init 来生成package.Json，中属性type来进行设置。

（2）Vite，开发过程中打包很少

<img src="https://cdn.nlark.com/yuque/0/2024/png/40469080/1722410757846-f0c6e887-4e89-49c2-a02d-9d800ea508b0.png" width="476.6666666666667" title="" crop="0,0,1,1" id="u476ab5a8" class="ne-image">

（3）common.js和esm的区别

common.js不能异步导入

①esm支持treeshaking（知道依赖关系，webpack会静态分析依赖之间的关系，形成依赖图，对使用的依赖进行标记，将没有使用的依赖去掉），而common.js不支持（不知道依赖关系）

（4）common.js后置导入，即可以在使用的位置进行导入，esm静态导入，在文件的顶部导入  amd是前置导入cmd就近依赖

执行require就是加载模块文件（类似于new Person（）立即执行constructer里的代码，完成初始化）

# 三（2）、ts
## 1.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">类型系统</font>**
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">基本类型、联合类型、交叉类型、接口、类型别名、类型推断、类型守卫等。</font>

<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">操作符号</font><font style="color:rgb(37, 41, 51);">-!，断言不是null和undefined</font>

### <font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">（1）基础类型</font>
js中的基础类型、<font style="color:rgb(37, 41, 51);">tuple（元组）、enum（枚举）、any。</font>

<font style="color:rgb(37, 41, 51);">---------------------------------------------------------</font>

<font style="color:rgb(37, 41, 51);">数组：存储同一种类型元素的集合。长度可变化。</font>

<font style="color:rgb(37, 41, 51);">元组：固定长度的数组，且可以存储不同类型的元素。</font>

<font style="color:rgb(37, 41, 51);">---------------------------------------------------------</font>

<font style="color:rgb(37, 41, 51);">any 就是啥类型都行，随便赋值随便操作，不检查类型。</font>

<font style="color:rgb(37, 41, 51);">unknown 是不知道啥类型</font>

<font style="color:rgb(37, 41, 51);">---------------------------------------------------------</font>

### <font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">（2）联合类型</font>
①解决定义可空类型，<font style="color:rgb(37, 41, 51);">可空类型是指一个变量可以存储特定类型的值，也可以存储</font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">null</font>`<font style="color:rgb(37, 41, 51);">或</font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">undefined</font>`

`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">number | null</font>`<font style="color:rgb(37, 41, 51);"> 或 </font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">string | undefined</font>`

### <font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">（3）类型声明和类型推断和类型断言</font>
类型声明：

**索引类型就是用 `**keyof**`** 拿键、**`**T[K]**`** 查属性类型**，让类型跟着数据结构。可以动态的扩展对象的未知属性

```javascript
interface DynamicObject {
  [key: string]: number | string; // 允许任意属性名，但属性值必须为 number 或 string 类型

}
function processDynamicData(data: DynamicObject): void {
  for (let key in data) {
    console.log(key + ": " + data\[key]); // 对任意属性进行处理
  }
}

```

类型推断就是在不写类型声明的情况下，ts主动推断出变量类型，然后做类型检查。做报错提示。（而不是像js一样可以重新赋值其他类型的数据）但是这种推断只能基础类型，如果你想定义复杂类型，还是要自己手动声明。

只有在strict模式下，ts认为类型模糊是会报提示。

类型断言：通过as来指定某个值的类型。主要用于临时难以定义类型，为了让检查通过去指定，后续再去完善类型定义。断言不能滥用，类型声明才是主力。



### （4）接口和类型别名
interface 接口用来声明对象的结构。可以用在对象，类，函数的对象参数上。

type  类型别名用来给复杂的声明命名

如何扩展：

interface是通过<font style="color:rgb(37, 41, 51);">extends 继承</font>

<font style="color:rgb(37, 41, 51);">type是使用交叉类型&来扩展</font>

### （5）类型守卫
用**运行时条件**让编译器**自动收窄**，通常比断言**更安全、更推荐**用来处理<font style="color:#DF2A3F;">联合、</font>`<font style="color:#DF2A3F;">unknown</font>`<font style="color:#DF2A3F;"> </font>等不确定情况。

_比如{name:'wangkui',age:18} | null 如果我后续想访问name属性，但是null会报错，所以我们需要收窄到这个对象类型才可以使用。_

+ **typeof**：判断基本类型（如 `typeof x === 'string'`）。
+ **instanceof**：判断类实例（如 `x instanceof Person`）。
+ **自定义守卫**：通过函数返回类型谓词（如 `function isString(x: any): x is string`）。

### （6）工具类型
Partial<T>就是把类型 T 的所有属性都变成可选的。

Required<T>是把类型 T 的所有属性都变成必需的。

Readonly<T>把类型 T 的所有属性变成只读的。

Pick<T, K> 从类型 T 里选一组属性 K 组成新类型

Record<K, T > 创建一个对象类型，属性键是 K 类型，属性值是 T 类型

## 2.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">函数和类</font>**
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">函数参数类型、返回值类型、箭头函数、函数重载；类的定义、继承、访问修饰符等概念。</font>

### （1）函数
<font style="color:rgb(37, 41, 51);">void 一般是那种没返回值的函数用。never 就是永远没返回值，像那种抛异常或者无限循环的函数。</font>

### <font style="color:rgb(37, 41, 51);">（2）class</font>
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">访问修饰符：</font>

<font style="color:rgb(37, 41, 51);">能够访问的范围：public》protected》private</font>

<font style="color:rgb(37, 41, 51);">public：可以在任何地方访问。没有显式指定就是 public 。</font>

<font style="color:rgb(37, 41, 51);">protected：可以在类内部和子类中访问。</font>

<font style="color:rgb(37, 41, 51);">private：只能在类内部访问。（但是在编译成js后还是可以访问） 私有属性 #真正的私有属性。</font>

## 3.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">泛型</font>**
<font style="color:#DF2A3F;">先定义一个类型不明确的占位符，用的时候再传具体类型参数。然后在运行的过程中明确类型是什么。</font>

<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">函数、类和接口中如何使用泛型来增加代码的灵活性和复用性</font>

<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">在函数中的应用，</font>

```javascript
// <T>声明在这个函数当中泛型为T，第二个为入参类型，第三个为函数的返回值
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = firstItem([1, 2, 3]);      // n 推断为 number | undefined
const s = firstItem(["a", "b"]);     // s 推断为 string | undefined
```



## 4.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">模块化</font>**
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">ES6 模块化的语法、导入导出方式以及模块解析等内容</font>

## 5.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">装饰器</font>**
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">对装饰器的使用，包括类装饰器、方法装饰器、属性装饰器以及参数装饰器的定义和应用。</font>

## 6.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">编译配置</font>**
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">熟悉 tsconfig.json 中的配置选项，包括编译目标、模块系统、严格模式等</font>

## 7.**<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">工程化实践</font>**
<font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">TypeScript 在项目中的实际应用，如与 JavaScript 的混用、第三方库的声明文件使用、类型声明等。</font>

### <font style="color:rgb(102, 102, 102);background-color:rgb(248, 248, 248);">（1）声明文件.d.ts</font>
对于在ts项目中的js文件，使用.d.ts文件来声明js文件中的类型，让其享受到ts文件的类型安全。



# 四、vue
## <font style="color:#DF2A3F;">框架整体</font>
## 1.vue的优点
vue是数据驱动的渐进式框架，主要有响应式编程、组件化开发、虚拟dom三个主要特点。

1.响应式编程

vue采取了mvvm思想进行设计，实现了数据的双向绑定，让开发人员不用在操作dom，更加专注于业务逻辑的开发。

2.组件化开发

根据页面的功能，将页面拆分成不同的组件，通过对组件的引入，来实现页面的编写，有利于代码的复用和后期的维护。

3.虚拟dom

不同于原生js和jquery的开发，直接操作dom，vue通过js将真实的dom转为虚拟的dom，通过新旧两棵虚拟dom树的比对，得到最小的操作单位，在反应到真实的dom上去。

## 2.说一下对mvvm的理解
mvvm是一种设计思想，m代表model，v代表view，vm代表viewmodel。model是数据状态，也会定义数据修改和操作的业务逻辑，view代表的是视图，ui结构。model和view是不能够直接通讯的，需要借助viewmodel。当状态发生变化时，可以通过viewmodel使视图发生变化。视图发生改变时，也可以通过viewmodel,使状态发生改变。这种通信是自动的，不需要开发开发人员手动操作。使得开发人员更专注于业务逻辑的开发，维护更为复杂的数据状态。

## 3.mvvm和mvc的区别
mvc也是一种设计思想，m表示model数据状态，v表示view视图结构，c表示controler控制器，它是单向通信。

缺点：1.频繁的操作dom造成了性能的浪费。2.渲染速度慢，影响了用户的体验。

## 4.如何从0到1创建一个vue项目
1.使用vue-cli或者vite来创建项目

2.引入必要的插件，router、vuex/pinia、组件库

3.引入常用的库，dayjs、lodash、nprogress

4.进行代码规范  eslint/stylelint/commitlint/markdownlint/editorconfig/prettier

5.提交规范  husky

6.目录组织结构：componensts、views、store、apis、router、utils、hooks

## <font style="color:#DF2A3F;">生命周期</font>
## 1.什么是生命周期
生命周期就是一个vue实例从创建到销毁的过程。

## 2.说一下vue的生命周期的作用。
vue实例从创建到销毁的过程中，经历了不同的生命周期，在每个生命周期中都提供了对应的钩子函数，它赋予了开发者在不同的时间点通过钩子函数书写自己业务代码逻辑的能力。

## 3.vue的生命周期。
1.beforeCreate：这是new vue（）之后触发的第一个生命周期钩子，在当前阶段，data、methods、computed、watch里面属性和方法都不能够被访问。

2.created：这时候vue实例被创建，完成了数据的观测，上面的这些属性和方法能够被访问，但是不能调用update函数，也不能与dom进行交互。除非使用$nextTick。

3.beforeMounted：挂载之前，templete模板导入到渲染函数进行编译，虚拟dom已经生成。

4.mounted：挂载完成之后，真实dom已经生成，完成了数据的双向绑定。可以通过$refs来对dom进行访问。

5.beforeupdate：更新之前，响应式数据更新之前，在此阶段可以对数据进行修改，而不引发对数据的重复渲染。

6.updated：更新之后，尽量不要对数据进行更改，可能会引发数据的重复更新。

7.beforeDestory：在实例销毁之前，在此阶段，通常完成一些收尾工作，比如清除定时器等。

8.destoryed：实例销毁之后，这是vue成为一个空壳，事件监听被移除，数据双向绑定被解除。子实例也会销毁。



在vue3当中，移除了beforeCreate、created，改为了setup函数。生命周期前加on，增加了一个捕获错误的钩子onErrorCaptured



如果有keepalive组件，有两个生命周期钩子，activated（keepalive组件激活的时候触发的钩子），deactivated（keepalive组件失活的时候触发的钩子）



<font style="color:rgb(225, 228, 232);background-color:rgb(41, 45, 62);">onRenderTracked, onRenderTriggered调试哪些依赖被使用。哪些依赖触发更新</font>

## 4.第一次加载页面会触发哪些生命周期钩子
会触发四个：beforeCreate、created、beforeMounted、mounted

## 5.dom渲染在哪个周期完成
在mounted阶段生成了真实的dom，完成了数据的双向绑定，可以访问dom

## 6.父子组件中生命周期的调用顺序
组件的创建：先父后子（因为父组件里面套着子组件，所以组件创建时，是这样的顺序）

组件的渲染：先子后父（渲染发生在mounted阶段）

渲染过程：beforeCreate（父）、created（父）、beforeMounted（父）、beforeCreate（子）、created（子）、beforeMounted（子）、mounted（子）、mounted（父）

数据更新过程：beforeupdate（父）、beforeupdate（子）、updated（子）、updated（父）

组件销毁过程：beforeDestory（父）、beforeDestory（子）、destoryed（子）、destoryed（父）

## 7.说一说nextTick的原理和使用
1.定义：nextTick是在下一次dom更新循环结束之后触发的。

2.原因：在vue当中，我们修改数据，并不会导致dom的立刻更新。而是会开辟一个任务队列，将组件的更新函数（将修改数据的操作包装成更新函数）放入到任务队列中，在同一个时间循环中，异步更新任务队列当中更新函数。在任务队列的后面添加一个callback函数，等任务队列里面的任务完成之后，也就是dom更新完成之后，触发回调函数，自然就能拿到最新的dom值。

~~所以我们要想获取最新的dom状态，需要使用nextTic方法，接受一个函数，在函数的内部可以访问最新的dom状态。（相当于事件循环，vue的生命周期相当于主线程的同步任务，nextTick相当于异步任务，返回一个钩子函数，将同步任务执行到某一步骤的数据，拿来）~~

3.使用场景：（1）created阶段获取dom（2）响应式数据变化之后获取dom更新之后的状态。

4.原理：在任务队列的后面添加一个callback函数，等任务队列里面的任务完成之后，也就是dom更新完成之后，触发回调函数，自然就能拿到最新的dom值。

## 8.父组件如何监听子组件的生命周期
在vue当中，每个组件的生命周期是相互独立的，鼓励进行组件的解耦，所以不能直接监听子组件的生命周期。

但是我们可以在子组件想要监听的生命周期中，通过自定义事件来进行监听。

## <font style="color:#DF2A3F;">源码</font>
## 1.vue的数据双向绑定原理
vue采用了数据劫持和发布订阅者模式，利用了Object.defineProperty（）来劫持每一个属性的getter和setter。（对象上的每个属性的getter和setter都是固有属性。）当数据发生改变时，会通知给订阅者，触发相应的回调函数。

1.将data当中的js对象传入到vue实例当中进行遍历递归。在observer中，利用Object.defineProperty（）来劫持每一个属性的getter和setter。当数据被读取时，会触发getter，当数据被修改时，会触发getter。

2.使用complie对HTML模板进行解析。（1）获取页面的元素。（2）放入到一个临时的内存区域，文档碎片，fragment（3）对标签做一些处理，如果标签为文本类的标签，会将文本设置为属性值，如果为input类的标签，会添加监听函数。

（4）将文档碎片插入到节点当中去，进行渲染。

3.~~当触发getter时，会通知订阅者，~~当触发setter，会通知订阅者遍历数组的数据，触发update更新函数。



缺点：1.在初始化时，遍历递归的操作造成了性能的浪费。2.对于引用的属性的新增和删除不能够拦截，需要使用vue.set（）和vue.delete（）方法 3.不支持map和set这种结构。

## 2.v-model双向绑定原理
v-model本质就是：vale+input的语法糖，原生的v-model在不同的标签当中是不同的属性的方法的组合。



用户在输入框中输入内容时，会触发input事件（双向的，既可以将视图的内容保存到value中，也可以将value的值反应到视图上去），然后存入到value当中。当value发生改变的时候，输入框的内容也会发生改变。



text、textarea：value + input

checkbox、radio： checked + change事件

select：value + change

## 3.渲染机制
一、编译阶段（vue内部）

使用complie进行template模板编译，经过词法解析（将标签转为一个个token）、语法解析（根据vue定义的规则进行转化）、语义解析，也就是parse，转化为ast，然后再经过代码转化阶段（transform）变为js代码，也就是render函数，（即用来返回虚拟dom的函数）（这个过程可以提前预完成，也就是没有执行运行，自己就偷偷的编译的）

二、挂载阶段（vue内部到真实的浏览器可以识别的文件）

调用render函数，遍历生成变为虚拟dom，如果是初始化阶段，再将虚拟dom转化为真实的dom。这一步会作为响应式副作用来执行，在此阶段会跟踪所有的响应式依赖

三、更新阶段

如果是数据修改阶段，虚拟dom进行比对，找到最小的操作，反应到真实的dom上去，然后渲染到浏览器上。

渲染的阶段

模板---》render函数--》虚拟dom--》真实dom

通常我们会编写模板，但是我们也可以直接编写render函数

## 4.diff算法
### （1）算法本身
<img src="https://cdn.nlark.com/yuque/0/2024/jpeg/40469080/1726544934802-b9d26a0d-74ed-4e06-8882-5974f346b854.jpeg" width="572" title="" crop="0,0,1,1" id="JeovK" class="ne-image">

<font style="color:#DF2A3F;">勘误：应该先是头头对比，尾尾对比，后是交叉对比。</font>

<font style="color:#DF2A3F;">patch：对比的vnode的type类型，也就是标签类型，如果不是一样的，说明将整个标签都改变了，直接替换。</font>

<font style="color:#DF2A3F;">如果标签类型一样，就使用patchVnode，看新旧虚拟节点是不是指向同一个引用对象，如果是直接return。</font>



vue3的diff算法：静态标记（vue3在创建虚拟dom的时候，会根据dom是否会发生变化，进行静态标记，之后只会对比没有静态标记的节点）、非全量diff+最长递增子序列优化对比

#### key的作用，为什么不能用索引？
因为在vue当中key的作用是为了提高diff算法的效率，以更小的代价来更新节点。

比如说使用v-for来创建li标签，我们在末尾添加一个额外的li标签，因为有key的存在，所以我们只需要渲染新添加的li标签就可以了，不需要重新渲染所有的li标签，如果我们用索引的作为key值，在li标签的开头添加一个li，后面所有li标签的key都改变了，所以所有的li标签都会重新渲染，造成性能的浪费。 

### （2）vue3做的优化
1.带编译时信息的虚拟dom

（1）静态提升，将不带任何动态绑定的标签提升到渲染函数之外

（2）更新类型标记，对于有动态绑定的元素而言，会编码所需的更新类型（0，静态，2更新类型标记）

（3）树结构打平成数组，减少了遍历的节点数量。

（4）事件缓存

## 5.虚拟dom
### （1）概念
虚拟dom是使用js代码根据真实的dom来进行生成的。它是单根树形结构，也就是由一个根节点开始，像树一样

主要分为三个部分：

type（标签的类型，div、p等等）

props（标签上面绑定的属性，style、v-bind、自定义事件、类名、id、标签里的文本内容）

children（所包含的子节点）

```javascript
{
  type：'div',
  props:{id:'root',class:'content',style:{width:'10px',height:'10px'},contentText:'中国'},
  children:[
    {
      type：'h',
      props:{id:'root',class:'content',style:{width:'10px',height:'10px'},contentText:'中国'},
    },
    {
      type：'p',
      props:{id:'root',class:'content',style:{width:'10px',height:'10px'},contentText:'中国'},
    }
    ]
}
```

### （2）如何创建
使用h函数

```javascript
import { h } from 'vue'

const vnode = h(
  'div', // type
  { id: 'foo', class: 'bar' }, // props
  [
    /* children */
  ]
)
```

jsx和tsx类似于h函数

const vnode = <div id={dynamicId}>hello, {userName}</div>

## <font style="color:#DF2A3F;">组件</font>
## 1.封装一个可复用的组件
1.低耦合，组件之间的依赖越小越好

2.组件当中的数据最好来自父组件，而不是公共组件中的数据

3.传入的数据进行校验。

4.处理事件写到父组件当中。

## 2.vue当中为什么只能有一个根节点
vue2只有一个根节点、vue3中有多个根节点

vue2中之所以只有一个根节点，是因为虚拟dom是单根树形结构，patch算法从根节点开始遍历的，所以要求只能有一个根节点。

vue3中之所以可以有多个根节点，是因为引入了fragment（<></>）抽象节点。当它发现有多个根节点时，会在外层创建一个抽象节点，将根节点作为它的子节点进行遍历。

## 3.keep-alive
keep-alive是vue的一个内置组件，用来缓存组件。当切换被keep-alive包裹的组件时，它会使用缓存当中的组件。使用keep-alive有两个优点：1.它避免了重新创建组件实例的开销。2.保留了组件当中的状态。

属性：includes、excludes、max

includes、excludes控制哪些组件可以被缓存。max：缓存的最大值，如果超过最大值，就会移除最久没有使用的组件。

生命周期：activated（激活）、deactivated（失活）

实现原理：

在vue内部定义了一个key数组和一个缓存对象

key数组中储存了被缓存组件的key值，如果缓存的组件没有key值，则创建一个。

缓存对象：属性为组件对应的key值，属性值为对应虚拟dom

当缓存的组件超过最大值，就是移除数组当中的第一个元素。

## 4.封装一个全局loading组件
1.写一个loading页面作为公共组件，在main.js中引入。

2.在公共状态管理库中保存它的<font style="color:#DF2A3F;">true和false以及触发它们的方法</font>。

3.在axios的请求拦截器中，携带token发送请求之前，使用它。（对于请求迅速的页面，会出现一闪而过的情况，影响用户使用）

## 5.说一下mixins和vue.prototype的区别
1.mixins是直接在初始化是将代码赋值到vue实例对象上。类似于扩展运算符{...vue,...mixins}进行合并，不同的地方相加，相同的地方进行合并，后者覆盖前者。所以会出现相同的逻辑代码，mixins中的代码覆盖了vue的代码。

2.vue.prototype是将方法或者实例上的方法（全局事件总线）赋值到vue的原型上。

## <font style="color:#DF2A3F;">组件属性</font>
## 1.vue组件中data为什么是一个函数
1.每一个vue组件都是一个实例。

2.如果data是一个对象，那么改变其中引用类型的值时，其他组件当中的数据也会受到影响。不利于状态的维护（同一个组件多次的使用，那么这几个组件内的数据就可能同步）

3.如果data是一个函数，将对象作为返回值，就相当于给每一个组件创建了一个私有空间，每个组件都维护自己的数据。

## ~~2.组件当中写name的好处~~
1.可以使用name来实现缓存功能

2.在开发者工具当中更容易的找到对应的组件。

## 3.如何让css只在当前组件起作用
在style标签上加上scoped

原理：是通过postcss来实现的，1.给组件当中的每一个dom都动态的添加一个独一无二的属性名，然后给css属性选择器添加一个额外的属性选择器，来选择对应的dom。

## 4.computed和watch的区别
computed

能够缓存，同步的

1.computed是一个计算属性，它依赖于一个或多个响应式数据计算出派生值。

2.计算出的值会被缓存，只有当依赖的值发生变化时，才会重新计算

3.它获取值的过程是同步的，不需要显性的调用函数。

watch

不能够缓存，异步的

1.监听一个或多个响应式数据，执行相应的回调函数

2.它的回调函数是异步的，默认是在数据变化后，下一次事件循环执行。



## 5.computed和methods的区别
methods：没有缓存机制，它的触发次数受到被哪里调用所限制，放到生命周期中，只调用一次，如果作为绑定事件，那么会调用很多次。

## ~~6.computed的缓存机制~~
缓存机制的核心是脏数据标记，当dirty为true时，重新进行计算。当dirty为false时，使用缓存中的数据。

假设页面p中的计算属性c依赖data中的A，

A会监听c的watcher和页面p的watcer

A：发生改变时：1.会将dirty：true，重新进行计算 2.通知页面p进行更新

更新完成后：1.将dirty：fasle 2.如果a没有发生变化，就使用缓存当中的数据。

## 7.watch和watchEffect的区别
watch：

1.需要显性的指定所需要监听的响应式数据，然后相应的回调函数

2.回调函数需要接收新值和旧值

3.可以配置来完成复杂的功能。

watchEffect

1.不需要显性的指定监听的数据，内部会自动跟踪响应式数据，并在数据变化后执行回调函数

2.回调函数不需要接受新值和旧值。

## 8.teleport
teleport所包裹的盒子不受当前组件限制，可以将盒子传送到body当中。用于封装一个居中的弹窗。

## ~~9.vue2中的$bus是怎么实现的？~~
方法一、在js文件当中new Vue实例作为全局事件总线，它不挂载任何dom，只是作为全局事件总线。

```javascript
import Vue from 'vue'
export const EventBus = new Vue()
```

在需要的地方引用EventBus，并使用上面的$emit()方法，在需要接收数据的地方引用EventBus，并使用上面的$on()方法。在不使用的时候，在beforeDestory计算，使用$off（）删除这个事件。

方法二、const EventBus = new Vue()  然后将其添加到vue的原型上，

Vue.prototype.$bus = EventBus，这样就可以通过this.$bus.$emit('sendMsg','123456789')，this.$bus.$on('sendMsg',this.callName)来访问原型实例的$bus方法了，又因为$bus本身是vue实例，所以上面有$emit、$on方法。

（1.vue实例本身就具有$emit，$on()，$off方法，但是不能直接使用，因为这是实例本身独享的属性，自有属性，我们需要将它设置为共享属性，一个方法为新创建一个new Vue实例，然后在需要的地方进行引入就可以了。另外就是将这个新创键的实例设置在原型上，让所有的实例共享，成为共享属性）

## <font style="color:#DF2A3F;">指令</font>
## 1.内置指令
### （1）v-once
v-once是vue的内置指令，它只在初次渲染时进行更新，之后不再进行更新，这是代码优化的一种手段。在vue3中，对应的是v-memo，它是有条件的渲染。

### （2）v-lazyload（不是）
实现图片的懒加载功能。

### （3）说一下v-if和v-show的区别
v-if和v-show都能控制显示和隐藏

1.v-if是真实的条件渲染，它是通过删除或者添加节点来实现的显示或者隐藏，所以它会销毁或者重建里面的事件监听或者子组件，也会触发组件的生命周期。切换效率低，适用于大量操作dom的情况。

2.v-show只是display：none这种css方法的简单切换。效率比较高，适合于简单的切换情形。

### （4）v-for和v-if为什么不能放在一起？
因为在vue2中v-for的优先级大于v-if，所以在v-for循环的时候，每循环一次都要进行条件判断，造成了性能的浪费。

解决方式1.将v-if放到v-for的标签的外面。先进行判断，然后再进行遍历。

方法2.：使用computed属性，先对列表进行条件过滤，然后再进行v-for遍历。

在vue3中v-if的优先级大于v-for

## 2.自定义指令
### （1）指令的生命周期
vue2中的

1.bind  指令绑定到标签上时触发的。只会触发一次，在此阶段，多完成初始化工作。

2.inserted 绑定的标签插入到父节点时触发的。

3.update 绑定的标签所在的模板更新时触发的。

4.componentupdated 绑定的标签所在的模板完成一个更新周期后触发的，

5.unbind 指令与标签解绑时触发。只触发一次。

### （2）属性
1.el  指向绑定的dom元素

2.binding  dom元素上面的指令的信息对象。name指令名字  value绑定到指令的值

3.oldVnode 上一个虚拟节点

4.vnode  虚拟节点

### （3）封装按钮权限的自定义指令
1.引入vue  2.使用vue.directive（）进行全局注册  3.在inserted阶段获取el和binding  4.将在路由元信息上添加的按钮权限引入进来，判定在binding当中的按钮信息是否包含在用户的按钮权限当中。5.如果不包含则移除这个按钮。6.在main.js中引入，7.在合适的地方引入指令，进行使用。



2.局部的自定义指令

## <font style="color:#DF2A3F;">修饰符</font>
修饰符是为指令使用的

1.事件修饰符

.stop  禁止冒泡

.capture 开启事件捕获模式

.prevent 禁止默认事件

.passive 默认事件立即触发

.once 只触发一次

.self 只在当前元素本身才触发

2.表单修饰符

.trim()  去除文本的左右空格

.number（） 将文本信息转为数字类型

.lazy（） 在文本框失去焦点触发

3.按键修饰符

.enter 

.shift

.top

.bottom

.left

.right

## <font style="color:#DF2A3F;">标签的属性</font>
## 1.ref
ref可以给标签或者组件上注册引用信息，引用信息会注册到父组件的$refs对象上。如果绑定在标签上则指向这个标签，我们可以获取dom如果绑定在组件上可以获得组件实例上的方法或者数据。

## <font style="color:#DF2A3F;">vuex和pinia</font>
## 1.什么情况下使用vuex模块
1.当项目规模变大之后，如果把所有的状态都放到一个store当中会显得非常的臃肿，我们会根据功能的不同，拆分成不同的模块，通过modules选项组织起来。

2.缺点：比较繁琐，容易出错。

## 2.vuex中的mutations和action的区别是什么
1.mutations：是改变state的唯一路径。里面的操作是同步操作。

2.actions：将改变的数据传递给mutations，里面的操作是异步操作。

## 3.vuex的数据传递过程
1.当我们想要储存或者修改数据的时候，如果是同步操作，我们可以使用mutations的commit方法，如果是异步操作，我们可以使用actions的dispatch方法。

2.如果我们想要获取vuex中的数据，可以使用...mapstate方法，来获取数据。

## 4.如何解决vuex状态丢失的问题
1.vuex状态丢失的原因：vuex中的状态实际上是存储在内存中，所以刷新之后就消失了。

2.解决：我们把数据存到vuex的同时，也将数据存储到本地当中，把本地的数据当作state中的数据。

（因为localstorage只能存储字符串，所以使用JSON.stringfiy()的方法变为字符串的形式，使用的时候，再用JSON.parse()）

## 5.vuex的缺点
1.不支持持久化，页面刷新状态会消失。

2.使用模块比较繁琐。

3.不支持ts

## <font style="color:#DF2A3F;">vue.router</font>
## 1.介绍一下vue.router本质及其原理
本质：路径path和组件之间的一一映射，当路径发生改变时，组件也会跟随变动。

原理：当页面更新时，不会发起新的请求，实现的方式有两个1.利用hash值（#）2.利用h5新增的两个api、pushState、replaceState

## 2.hash模式和history模式的区别
1.url地址上hash模式有#号，history没有#号

2.当刷新页面的时候，hash模式下会重定向到hash所指定的页面。而history模式下需要后端人员的相关配置，如果没有配置则会定向到404页面。

3.hash模式的兼容性更强。

4.从实现原理来说。hash利用了hashchange事件，根据hash值的变化更新页面。（hash后面的值不会跟随请求发送到服务器当中，所以我们可以根据监听后面的值来改变页面）。history利用了h5新增的两个api，pushState、replaceState，（在这两个api中可以改变url，而不发送请求）

## 3.说一下router、route的区别
（类似于vue当中的应用实例app和组件实例vue）

router代表的是整个路由实例。上面的常见的方法，push，会向history栈添加一个历史记录。replace，不会向history栈添加一个历史记录.go方法页面路由跳转的前进或者后退。

route代表的是当前路由信息。

包含了当前url能够解析的信息。params、query、hash、name、meta

（因为router的本质是path和组件的映射，所以都是围绕path的变化来展开的）

## 4.router的导航守卫
1.全局守卫：前置守卫beforeEach  后置守卫afterEach、解析守卫beforeResolve

2.路由独享守卫beforeEnter

3.组件内的守卫beforeRouteEnter、beforeRouteUpate、beforeRouteLeave

## 5.路由配置的常用属性
1.name

2.path

3.components

4.children

5.redirect

6.meta

## 6.编程式导航的使用方法
this.$router.push()

this.$router.replace()

this.$router.forward()

this.$route.back()

## 7.query和params的区别
query配合path使用   params配合name来使用。

## 8.在history模式下，在刷新页面重定向到404的原理是什么
刷新会向服务器发起请求，而我们进行页面的跳转不需要向后端发起请求，是浏览器上面的跳转，所以服务器上没有，会定向到404.

原因： 那是因为在history模式下，只是动态的通过js操作window.history来改变浏览器地址栏里的路径，并没有发起http请求，但是当我直接在浏览器里输入这个地址的时候，就一定要对服务器发起http请求，但是这个目标在服务器上又不存在，所以会返回404

## 9.实现一个vue.router
1.创建一个createRouter方法，返回router实例。内部保存用户传入的配置，以对象形式name、path、components、meta等等。

2.进行初始化init，hash模式：获取hash值，在load阶段将hash保存到history中，监听hashchang事件，当hash改变时，将改变后的值存入到history中。history模式，是监听popState事件。

3.因为router是以插件的形式引入的，所以要设置install方法，在内部使用mixins将router挂载到根组件和各个组件中，使得组件能够访问到$router、$route

4.创建两个组件，routerlink和routerview来实现路由调转和显示。

## <font style="color:#DF2A3F;">vue3</font>
## 1.vue2和vue3的区别
1.在vue2当中只能有一个根节点，而vue3中因为引入了fragment，可以有多个根节点

2.vue2使用的是选项式api、vue3使用的是组合式api，更有利于将功能一致的代码放到一起，有利于管理。

3.vue2使用js来进行编写，vue3使用ts来进行编写。

4.vue2的公共状态管理库为vuex，vue3的公共状态管理库为pinia

5.vue2的数据双向绑定是利用了ObjectDefineProperty（），而vue3是使用了proxy进行整个对象的代理，解决很多性能上的问题。

6.vue2更多的是使用this来获取router实例，而vue3中是通过useRouter来获取实例。

7.vue3使用了setup语法糖代替了beforeCreate和created

## 2.vue3的性能提升主要体现在哪方面
1.代码方面：因为使用了响应式的api（使用proxy实现），避免了初始化的性能损耗。

2.编译方面：做了很多的编译优化处理。（静态提升，动态内容标记、事件缓存）提高了diff对比的效率。

3.打包方面：更多的支持tree-shaking机制，因为vue3所有的api都是基于es6模块方式的引入，所以在打包的时候会移除没有使用的api，使得打包的体积更小。

## 3.ref和reactive的区别
1.ref和reactive都是将普通的数据转化为响应式数据。

2.ref主要针对的是基本类型的数据，在使用的时候，要加.value，但是在模板中使用不需要加。当然ref也可以将引用类型的数据转化为响应式数据，但是它的原理和reactive一样，都是使用proxy进行代理。对于基本类型使用的是refIMP进行代理。（只代理响应式数据中的一层）

3.reactive主要针对引用类型的数据，在使用的时候直接使用就可以了，不需要加.value

## 4.ref使用时为什么要加.value
这是因为使用ref将一个普通的数据转化为响应式数据的时候，返回的是一个对象，而转化的响应式数据储存在对象的value属性上。

## <font style="color:#DF2A3F;">webpack</font>
## 1.webpack的核心
entry

output

module

plugins

mode（约定大于配置：production、develoment）

devServer（设置反向代理，端口、热更新）

optimization（chuck优化分块）

devtool

external

## 2.常见loader
---css相关的loader

①style-loader  css-loader  less-loader  sass-loader postcss-loader stylus-loader 

css-loader只能处理css文件，需要配合style-loader才能动态的插入到html文件当中去。less-loader、sass-loader等将这些语言处理为css文件

②babel-loader（处理js文件es6-》es5，配置presents-env、presents-typescript、presents-react来支持相关语法）

③ts-loader、swc-loader、esbuild-loader（两者内核不一样，babel-loader是借助babel的能力，ts-loader是借助typescript的能力）（所以，我们后续要了解的是对于js、ts编译有非常多方案可以选择，他们只是原本编译器和webpack构建的一个桥接）

④image-loader加载和压缩图片文件

file-loader将文件输出到文件夹中，通过url的形式

## 3.常见plugin
plugins

①HtmlWebpackPlugin：自动生成 `index.html`，并注入打包后的 JS/CSS。

②providePlugin：自动注入全局变量

+ `MiniCssExtractPlugin`：把 CSS 从 JS 中抽离成独立文件，利于缓存与并行加载。
+ `CssMinimizerPlugin`：压缩 CSS。

③DllPlugin（磁盘缓存，动态链接库）

## 4.webpack构建流程/原理
1.初始化参数：从配置文件或者shell语句中读取和合并我们的参数，得到一个最终的参数。

2.根据上一步得到的参数，来初始化compiler对象，加载所有配置的插件，调用compiler的run方法，进行编译阶段。

3.找到入口文件和依赖模块

4.从入口文件开始，加载所有的loader进行模块编译，通过递归的方式，找到所有的模块，让所有模块都得到编译。得到编译后的结果和它们之间的依赖关系。

5.根据依赖关系，将编译后的结果包装成包含模块的一个个chunk，将chunk转化为单一的文件，输入到输出系统中（这是我们改变输出内容的最后机会）

6.输出资源：根据输出和路径，文件名，将文件内容写入到文件系统中。

（在整个构建流程中，webpack会在特定的时间点播放特定的事件，插件会在监听到喜欢的事件时，执行特定的逻辑，可以调用webpack提供的api来改变webpack的运行结果）

## 5.性能优化
一、查找范围缩小

主要在编译模块阶段进行处理（因为有一个遍历递归的过程）

1.通过extions和alias等配置来缩小范围。使用includes来缩小loader的命中范围（test、includes、excludes来命中）

2.减少需要解析的文件。noparse来指定忽略的文件。



3.避免重复编译第三方库，可以将第三方库单独打包，不随业务代码一起打包。



二、使用插件

1.DLLPlugin提高构建速度

构建一个动态链接库，将依赖的模块打包到动态链接库中，只需要编译一次，在之后的构建过程中不需要重新编译。

2.ParallelUglifyPlugin代替内置的`UglifyJsPlugin`

当多个js代码压缩时，会一个个压缩，我们可以使用ParallelUglifyPlugin进行并行打包

3.`CommonsChunkPlugin`

提取公共代码

4.ModuleConcatenationPlugin

开启`Scope Hoisting`代码文件更小、运行的更快



三、自动更新

1.

采用配置文件中watch：true 在shell语句中--watch 

文件监听，发现源码文件发生变化时，自动重新构建出新的输出文件

2.热模块替换

配置文件的devServer中配置hot：true，或者在shell语句中webpack-dev-server  --hot

四、区分环境

环境变量

五、压缩css代码

cssnano，已经被webpack内置了，可以使用css-loader的minimize选项来压缩代码。

六、接入cdn

1.对于html文件不接入cdn，不开启缓存

2.对于静态的js、css、图片等，开启cdn和缓存。

如果将所有的静态资源放入到同一个cdn中，因为浏览器对于同一域名的并行请求有限制（4-6个），所以会造成资源的加载阻塞，最好是放入到不同的cdn服务当中去。

[http://cdn.com/id/app_a6976b6d.css](http://cdn.com/id/app_a6976b6d.css)

对于webpack的配置

配置放置cdn文件的路径publicPath

七、配置treeshaking

1..babelrc文件，modules：false  保留es6语句

2.在shell语句中配置`webpack --display-used-exports --optimize-minimize`

八、提取公共代码

## 6.打包构建优化分析
①构建包的具体情况：webpackBundleAnalyzer

②构建过程：构建缓存（cache-loader），多线程打包（happypack）

②plugin，在构建完成后，将静态资源上传至oss（静态资源服务）  cdn

## 7.webpack和vite的对比
 1.编译原理：webpack使用大量的loader和plugin来对模块进行编译。而vite是使用es模块，借助浏览器的原生导入机制进行处理。

2.打包方式：webpack将资源打包成一个或多个bundle文件，vite保留了开始时的模块结构。在生产环境下，才对代码进行分割和优化。

3.构建速度：webpack会根据依赖图进行大量的编译，所以速度会比较慢。vite借助了浏览器的原生导入机制，只对正在编辑的文件进行 编译，速度比较快。

4.配置角度：webpack的配置比较复杂，细致，所以更适合大型项目。vite的配置相对简单，更适合于敏捷开发

5.周边插件：webpack的生态更为丰富。

6.开发模式：webpack采用hmr热模块替换，配置相对复杂。vite采用hmr热模块替换，配置相对简单。

## <font style="color:#DF2A3F;">git</font>
## 1.git如何合并拉取代码？
## 2.git如何解决代码冲突
多人协同的时候，git在不同的分支提交到远程库中，会出现三种情况，1.你只是增加了代码（没有问题）

2.你和其他人修改了相同的代码，需要手动去解决冲突。3.你删除了别人的代码，也需要去解决。



## <font style="color:#DF2A3F;">网络</font>
## 1.http和https的区别
1.http是不安全的，它是明文传输，在传输过程中被中间人截获，容易获取传播的信息。所以不适用于传播敏感的信息，如密码，token等。

2.https符合ssl的安全协议，在传播过程中是加密的，即使被中间人捕获，也不容易破解信息。更适用于敏感信息传播。由于https存在加密和解密的过程，会浪费服务器更多的资源。

3.http更适合于静态资源，图片、视频之类的传输。

https更适用于电子支付等场景。



## <font style="color:#DF2A3F;">常见功能</font>
## 1.支付功能的完成流程
1.携带商品信息发送请求，生成订单号，进入支付页。

2.用户再次点击，如果是二维码支付，则返回一个生成二维码的序列号，借助插件生成二维码，通过轮询查看用户是或否支付。如果是直接支付，则选择是什么之后，发送请求给后端，完成支付。





支付功能所需的信息：1.商品信息：  商品名、数量、价格  订单号  2.支付信息：支付宝或者微信的支付appid

流程：

1.当用户点击购买按钮的时候

①向后端发起请求，携带用户信息、商品信息

②后端返回订单号，跳转到支付信息页面

2.当用户点击支付时，

①携带订单号、支付方式a和appid向后端发起请求

②后端验证用户的支付方式，将计算得到的总金额传给支付包官方，官方返回一个标识，后端再将标识，返回前端。返回一个标识用来生成二维码

3.使用QRcode插件将标识转化为二维码

4.使用长轮询的方法，interval每隔几秒向后端发起请求，用户是否支付。如果支付，则跳转到支付成功页面。

## 2.解决了哪些移动端的兼容问题
1.当设置样式overflow：scroll/auto时，ios环境下会发生卡顿

将webkit-overflow-scrolling：touch

2.在安卓的环境下，设置placeholder的行高时总会偏上，不设置

3.在移动端，字体小于12px时，显示异常，

会将整体放大一倍，再利用transform、scale属性缩小一倍，就显示正常了

4.在ios环境下，设置input的属性disabled为true时，会显示异常

input[type = button]{

opcity:1

}

## 3.openId和UnionId的区别
微信鉴权、用户身份识别

一个企业的内部有多个小程序（appid），企业也有企业id、用户也有用户id

userid + appid   经过算法  openid  这是小程序内部识别用户的标识

userid + 企业id 经过算法   unionid   可以在企业内的多个小程序内使用。

## 4.单点登录
<img src="https://cdn.nlark.com/yuque/0/2024/jpeg/40469080/1726647707413-ecbb2e7a-d1f2-4755-9856-3b67234165de.jpeg" width="705" title="" crop="0,0,1,1" id="u431c03b0" class="ne-image">

## 5.axios的二次封装
首先对axios进行引入，然后通过create方法创建一个axios实例，我们可以对axios进行一个基础的配置，比如说基础路径或者是超时时间。

另外可以通过请求拦截器和响应拦截器进行额外的配置。在请求拦截器当中，可以将用户的token放入到请求头上，向后端发起请求时会携带用户的信息。

在响应拦截器中，如果响应成功了，可以使用解构的方法，简化传来的数据。如果请求失败了，①我们可以根据后端传来的响应码来告诉用户错误的信息，比如是404，则说明用户没有权限访问，token失效了。如果是50x，则说明服务器存在问题。②我们可以使用静态页面或者骨架屏的方式告诉用户错误的信息，或者能够展示的信息。③我们可以使用重连机制，当响应失败了，会尝试进行重连，设置重连的次数和间隔。④当响应失败时，清除表单中的数据⑤，我们可以提前准备另一个接口，当响应失败时去访问另一个接口来获取资源。

## 6.对已经发送的请求如何取消
在axios中使用cancelToken，在发送请求的时候，加上一个对象，new一个cancelToken，传一个执行函数，执行cancel

## 7.如何压缩图片
canvas中有有关图片质量的内容，我们可以canvas来压缩图片

1.使用input来获取图片，通过fileReader将其转化为base64格式的图片

2.新建一个img，将base64格式的文件指向这个img的src

3.新建canvas，将img放入到画布当中。

4.利用canvas的toDataURL导出为base64或者blob格式

## 8.用户反馈页面加载很慢怎么办
先和用户确认是：

+ **首屏慢**（白屏久、首次打开慢）
+ **切页慢**（路由跳转慢）
+ **操作卡**（点击后反应慢、列表滚动掉帧）
+ **偶发慢**（某地区/某网络/某时间段）

同时记录环境：

+ 机型、浏览器版本、网络类型（4G/WiFi/公司内网）
+ 是否首次访问（冷启动）还是二次访问（有缓存）



### A. 首屏慢（最常见）
+ 包太大：做路由懒加载、拆包（vendor/common）
+ 图片太大：WebP/AVIF、懒加载、按尺寸下发
+ 首屏请求太多：接口合并、关键接口优先、非关键延迟加载
+ 未压缩：开启 `gzip/br`，静态资源最小化
+ 缓存差：文件名 hash + 强缓存策略

### B. 页面交互卡
+ 大列表一次性渲染：虚拟列表/分页
+ 高频事件未节流：`scroll`/`resize` 做节流防抖
+ 复杂计算阻塞主线程：移到 Web Worker
+ 频繁响应式更新：减少不必要的 watch/computed 级联

### C. 路由切换慢
+ 组件初始化过重：拆分初始化逻辑，按需加载子模块
+ 切页前同步请求太多：并行化、缓存化、预取
+ 重复请求：加请求去重与缓存层

### D. 偶发慢
+ 第三方脚本波动：异步加载 + 超时降级
+ 地域网络问题：CDN 多节点，静态资源就近分发
+ 接口抖动：前端超时重试与兜底态（loading/skeleton/fallback）

### 实际操作
1. <font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">打开慢页面，DevTools 录一次 Performance + Network</font>
2. <font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">判断主要矛盾：</font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">网络下载</font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);"> </font><font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">/</font><font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);"> </font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">接口等待</font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);"> </font><font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">/</font><font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);"> </font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">JS执行</font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);"> </font><font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">/</font><font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);"> </font>`<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">渲染布局</font>`
3. <font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">选 1~2 个最大瓶颈先改（80/20）</font>
4. <font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">改后复测同条件数据（同设备同网络）</font>
5. <font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">指标写入监控，防止后续回退</font>

## 8.2用户反馈白屏问题
先定性白屏类型：①始终白屏（资源/路由/运行时崩溃）②偶发白屏（网络抖动、接口超时、边缘浏览器）③首屏久后出现内容（性能慢非真白屏）。排查顺序建议：先看浏览器 Console 是否有红错（常见是 `chunk load failed`、语法错误、空对象取值）；再看 Network：`index.html` 是否200、JS/CSS 是否404/跨域/被拦截、接口是否超时；再看 Sources 与版本：是否发布后旧 HTML 引用新 hash 资源导致缓存不一致；再看路由守卫与权限逻辑是否死循环跳转

## 9.项目安全性
### （1）常见安全性操作
1.使用https进行网络通信

2.对用户的输入进行严格验证。防止xss攻击。

（1）使用白名单策略，只让用户输入特定的数字或者字符。

（2）使用html实体编码

3.防止csrf攻击跨站请求伪造

（1）使用token来验证请求的用户

（2）使用短信进行二次验证。

（3）可以和第三方合作，进行身份验证。

（4）限制用户登录次数。

（5）对于用户修改密码等敏感操作，需要进行短信验证或者二次验证

### （2）xss
xss为跨站脚本攻击，主要利用了浏览器对于文本和代码之间界定的模糊，会将文本当作代码来执行。

恶意的攻击者向页面注入恶意代码，当正常用户浏览时，恶意代码就会运行，达成攻击的目的。

解决方法：

1.设置白名单，屏蔽一切非法字符。如脚本代码，html标签等等。

2.使用HTML实体编码

3.限制用户输入的字数。

### （3）csrf
为跨站请求伪造。

用户登录a网站，有了cookie

黑客去引诱用户点击b网页，并在其中发起一个跨站请求，请求a网站。

a网站因为有了用户的cookie，以为是真实用户，就受理了。

解决：在cookie的samesite=strict，不随跨站被发送。

### （4）前端登录的时候，用户输入账号密码的时候，如何保证传输过程中的安全性，不被中间截获解密
密码加密处理

```vue
// 前端使用加密算法（如RSA）加密密码
import JSEncrypt from 'jsencrypt'

function encryptPassword(password, publicKey) {
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(publicKey)
  return encrypt.encrypt(password)
}

// 登录示例
async function login(username, password) {
  // 1. 先从服务器获取公钥
  const { publicKey } = await fetch('/api/getPublicKey')
  
  // 2. 加密密码
  const encryptedPassword = encryptPassword(password, publicKey)
  
  // 3. 发送加密后的数据
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password: encryptedPassword
    })
  })
}
```

2.加入时间戳和随机字符串，防止重放攻击

```vue
// 在请求中加入时间戳和随机字符串
function generateRequestParams() {
  return {
    timestamp: new Date().getTime(),
    nonce: Math.random().toString(36).substr(2),
  }
}

// 登录请求示例
async function loginWithAntiReplay(username, password) {
  const { timestamp, nonce } = generateRequestParams()
  
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password: encryptedPassword,
      timestamp,
      nonce
    })
  })
}
```

3.使用数字签名验证

## 12.websocket的缺点
1.服务器资源占用：因为websoket要维持一个长连接，需要消耗服务器大量的带宽和资源。

2.安全性问题：websoket面临xss和csrf攻击，所以需要特殊的安全措施。

3.数据问题：websoket需要发送的数据包有限制，一般为2gb，对于需要大量传输的场景可能有限制。

# 四（2）、react
## 1.通信方式
**State**（状态）：

+ **定义**：State 是组件内部的状态，用于存储组件的数据。
+ **可变**：State 是可变的，可以通过 `setState` 方法更新。
+ **用途**：用于管理组件的内部状态，控制组件的行为和渲染。

**Props**（属性）：

+ **定义**：Props 是组件之间传递数据的一种方式。父组件可以通过 props 向子组件传递数据。
+ **不可变**：Props 是只读的，子组件不能修改传入的 props。
+ **用途**：用于配置组件的行为和外观。

**<font style="color:rgb(37, 41, 51);">Render Props</font>**<font style="color:rgb(37, 41, 51);"> </font>

<font style="color:rgb(37, 41, 51);">是一种在 React 中共享代码的技术，通过在组件中传递一个函数作为 prop 来实现。这个函数负责返回 JSX，从而实现在不同组件间共享逻辑。</font>

```javascript
import { useState, useEffect } from "react";

function MouseTracker({ render }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return render(coords);
}

// 使用方决定「怎么渲染」
export function App() {
  return (
    <MouseTracker
      render={({ x, y }) => ( // render相当于这个子组件的回调函数，参数接收子组件返回的数据
        <p>
          鼠标：{x}, {y}
        </p>
      )}
    />
  );
}
```

**React Context API**：

+ **定义**：Context API 是 React 提供的一种在组件树中传递数据的机制，无需通过 props 逐层传递。
+ **使用**：
    - **创建 Context**：使用 `React.createContext` 创建一个 Context 对象。
    - **提供 Context**：使用 `Context.Provider` 组件将数据传递给子组件。
    - **消费 Context**：使用 `Context.Consumer` 组件或 `useContext` Hook 在子组件中访问数据。

## 2.合成事件机制
合成事件就是react在浏览器的原生事件和我们在函数组件使用的事件之间做了一个中间的包装层。

1.在react的根节点做事件委托，在内部模拟冒泡将在组件上绑定的事件跑一遍。

2.当触发原生事件时，react会包装一个对象**<font style="color:rgb(153, 0, 0);">SyntheticEvent</font>**，将原生事件暴露出来

流程：

原生事件触发 → 根节点捕获事件 → React 生成 SyntheticEvent → 收集事件监听器 → 按组件树冒泡/捕获顺序执行

作用：

（1）解决浏览器的兼容性和它们之间的差距

（2）绑定到根节点，优化性能

#### **高频面试题**
##### **1.为什么React不直接将事件绑定在元素上？**
+ **事件委托减少内存占用，动态更新组件时无需重新绑定事件**

##### **2.合成事件和原生事件的区别**
+ **合成事件跨浏览器统一行为**
+ **原生事件直接操作DOM，无React抽象层**

##### **3.如何全局阻止React事件**
+ **劫持根节点事件监听**



## 2.组件类型
**1.受控组件和非受控组件**

**受控组件（Controlled Components）** ：

+ **定义**：受控组件是指那些其输入值由 React 的状态（state）控制的表单组件。每次用户输入时，都会触发一个事件处理器，更新组件的状态，从而更新表单的值。
+ **特点**：
    - **状态管理**：表单的值由 React 状态管理。
    - **事件处理**：每次用户输入时，都会触发事件处理器。

**非受控组件（Uncontrolled Components）** ：

+ **定义**：非受控组件是指那些其输入值不由 React 状态管理的表单组件。相反，它们依赖于 DOM API 来获取表单的值。
+ **特点**：
    - **DOM API**：通过 `ref` 获取表单的值。
    - **初始值**：可以通过 `defaultValue` 或 `defaultChecked` 属性设置初始值。

**2.高阶组件**

**<font style="color:rgb(37, 41, 51);">高阶组件（Higher-Order Component, HOC）</font>**<font style="color:rgb(37, 41, 51);"> 是一个函数，它接受一个组件并返回一个新的组件。HOC 用于复用组件逻辑，增强组件的功能。</font>

## 3.hooks
hooks和函数组件的区别

| | hooks | 函数组件 |
| --- | --- | --- |
| 如何区分 | 首先两者都是函数定义，拥有生命周期和状态，无法通过代码进行明确的区分，只有通过规定和规范来区分，以及它们的使用形式上进行区分。 | |
| 作用 | 来为函数组件提供状态和副作用和逻辑<br/>+ 存组件状态：`useState`、`useReducer`<br/>+ 处理副作用：`useEffect`、`useLayoutEffect`<br/>+ 读上下文：`useContext`<br/>+ 缓存计算/引用：`useMemo`、`useCallback` | 为hooks使用提供舞台，没有hooks的函数组件是没有灵魂的空壳 |
| 使用条件 | <font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">只能在函数组件或自定义 Hook 的</font>**<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">顶层</font>**<font style="color:rgba(228, 228, 228, 0.92);background-color:rgb(20, 20, 20);">调用，不能在循环、条件里随意调用</font> | |


useEffect

| `<font style="color:rgba(228, 228, 228, 0.92);">useEffect(fn, [])</font>`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">只在挂载后跑一次</font> | <font style="color:rgba(228, 228, 228, 0.92);">Vue 2：</font>`<font style="color:rgba(228, 228, 228, 0.92);">mounted</font>` |
| :--- | :--- |
| `<font style="color:rgba(228, 228, 228, 0.92);">useEffect(() => { return () => cleanup }, [])</font>`<font style="color:rgba(228, 228, 228, 0.92);">里返回的清理函数</font> | <font style="color:rgba(228, 228, 228, 0.92);">Vue 2：</font>`<font style="color:rgba(228, 228, 228, 0.92);">beforeDestroy</font>`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">/</font><font style="color:rgba(228, 228, 228, 0.92);"> </font>`<font style="color:rgba(228, 228, 228, 0.92);">destroyed</font>` |
| `<font style="color:rgba(228, 228, 228, 0.92);">useEffect(fn, [a, b])</font>`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">依赖变了就跑</font> | <font style="color:rgba(228, 228, 228, 0.92);">Vue 2：</font>`<font style="color:rgba(228, 228, 228, 0.92);">watch: { a() {...}, b() {...} }</font>`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">或组合监听</font> |
| `<font style="color:rgba(228, 228, 228, 0.92);">useEffect(fn)</font>`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">不传依赖数组（每次渲染后都跑）</font> | **<font style="color:rgba(228, 228, 228, 0.92);">没有</font>**<font style="color:rgba(228, 228, 228, 0.92);">一个常用、推荐的 Vue 单 API完全等同；有点像「每次更新后都执行」的逻辑，但在 Vue 里更常用</font><font style="color:rgba(228, 228, 228, 0.92);"> </font>`**<font style="color:rgba(228, 228, 228, 0.92);">watchEffect</font>**`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">或带依赖的</font><font style="color:rgba(228, 228, 228, 0.92);"> </font>`**<font style="color:rgba(228, 228, 228, 0.92);">watch</font>**`<br/><font style="color:rgba(228, 228, 228, 0.92);"> </font><font style="color:rgba(228, 228, 228, 0.92);">表达，而不是照搬「每轮渲染后」</font> |


`**<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">useMemo</font>**`<font style="color:rgb(37, 41, 51);">：</font>

+ **<font style="color:rgb(37, 41, 51);">作用</font>**<font style="color:rgb(37, 41, 51);">：用于 memoize 计算结果，避免不必要的计算。</font>
+ **<font style="color:rgb(37, 41, 51);">工作原理</font>**<font style="color:rgb(37, 41, 51);">：传入一个计算函数和一个依赖数组，只有当依赖数组中的值发生变化时，才会重新计算。</font>

`**<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">useCallback</font>**`<font style="color:rgb(37, 41, 51);">：</font>

+ **<font style="color:rgb(37, 41, 51);">作用</font>**<font style="color:rgb(37, 41, 51);">：用于 memoize 回调函数，避免不必要的重新渲染。</font>
+ **<font style="color:rgb(37, 41, 51);">工作原理</font>**<font style="color:rgb(37, 41, 51);">：传入一个回调函数和一个依赖数组，只有当依赖数组中的值发生变化时，才会返回一个新的回调函数。</font>

## 5.react框架原理
### （1）组件更新
组件为什么会更新，通常情况下是组件中的状态或者状态的依赖发生变动了，会导致组件更新。当然可能是其他情况导致组件连带着更新。如父组件的更新会导致子组件的更新，调用<font style="color:rgb(37, 41, 51);"> </font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);">this.forceUpdate()</font>`<font style="color:rgb(255, 80, 44);background-color:rgb(255, 245, 245);"> 强制更新。</font>

### （2）渲染机制
①渲染流程

组件更新--》生成虚拟dom--》利用diff算法对比虚拟dom和真实dom的区别--》找到更新的最小范围--》生成真实dom

在第三步中，使用了协调策略，一是只对比同级的节点，二是对于列表的渲染使用key来帮助识别节点的移动和服用。

②高频题目

##### 1.为什么父组件更新会导致所有子组件渲染？如何避免？
+ react默认采用"`render and diff`"策略，使用`React.memo/shouldComponentUpdate`阻断无效更新

##### 2.useMemo一定能提升性能吗？使用场景是什么？
+ 不一定。仅当计算开销大且稳定时使用，否则可能因依赖数组计算反增开销

##### 3.如何优化Context引起的渲染？
+ **拆分**多个Context
+ 使用`useContextSelector`按需订阅

```plain
js

 体验AI代码助手
 代码解读
复制代码const ThemeButton = () => {
  const theme = useContextSelector(ThemeContext, v => v.color);
  return <button style={{ color: theme }}>Submit</button>;
};
```

##### 4.函数组件每次渲染都会创建新函数，如何避免传递新props？
+ **使用useCallback缓存函数引用**

```plain
js

 体验AI代码助手
 代码解读
复制代码const handleSubmit = useCallback(() => { /*...*/ }, [deps]);
```

#### 6.性能优化法则
1. **优先解决重复渲染问题**：使用`React DevTools Profiler`定位关键路径
2. **避免过早优化**：只在性能瓶颈出现时实施优化
3. **保持组件纯净**：减少渲染过程中的副作用操作
4. **控制渲染范围**：使用`children props`阻断无关更新

## 优化手段
**1.使用纯组件**

**纯组件**：

+ **定义**：纯组件是一种特殊的组件，它通过 `React.memo`（函数组件）或 `PureComponent`（类组件）来实现。纯组件会在 props 或 state 发生变化时进行浅比较，如果前后值相同，则跳过重新渲染。
+ **优点**：
    - **性能优化**：减少不必要的重新渲染，提高应用性能。
    - **简化逻辑**：开发者不需要手动实现 `shouldComponentUpdate` 方法来优化性能。

**使用场景**：

+ **静态数据**：组件的 props 和 state 不经常变化。
+ **复杂组件**：组件内部逻辑复杂，重新渲染开销大。
+ **ey**：
+ **作用**：在列表渲染中，为每个列表项提供一个唯一的标识符，帮助 React 识别哪些项发生了变化、添加或删除。
+ **好处**：提高虚拟 DOM 的 diff 效率，减少不必要的重新渲染。
+ **Code Splitting**：
+ **作用**：将应用的代码分割成多个小块，按需加载。
+ **好处**：减少初始加载时间，提高首屏渲染速度。
+ **Lazy Loading**：
+ **作用**：延迟加载组件，直到需要时才加载。
+ **好处**：减少初始加载时间，提高应用性能。
+ **Memoization**：
+ **作用**：缓存计算结果，避免不必要的重复计算。
+ **好处**：提高组件的渲染性能，减少计算开销。
+ **React.memo**：
+ **作用**：对函数组件进行浅比较，如果 props 没有变化，则跳过重新渲染。
+ **好处**：减少不必要的重新渲染，提高性能。
+ **<font style="color:rgb(37, 41, 51);">UseCallback 和 useMemo</font>**<font style="color:rgb(37, 41, 51);">：</font>
+ **<font style="color:rgb(37, 41, 51);">作用</font>**<font style="color:rgb(37, 41, 51);">：分别用于 memoize 回调函数和计算结果，避免不必要的重新渲染和计算。</font>
+ **<font style="color:rgb(37, 41, 51);">好处</font>**<font style="color:rgb(37, 41, 51);">：提高组件的渲染性能，减少计算开销</font>

# 五、打包工具
## 1.babel
### （1）babel-runtime的作用
是一个包含babel模块化运行时助手的库。

解决的问题：babel在进行代码转化时，有时会出现将相同的代码注入到多个文件当中，重复使用。造成体积的增加。

babel-runtime：以导入的形式引入，将被重复使用的代码抽取成单独的模块，以避免出现重复代码。

优点：避免全局作用域污染的同时，减少了重复的代码。适合开发库、工具等场景。



# 六、场景题目
## 1.请求失败会弹出一个toast，如何保证批量请求失败，只弹出一个toast？
1.定义一个全局变量isToastShown默认为false，在请求失败的时候，检查isToastShown，如果为false，弹出toast，并将isToastShown变为true，如果isToastShown为true，则直接忽略后面的弹出操作。

2.使用节流和防抖函数，限制弹出的频率。

3.使用promose.all（），将所有的请求添加到一个数组当中，然后使用promise.all()集中处理结果，如果请求失败了，再弹出一个toast

```javascript
const requests = [request1(),request2(),request3()]
Promise.all(requests).then(
  // 处理成功的逻辑
).catch((errors)=>{
  if(errors.length > 0){
    // 弹出toast
  }
})
```

## 2.如何减少项目中的if-else
1.策略模式

建立一组策略对象，每一个对象对应着条件和相应的逻辑，根据不同的条件，选择相应的策略对象来执行里面的逻辑。

```javascript
// 策略模式实际应用：支付系统

// 1. 支付策略接口
class PaymentStrategy {
    pay(amount) {
        throw new Error('pay方法必须被子类实现');
    }
}

// 2. 具体支付策略
class AlipayStrategy extends PaymentStrategy {
    pay(amount) {
        console.log(`使用支付宝支付 ${amount} 元`);
        // 实际的支付宝支付逻辑
        return `支付宝支付成功：${amount} 元`;
    }
}

class WechatPayStrategy extends PaymentStrategy {
    pay(amount) {
        console.log(`使用微信支付 ${amount} 元`);
        // 实际的微信支付逻辑
        return `微信支付成功：${amount} 元`;
    }
}

class CreditCardStrategy extends PaymentStrategy {
    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;
    }

    pay(amount) {
        console.log(`使用信用卡支付 ${amount} 元，卡号：${this.cardNumber}`);
        // 实际的信用卡支付逻辑
        return `信用卡支付成功：${amount} 元`;
    }
}

class CashStrategy extends PaymentStrategy {
    pay(amount) {
        console.log(`使用现金支付 ${amount} 元`);
        // 现金支付逻辑
        return `现金支付成功：${amount} 元`;
    }
}

// 3. 购物车上下文类
class ShoppingCart {
    constructor() {
        this.items = [];
        this.paymentStrategy = null;
    }

    addItem(item, price) {
        this.items.push({ item, price });
        console.log(`添加商品：${item}，价格：${price} 元`);
    }

    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }

    checkout() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        console.log(`\n=== 购物车结算 ===`);
        console.log(`商品列表：`);
        this.items.forEach(item => {
            console.log(`  - ${item.item}: ${item.price} 元`);
        });
        console.log(`总金额：${total} 元`);

        if (!this.paymentStrategy) {
            throw new Error('请先选择支付方式');
        }

        const result = this.paymentStrategy.pay(total);
        console.log(`支付结果：${result}`);
        
        // 清空购物车
        this.items = [];
        return result;
    }
}

// 4. 使用示例
console.log('=== 策略模式实际应用：支付系统 ===\n');

const cart = new ShoppingCart();

// 添加商品
cart.addItem('苹果手机', 5999);
cart.addItem('无线耳机', 299);
cart.addItem('手机壳', 99);

// 使用不同的支付策略
console.log('\n--- 场景1：支付宝支付 ---');
cart.setPaymentStrategy(new AlipayStrategy());
cart.checkout();

console.log('\n--- 场景2：微信支付 ---');
cart.addItem('充电器', 199);
cart.setPaymentStrategy(new WechatPayStrategy());
cart.checkout();

console.log('\n--- 场景3：信用卡支付 ---');
cart.addItem('保护膜', 49);
cart.setPaymentStrategy(new CreditCardStrategy('1234-5678-9012-3456'));
cart.checkout();

console.log('\n--- 场景4：现金支付 ---');
cart.addItem('数据线', 29);
cart.setPaymentStrategy(new CashStrategy());
cart.checkout();

console.log('\n=== 对比：传统if-else方式的问题 ===\n');

// 传统if-else方式的问题
function processPaymentWithIfElse(paymentType, amount, cardNumber = null) {
    if (paymentType === 'alipay') {
        console.log(`使用支付宝支付 ${amount} 元`);
        return `支付宝支付成功：${amount} 元`;
    } else if (paymentType === 'wechat') {
        console.log(`使用微信支付 ${amount} 元`);
        return `微信支付成功：${amount} 元`;
    } else if (paymentType === 'creditcard') {
        if (!cardNumber) {
            throw new Error('信用卡支付需要提供卡号');
        }
        console.log(`使用信用卡支付 ${amount} 元，卡号：${cardNumber}`);
        return `信用卡支付成功：${amount} 元`;
    } else if (paymentType === 'cash') {
        console.log(`使用现金支付 ${amount} 元`);
        return `现金支付成功：${amount} 元`;
    } else {
        throw new Error('不支持的支付方式');
    }
}

console.log('传统if-else方式的问题：');
console.log('1. 函数越来越长，难以维护');
console.log('2. 添加新支付方式需要修改现有代码');
console.log('3. 违反开闭原则');
console.log('4. 难以进行单元测试');
console.log('5. 代码耦合度高');

console.log('\n策略模式的优势：');
console.log('1. 每个支付方式独立封装，易于维护');
console.log('2. 新增支付方式只需添加新策略类');
console.log('3. 符合开闭原则');
console.log('4. 每个策略可以独立测试');
console.log('5. 代码解耦，职责清晰');
```

2.表驱动法。使用于条件是某个关键词，然后执行对应的逻辑。

如id=1，执行a逻辑。id=2，执行b逻辑，。。。类似于switch，case

```javascript
const handlers = {
  condition1(){
    //处理condition1的逻辑
  },
  condition2(){
    //处理condition2的逻辑
  }
}

// 使用
const conditon = "condition1"
handlers[conditon]

```

3.使用switch，case

## 3.将px转化为rem
1.使用sass处理器pxtorem

2.使用webpack插件postcss-pxtorem

## 4.浏览器有同源策略，但是为何cdn请求资源的时候不会有跨域限制
| 受同源策略的请求 | 不受同源策略的请求 |
| --- | --- |
| XMLHttpRequest(),fetch()请求（脚本自动行为） | html标签中的script（js资源cdn资源加载）（但是会对返回的内容限制读写权限） |
| | img（图片资源）<br/>什么情况下不能访问<br/>1.图片资源对应的服务器有访问的限制<br/>2.图片本身有版权保护 |
| | iframe、link（css资源） |
| | form中的action：可以向任意服务器发送请求，但是受到同源策略的影响，不能收到服务器的响应。提交后会跳转到目标url的页面 |
| | a标签：使用js动态改变，静态的都不受影响。 |


同源策略的目的是为了防止恶意网站窃取用户信息，进行恶意操作，进行安全保护。而允许有些资源不受同源策略影响是保证web的开放性和扩展性，有利于资源的分发和缓存。

## 5.cookie
### （1）域名
![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/40469080/1750493744757-0a7e21f5-4e3c-4b19-8565-e80553792091.jpeg)

依赖关系：

子域名需依附于一个已存在的**主域名**（即二级域名 + 顶级域名，如 `example.com`）。没有主域名，子域名无法独立存在。

### （2）cookie


![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/40469080/1750510438275-1ab2a268-0303-4ec3-b599-5ac623364236.jpeg)

### （3）cookies解析函数，输出为一个对象
```javascript
// 简单设置，7天后过期
const expires = new Date();
expires.setDate(expires.getDate() + 7);
document.cookie = `username=王魁; expires=${expires.toUTCString()}; path=/`;
// 立即验证
console.log("所有 Cookie:", document.cookie);

const parseCookies = () => {
  const cookiesObj = {};
  let cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    let cleanCookie = cookie.trim();
    let separatorIndex = cleanCookie.indexOf("=");
    if (separatorIndex === -1) return;
    let key = cleanCookie.substring(0, separatorIndex);
    let value = cleanCookie.substring(separatorIndex + 1);
    // 解码因为cookie键和值是编码过的
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    // 将解析后的值存储到对象中
    cookiesObj[key] = value;
  });
  return cookiesObj;
};

const cookies = parseCookies();
console.log(111, cookies);
```

## ~~6.DNS解析~~
dns解析是将主机名解析成ip地址的过程，是靠主机名和ip地址之间的映射关系来进行解析。

解析过程：

1.先看本地是否存在dns的解析缓存，如果有则使用，如果没有，则开始解析过程

2.向本地dns服务器发请求，并逐渐向上查找，直到找到权威服务器

其他功能：

1.逆向映射：将ip地址解析为域名

2.负载均衡：将主机名映射到不同的ip地址分散负载。

加快dns解析的方法：

1.使用本地的dns缓存

2.使用更快的dns解析服务器

3.使用较少的域名可以减少dns查找的数量。

4.使用cdn,（因为每发一次请求，都要进行dns解析，如果静态资源使用了cdn，而cdn有专用服务器，那么就大大较少了对主要服务器的请求，从而减少dns解析的次数）

## 6.axios是否可以取消请求
1.cancelToken

```javascript
// 用法1
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios.post("/user/123",{name:"new name"},{cancelToken:source.token});
source.cancel("Operation canceled by the user.");
// 用法二
const CancelToken = axios.CancelToken;
let cancel;
axios.get("/user/12345", {
 cancelToken: new CancelToken(function executor(c) {
 cancel = c;
 }),
});
cancel();
```

2.abortController

```javascript
const controller = new AbortController();
axios.get("/foo/bar", { signal: controller.signal }).then(function (response) 
{//...
});
controller.abort();
```

## ~~7.dom里，如何判断a元素是否是b元素的子元素~~
```javascript
const content1 = document.querySelector(".content1");
      const content2 = document.querySelector(".content2");
      function isChildElement(a, b) {
        return b.contains(a);
      }
      console.log(isChildElement(content1, content2));
```

## 8.flex:1代表什么
flex：1是flex-basis：0%，flex-grow：1，flex-shrink：1的缩写

flex-basis：表示在进行占有之前，是否计算有额外空间，0%表示不考虑项目本身的大小

flex-grow：1表示当有额外空间的时候，将按照比例占有额外的空间

flex-shrink：1表示当空间不足的时候，以相同的比例缩小项目

## 9.使用同一个连接，如何实现pc打开时web应用，手机打开是H5应用
User-Agent来判断设备的类型，

在服务端进行判断，返回不同的页面，



## 10.如何解决页面请求接口大规模并发问题
<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750495507745-349208e4-de47-484d-92ea-7c7a03aa5aa3.png" width="732.6666666666666" title="" crop="0,0,1,1" id="uf2b764ed" class="ne-image">

## 11.js执行100万次，如何保证浏览器不卡顿
1.web worker

```javascript
//    主线程
const worker = new Worker('worker.js'); // 创建一个新的webWorker
worker.postMessage({start:0,end:1000000}); // 向web worker发送信息
// 接收web worker的消息
worker.onmessage = (event)=>{
  const result = event.data;
  console.log('任务完成',result);      
}
```

```javascript
onmessage = (event)=>{
    const start = event.data.start;
    const end = event.data.end;
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += i;
    }
    const info = {
        sum,
        name:'wangkui'
    }
    postMessage(info) // 向主线程发送消息
}
```

2.requestAnimationFrame

```javascript
const bigArray = Array.from({length:1000000},(_,i)=> i + 1);
const processChunk = (chunk)=> chunk.map(num=> num * num)

const chunkSize = 1000 // 每个小块的大小
let index = 0;
const processArrayWithRAF = () => {
  const processChunkWithRAF = ()=>{
    const chunk = bigArray.slice(index,index+chunkSize);
    const result = processChunk(chunk);
    index += chunkSize;
    if(index < bigArray.length){
      requestAnimationFrame(processChunkWithRAF);
    }
  }
  requestAnimationFrame(processChunkWithRAF);
}
processArrayWithRAF();
```

## 11.实现图片懒加载
### （1）IntersectionObserver
1.图片懒加载

```javascript
<div class="container">
  <img class="lazy" data-src="./images/1.jpg" style="height: 1500px; background-color: palegreen">
  111
  </img>
  <img class="lazy" data-src="./images/2.jpg" style="height: 200px; background-color: rgb(46, 41, 126);width: 100vw;" >
  222
  </img>
  </div>
// 2.创建一个IntersectionObserver实例
let observer = new IntersectionObserver(function (entries) {
  // 3.entries为所有需要观察的元素
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      // data-src的实战用法，数据属性增加了html和js的互动
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.add('color')
      observer.unobserve(lazyImage);
    }
  },);
},{
  root: null,           // 根元素，默认为视口
  rootMargin: '0px',    // 根元素的边距
  threshold: 0.1        // 触发阈值（0-1）
});
// 1.选中需要懒加载的元素，然后使用IntersectionObserver创建的实例取观察每一个元素
const lazyImageList = [...document.querySelectorAll(".lazy")];
lazyImageList.forEach(function (image) {
  observer.observe(image);
});
```

entry.target      // 被观察的元素

entry.isIntersecting  // 是否进入视口

entry.intersectionRatio  // 可见比例（0-1）

entry.intersectionRect   // 可见区域的矩形信息

entry.boundingClientRect // 元素的位置信息

entry.rootBounds        // 根元素的位置信息

entry.time             // 触发时间戳

2.无限滚动

```javascript
const options = {
    // 根元素，默认为视口
    root: document.querySelector('#container'),
    
    // 根元素的边距，类似CSS margin
    rootMargin: '10px 20px 30px 40px', // 上 右 下 左
    
    // 触发阈值
    threshold: [0, 0.25, 0.5, 0.75, 1] // 多个阈值
};
```

3.动画触发

```javascript
// 开始观察元素
observer.observe(element);

// 停止观察元素
observer.unobserve(element);

// 停止观察所有元素
observer.disconnect();
```

## 12.如何判断dom元素是否在可视区域
1.getBoundingClientRect()方法

其中top和bottom是相对于视口的顶部而言，元素的顶部或者底部相对于视口的顶部的距离，所以top>=0，表示元素顶部和视口顶部有距离，表示顶部在视口中了，bottom <= (window.innerHeight||document.documentElement.clientHeight)表示元素的底部也在视口，表示元素的顶部也在视口中了。

left和right同理是相对于视口的左侧而言的，元素的左侧或者右侧相对于视口的左侧的距离，。。。

```html
<div class="container">
        <div class="lazy">
            111
        </div>
        <img class="lazy" data-src="./images/1.jpg" style="height: 1500px; background-color: palegreen;width: 100vw;">
        </img>
        <img class="lazy2" data-src="./images/2.jpg"
            style="height: 200px; background-color: rgb(46, 41, 126);width: 100vw;">
        222
        </img>
    </div>
    <script>
        const isInviewport = (element)=>{
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                rect.right <= (window.innerHeight || document.documentElement.clientWidth)    
            )
        }
        const lazy2 = document.querySelector('.lazy2');
        if(isInviewport(lazy2)){
            console.log("元素在视口之内");
        }else{
            console.log("元素在视口之外");        
        }
      </script>
```

2.IntersectionObserver()

```javascript
<div class="container">
  <img class="lazy" data-src="./images/1.jpg" style="height: 1500px; background-color: palegreen">
  111
  </img>
  <img class="lazy" data-src="./images/2.jpg" style="height: 200px; background-color: rgb(46, 41, 126);width: 100vw;" >
  222
  </img>
  </div>
// 2.创建一个IntersectionObserver实例
let observer = new IntersectionObserver(function (entries) {
  // 3.entries为所有需要观察的元素
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      // data-src的实战用法，数据属性增加了html和js的互动
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.add('color')
      observer.unobserve(lazyImage);
    }
  },);
},{
  root: null,           // 根元素，默认为视口
  rootMargin: '0px',    // 根元素的边距
  threshold: 0.1        // 触发阈值（0-1）
});
// 1.选中需要懒加载的元素，然后使用IntersectionObserver创建的实例取观察每一个元素
const lazyImageList = [...document.querySelectorAll(".lazy")];
lazyImageList.forEach(function (image) {
  observer.observe(image);
});
```

## 12.虚拟列表
IntersectionObserver

## 12.前端有哪些跨页面通信方式
<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750520268990-81c9cead-1c97-4d7f-8e64-29f4bb1db708.png" width="727.3333333333334" title="" crop="0,0,1,1" id="ube776af4" class="ne-image">

具体：

<font style="background-color:#FBDE28;">BroadcastChannel</font>

```javascript
<!-- a页面 -->
const channel = new BroadcastChannel("my-channel-name");
channel.postMessage("你好啊，b页面")
// b页面
const channel = new BroadcastChannel("my-channel-name");
channel.addEventListener("message",(event)=>{
  if(event.data){
    console.log("一条来自a页面的消息",event.data);           
  }
})
```

<font style="background-color:#FBDE28;">serviceWorker</font>

![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/40469080/1750573764543-ddc12f25-41b9-435f-b530-f28be98bc63c.jpeg)

1.所有的页面都注册一个serviceWorker

2.所有页面发送消息都会到sw.js中接收，

3.sw.js根据传来的不同的消息，将消息发送给接收消息的页面（包括自己，只有接收）

```javascript
<!--
 * @Author: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @Date: 2025-06-21 20:11:38
 * @LastEditors: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @LastEditTime: 2025-06-22 12:44:02
 * @FilePath: \日常\a.html
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Service Worker 跨页面通信 - 页面 A</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
      }
      .container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      .input-group {
        margin-bottom: 20px;
      }
      input[type="text"] {
        width: 70%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
      }
      button {
        padding: 10px 20px;
        margin: 0 5px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        font-size: 14px;
      }
      button:hover {
        background-color: #0056b3;
      }
      .btn-secondary {
        background-color: #6c757d;
      }
      .btn-secondary:hover {
        background-color: #545b62;
      }
      .message-list {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 10px;
        height: 300px;
        overflow-y: auto;
        background-color: #f8f9fa;
      }
      .message-item {
        margin-bottom: 10px;
        padding: 8px;
        background-color: white;
        border-radius: 4px;
        border-left: 3px solid #007bff;
      }
      .message-sender {
        font-weight: bold;
        color: #007bff;
      }
      .message-time {
        font-size: 12px;
        color: #666;
        margin-left: 10px;
      }
      .status {
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 4px;
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }
      .status.error {
        background-color: #f8d7da;
        color: #721c24;
        border-color: #f5c6cb;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>Service Worker 跨页面通信 - 页面 A</h1>
      
      <div id="status" class="status">
        Service Worker 状态: 正在初始化...
      </div>

      <div class="input-group">
        <input type="text" id="messageInput" placeholder="输入要发送的消息">
        <button onclick="sendBroadcastMessage()">广播消息</button>
        <button onclick="sendSpecificMessage()" class="btn-secondary">发送给特定页面</button>
      </div>

      <div class="input-group">
        <button onclick="getClientId()" class="btn-secondary">获取当前页面ID</button>
        <button onclick="clearMessages()" class="btn-secondary">清空消息</button>
      </div>

      <h3>消息列表:</h3>
      <div id="messageList" class="message-list"></div>
    </div>

    <script>
      let currentClientId = null;

      // 注册 Service Worker
      const registerServiceWorker = async () => {
        try {
          if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.register('/sw.js');
            // registration注册的实体
            console.log('Service Worker 注册成功:', registration);
            updateStatus('Service Worker 注册成功', false);
            
            // 等待 Service Worker 激活
            await navigator.serviceWorker.ready;
            console.log('Service Worker 准备就绪');
            updateStatus('Service Worker 准备就绪', false);
            
            // 获取当前页面ID
            getClientId();
          } else {
            updateStatus('浏览器不支持 Service Worker', true);
          }
        } catch (error) {
          console.error('Service Worker 注册失败:', error);
          updateStatus('Service Worker 注册失败: ' + error.message, true);
        }
      };

      // 更新状态显示
      const updateStatus = (message, isError = false) => {
        const statusDiv = document.getElementById('status');
        statusDiv.textContent = 'Service Worker 状态: ' + message;
        statusDiv.className = isError ? 'status error' : 'status';
      };

      // 发送广播消息
      const sendBroadcastMessage = () => {
        const message = document.getElementById('messageInput').value.trim();
        if (!message) {
          alert('请输入消息内容');
          return;
        }

        if (navigator.serviceWorker.controller) {
            // 发送广播消息
          navigator.serviceWorker.controller.postMessage({
            type: 'BROADCAST',
            message: message,
            sender: '页面A',
            timestamp: Date.now()
          });
          document.getElementById('messageInput').value = '';
          console.log('广播消息已发送:', message);
        } else {
          updateStatus('Service Worker 未准备就绪', true);
        }
      };

      // 发送给特定页面
      const sendSpecificMessage = () => {
        const message = document.getElementById('messageInput').value.trim();
        if (!message) {
          alert('请输入消息内容');
          return;
        }

        const targetId = prompt('请输入目标页面ID:');
        if (!targetId) return;

        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'SEND_TO_SPECIFIC',
            clientId: targetId,
            message: message,
            sender: '页面A',
            timestamp: Date.now()
          });
          document.getElementById('messageInput').value = '';
          console.log('特定消息已发送给页面:', targetId);
        } else {
          updateStatus('Service Worker 未准备就绪', true);
        }
      };

      // 获取当前页面ID
      const getClientId = () => {
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'GET_CLIENT_ID'
          });
        }
      };

      // 清空消息列表
      const clearMessages = () => {
        document.getElementById('messageList').innerHTML = '';
      };

      // 显示消息
      const displayMessage = (data) => {
        const messageList = document.getElementById('messageList');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-item';
        
        const time = new Date(data.timestamp).toLocaleTimeString();
        messageDiv.innerHTML = `
          <span class="message-sender">${data.sender}:</span>
          <span>${data.message}</span>
          <span class="message-time">${time}</span>
        `;
        
        messageList.appendChild(messageDiv);
        messageList.scrollTop = messageList.scrollHeight;
      };

      // 监听来自 Service Worker 的消息
      navigator.serviceWorker.addEventListener('message', event => {
        const data = event.data;
        console.log('收到 Service Worker 消息:', data);
        
        switch (data.type) {
          case 'BROADCAST':
          case 'SPECIFIC':
            displayMessage(data);
            break;
          case 'CLIENT_ID':
            currentClientId = data.clientId;
            updateStatus(`当前页面ID: ${currentClientId}`, false);
            break;
          default:
            console.log('未知消息类型:', data.type);
        }
      });

      // 监听 Service Worker 状态变化
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker 控制器已更改');
        updateStatus('Service Worker 控制器已更改', false);
      });

      // 回车发送消息
      document.getElementById('messageInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendBroadcastMessage();
        }
      });

      // 页面加载时注册 Service Worker
      window.addEventListener('load', registerServiceWorker);

      // 页面卸载时清理
      window.addEventListener('beforeunload', () => {
        console.log('页面即将卸载');
      });
    </script>
  </body>
</html>

```

```javascript
/*
 * @Author: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @Date: 2025-06-22 10:40:39
 * @LastEditors: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @LastEditTime: 2025-06-22 12:37:16
 * @FilePath: \日常\sw.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let clientIdCounter = 0;

// 安装事件
self.addEventListener('install', event => {
    console.log('Service Worker 安装中...');
    self.skipWaiting();
});

// 激活事件
self.addEventListener('activate', event => {
    console.log('Service Worker 激活中...');
    event.waitUntil(self.clients.claim());
});

// 消息事件 接收不同的客户端发送的消息，根据消息的类型执行不同的逻辑
self.addEventListener('message', event => {
    console.log('收到消息:', event.data);
    
    switch (event.data.type) {
        case 'BROADCAST':
            broadcastToAllClients(event.data);
            break;
        case 'SEND_TO_SPECIFIC':
            sendToSpecificClient(event.data.clientId, event.data);
            break;
        case 'GET_CLIENT_ID':
            sendClientId(event.source);
            break;
        default:
            console.log('未知消息类型:', event.data.type);
    }
});

// 广播给所有客户端
const broadcastToAllClients = (data) => {
    self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(clients => {
        clients.forEach(client => {
            // 发送给所有客户端的信息
            client.postMessage({
                type: 'BROADCAST',
                message: data.message,
                sender: data.sender,
                timestamp: data.timestamp
            });
        });
    });
};

// 发送给特定客户端
const sendToSpecificClient = (clientId, data) => {
    self.clients.get(clientId).then(client => {
        if (client) {
            client.postMessage({
                type: 'SPECIFIC',
                message: data.message,
                sender: data.sender,
                timestamp: data.timestamp
            });
        }
    });
};

// 发送客户端ID
const sendClientId = (source) => {
    source.postMessage({
        type: 'CLIENT_ID',
        clientId: source.id
    });
};
```

```html
<!--
 * @Author: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @Date: 2025-06-22 09:56:48
 * @LastEditors: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @LastEditTime: 2025-06-22 11:07:41
 * @FilePath: \日常\b.html
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面 B</title>
</head>
<body>
    <h1>页面 B</h1>
    <input type="text" id="messageInput" placeholder="输入消息">
    <button onclick="sendMessage()">发送给所有页面</button>
    <div id="messageList"></div>

    <script>
        // 注册 Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker 注册成功');
                })
                .catch(error => {
                    console.log('Service Worker 注册失败:', error);
                });
        }

        const messageInput = document.getElementById('messageInput');
        const messageList = document.getElementById('messageList');

        const sendMessage = () => {
            const message = messageInput.value.trim();
            if (message && navigator.serviceWorker.controller) {
                navigator.serviceWorker.controller.postMessage({
                    type: 'BROADCAST',
                    message: message,
                    sender: '页面B',
                    timestamp: Date.now()
                });
                messageInput.value = '';
            }
        };

        navigator.serviceWorker.addEventListener('message', event => {
            const data = event.data;
            displayMessage(data);
        });

        const displayMessage = (data) => {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `
                <strong>${data.sender}:</strong> ${data.message}
                <small>${new Date(data.timestamp).toLocaleTimeString()}</small>
            `;
            messageList.appendChild(messageDiv);
        };

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    </script>
</body>
</html>
```

## ~~12.小程序为什么有两个线程~~
1.ui线程

2.js线程

优点（1）响应速度：并行执行，提高了响应速度

（2）防止阻塞：js线程不会阻塞ui线程

（3）资源隔离：避免相互干扰

注意点：两个之间的交互和通信是通过微信客户端进行的。

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750510480683-262879e8-3673-48ac-a859-70c77008b4dd.png" width="736.6666666666666" title="" crop="0,0,1,1" id="u6c7e366b" class="ne-image">

## ~~13.cdn~~
### （1）web应用中如何对静态资源加载失败的场景做降级处理
①使用多个cdn链接，按照优先级顺序依次加载，如果一个加载失败，那就加载另外一个

```javascript
<script src="https://cdn1.example.com/script.js"</script>
<script src="https://cdn2.example.com/script.js"</script>
<script src="https://cdn3.example.com/script.js"</script>
```

②使用配用资源路径，在js中使用备用的资源路径，当主要的资源路径加载失败时，切到备用路径

```javascript
var script = document.createElement('script');
script.src = 'https://cdn.example.com/script.js';
script.onerror = function() {// 
 script.src = 'https://backup.example.com/script.js';
};
document.head.appendChild(script);
```

封装之后

```javascript
const loadScript = (src,backupSrc)=>{
  return new Promise((resolve,reject)=>{
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = ()=>{
      if(backupSrc){
        script.src = backupSrc;
      }else{
        reject(new Error('资源加载失败',src));
      }
    }
    document.head.appendChild(script);
  })
}
// 使用 正常加载的资源                                加载失败之后的备用资源
loadScript('https://cdn1.example.com/script.js','https://cdn2.example.com/script.js').then(()=>{
  // 加载成功之后的处理
}).catch((error)=>{
  // 加载失败之后的处理
})
```

## 14.html中前缀为data-开头的元素属性是什么
数据属性

目的：方便在js或者css中进行访问和操作

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750511426934-948c0c08-f2e6-4428-b631-3bd080b87725.png" width="724.6666666666666" title="" crop="0,0,1,1" id="u7cb2af1b" class="ne-image">

2.在css中可以使用数据属性作为选择器，设置样式

```plain
/* 数据属性选择器 */
[data-theme="dark"]{
    /* 暗黑主题色 */
    --primary-color: #1e2a34; 
    /* 暗黑主题文本颜色 */
    --text-color:#ccc;
}
```

## ~~15.通过设置失效时间清除本地储存的数据~~
```javascript
// 存储数据
const setLocalStorageData = (key, data, expiration) => {
  const item = {
    data,
    expiration
  };
  localStorage.setItem(key, JSON.stringify(item))
}
//  读取数据
const getLocalStorageData = (key) => {
  let item = localStorage.getItem(key)
  if (item) {           
    item = JSON.parse(item);    
    if (item.expiration && new Date().getTime() > item.expiration) {
      console.log(33333);

      localStorage.removeItem(key);
      console.log('你存储的信息过期了');
      return null;
    }
    return item.data;
  }
  return null;

}
//    使用
let expiration = new Date().getTime() + 15000;
setLocalStorageData('name', '王魁', expiration)
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  let name = getLocalStorageData('name')
  console.log(name);
})
```



## 16.应用上线后，通知用户刷新当前页面*****
第一个问题：如果感知静态资源更新了？

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750519333399-7d291ea7-a61d-4b7a-b7eb-f23c089dfa5c.png" width="738" title="" crop="0,0,1,1" id="u304293d3" class="ne-image">

第二个问题：主动推送到客户端

1.轮询

2.长轮询

3.websocket

4.service-workers（<font style="color:#DF2A3F;">推荐</font>）

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750519423697-94261ae9-6f1e-41d1-9370-3a271c0e7141.png" width="720.6666666666666" title="" crop="0,0,1,1" id="u39a24f86" class="ne-image">

## 17.vue-cli都做了那些事
<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750514560791-f11aefe4-ead8-4780-a535-6a84828ae70e.png" width="714" title="" crop="0,0,1,1" id="uaa3d6459" class="ne-image">

## 18.webpack项目通过script标签引入资源，在项目中如何处理
1.通过script标签引入的资源，webpack不会主动处理。

2.可以通过html-webpack-plugin插件或者script-loader或者externals的方法用import或require语句引入

## 18.git pull和git fetch的区别
<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750518646983-4cc8d2f4-e9c4-4ae6-a855-aa4952df3a37.png" width="712" title="" crop="0,0,1,1" id="ua3fa6a64" class="ne-image">



## 19.git仓库迁移应该如何操作
![画板](https://cdn.nlark.com/yuque/0/2025/jpeg/40469080/1750520039225-79a1925d-19c1-426a-843f-0ed09f20045e.jpeg)

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750519532031-ee594ad1-2007-4c20-913a-f9fe7921f8cd.png" width="740.6666666666666" title="" crop="0,0,1,1" id="ude81289e" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750519551081-1a6872f9-f4f1-4d6d-9b11-2f3d4397a0c9.png" width="736" title="" crop="0,0,1,1" id="u3b95380a" class="ne-image">

## 20.单点登录
<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750520045553-72f853e0-94f0-4451-aebd-78d1fc6697c6.png" width="734" title="" crop="0,0,1,1" id="u93740149" class="ne-image">

<img src="https://cdn.nlark.com/yuque/0/2025/png/40469080/1750520057704-00674148-8bf9-4e16-ab2a-ecff64f3d935.png" width="707.3333333333334" title="" crop="0,0,1,1" id="u62835855" class="ne-image">

## 21.登录相关问题
1.客户端

用户输入密码和账号，发送登录请求。

2.服务端

当用户登录之后，服务端发两个凭证，

accessToken（短期 JWT）无状态

refreshToken（长期随机串）（同时储存在数据库中（方便比对））有状态

2.客户端

accessToken会放在请求头的Authorization: Bearer ...，每次请求都携带。用来业务验证身份

refreshToken会在客户端本地永久存储

3.服务端

会在业务接口中验证accessToken（verifyAccessToken验证）

情况（1）accessToken没有过期，正常拿取数据。（2）accessToken过期，无法正常拿到数据，报401的错误(requireAccessAuth中定义的)

4.客户端

在request封装中，如果401，则调取refresh接口

5.服务端

验证refreshToken是否存在和过期，

（1）通过则发送新的accessToken

（2）没有通过则报401的错误。客户端应该跳转到登录页面，用户重新登录。



使用双token的好处

泄露损失更小：access 泄露最多活 15 分钟，不是几天/几月。

可控失效：refresh 在服务端有记录（你们存 hash），可删库强制失效（登出/风控）。

体验与安全平衡：用户不必频繁登录，同时风险比长期单 token 小很多。



JWT  头.载荷.签名



Session-Cookie 是什么

用户登录成功后，服务端创建一条会话记录（session），里面记“这个 session 属于哪个用户”等信息。

服务端把一个 sessionId 通过 Set-Cookie 发给浏览器（通常 HttpOnly）。

以后每次请求浏览器自动带上 Cookie。

服务端拿 sessionId 去会话存储（内存/Redis/DB）查到用户身份，判断是否已登录。

代价：

服务端必须保存会话状态：要有 Redis/DB（或内存）存 session，运维复杂度更高。

水平扩展要考虑共享会话：多实例下不能只放本机内存，否则请求打到别的实例会“掉登录”。

跨域/跨子域配置麻烦：Domain、SameSite、Secure、CORS + credentials 很容易踩坑。

CSRF 风险更敏感：浏览器会自动带 Cookie，需要额外 CSRF 防护策略。

非浏览器客户端不如 Bearer 直观：桌面/移动/第三方 API 场景通常更偏好 Authorization: Bearer。

会话存储故障会直接影响登录态：Redis 抖动、过期策略错误会导致大面积登录异常。



JWT 和 Session-Cookie 的核心区别

状态放哪儿



Session-Cookie：状态在服务端（查 session 存储）

JWT：状态主要在 token 里（服务端验签 + 过期）

服务端是否每次查库/查缓存



Session-Cookie：通常要查 session 存储

JWT：通常不必查会话表（但业务可能仍查用户/权限）

登出/强制失效



Session-Cookie：删除服务端 session，立即失效，简单直接

JWT：已发出的 token 在过期前天然可用；常配短过期 + refresh + 黑名单策略

客户端携带方式



Session-Cookie：浏览器自动带 Cookie（更“无感”）

JWT：常手动放 Authorization: Bearer ...

CSRF / XSS 关注点



Cookie 方案更要关注 CSRF（需 SameSite/CSRF Token）

JWT 若存在 JS 可读存储更要关注 XSS（token 被盗）

## 21.切换主题
```html
<!--
 * @Author: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @Date: 2025-06-21 20:11:38
 * @LastEditors: 不再沉默 11412181+xiaguxiaochushi@user.noreply.gitee.com
 * @LastEditTime: 2025-06-22 09:27:26
 * @FilePath: \日常\a.html
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>随便玩玩</title>
    <link rel="stylesheet" href="./a.css">
    <!-- <link rel="stylesheet" href="./b.css" /> -->
  </head>

  <body>
    <div class="container" style="height: 500px; width: 100vw">
      <button class="btn">切换主题</button>
      <div class="lazy">这就是中国</div>
    </div>
    <script>
      // 方法一、数据属性
      const toggleTheme = () => {
        const root = document.documentElement;
        if (root.dataset.theme === "dark") {
          root.dataset.theme = "light";
        } else {
          root.dataset.theme = "dark";
        }
      };
      // 方法二、手动切换css类
      const toggleTheme2 = () => {
        const root = document.documentElement;
        if (root.classList.contains("light-theme")) {
          root.classList.replace("light-theme", "dark-theme");
          setUserTheme("dark-theme");
        } else {
          root.classList.replace("dark-theme", "light-theme");
          setUserTheme("light-theme");
        }
      };
      //   设置默认的主题
      document.addEventListener("DOMContentLoaded", () => {
        const root = document.documentElement;

        // 设置默认主题（这里设置为亮色主题）
        const theme = getUserTheme();
        if (theme) {
          root.classList.add(theme);
        } else {
          root.classList.add("light-theme");
        }
      });

      //   使用localStorage记录用户的主题偏好
      const setUserTheme = (theme) => {
        localStorage.setItem("theme", theme);
      };
      const getUserTheme = () => {
        return localStorage.getItem("theme");
      };
      const btn = document.querySelector(".btn");
      btn.addEventListener("click", () => {
        console.log(1111111);

        toggleTheme();
      });
    </script>
  </body>
</html>
```

```plain
/* 方法一、数据属性 */
/* :root 表示根元素 */
:root {
    /* 明亮主题色 */
    --primary-color: #5b88bd; 
    /* 明亮主题文本颜色 */
    --text-color:#000;
}
/* 数据属性选择器 */
[data-theme="dark"]{
    /* 暗黑主题色 */
    --primary-color: #1e2a34; 
    /* 暗黑主题文本颜色 */
    --text-color:#ccc;
}

body {
    background-color:var(--primary-color);
    color:var(--text-color)
}
```

```plain
/* 在 b.css 中添加 */
body {
    background-color: var(--primary-color);
    color: var(--text-color);
    transition: all 0.3s ease; /* 添加过渡效果 */
}

.light-theme {
    /* 明亮主题色 */
    --primary-color: #5b88bd; 
    /* 明亮主题文本颜色 */
    --text-color:#000;
}

.dark-theme {
    /* 暗黑主题色 */
    --primary-color: #1e2a34; 
    /* 暗黑主题文本颜色 */
    --text-color:#ccc;
}
```

自定义样式--primary-color、--text-color使用var（--primary-color）可以挪用到其他地方作为样式

# 七、node
[https://juejin.cn/post/7267858684666839096?searchId=2026051316201875960C91276833A79C43](https://juejin.cn/post/7267858684666839096?searchId=2026051316201875960C91276833A79C43)

## 1.概念、优点
概念：

node不是语言，而是基于chrome的v8引擎的运行环境，使得js可以脱离浏览器运行。

优点：

（1）事件驱动

这些「结果好了」的时刻，就当成**事件**；你的代码主要是在**响应这些事件**，而不是一步一步死等。

可以记成：**不等慢活，等通知再接着做。**

（2）非阻塞i/o

**非阻塞 I/O**：去读文件、连数据库、收网络数据时，Node 不会「卡在那里干等结果」。它把请求交给系统，**先继续干别的事**；等结果好了，再通过**回调 / Promise** 继续处理。

优点 ：Node **更擅长高并发的「等网络/等磁盘」型应用**；**纯算力型**要另想办法。

（3）单线程但是支持高并发

适合场景：

（1）web应用（2）数据密集应用（3）api服务（4）微服务架构（5）命令行工具

## 2.事件循环
1. **什么是事件循环？它是如何工作的？**
    - 解析：事件循环是 Node.js 处理异步操作的核心机制，它不断地从事件队列中取出事件并执行相应的回调函数。
2. **process.nextTick() 和 setImmediate() 的区别是什么？**
    - 解析：process.nextTick() 的回调函数会在当前事件循环阶段立即执行，而 setImmediate() 的回调函数会等到下一次事件循环阶段执行。
+ 和浏览器的事件循环类似

## 3.监听错误
同步用 `try/catch`；`async/await` 同样用 `try/catch`；裸 Promise 用 `.catch()`；回调看第一个 `err`；流和 Emitter 要监听 `'error'`；最后用进程级监听兜底并配合日志与退出策略。
