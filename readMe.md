>目录
>>[1. 简介](#jj)  
>>[2. 背景](#bg)   
>>[3. 文字颜色](#color)  
>>[4.文字排列](#wzpl)  
>>[5.文字装饰](#wzzs)  
>>[6.文本转换](#wzpl)  
>>[7.文本缩进](#wbsj)  
>>[8.文本方向](#wbfx)  
>>[9.文字间隔](#wzjg)  
>>[10.行高](#hg)  
>>[11.文字阴影](#wzyy)  
>>[12.文字垂直居中](#wzczjz)  
>>[13.文字空白的处理](#wzkbdcl)  
>>[14.空白的大小](#kbddx)  
>>[15.字体](#zt)  
>>[16.链接](#lj)  
>>[17.列表样式](#lbys)  
>>[18.边框](#bk)  
>>[19.css盒子模型](#hzmx)  
>>[20.轮廓outline](#lk)  
>>[21.外边距](#wbj)  
>>[22.填充](#tc)  
>>[23.display显示](#xs)  
>>[24.Position定位](#dw)  
>>[25.overflow元素溢出](#yc)  
>>[26.浮动float](#fd)  
>>[27.对齐方式](#dqfs)  
>>[28.选择符](#xzf)  
>>[29.伪类](#wl)  
>>[30.透明度](#tmd)  
>>[31.媒体查询](#mtcx)  
>>[32.属性选择器](#sxxzq)  
>>[33.禁止重置大小](#jzczdx)  
>>[34.计数器](#jsq)  
---
<br id="jj">
简介
= 
- css又称层叠样式表，规定了如何显示html元素
- css可以给多个元素同时改变样式，外部样式表效率最高
- css注释使用  
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
background-position:10px 20px;/*距离左边10px,距离右边20px
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

<br id="wzpl">
文字排列
=
text-align=  
>{

>>left：左对齐，  
>>center：居中对齐，  
>>right：右对齐
>>justify：两端对齐（需要有两行文字）

>}  

<br id="wzzs">
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

<br id="wbzh">
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

<br id="wbsj">
文本缩进
=
text-indent:100px

<br id="wbfx">
文本方向
=
direciton:
-
>{

>>ltr:默认的，左至右，
>>rtl:文本方向右至左

>}
使用unicode-bidi:bidi-overide:可以重新排序文字

<br id="wzjg">
文字间隔
=
letter-spacing:量词;
-

<br id="hg">
行高
=
line-height:量词;
-

<br id="wzyy">
文字阴影
=
text-shadow:水平位置 垂直位置 (可选)模糊距离 (可选)颜色
-

<br id="wzczjz">
文字垂直居中
=
vertical-align:middle
-

<br id="wzkbdcl">
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

<br id="kbddx">
空白的大小
=
word-spacing:量词
-

<br id="zt">
字体
=
|属性|描述|
|-:|:-|
|font|字体属性简写(style variant weight size/line-height)|
|font-family|字体|
|font-size|字体大小|
|font-variant|字体显示|
|font-wegith|字体粗细|

<br id="lj">
链接
=
a:link {color:#000000;}      未访问链接  
a:visited {color:#00FF00;}  已访问链接   
a:hover {color:#FF00FF;}  鼠标移动到链接上   
a:active {color:#0000FF;}  鼠标点击时   

<br id="lbys">
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

<br id="bk">
边框
=
border
-
border-collapse:collapse;边框重叠

<br id="hzmx">
css盒子模型
=
content->padding->border->margin
-
<br id="lk">
轮廓outline
=
<br id="wbj">
外边距
=
margin:上 左 下 右  
margin:上 左右 下  
margin:上下 左右  
margin:全部

<br id="tc">
填充
=
padding
-

<br id="xs">
display显示
=
<br id="dw">
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

<br id="yc">
overflow元素溢出
=
|值|意义|
|-:|:-|
|visible|	默认值。内容不会被修剪，会呈现在元素框之外。
|hidden|	内容会被修剪，并且其余内容是不可见的。
|scroll|	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
|auto|	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
|inherit|	规定应该从父元素继承 overflow 属性的值。

<br id="fd">
浮动float
=
清除浮动clear 


<br id="dqfs">
对齐方式
=
text-align

<br id="xzf">
选择符
=

>div p 后代选择符 
>div+p 相邻选择符(兄弟选择符)  
>div~p 后继相邻选择符(后继兄弟选择符)选择div后面全部p元素  


<br id="wl">
伪类
=
>链接专属伪类  
>a:link {color:#FF0000;} 未访问的链接   
>a:visited {color:#00FF00;} 已访问的链接   
>a:hover {color:#FF00FF;} 鼠标划过链接   
>a:active {color:#0000FF;} 已选中的链接   
>其他伪类  
>:first-child 元素是第一个子元素就匹配   
>:last-child 选择所有元素的最后一个子元素   
>:checked 选择所有选中的表单元素   
>:disabled选择所有禁用的表单元素   
>:empty 选择所有没有子元素的p元素   
>:enabled 选择所有启用的表单元素   
>:first-of-type /*元素是其父元素的第一个元素   
>:in-range /*选择元素指定范围内的值   
>:invalid 选择所有无效的元素   
>last-of-type 选择每个元素是其母元素的最后一个元素   

>:not(selector) 选择selector以外的元素  
>:nth-child(n)  选择元素的父元素的第n个子元素  
>:nth-last-child(n) 选择元素倒数的第n个子元素  
>:nth-last-of-type(n) 选择元素倒数的第n个子元素   
>:nth-of-type(n) 选择元素第n个子元素   
>p:only-of-type  选择所有仅有一个子元素为p的元素  
>p:only-child 选择所有仅有一个子元素的元素  
>:optional 选择没有"required"的元素属性  
>:out-of-range 选择指定范围以外的值的元素属性  
>:read-only 选择只读属性的元素属性  
>:read-write 选择没有只读属性的元素属性  
>:required 选择有"required"属性指定的元素属性  
>:root 选择文档的根元素  
>:target 选择当前活动元素(点击URL包含锚的名字)  
>:valid 选择所有有效值的属性  
>:focus 选择元素输入后具有焦点  
>:first-letter 选择元素的第一个字母  
>:first-line 选择元素的第一行  
>:before 在元素之前插入内容  
>:after 在元素之后插入内容  
>:lang(language)为元素的lang属性选择一个开始值

<br id="tmd">
透明度
=
opacity:{0~1}

<br id="mtcx">
媒体查询
=

|媒体类型|描述|
|:-:|:-|
|all|用于所有的媒体设备。|
|aural|用于语音和音频合成器。|
|braille|用于盲人用点字法触觉回馈设备。|
|embossed|用于分页的盲人用点字法打印机。|
|handheld|用于小的手持的设备。|
|print|用于打印机。|
|projection|用于方案展示，比如幻灯片。|
|screen|用于电脑显示器。|
|tty|用于使用固定密度字母栅格的媒体，比如电传打字机和终端。|
|tv|用于电视机类型的设备。|

@media 媒体类型  
screen and (min-width: 400px)视图大小大于400px时使用  
screen and (min-width: 600px) and (max-width: 800px)视图大小大于大于600px小于800px时使用的样式

使用方式
-
```css
<link rel="stylesheet" type="text/css" href="styleA.css" media="screen and (min-width: 400px)">/*当屏幕的宽度大于等于400px的时候，应用styleA.css*/


@media screen and (max-width: 600px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
  .class {
    background: #ccc;
  }
}
```

<br id="sxxzq">
属性选择器
=
[属性]  
[属性="值"]  完全等于这个值
[属性~="包含的值"]属性值包含了这个值 需要空格分隔的完整词  
[属性|="值"]值使用|分隔且在第一个  

<br id="jzczdx">
禁止重置大小
=
resize: none;

<br id="jsq">
计数器
=
counter-reset - 创建或者重置计数器  
counter-increment - 递增变量  
content - 插入生成的内容  
counter() 或 counters() 函数 - 将计数器的值添加到元素  
配合伪元素生成内容  
