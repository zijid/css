const listData=
[
    {
        title:"css",
        list:[
            {
                title:"背景",
                list:[
                    {
                        title:"背景颜色",
                        content:"background-color:#fff"
                    },
                    {
                        title:"背景图片",
                        content:"background-image:url(./1.jpg)"
                    },
                    {
                        title:"背景图片平铺",
                        content:`background-repeat:{  
                                repeat:默认 xy轴都平铺,  
                                repeat-x:x轴方向平铺,  
                                repeat-y:y轴方向平铺,  
                                no-repeat:不平铺  
                            }`
                    },
                    {
                        title:"图片定位",
                        content:`background-position: x y
                        background-position:top right;
                        background-position:10px 20px;`
                    },
                    {
                        title:"背景固定",
                        content:`bakcground-attachment:fixed  
                        background-attachment:
                        {  
                            scroll:默认 背景随页面滚动,  
                            fixed:固定 背景不会随页面滚动,  
                            local:背景图片随元素内容滚动,  
                            initial:设置为默认值,  
                            inherit:继承父元素  
                        }`
                    },
                    {
                        title:"背景简写",
                        content:`bakcground-attachment:fixed  
                        background-attachment:
                        {  
                            background:color image repeat attachment position  
                            无需全部都写 根据实际使用写就好了  
                            例如：background:red url(images/1.jpeg) no-repeat fixed 100px 200px;  
                        }`
                    }
                ]
            },
            {
                title:"文字颜色",
                content:"color:rgb(1,2,3)"
            },
            {
                title:"文字排列",
                content:`
                text-align=
                { 
                    left：左对齐，  
                    center：居中对齐，  
                    right：右对齐
                    justify：两端对齐（需要有两行文字）
                }  
                `
            },
            {
                title:"文字装饰",
                content:`text-decoration:
                {
                    line-through:删除线，  
                    none：取消样式,  
                    underline:下划线，  
                    overline:上划线
                }
                `
            },
            {
                title:"文本转换",
                content:`text-transform
                {
                    Capitalize:每个单词的首字母大写,  
                    lowercase:小写,  
                    none:没有任何,  
                    uppercase:大写,  
                    inherit:继承,  
                    initial:最初的,  
                    unset:未设定  
                }
                `
            }
        ]
    }
]