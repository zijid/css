>目录
>>[1. 简介](#jj)  
>>[2. 背景](#bg)   
>>[3. 文字颜色](#color) 

---
<br id="jj">
简介
= 
- css又称层叠样式表，规定了如何显示html元素
- css可以给多个元素同时改变样式，外部样式表效率最高
- css注释使用 /*  */
- css有三种类型：外部样式表，内部样式表，内联样式
- css样式优先级：内联样式>内部>外部>浏览器自带，外部样式放内部样式后，外部样式覆盖内部样式

<br id="bg">
背景
=
背景颜色：
-
background-color:#fff  

背景图片：
-
background-image:url(./1.jpg)  

背景图片平铺：
-

> background-repeat:{  

>>    repeat:默认 xy轴都平铺,  
>>    repeat-x:x轴方向平铺,  
>>    repeat-y:y轴方向平铺,  
>>    no-repeat:不平铺  

>}  

图片定位：
-
background-position: x y
```css
background-position:top right;
background-position:10px 20px;/*距离左边10px,距离右边20px*/
```

背景固定：
-
bakcground-attachment:fixed  
background-attachment:
>{  

>>scroll:默认 背景随页面滚动,  
>>fixed:固定 背景不会随页面滚动,  
>>local:背景图片随元素内容滚动,  
>>initial:设置为默认值,  
>>inherit:继承父元素  

>}

背景简写：
-
background:color image repeat attachment position  
无需全部都写 根据实际使用写就好了  
例如：background:red url(images/1.jpeg) no-repeat fixed 100px 200px;
|属性|说明|
|-:|:-|
|background|属性简写|
|background-image|背景图片设置|
|background-repeat|背景图片平铺|
|background-attachment|背景图片显示方式|
|background-position|背景图片显示位置|

<br id="color">
文字颜色
=
color:rgb(1,2,3)

文字排列
=
text-align=  
>{

>>left：左对齐，  
>>center：居中对齐，  
>>right：右对齐
>>justify：两端对齐（需要有两行文字）

>}  

文字装饰  
=
text-decoration:  
-
>{

>>line-through:删除线，  
>>none：取消样式,  
>>underline:下划线，  
>>overline:上划线

>}

文本转换
=
text-transform
-
>{

>>Capitalize:每个单词的首字母大写,  
>>lowercase:小写,  
>>none:没有任何,  
>>uppercase:大写,  
>>inherit:继承,  
>>initial:最初的,  
>>unset:未设定  

>}

文本缩进
=
text-indent:100px

文本方向
=
direciton:
-
>{

>>ltr:默认的，左至右，
>>rtl:文本方向右至左

>}
使用unicode-bidi:bidi-overide:可以重新排序文字

文字间隔
=
letter-spacing:量词;
-

行高
=
line-height:量词;
-

文字阴影
=
text-shadow:水平位置 垂直位置 (可选)模糊距离 (可选)颜色
-
文字垂直居中
=
vertical-align:middle
-

文字空白的处理
=
white-space:
-
>{

>>normal:默认忽略空白，  
>>pre:保留空白，  
>>nowrap:文本不会换行在一行继续直到 br 语句 
>>pre-wrap:保留空白序列，正常换行，  
>>pre-line:合并空白，保留换行，  
>>inherit:继承
>}

空白的大小
=
word-spacing:量词
-
字体
=
|属性|描述|
|-:|:-|
|font|字体属性简写(style variant weight size/line-height)|
|font-family|字体|
|font-size|字体大小|
|font-variant|字体显示|
|font-wegith|字体粗细|

链接
=
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */

列表样式
=
list-style:
-
|属性|	描述|
|-:|:-|
|list-style	|简写属性。用于把所有用于列表的属性设置于一个声明中|
|list-style-image|	将图像设置为列表项标志。|
|list-style-position|	设置列表中列表项标志的位置。|
|list-style-type|	设置列表项标志的类型。|

边框
=
border
-
border-collapse:collapse;边框重叠
css盒子模型
=
content->padding->border->margin
-
轮廓outline
=
外边距
=
margin:上 左 下 右  
margin:上 左右 下  
margin:上下 左右  
margin:全部

填充
=
padding
-

display显示
=
Position定位
=
static默认 不受top等属性影响  
relative相对定位  
fixed相对于浏览器的相对位置  
absolute绝对定位  
sticky当显示不到时会定位  
z-index定义重叠顺序高位的在前面  
clip: rect(上，左，下，右 );剪辑一个绝对定位元素  
cursor:pointer光标类型  

overflow元素溢出
-
|值|意义|
|-:|:-|
|visible|	默认值。内容不会被修剪，会呈现在元素框之外。
|hidden|	内容会被修剪，并且其余内容是不可见的。
|scroll|	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
|auto|	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
|inherit|	规定应该从父元素继承 overflow 属性的值。

浮动float
=
清除浮动clear 
git测试