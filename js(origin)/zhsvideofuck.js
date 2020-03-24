console.log("zhsvideofuck.js");
(function(){
/**@type {HTMLBodyElement}*/
var db=document.body;
/**@type {number} div位置left*/
var dx=db.clientWidth-210;
/**@type {number} div位置top*/
var dy=db.clientHeight-310;
/**@type {boolean} 视频暂停后自动继续播放视频*/
var ap=null;
/**@type {boolean} 控制面板是否展开*/
var d2o=null;
/**@type {HTMLDivElement}*/
var div=null;
/**@type {number} 播放速度*/
var pr=null;
/**@type {number} 锁定播放速度*/
var lpr=null;
/**@type {boolean} 去弹窗*/
var rt=null;
/**@type {number} 去弹窗计时器ID*/
var rtn=null;
/**@type {boolean} 进度100%时自动播放下一个*/
var an=null;
/**@type {number} 进度100%检测计时器*/
var ann=null;
function fuckvideo()
{
    /**@type {HTMLVideoElement} 视频元素*/
    var v=null;
    /**@type {HTMLDivElement} 下一个视频*/
    var nb=null;
    function getv()
    {
        var v2=document.getElementsByTagName('video');
        if(v2.length)
        {
            v=v2[0];
            console.log(v);
            setTimeout(getchange,1000);
            getnb();
        }
        else setTimeout(getv,1000);
    }
    function getnb()
    {
        var nb2=document.getElementById('nextBtn');
        if(nb2!=null)
        {
            nb=nb2;
            console.log(nb);
            fuck();
        }
        else setTimeout(getnb,1000);
    }
    /**检测视频元素是否变化*/
    function getchange()
    {
        var v2=document.getElementsByTagName('video');
        if(v2.length==0||v2[0]!=v)
        {
            div.remove();
            if(rtn!=null)
            {
                clearTimeout(rtn);
                rtn=null;
            }
            if(ann!=null)
            {
                clearTimeout(rtn);
                rtn=null;
            }
            fuckvideo();
        }
        else setTimeout(getchange,1000);
    }
    function fuck()
    {
        if(v.hasAttribute('fucked'))return;
        v.setAttribute('fucked',1);
        if(d2o==null)
        {
            d2o=false;
            if(settings!=null&&settings.zhsshowvc)d2o=true;
        }
        div=document.createElement('div');
        div.className="vf";
        div.style.left=dx+"px";
        div.style.top=dy+"px";
        db.append(div);
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
            dx=e.x+divp.x;
            div.style.left=dx+"px";
            dy=e.y+divp.y;
            div.style.top=dy+"px";
        })
        var div2=document.createElement('div');
        div2.innerText="显示视频控制面板";
        div.append(div2);
        var div3=document.createElement('div');
        div3.style.display="none";
        div.append(div3);
        function showhidecontrols()
        {
            if(d2o)
            {
                div2.innerText="显示视频控制面板";
                div3.style.display="none";
                d2o=false;
            }
            else
            {
                div2.innerText="隐藏视频控制面板";
                div3.style.display=null;
                d2o=true;
            }
        }
        div2.addEventListener('click',showhidecontrols);
        if(d2o)
        {
            d2o=!d2o;
            showhidecontrols();
        }
        if(ap==null)
        {
            ap=false;
            if(settings!=null&&settings.zhsvpap)ap=true;
        }
        var autoplayb=document.createElement('button');
        autoplayb.innerText="视频暂停后自动继续播放";
        div3.append(autoplayb);
        function autoplay()
        {
            if(ap)
            {
                autoplayb.innerText="视频暂停后自动继续播放";
                v.removeEventListener('pause',autoplay2);
                ap=false;
            }
            else
            {
                autoplayb.innerText="关闭视频暂停后自动继续播放";
                v.addEventListener('pause',autoplay2);
                ap=true;
            }
        }
        function autoplay2()
        {
            if(v.currentTime!=v.duration)v.play();
        }
        autoplayb.addEventListener('click',autoplay);
        if(ap)
        {
            ap=!ap;
            autoplay();
        }
        div3.append(document.createElement('div'));
        var speedd=document.createElement('div');
        div3.append(speedd);
        var speedl=document.createElement('div');
        speedl.innerText="播放速度调整：";
        speedl.className="id";
        speedd.append(speedl);
        if(pr==null)
        {
            pr=v.playbackRate;
        }
        if(lpr==null)
        {
            lpr=false;
        }
        var speedi=document.createElement('input');
        speedi.className="id";
        speedi.value=pr;
        speedi.style.width="40px";
        speedd.append(speedi);
        speedd.append(document.createElement('br'));
        var speedb=document.createElement('button');
        speedb.innerText="调整播放速度";
        speedd.append(speedb);
        var speedb2=document.createElement('button');
        speedb2.innerText="锁定播放速度";
        speedd.append(speedb2);
        var speedo=document.createElement('div');
        speedo.className="id";
        speedd.append(speedo);
        function changespeed()
        {
            try
            {
                var speed=speedi.value-1+1;
                v.playbackRate=speed;
                pr=speed;
                speedo.innerText="速度已调整为"+speed;
            }
            catch(e)
            {
                speedo.innerText="发生错误："+e.message;
            }
        }
        speedb.addEventListener('click',changespeed);
        if(pr!=v.playbackRate)changespeed();
        function getratechange()
        {
            pr=v.playbackRate;
            speedi.value=pr;
        }
        function lockratechange()
        {
            v.playbackRate=pr;
        }
        v.addEventListener('ratechange',getratechange);
        function lockrate()
        {
            if(lpr)
            {
                speedb2.innerText="锁定播放速度";
                v.removeEventListener('ratechange',lockratechange);
                v.addEventListener('ratechange',getratechange);
                lpr=false;
            }
            else
            {
                speedb2.innerText="取消锁定播放速度";
                v.removeEventListener('ratechange',getratechange);
                v.addEventListener('ratechange',lockratechange);
                lpr=true;
            }
        }
        speedb2.addEventListener('click',lockrate);
        if(lpr)
        {
            lpr=!lpr;
            lockrate();
        }
        var cleartcb=document.createElement('button');
        cleartcb.innerText="自动拦截问答弹窗";
        div3.append(cleartcb);
        if(rt==null)
        {
            rt=false;
            if(settings!=null&&settings.zhsctc)rt=true;
        }
        function removetc()
        {
            /**@param {HTMLCollection} bb*/
            function removeall(bb)
            {
                if(bb.length)
                {
                    for(var i=0;i<bb.length;i++)
                    {
                        bb[i].remove();
                    }
                }
            }
            removeall(document.getElementsByClassName('el-dialog__wrapper dialog-test'));
            removeall(document.getElementsByClassName('v-modal'));
            rtn=setTimeout(removetc,1000);
        }
        function removet()
        {
            if(rt)
            {
                cleartcb.innerText="自动拦截问答弹窗";
                if(rtn!=null)
                {
                    clearTimeout(rtn);
                    rtn=null;
                }
                rt=false;
            }
            else
            {
                cleartcb.innerText="关闭拦截问答弹窗";
                rtn=setTimeout(removetc,1000);
                rt=true;
            }
        }
        cleartcb.addEventListener('click',removet);
        if(rt)
        {
            rt=!rt;
            removet();
        }
        if(an==null)
        {
            an=false;
            if(settings!=null&&settings.zhsant)an=true;
        }
        var fl=document.getElementsByClassName('clearfix video current_play')[0];
        fl=fl.children[1];
        console.log(fl);
        /**进度是否已完成
         * @param {HTMLDivElement} fl*/
        function getjd(fl)
        {
            for(var i=0;i<fl.childElementCount;i++)
            {
                if(fl.children[i].className=="time fl"&&i>0&&fl.children[i-1].className=="fl time_icofinish")return true;
            }
            return false;
        }
        var anb=document.createElement('button');
        anb.innerText="完成度100%时跳转至下一个视频";
        div3.append(anb);
        function checkjd()
        {
            if(getjd(fl))
            {
                ann=null;
                nb.click();
            }
            else ann=setTimeout(checkjd,1000);
        }
        function anbf()
        {
            if(an)
            {
                anb.innerText="完成度100%时跳转至下一个视频";
                if(ann!=null)
                {
                    clearTimeout(ann);
                    ann=null;
                }
                an=false;
            }
            else
            {
                anb.innerText="关闭完成度100%时跳转至下一个视频";
                ann=setTimeout(checkjd,1000);
                an=true;
            }
        }
        anb.addEventListener('click',anbf);
        if(an)
        {
            an=!an;
            anbf();
        }
    }
    getv();
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
                fuckvideo();
            });
        });
        if(!r)fuckvideo();
    });
}
catch(e)
{
    console.log(e);
    settings=null;
    fuckvideo();
}
})();
