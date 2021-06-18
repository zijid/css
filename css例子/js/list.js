function listMaker(el,data){
    let elm=document.querySelector(el);
    let listElement=document.createElement("div");
    listElement.id="list";
    
    function list(index,data){
        let html=`
            `
        for(let dataSon of data){
            if(dataSon.list){//如果是列表 返回一个列表
                html+=`
                <div class="list${index}" style="max-height:300px;">
                    <div class="title${index} nd " style="max-height:300px;">${data[0].title}</div>
                    ${list(index+1,dataSon.list)}
                `
            }else{
                html+=`
                <div class="list${index}" style="max-height:300px;">
                    <div class="title3" data-content="${dataSon.content.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}">${dataSon.title}</div>
                </div>`; 
            }
        }
        
        return html+"</div>"
    }
    listElement.innerHTML=list(1,data)
    elm.append(listElement)

    let title=elm.querySelectorAll(".title1,.title2"),
        title3=elm.querySelectorAll(".title3");
        //自定义事件
    function clickContent(detail){
        return new CustomEvent("clickContent",{detail,bubbles:true})
    }
    for(let title of title3){
        title.addEventListener("click",function(e){
            title.dispatchEvent(clickContent(title.dataset.content))
        })
    }
    document.addEventListener("clickContent",function(e){
        console.log(e.detail)
        document.querySelector("#right .content").innerHTML=e.detail
    })
    //自定义事件
    for(let t of title){
        t.addEventListener("click",show)
    }
}
function show(e){
    let t=e.target
    let tClass=t.getAttribute("class");
    console.log(/\sd[\s]*/.test(tClass))
    if(/\sd[\s]*/.test(tClass)){
        t.setAttribute("class",t.getAttribute("class").replace(/\sd\s/," nd "))
    }else{
        t.setAttribute("class",t.getAttribute("class").replace(/\snd\s/," d "))
    }
    for(let a=e.target.nextElementSibling;a;a=a.nextElementSibling){
        if(a.style.maxHeight=="300px"){
            a.style="max-height:0px"
        }else{
            a.style="max-height:300px"
        }
    }
}
function hidden(){
    let el=document.querySelector("#left");
    let right=document.querySelector("#right");

    let h=document.createElement("div");
    h.className="hidden_leyuan";
    h.addEventListener("click",function(e){
        console.log(el.style.width)
        if(el.style.width=="230px"||el.style.width==""){
            el.style="width:0px"
            h.style=`left:${el.style.width};background: url(images/icon_04.png)`
            right.style="width:calc( 100vw  )"
        }else{
            el.style="width:230px"
            h.style=`left:${el.style.width};background: url(images/icon_03.png)`
            right.style="width:calc( 100vw -230px )"
        }
    })
    el.append(h)
console.log(el)
}
listMaker("#left",listData)

listMaker("#left",listData)

listMaker("#left",listData)

listMaker("#left",listData)
hidden()