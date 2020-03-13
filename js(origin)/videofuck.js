console.log('videofuck.js');
(function(){
/**@type {HTMLCollectionOf<HTMLIFrameElement>} */
var vf=null;
function fuck()
{
    var a=document.getElementsByTagName('iframe');
    if(a.length!=0)
    {
        vf=a;
        console.log(vf);
        var first=0;
        /**@param {HTMLIFrameElement} vf*/
        function fuck2(vf)
        {
            if(vf.src=="")return;
            first++;
            function cz(vf)
            {
                var temp=document.getElementsByTagName('iframe');
                var f=false;
                for(var i=0;i<temp.length;i++)
                {
                    if(vf==temp[i])f=true;
                }
                if(!f)
                {
                    setTimeout(function(){fuck();},3000);
                }
                else
                {
                    setTimeout(function(){cz(vf);},1000);
                }
            }
            if(first==1)(function(vf){setTimeout(function(){cz(vf)},1000);})(vf);
            /**@type {Document}*/
            var vfd=null;
            function getfuckvfd()
            {
                var temp=vf.contentDocument;
                if(temp!=null)
                {
                    vfd=vf.contentDocument;
                    getfuckiframe(vfd);
                }
                else setTimeout(getfuckvfd,1000);
            }
            getfuckvfd();
            /**@type {HTMLCollectionOf<HTMLIFrameElement>} */
            var vff=null;
            /**@param {Document} vfd*/
            function getfuckiframe(vfd)
            {
                var vf2=vfd.getElementsByTagName('iframe');
                if(vf2.length!=0)
                {
                    vff=vf2;
                    console.log(vf2);
                    then();
                }
                else (function(vfd){setTimeout(function(){getfuckiframe(vfd)},1000)})(vfd);
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckvideo(vfi)
            {
                var vd=vfi.contentDocument;
                function getvd()
                {
                    var vdd=vfi.contentDocument;
                    if(vdd!=null)
                    {
                        vd=vdd;
                        console.log(vd);
                        getfuckvideo(vd);
                    }
                    else
                    {
                        setTimeout(getvd,1000);
                    }
                }
                getvd();
                /**@type {HTMLVideoElement}*/
                var v;
                /**@param {Document} vd*/
                function getfuckvideo(vd)
                {
                    var a=vd.getElementById('video_html5_api');
                    if(a!=null)
                    {
                        v=a;
                        console.log(v);
                        thendo();
                    }
                    else setTimeout(function(){getfuckvideo(vd);},1000);
                }
                /**对视频元素进行处理 */
                function thendo()
                {
                    if(v.hasAttribute('fucked'))return;
                    var p=v.parentElement.parentElement;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(v.parentElement==p.children[i])break;
                    }
                    i++;
                    function getdiv()
                    {
                        var d=vd.createElement('div');
                        var st=vd.createElement('style');
                        st.innerText=".id{display:inline-block;}";
                        d.append(st);
                        /**添加 | */
                        function addfg()
                        {
                            var div=vd.createElement('div');
                            div.innerText="|";
                            div.className="id";
                            return div;
                        }
                        var div=vd.createElement('div');
                        div.innerText='展开插件控制面板';
                        div.className="id";
                        div.setAttribute('i',0);
                        v.setAttribute('fucked',1);
                        /**@param {HTMLIFrameElement} vfi
                         * @param {HTMLDivElement} src
                         * @param {HTMLDivElement} div2
                         * @param {HTMLDivElement} div3
                        */
                        function openhideconsole(vfi,src,div2,div3)
                        {
                            var i=src.getAttribute('i')-1+1;
                            var i2=div3.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i==0)
                            {
                                src.innerText="隐藏插件控制面板";
                                div2.style.display='block';
                                if(i2==0)showhidedm(vfi,div3,1);
                                vfi.style.height="642px";
                                seta(1);
                            }
                            else
                            {
                                src.innerText='展开插件控制面板';
                                div2.style.display='none';
                                vfi.style.height="602px";
                                if(i2==0)showhidedm(vfi,div3,2);
                                seta(0);
                            }
                        }
                        d.append(div);
                        var div2=vd.createElement('div');
                        div2.style.display='none';
                        var bscontrolbutton=vd.createElement('button');
                        bscontrolbutton.innerText="显示浏览器控制条";
                        bscontrolbutton.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function showhidecontrol(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i==0)
                            {
                                src.innerText="隐藏浏览器控制条";
                                v.controls=true;
                                seta(1);
                            }
                            else
                            {
                                src.innerText="显示浏览器控制条";
                                v.controls=false;
                                seta(0);
                            }
                        }
                        bscontrolbutton.addEventListener('click',function(e){showhidecontrol(e.srcElement)});
                        div2.append(bscontrolbutton);
                        var xxtcontrolbutton=vd.createElement('button');
                        xxtcontrolbutton.innerText="隐藏学习通视频控制条";
                        xxtcontrolbutton.setAttribute('i',1);
                        /**@param {HTMLButtonElement} src*/
                        function showhidexxtcontrol(src)
                        {
                            var barc=vd.getElementsByClassName('vjs-control-bar');
                            if(barc.length>0)
                            {
                                var i=src.getAttribute('i')-1+1;
                                /**@type {HTMLElement}*/
                                var bar=barc[0];
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if(i==0)
                                {
                                    bar.style.display=null;
                                    src.innerText="隐藏学习通视频控制条";
                                    seta(1);
                                }
                                else
                                {
                                    bar.style.display="none";
                                    src.innerText="显示学习通视频控制条";
                                    seta(0);
                                }
                            }
                        }
                        xxtcontrolbutton.addEventListener('click',function(e){showhidexxtcontrol(e.srcElement)});
                        div2.append(xxtcontrolbutton);
                        var zmsettingsbutton=vd.createElement('button');
                        var zmsettingsmbc=vd.getElementsByClassName('vjs-modal-dialog vjs-hidden  vjs-text-track-settings');
                        if(zmsettingsmbc.length)
                        {
                            zmsettingsbutton.innerText='显示字幕控制面板';
                            zmsettingsbutton.setAttribute('i',0);
                            /**@type {HTMLDivElement}*/
                            var zmsettingsmb=zmsettingsmbc[0];
                            /**@param {HTMLDivElement} div
                             * @param {HTMLButtonElement} src
                            */
                            function showhidezmsettings(div,src)
                            {
                                var i=src.getAttribute('i')-1+1;
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if(i)
                                {
                                    div.style.display="none";
                                    src.innerText="显示字幕控制面板";
                                    seta(0);
                                }
                                else
                                {
                                    div.style.display="block";
                                    src.innerText="隐藏字幕控制面板";
                                    seta(1);
                                }
                            }
                            (function(div){zmsettingsbutton.addEventListener('click',function(e){showhidezmsettings(div,e.srcElement)})})(zmsettingsmb);
                            zmsettingsmb.className="'vjs-modal-dialog vjs-text-track-settings";
                            zmsettingsmb.style.display="none";
                            zmsettingsmb.style.position="relative";
                            zmsettingsmb.style.background="#000000AA";
                            div2.append(zmsettingsbutton);
                        }
                        div2.append(vd.createElement('br'));
                        var autoplaybutton=vd.createElement('button');
                        autoplaybutton.innerText="视频暂停后自动继续播放";
                        autoplaybutton.setAttribute('i',0);
                        /**@param {HTMLVideoElement} v
                         * @param {HTMLButtonElement} src
                        */
                        function autoplay(v,src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i==0)
                            {
                                src.innerText="关闭视频暂停后自动继续播放";
                                v.addEventListener('pause',autoplay2);
                                seta(1);
                            }
                            else
                            {
                                src.innerText="视频暂停后自动继续播放";
                                v.removeEventListener('pause',autoplay2);
                                seta(0);
                            }
                        }
                        function autoplay2()
                        {
                            if(v.duration!=v.currentTime)v.play();
                        }
                        autoplaybutton.addEventListener('click',function(e){autoplay(v,e.srcElement)});
                        div2.append(autoplaybutton);
                        var popquestionc1=vd.getElementsByClassName('x-container ans-timelineobjects x-container-default');
                        var popquestionc2=vd.getElementsByClassName('x-component ans-timelineobjectsbg x-component-default');
                        if(popquestionc1.length&&popquestionc2.length)
                        {
                            var popquestionbutton1=vd.createElement('button');
                            popquestionbutton1.innerText="隐藏问题窗口";
                            popquestionbutton1.setAttribute('i',0);
                            /**@type {HTMLDivElement}*/
                            var popquestion1=popquestionc1[0];
                            /**@type {HTMLDivElement}*/
                            var popquestion2=popquestionc2[0];
                            /**@param {HTMLDivElement} div1
                             * @param {HTMLDivElement} div2
                             * @param {HTMLButtonElement} src
                            */
                            function showhidepopquestion(div1,div2,src)
                            {
                                var i=src.getAttribute('i')-1+1;
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if(i)
                                {
                                    div1.style.display=null;
                                    div2.style.display=null;
                                    src.innerText="隐藏问题窗口";
                                    seta(0);
                                }
                                else
                                {
                                    div1.style.display="none";
                                    div2.style.display="none";
                                    src.innerText="显示问题窗口";
                                    seta(1);
                                }
                            }
                            (function(div1,div2){popquestionbutton1.addEventListener('click',function(e){showhidepopquestion(div1,div2,e.srcElement)})})(popquestion1,popquestion2);
                            div2.append(popquestionbutton1);
                            var popquestiondiv=vd.createElement('div');
                            var popquestionbutton2=vd.createElement('button');
                            popquestiondiv.className="id";
                            popquestionbutton2.className="id";
                            popquestionbutton2.innerText="勾选问题答案";
                            var popquestiondivo=vd.createElement('div');
                            popquestiondivo.className="id";
                            popquestiondiv.append(popquestionbutton2);
                            popquestiondiv.append(popquestiondivo);
                            /**@param {HTMLDivElement} divo*/
                            function showanswer(divo)
                            {
                                try
                                {
                                    var opts=vd.getElementsByClassName('ans-videoquiz-opt');
                                    if(opts.length>0)
                                    {
                                        var f=false;
                                        for(var i=0;i<opts.length;i++)
                                        {
                                            /**@type {HTMLInputElement}*/
                                            var opt=opts[i].children[0].children[0];
                                            if(opt.value=="true")
                                            {
                                                opt.checked=true;
                                                f=true;
                                            }
                                        }
                                        if(!f)
                                        {
                                            divo.innerText="未找到正确选项";
                                        }
                                        else
                                        {
                                            divo.innerText="已勾选正确选项";
                                        }
                                    }
                                    else divo.innerText="未找到选项";
                                }
                                catch(e)
                                {
                                    divo.innerText="发送错误："+e.message;
                                }
                            }
                            (function(divo){popquestionbutton2.addEventListener('click',function(){showanswer(divo)})})(popquestiondivo);
                            div2.append(popquestiondiv);
                        }
                        div2.append(vd.createElement('br'));
                        var pbspeeddiv=vd.createElement('div');
                        pbspeeddiv.className="id";
                        div2.append(pbspeeddiv);
                        var pbspeedlabel=vd.createElement('div');
                        pbspeedlabel.className="id";
                        pbspeedlabel.innerText="播放速度调整：";
                        pbspeeddiv.append(pbspeedlabel);
                        var pbspeedinput=vd.createElement('input');
                        pbspeedinput.className="id";
                        pbspeedinput.value=v.playbackRate;
                        pbspeedinput.style.width="40px";
                        pbspeeddiv.append(pbspeedinput);
                        var pbspeedbutton=vd.createElement('button');
                        pbspeedbutton.className="id";
                        pbspeedbutton.innerText="调整播放速度";
                        pbspeeddiv.append(pbspeedbutton);
                        var pbspeedout=vd.createElement('div');
                        pbspeedout.className="id";
                        pbspeeddiv.append(pbspeedout);
                        /**@param {HTMLVideoElement} v
                         * @param {HTMLInputElement} input
                         * @param {HTMLDivElement} out
                        */
                        function setplaybackrate(v,input,out)
                        {
                            try
                            {
                                var speed=input.value-1+1;
                                v.playbackRate=speed;
                                out.innerText="速度已调整为"+speed;
                            }
                            catch(e)
                            {
                                out.innerText="发生错误："+e.message;
                            }
                        }
                        pbspeedbutton.addEventListener('click',function(){setplaybackrate(v,pbspeedinput,pbspeedout);});
                        var div3=vd.createElement('div');
                        div3.innerText="隐藏弹幕行";
                        div3.className="id";
                        div3.setAttribute('i',0);
                        d.append(addfg());
                        d.append(div3);
                        /**@param {HTMLIFrameElement} vfi
                         * @param {HTMLDivElement} src
                        */
                        function showhidedm(vfi,src,b=0)
                        {
                            var i=src.getAttribute('i')-1+1;
                            var dm=vd.getElementsByClassName('rage_bd');
                            if(dm.length>0)
                            {
                                dm=dm[0];
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if((i==0&b==0)||b==1)
                                {
                                    dm.style.display="none";
                                    src.innerText="显示弹幕行";
                                    vfi.style.height="562px";
                                    if(!b)seta(1);
                                }
                                else
                                {
                                    dm.style.display=null;
                                    src.innerText="隐藏弹幕行";
                                    vfi.style.height="602px";
                                    if(!b)seta(0);
                                }
                            }
                        }
                        div3.addEventListener('click',function(e){showhidedm(vfi,e.srcElement)});
                        div.addEventListener('click',function(e){openhideconsole(vfi,e.srcElement,div2,div3)});
                        var nnode=null;
                        if(i!=p.childElementCount)nnode=p.children[i];
                        p.insertBefore(d,nnode);
                        p.insertBefore(div2,nnode);
                    }
                    getdiv();
                    vfi.style.height="602px";
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckaudio(vfi)
            {
                var vd=vfi.contentDocument;
                /**@type {HTMLAudioElement}*/
                var a=null;
                function getvd()
                {
                    var vd2=vfi.contentDocument;
                    if(vd2!=null)
                    {
                        vd=vd2;
                        console.log(vd);
                        getfuckaudio();
                    }
                    else
                    {
                        setTimeout(getvd,1000);
                    }
                }
                function getfuckaudio()
                {
                    var a2=vd.getElementById('audio_html5_api');
                    if(a2!=null)
                    {
                        a=a2;
                        console.log(a);
                        thendo();
                    }
                    else
                    {
                        setTimeout(getfuckaudio,1000);
                    }
                }
                getvd();
                /**对音频元素进行处理*/
                function thendo()
                {
                    if(a.hasAttribute('fucked'))return;
                    var p=a.parentElement.parentElement;
                    var h=vfi.clientHeight;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(a.parentElement==p.children[i])break;
                    }
                    i++;
                    a.setAttribute('fucked',1);
                    function getdiv()
                    {
                        var div=vd.createElement('div');
                        var st=vd.createElement('style');
                        st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                        div.className="id2";
                        var div2=vd.createElement('div');
                        div2.innerText="显示音频控制台";
                        div2.setAttribute('i',0);
                        /**@param {HTMLDivElement} src
                         * @param {HTMLDivElement} d2
                        */
                        function shwohideacontrol(src,d2)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="显示音频控制台";
                                d2.style.display="none";
                                vfi.style.setProperty('height',h+20+"px","important");
                                seta(0);
                            }
                            else
                            {
                                src.innerText="隐藏音频控制台";
                                d2.style.display=null;
                                vfi.style.setProperty('height',h+110+"px","important");
                                seta(1);
                            }
                        }
                        div.append(div2);
                        var d2=vd.createElement('div');
                        d2.className="id2";
                        d2.style.display="none";
                        (function(d2){div2.addEventListener('click',function(e){shwohideacontrol(e.srcElement,d2)})})(d2);
                        var bscontrolbutton=vd.createElement('button');
                        bscontrolbutton.innerText="显示浏览器控制条";
                        bscontrolbutton.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function showhideacontrols(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="显示浏览器控制条";
                                a.controls=false;
                                seta(0);
                            }
                            else
                            {
                                src.innerText="隐藏浏览器控制条";
                                a.controls=true;
                                seta(1);
                            }
                        }
                        bscontrolbutton.addEventListener('click',function(e){showhideacontrols(e.srcElement)});
                        d2.append(bscontrolbutton);
                        var xxtcontrolbutton=vd.createElement('button');
                        xxtcontrolbutton.innerText="隐藏学习通视频控制条";
                        xxtcontrolbutton.setAttribute('i',1);
                        /**@param {HTMLButtonElement} src*/
                        function shwohidexxtacontrol(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            var coc=vd.getElementsByClassName('vjs-control-bar');
                            if(coc.length)
                            {
                                /**@type {HTMLDivElement}*/
                                var co=coc[0];
                                if(i)
                                {
                                    co.style.setProperty('display','none','important');
                                    src.innerText="显示学习通视频控制条";
                                    seta(0);
                                }
                                else
                                {
                                    co.style.display=null;
                                    src.innerText="隐藏学习通视频控制条";
                                    seta(1);
                                }
                            }
                        }
                        xxtcontrolbutton.addEventListener('click',function(e){shwohidexxtacontrol(e.srcElement)});
                        d2.append(xxtcontrolbutton);
                        d2.append(vd.createElement('br'));
                        var autoplaybutton=vd.createElement('button');
                        autoplaybutton.innerText="音频暂停后继续播放";
                        autoplaybutton.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function autoplay(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="音频暂停后继续播放";
                                a.removeEventListener('pause',autoplay2);
                                seta(0);
                            }
                            else
                            {
                                src.innerText="关闭音频暂停后继续播放";
                                a.addEventListener('pause',autoplay2);
                                seta(1);
                            }
                        }
                        function autoplay2()
                        {
                            if(a.currentTime!=a.duration)a.play();
                        }
                        autoplaybutton.addEventListener('click',function(e){autoplay(e.srcElement)});
                        d2.append(autoplaybutton);
                        d2.append(vd.createElement('br'));
                        var pbrd=vd.createElement('div');
                        pbrd.className="id";
                        var pbrl=vd.createElement('div');
                        pbrl.innerText="播放速度调整：";
                        pbrl.className="id";
                        pbrd.append(pbrl);
                        var pbri=vd.createElement('input');
                        pbri.className="id";
                        pbri.value=a.playbackRate;
                        pbri.style.width="40px";
                        pbrd.append(pbri);
                        var pbrb=vd.createElement('button');
                        pbrb.className="id";
                        pbrb.innerText="调整播放速度";
                        /**@param {HTMLInputElement} inp
                         * @param {HTMLDivElement} out
                        */
                        function pbr(inp,out)
                        {
                            try
                            {
                                var speed=inp.value-1+1;
                                a.playbackRate=speed;
                                out.innerText="速度已调整为"+speed;
                            }
                            catch(e)
                            {
                                out.innerText="发生错误："+e.message;
                            }
                        }
                        pbrd.append(pbrb);
                        var pbro=vd.createElement('div');
                        pbro.className="id";
                        pbrd.append(pbro);
                        pbrb.addEventListener('click',function(){pbr(pbri,pbro)});
                        d2.append(pbrd);
                        return [st,div,d2];
                    }
                    var r=getdiv();
                    var nnode=null;
                    if(i!=p.childElementCount)nnode=p.children[i];
                    for(var j=0;j<r.length;j++)p.insertBefore(r[j],nnode);
                    vfi.style.setProperty("height",h+20+"px","important");
                }
            }
            function then()
            {for(var i=0;i<vff.length;i++)
            {
                czz(i,vff[i]);
                for(var j=0;j<vff[i].classList.length;j++)
                {
                    if(vff[i].classList[j]=='ans-insertvideo-online')
                    {
                        (function(vfi){fuckvideo(vfi);})(vff[i]);
                        break;
                    }
                    else if(vff[i].classList[j]=='ans-insertaudio')
                    {
                        (function(vfi){fuckaudio(vfi);})(vff[i]);
                        break;
                    }
                }
            }}
            function czz(i,vfi)
            {
                if(i)return;
                /**@param {HTMLIFrameElement} vf
                 * @param {HTMLIFrameElement} vfi
                */
                function cz2(vfi,vf)
                {
                    function check()
                    {
                        var temp=document.getElementsByTagName('iframe');
                        var f=false;
                        for(var i=0;i<temp.length;i++)
                        {
                            if(vf==temp[i])f=true;
                        }
                        return f;
                    }
                    if(check())
                    {
                        var vfd=vf.contentDocument;
                        var temp2=vfd.getElementsByTagName('iframe');
                        var f2=false;
                        for(var i=0;i<temp2.length;i++)
                        {
                            if(vfi==temp2[i])f2=true;
                        }
                        if(!f2)
                        {
                            setTimeout(function(){if(check())fuck();},3000);
                        }
                        else
                        {
                            setTimeout(function(){cz2(vfi,vf)},1000);
                        }
                    }
                }
                if(!i)(function(vf,vfi){setTimeout(function(){cz2(vfi,vf)},1000)})(vf,vfi);
            }
        }
        for(var i=0;i<vf.length;i++)
        {
            (function(vf){fuck2(vf)})(vf[i]);
        }
    }
    else
    {
        setTimeout(fuck,1000);
    }
}
fuck();
})();
