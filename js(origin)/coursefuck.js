console.log('coursefuck.js');
(function(){
var db=document.body;
function fuckcourse()
{
    var div=document.createElement('div');
    div.className="cf";
    div.style.left=db.clientWidth-210+"px";
    div.style.top=db.clientHeight-310+"px";
    var div2=document.createElement('div');
    div2.innerText="显示课程控制面板";
    div2.setAttribute('i',0);
    div.append(div2);
    div.draggable="true";
    div.addEventListener('dragenter',function(e){e.preventDefault();})
    div.addEventListener('dragover',function(e){e.preventDefault();})
    /**@typedef {{x:number;y:number;}} pos
     * @type {pos} div被拖动时鼠标相对元素偏移的位置*/
    var divp={x:0,y:0};
    div.addEventListener('dragstart',function(e)
    {
        divp.x=div.offsetLeft-e.x;
        divp.y=div.offsetTop-e.y;
    })
    div.addEventListener('dragend',function(e){
        div.style.left=e.x+divp.x+"px";
        div.style.top=e.y+divp.y+"px";
    })
    db.append(div);
    var div3=document.createElement('div');
    div3.style.display="none";
    div.append(div3);
    function showhidecontrols()
    {
        var i=div2.getAttribute('i')-1+1;
        if(i)
        {
            div2.innerText="显示课程控制面板";
            div3.style.display="none";
            div2.setAttribute('i',0);
        }
        else
        {
            div2.innerText="隐藏课程控制面板";
            div3.style.display=null;
            div2.setAttribute('i',1);
        }
    }
    div2.addEventListener('click',showhidecontrols);
    /**@type {number} 总章节数*/
    var chapterlength=document.getElementsByClassName('mb15 course_section fix').length;
    /**@type {number} 现在已加载数*/
    var nowload=1;
    /**@type {HTMLLinkElement} 加载按钮*/
    var clicka=null;
    /**@type {number} 加载按钮的滚动高度位置*/
    var clickal=null;
    function getclick()
    {
        var temp=document.getElementById('loadbutton');
        if(temp==null)
        {
            setTimeout(getclick,100);
            return;
        }
        clicka=temp;
        clickal=clicka.offsetTop;
        function load()
        {
            nowload++;
            function load2()
            {
                if(nowload!=chapterlength)
                {
                    var temp=document.getElementById('loadbutton');
                    if(temp!=null)
                    {
                        clicka=temp;
                        clicka.addEventListener('click',load);
                        clickal=clicka.offsetTop;
                    }
                    else setTimeout(load2,100);
                }
            }
            console.log(nowload);
            setTimeout(load2,100);
            clicka=null;
            clickal=null;
        }
        clicka.addEventListener('click',load);
    }
    getclick();
    console.log(chapterlength);
    var scrolld=document.createElement('div');
    div3.append(scrolld);
    var scrolll1=document.createElement('div');
    scrolll1.innerText="自动滚动方向：";
    scrolll1.className="id";
    scrolld.append(scrolll1);
    var scrolls=document.createElement('select');
    scrolls.className="id";
    var scrollo1=document.createElement('option');
    scrollo1.innerText="向下";
    scrollo1.value="down";
    scrolls.append(scrollo1);
    var scrollo2=document.createElement('option');
    scrollo2.innerText="向上";
    scrollo2.value="up";
    scrolls.append(scrollo2);
    scrolls.value=scrollo1.value;
    scrolld.append(scrolls);
    scrolld.append(document.createElement('br'));
    var scrolll2=document.createElement('div');
    scrolll2.className="id";
    scrolll2.innerText="自动滚动速度：";
    scrolld.append(scrolll2);
    var scrolli=document.createElement('input');
    scrolli.value=100;
    scrolli.style.width="50px";
    scrolli.className="id";
    scrolld.append(scrolli);
    var scrolll3=document.createElement('div');
    scrolll3.innerText="像素/s";
    scrolll3.className="id";
    scrolld.append(scrolll3);
    scrolld.append(document.createElement('br'));
    var scrolll4=document.createElement('div');
    scrolll4.className="id";
    scrolll4.innerText="每秒滚动次数：";
    scrolld.append(scrolll4);
    var scrolli2=document.createElement('input');
    scrolli2.value=1;
    scrolli2.style.width="50px";
    scrolli2.className="id";
    scrolld.append(scrolli2);
    scrolld.append(document.createElement('br'));
    var scrolli3=document.createElement('input');
    scrolli3.type="checkbox";
    scrolli3.className="id";
    if(settings!=null&&settings.coal)scrolli3.checked=true;else scrolli3.checked=false;
    scrolld.append(scrolli3);
    var scrolll5=document.createElement('div');
    scrolll5.innerText="滚动时自动加载内容";
    scrolll5.className="id";
    scrolld.append(scrolll5);
    scrolld.append(document.createElement('br'));
    var scrollb=document.createElement('button');
    scrollb.innerText="自动滚动";
    scrollb.setAttribute('i',0);
    scrolld.append(scrollb);
    var scrollo=document.createElement('div');
    scrolld.append(scrollo);
    /**@type {number} 计时器ID*/
    var jid=null;
    /**@param {number} lastY 上一次滚动的位置
     * @param {number} s 每次滚动的距离 正向下 负向上
     * @param {number} j 计时器间隔
     * @param {boolean} l 是否自动加载
    */
    function scroll(lastY,s,j,l)
    {
        window.scrollTo(window.scrollX,lastY+s)
        if(((!l)||(l&&chapterlength==nowload))&&lastY==window.scrollY)
        {
            jid=null;
            scrollb.setAttribute('i',0);
            scrollb.innerText="自动滚动";
            scrollo.innerText="已自动停止滚动";
        }
        else
        {
            (function(lastY){jid=setTimeout(function(){scroll(lastY,s,j,l)},j)})(window.scrollY);
            if(lastY>(clickal-db.clientHeight-200)&&l&&chapterlength!=nowload&&clicka!=null)clicka.click();
        }
    }
    function scrollba()
    {
        var i=scrollb.getAttribute('i')-1+1;
        if(i)
        {
            if(jid!=null)
            {
                clearTimeout(jid);
                jid=null;
            }
            scrollb.setAttribute('i',0);
            scrollb.innerText="自动滚动";
            scrollo.innerText="已停止滚动";
        }
        else
        {
            var speed=scrolli.value-1+1;
            if(isNaN(speed)){scrollo.innerText="自动滚动速度不是数字";return;}
            if(speed<1){scrollo.innerText="自动滚动速度应大于等于1";return;}
            var speed2=Math.round(scrolli2.value-1+1);
            if(isNaN(speed2)){scrollo.innerText="每秒钟滚动次数不是数字";return;}
            if(speed2<1||speed2>100){scrollo.innerText="每秒钟滚动次数应是1-100间的整数";return;}
            scrollb.setAttribute('i',1);
            scrollb.innerText="停止自动滚动";
            var s=speed/speed2;
            if(scrolls.value=="up")s*=-1;
            scroll(window.scrollY,s,1000/speed2,scrolli3.checked);
            scrollo.innerText="已开始自动滚动";
        }
    }
    scrollb.addEventListener('click',scrollba);
    if(settings!=null&&settings.showco)showhidecontrols();
}
/**@type {Array} chrome插件设置*/
var settings=null;
try
{
    if(chrome==undefined||chrome.storage==undefined)throw new Error('chrome.storage未定义');
    chrome.storage.sync.get(function(data)
    {
        settings=data;
        var r=scheck(settings,function(){
            chrome.storage.sync.get(function(data)
            {
                settings=data;
                console.log(data);
                fuckcourse();
            });
        });
        if(!r)fuckcourse();
    });
}
catch(e)
{
    console.log(e);
    settings=null;
    fuckcourse();
}
})();
