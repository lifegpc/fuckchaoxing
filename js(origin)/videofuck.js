console.log('videofuck.js');
(function(){
/**@type {HTMLCollectionOf<HTMLIFrameElement>} */
var vf=null;
/**@type {string} 空的document*/
var nulld="<html><head></head><body></body></html>";
/**判断document是否为空的
 * @param {Document} d
 * @returns {boolean} true 非空 false 空的*/
function isnulld(d)
{
    return d.documentElement.outerHTML!=nulld&&d.body!=null&&d.head!=null;
}
/**@constant {string} 超星学习通数据*/
var cxsturl=window.location.href.match(/(https:\/\/){0,}(http:\/\/){0,}[^\/]+/)[0]+"/ananas/status/";
/**@type {MutationObserver} ppt pdf img dom监视器*/
var imgmb;
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
                    if(imgmb!=null)
                    {
                        imgmb.disconnect();
                        imgmb=null;
                    }
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
            /**@type {string} 章节ID*/
            var chapterid=null;
            function getfuckvfd()
            {
                var temp=vf.contentDocument;
                if(temp!=null&&isnulld(temp))
                {
                    vfd=temp;
                    console.log(vfd);
                    chapterid=vf.src.match(/knowledgeid=([0-9]+)/)[1];
                    console.log(chapterid);
                    getfuckmArg(vfd);
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
            /**@param {Document} vfd*/
            function getfuckmArg(vfd)
            {
                var s=vfd.body.outerHTML.match(/mArg = {[^;]+;/);
                if(s!=null)
                {
                    console.log(s[0]);
                    eval(s[0]);
                    console.log(mArg);
                    getfuckct(vfd);
                }
                else setTimeout(function(){getfuckvfd(vfd)},1000);
            }
            /**@type {HTMLDivElement} 目录树*/
            var ct=null;
            /**@param {Document} vfd*/
            function getfuckct(vfd)
            {
                var temp=document.getElementById('coursetree');
                if(temp!=null)
                {
                    ct=temp;
                    console.log(ct);
                    getfuckiframe(vfd);
                }
                else setTimeout(function(){getfuckct(vfd)},1000);
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckvideo(vfi)
            {
                var vd=vfi.contentDocument;
                function getvd()
                {
                    var vdd=vfi.contentDocument;
                    if(vdd!=null&&isnulld(vdd))
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
                /**@type {HTMLObjectElement} flash*/
                var vf;
                /**@param {Document} vd*/
                function getfuckvideo(vd)
                {
                    var a=vd.getElementById('video_html5_api');
                    var aa=vd.getElementsByTagName('object');
                    if(a!=null)
                    {
                        v=a;
                        console.log(v);
                        thendo();
                    }
                    else if(aa.length!=0)
                    {
                        vf=aa[0];
                        console.log(vf);
                        fuckflash();
                    }
                    else setTimeout(function(){getfuckvideo(vd);},1000);
                }
                /**对视频元素进行处理 */
                function thendo()
                {
                    if(v.hasAttribute('fucked'))return;
                    /**@type {HTMLDivElement} 任务点div*/
                    var rwdp=vfi.parentElement;
                    var p2=v.parentElement.parentElement;
                    var p=p2.parentElement;
                    var h=vfi.clientHeight;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(p2==p.children[i])break;
                    }
                    i++;
                    function getdiv()
                    {
                        var d=vd.createElement('div');
                        d.className="id2";
                        var st=vd.createElement('style');
                        /**@type {number} 插件控制面板高度*/
                        var ch=100;
                        st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
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
                                if(i2==0)showhidedm(vfi,div3,src,1);
                                vfi.style.height=h+ch+"px";
                                seta(1);
                            }
                            else
                            {
                                src.innerText='展开插件控制面板';
                                div2.style.display='none';
                                vfi.style.height=h+20+"px";
                                if(i2==0)showhidedm(vfi,div3,src,2);
                                seta(0);
                            }
                        }
                        d.append(div);
                        var div2=vd.createElement('div');
                        div2.style.display='none';
                        div2.className="id2";
                        var ndiv=vd.createElement('div');
                        ndiv.style.display="none";
                        var odiv=vd.createElement('div');
                        /**@type {HTMLDivElement} 自建H5播放器外部div*/
                        var hdiv=vd.createElement('div');
                        /**@type {HTMLDivElement}*/
                        var nhdiv=vd.getElementById('reader');
                        hdiv.style.display="none";
                        /**@type {boolean} 是否有自建H5播放器*/
                        var oh5=false;
                        /**@type {Function} 返回自建播放器时调整高度*/
                        var rh;
                        /**@type {boolean} 不展开面板却替换时用*/
                        var ffirst=false;
                        div2.append(ndiv);
                        div2.append(odiv);
                        var sownh5videob=vd.createElement('button');
                        sownh5videob.innerText="使用自建H5播放器替代";
                        function changef()
                        {
                            var i=div.getAttribute('i')-1+1;
                            var i2=div3.getAttribute('i')-1+1;
                            if(i)vfi.style.height=h+ch+"px";
                            else if(i2)vfi.style.height=h+20+"px";
                            else vfi.style.height=h+75+"px";
                        }
                        function sownh5video(data,data2,at,rt)
                        {
                            odiv.style.display="none";
                            nhdiv.style.display="none";
                            if(!oh5)
                            {
                                rh=ownh5video(vfi,vd,ndiv,odiv,hdiv,nhdiv,data,data2,at,rt,h,function(va){h=va;changef();},ch,function(va){ch=va;changef();},false,rwdp);
                                oh5=true;
                                if(ffirst)
                                {
                                    openhideconsole(vfi,div,div2,div3);
                                    ffirst=false;
                                }
                            }
                            else
                            {
                                ndiv.style.display=null;
                                hdiv.style.display=null;
                                rh();
                            }
                        }
                        sownh5videob.style.display="none";
                        odiv.append(sownh5videob);
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
                        odiv.append(bscontrolbutton);
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
                        odiv.append(xxtcontrolbutton);
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
                            odiv.append(zmsettingsbutton);
                        }
                        odiv.append(vd.createElement('br'));
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
                        if(settings!=null&&settings.vpautoplay)autoplay(v,autoplaybutton);
                        autoplaybutton.addEventListener('click',function(e){autoplay(v,e.srcElement)});
                        odiv.append(autoplaybutton);
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
                            odiv.append(popquestionbutton1);
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
                            odiv.append(popquestiondiv);
                        }
                        odiv.append(vd.createElement('br'));
                        var pbspeeddiv=vd.createElement('div');
                        pbspeeddiv.className="id";
                        odiv.append(pbspeeddiv);
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
                        var pbspeedlockbutton=vd.createElement('button');
                        pbspeedlockbutton.className="id";
                        pbspeedlockbutton.innerText="锁定播放速度";
                        pbspeedlockbutton.setAttribute('i',0);
                        pbspeeddiv.append(pbspeedlockbutton);
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
                        function getratechange(){pbspeedinput.value=v.playbackRate;}
                        function lockratechange(){try{v.playbackRate=pbspeedinput.value-1+1;}catch(e){}}
                        v.addEventListener('ratechange',getratechange);
                        /**@param {HTMLButtonElement} src*/
                        function lockrate(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="锁定播放速度";
                                v.removeEventListener('ratechange',lockratechange);
                                v.addEventListener('ratechange',getratechange);
                                seta(0);
                            }
                            else
                            {
                                src.innerText="取消锁定播放速度";
                                v.removeEventListener('ratechange',getratechange);
                                v.addEventListener('ratechange',lockratechange);
                                seta(1);
                            }
                        }
                        pbspeedlockbutton.addEventListener('click',function(e){lockrate(e.srcElement)});
                        var dcompleteb=vd.createElement('button');
                        dcompleteb.innerText="直接完成视频";
                        var downloadvideob=vd.createElement('button');
                        downloadvideob.innerText="下载视频（原视频）";
                        var downloadvideobm=vd.createElement('button');
                        downloadvideobm.innerText="下载视频（极速）";
                        var downloadvideobs=vd.createElement('button');
                        downloadvideobs.innerText="下载视频（标清）";
                        var downloadvideobh=vd.createElement('button');
                        downloadvideobh.innerText="下载视频（高清）";
                        var downloadaudio=vd.createElement('button');
                        downloadaudio.innerText="下载音频（MP3）";
                        downloadaudio.style.display="none";//被拒，不知道这URL放API里作甚
                        var downloadsubb=vd.createElement('button');
                        downloadsubb.innerText="下载字幕";
                        downloadsubb.className="id";
                        var downloadsubd=vd.createElement('div');
                        downloadsubd.className="id";
                        var downloadsubs=vd.createElement('select');
                        downloadsubs.className="id";
                        downloadsubd.append(downloadsubs);
                        downloadsubd.append(downloadsubb);
                        /**@param {HTMLSelectElement} select*/
                        function downloadsub(select)
                        {
                            chrome.runtime.sendMessage({action:"getzm",url:select.value},function(data){console.log(data)});
                        }
                        /**@param {string} url*/
                        function downloadvideo(url)
                        {
                            window.open(url,"_blank");
                        }
                        var objectid=vfi.getAttribute('objectid');
                        var mid=vfi.getAttribute('mid');
                        console.log(objectid);
                        console.log(mid);
                        var at=mArg.attachments;
                        var ad=mArg.defaults;
                        function dcomplete(data,at,rt)
                        {
                            //isdrag 默认 0 播放 2 暂停 3 播完 4
                            $.getJSON(extformat("{0}/{1}?clazzId={2}&playingTime={3}&duration={4}&clipTime=0_{5}&objectId={6}&otherInfo={7}&jobid={8}&userid={9}&isdrag=4&view=pc&enc={10}&rt={11}&dtype=Video&_t={12}",ad.reportUrl,data.dtoken,ad.clazzId,data.duration+1,data.duration,data.duration,data.objectid,at.otherInfo,at.property.jobid,ad.userid,md5(extformat("[{0}][{1}][{2}][{3}][{4}][{5}][{6}][0_{7}]",ad.clazzId,ad.userid,at.property.jobid,data.objectid,(data.duration+1)*1000,"d_yHJ!$pdA~5",data.duration*1000,data.duration)),rt,getnow()),function(data,success)
                            {
                                console.log(data);
                                if(data.isPassed)
                                {
                                    alert("已完成！");
                                    rwdp.className="ans-attach-ct ans-job-finished";
                                    $.get("studentstudycourselist",{courseId:ad.courseid,chapterId:chapterid,clazzid:ad.clazzId},function(data2,success)
                                    {
                                        ct.innerHTML=data2;
                                        showallchapter();
                                    });
                                }
                            })
                        }
                        for(var i3=0;i3<at.length;i3++)
                        {
                            if(at[i3].objectId==objectid)break;
                        }
                        if(i3<at.length)at=at[i3]; else at=null;
                        console.log(at);
                        var dd=vfi.getAttribute('data');
                        var rt=null;
                        if(dd!=null)
                        {
                            dd=JSON.parse(dd);
                            console.log(dd);
                            if(dd.rt)rt=dd.rt;
                        }
                        rt=rt?rt:0.9;
                        console.log(rt);
                        $.getJSON(cxsturl+objectid,function(data,success){
                            console.log(data);
                            var have=false;
                            var have2=false;
                            if(at.isPassed==undefined)
                            {
                                have=true;
                                (function(a,b,c){dcompleteb.addEventListener('click',function(){dcomplete(a,b,c)})})(data,at,rt);
                                div2.append(dcompleteb);
                            }
                            if(data['download']!=undefined)
                            {
                                have=true;
                                (function(d){downloadvideob.addEventListener('click',function(){downloadvideo(d)})})(data.download);
                                div2.append(downloadvideob);
                            }
                            if(data['httpmd']!=undefined)
                            {
                                have=true;
                                have2=true;
                                (function(d){downloadvideobm.addEventListener('click',function(){downloadvideo(d)})})(data.httpmd);
                                div2.append(downloadvideobm);
                            }
                            if(data['http']!=undefined)
                            {
                                have=true;
                                have2=true;
                                (function(d){downloadvideobs.addEventListener('click',function(){downloadvideo(d)})})(data.http);
                                div2.append(downloadvideobs);
                            }
                            if(data['httphd']!=undefined)
                            {
                                have=true;
                                have2=true;
                                (function(d){downloadvideobh.addEventListener('click',function(){downloadvideo(d)})})(data.httphd);
                                div2.append(downloadvideobh);
                            }
                            if(data['mp3']!=undefined)
                            {
                                //have=true; 被拒暂时不显示
                                (function(d){downloadaudio.addEventListener('click',function(){downloadvideo(d)})})(data.mp3);
                                div2.append(downloadaudio);
                            }
                            $.getJSON(window.location.href.match(/(https:\/\/){0,}(http:\/\/){0,}[^\/]+/)[0]+"/richvideo/subtitle",{'mid':mid,'_dc':getnow()},function(data2,success)
                            {
                                if(data2.length)
                                {
                                    console.log(data2);
                                    if(have)
                                    {
                                        div2.append(vd.createElement('br'));
                                        ch=150;
                                    }
                                    else ch=130;
                                    div2.append(downloadsubd);
                                    /**@param data 字幕返回的object*/
                                    function createoption(data)
                                    {
                                        var option=vd.createElement('option');
                                        option.innerText=data.name;
                                        option.value=data.url;
                                        downloadsubs.append(option);
                                        if(data.selected)downloadsubs.value=data.url;
                                    }
                                    for(var i=0;i<data2.length;i++)
                                    {
                                        createoption(data2[i]);
                                    }
                                    downloadsubb.addEventListener('click',function(){downloadsub(downloadsubs)});
                                }
                                else if(have)
                                {
                                    ch=130;
                                }
                                if(ch!=100&&settings!=null&&settings.showvc&&div.getAttribute('i')=="1")
                                {
                                    vfi.style.height=h+ch+"px";
                                }
                                if(have2)
                                {
                                    (function(data,data2,at,rt){sownh5videob.addEventListener('click',function(){sownh5video(data,data2,at,rt);})})(data,data2,at,rt);
                                    sownh5videob.style.display=null;
                                    if(settings!=null&&settings.huo)
                                    {
                                        if(!settings.showvc)
                                        {
                                            openhideconsole(vfi,div,div2,div3);
                                            ffirst=true;
                                        }
                                        sownh5videob.click()
                                    }
                                }
                            })
                        });
                        var div3=vd.createElement('div');
                        div3.innerText="隐藏弹幕行";
                        div3.className="id";
                        div3.setAttribute('i',0);
                        d.append(addfg());
                        d.append(div3);
                        /**@param {HTMLIFrameElement} vfi
                         * @param {HTMLDivElement} src
                         * @param {HTMLDivElement} div
                         * @param {number} b
                        */
                        function showhidedm(vfi,src,div,b=0)
                        {
                            var i=src.getAttribute('i')-1+1;
                            var i2=div.getAttribute('i')-1+1;
                            if(!b&&i2)return;
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
                                    vfi.style.height=h+20+"px";
                                    if(!b)seta(1);
                                }
                                else
                                {
                                    dm.style.display=null;
                                    src.innerText="隐藏弹幕行";
                                    vfi.style.height=h+75+"px";
                                    if(!b)seta(0);
                                }
                            }
                        }
                        vfi.style.height=h+75+"px";
                        if(settings!=null&&settings.hidedm)showhidedm(vfi,div3,div);
                        if(settings!=null&&settings.showvc)openhideconsole(vfi,div,div2,div3);
                        div3.addEventListener('click',function(e){showhidedm(vfi,e.srcElement,div)});
                        div.addEventListener('click',function(e){openhideconsole(vfi,e.srcElement,div2,div3)});
                        var nnode=null;
                        if(i!=p.childElementCount)nnode=p.children[i];
                        p.insertBefore(hdiv,nnode);
                        p.insertBefore(st,nnode);
                        p.insertBefore(d,nnode);
                        p.insertBefore(div2,nnode);
                    }
                    getdiv();
                }
                /**处理flash视频*/
                function fuckflash()
                {
                    if(vf.hasAttribute('fucked'))return;
                    vf.setAttribute('fucked',1);
                    /**@type {HTMLDivElement} 任务点div*/
                    var rwdp=vfi.parentElement;
                    var p=vf.parentElement.parentElement;
                    var h=vfi.clientHeight;
                    var ch=-20;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(p.children[i]==vf.parentElement)break;
                    }
                    i++;
                    var st=vd.createElement('style');
                    st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                    var div=vd.createElement('div');
                    div.className="id2";
                    var divl1=vd.createElement('div');
                    divl1.innerText="显示视频插件控制面板";
                    divl1.className="id";
                    divl1.setAttribute('i',0);
                    div.append(divl1);
                    var divl2=vd.createElement('div');
                    divl2.innerText="|";
                    divl2.className="id";
                    div.append(divl2);
                    var divl3=vd.createElement('div');
                    divl3.innerText="隐藏弹幕行";
                    divl3.className="id";
                    divl3.setAttribute('i',1);
                    div.append(divl3);
                    function showhidevcotrols()
                    {
                        var i=divl1.getAttribute('i')-1+1;
                        var i2=divl3.getAttribute('i')-1+1;
                        if(i)
                        {
                            divl1.innerText="显示视频插件控制面板";
                            div2.style.display="none";
                            if(i2)
                            {
                                showhidedm(true);
                                vfi.style.height=h+10+"px";
                            }
                            else
                            {
                                vfi.style.height=h-40+"px";
                            }
                            divl1.setAttribute('i',0);
                        }
                        else
                        {
                            divl1.innerText="隐藏视频插件控制面板";
                            div2.style.display=null;
                            if(i2)showhidedm(true);
                            vfi.style.height=h+ch+"px";
                            divl1.setAttribute('i',1);
                        }
                    }
                    divl1.addEventListener('click',showhidevcotrols);
                    /**@type {HTMLDivElement}*/
                    var dmh=vd.getElementsByClassName('rage_bd')[0];
                    /**@param {boolean} f*/
                    function showhidedm(f=false)
                    {
                        var i=divl3.getAttribute('i')-1+1;
                        var i2=divl1.getAttribute('i')-1+1;
                        if(i2&&!f)return;
                        if((i&&!f)||(i&&!i2&&f))
                        {
                            divl3.innerText="显示弹幕行";
                            dmh.style.display="none";
                            if(!f)divl3.setAttribute('i',0);
                            vfi.style.height=h-40+"px";
                        }
                        else
                        {
                            divl3.innerText="隐藏弹幕行";
                            dmh.style.display=null;
                            if(!f)divl3.setAttribute('i',1);
                            vfi.style.height=h+10+"px";
                        }
                    }
                    divl3.addEventListener('click',function(){showhidedm()});
                    var div2=vd.createElement('div');
                    div2.className="id2";
                    div2.style.display="none";
                    var odiv=vd.createElement('div');
                    var ndiv=vd.createElement('div');
                    ndiv.style.display="none";
                    var hdiv=vd.createElement('div');
                    /**@type {HTMLDivElement}*/
                    var nhdiv=vd.getElementById('reader');
                    /**@type {boolean}*/
                    var oh5=false;
                    /**@type {Function}*/
                    var rh;
                    var ffirst=false;
                    hdiv.style.display="none";
                    div2.append(ndiv);
                    div2.append(odiv);
                    var sownh5videob=vd.createElement('button');
                    sownh5videob.innerText="使用自建H5播放器替代";
                    sownh5videob.style.display="none";
                    function changef()
                    {
                        var i=divl1.getAttribute('i')-1+1;
                        var i2=divl2.getAttribute('i')-1+1;
                        if(i)vfi.style.height=h+ch+"px";
                        else if(i2)vfi.style.height=h+10+"px";
                        else vfi.style.height=h-40+"px";
                    }
                    function sownh5video(data,data2,at,rt)
                    {
                        odiv.style.display="none";
                        nhdiv.style.display="none";
                        if(!oh5)
                        {
                            rh=ownh5video(vfi,vd,ndiv,odiv,hdiv,nhdiv,data,data2,at,rt,h,function(va){h=va;changef();},ch,function(va){ch=va;changef();},true,rwdp);
                            oh5=true;
                            if(ffirst)
                            {
                                showhidevcotrols();
                                ffirst=false;
                            }
                        }
                        else
                        {
                            ndiv.style.display=null;
                            hdiv.style.display=null;
                            rh();
                        }
                    }
                    odiv.append(sownh5videob);
                    var dcompleteb=vd.createElement('button');
                    dcompleteb.innerText="直接完成视频";
                    var downloadvb=vd.createElement('button');
                    downloadvb.innerText="下载视频（原视频）";
                    var downloadvbm=vd.createElement('button');
                    downloadvbm.innerText="下载视频（极速）";
                    var downloadvbs=vd.createElement('button');
                    downloadvbs.innerText="下载视频（标清）";
                    var downloadvbh=vd.createElement('button');
                    downloadvbh.innerText="下载视频（高清）";
                    function download(url)
                    {
                        window.open(url,'_blank');
                    }
                    var objectid=vfi.getAttribute('objectid');
                    var mid=vfi.getAttribute('mid');
                    console.log(objectid);
                    console.log(mid);
                    var at=mArg.attachments;
                    var ad=mArg.defaults;
                    var dd=vfi.getAttribute('data');
                    var rt=null;
                    if(dd!=null)
                    {
                        dd=JSON.parse(dd);
                        console.log(dd);
                        if(dd.rt)rt=dd.rt;
                    }
                    rt=rt?rt:0.9;
                    console.log(rt);
                    function dcomplete(data,at,rt)
                    {
                        //isdrag 默认 0 播放 2 暂停 3 播完 4
                        $.getJSON(extformat("{0}/{1}?clazzId={2}&playingTime={3}&duration={4}&clipTime=0_{5}&objectId={6}&otherInfo={7}&jobid={8}&userid={9}&isdrag=4&view=pc&enc={10}&rt={11}&dtype=Video&_t={12}",ad.reportUrl,data.dtoken,ad.clazzId,data.duration+1,data.duration,data.duration,data.objectid,at.otherInfo,at.property.jobid,ad.userid,md5(extformat("[{0}][{1}][{2}][{3}][{4}][{5}][{6}][0_{7}]",ad.clazzId,ad.userid,at.property.jobid,data.objectid,(data.duration+1)*1000,"d_yHJ!$pdA~5",data.duration*1000,data.duration)),rt,getnow()),function(data,success)
                        {
                            console.log(data);
                            if(data.isPassed)
                            {
                                alert("已完成！");
                                rwdp.className="ans-attach-ct ans-job-finished";
                                $.get("studentstudycourselist",{courseId:ad.courseid,chapterId:chapterid,clazzid:ad.clazzId},function(data2,success)
                                {
                                    ct.innerHTML=data2;
                                    showallchapter();
                                });
                            }
                        })
                    }
                    for(var i3=0;i3<at.length;i3++)
                    {
                        if(at[i3].objectId==objectid)break;
                    }
                    if(i3<at.length)at=at[i3]; else at=null;
                    console.log(at);
                    $.getJSON(cxsturl+objectid,function(data,success)
                    {
                        console.log(data);
                        var have2=false;
                        if(at.isPassed==undefined)
                        {
                            (function(a,b,c){dcompleteb.addEventListener('click',function(){dcomplete(a,b,c)})})(data,at,rt);
                            div2.append(dcompleteb);
                        }
                        if(data.download!=undefined)
                        {
                            (function(d){downloadvb.addEventListener('click',function(){download(d)})})(data.download);
                            div2.append(downloadvb);
                        }
                        if(data.httpmd!=undefined)
                        {
                            have2=true;
                            (function(d){downloadvbm.addEventListener('click',function(){download(d)})})(data.httpmd);
                            div2.append(downloadvbm);
                        }
                        if(data.http!=undefined)
                        {
                            have2=true;
                            (function(d){downloadvbs.addEventListener('click',function(){download(d)})})(data.http);
                            div2.append(downloadvbs);
                        }
                        if(data.httphd!=undefined)
                        {
                            have2=true;
                            (function(d){downloadvbh.addEventListener('click',function(){download(d)})})(data.httphd);
                            div2.append(downloadvbh);
                        }
                        $.getJSON(window.location.href.match(/(https:\/\/){0,}(http:\/\/){0,}[^\/]+/)[0]+"/richvideo/subtitle",{'mid':mid,'_dc':getnow()},function(data2,success)
                        {
                            if(have2)
                            {
                                (function(data,data2,at,rt){sownh5videob.addEventListener('click',function(){sownh5video(data,data2,at,rt);})})(data,data2,at,rt);
                                sownh5videob.style.display=null;
                                ch=0;
                                vfi.style.height=h+ch+"px";
                                if(settings!=null&&settings.fuo)
                                {
                                    if(!settings.showvc)
                                    {
                                        showhidevcotrols();
                                        ffirst=true;
                                    }
                                    sownh5videob.click();
                                }
                            }
                        });
                    });
                    var node=null;
                    if(i!=p.childElementCount)node=p.children[i];
                    p.insertBefore(hdiv,node);
                    p.insertBefore(st,node);
                    p.insertBefore(div,node);
                    p.insertBefore(div2,node);
                    vfi.style.height=h+10+"px";
                    if(settings!=null&&settings.hidedm)showhidedm();
                    if(settings!=null&&settings.showvc)showhidevcotrols();
                }
            }
            /**@param {HTMLIFrameElement} vfi
             * @param {Document} vd
             * @param {HTMLDivElement} ndiv 新的video控制div
             * @param {HTMLDivElement} odiv 旧的video控制div
             * @param {HTMLDivElement} hdiv 新的video div
             * @param {HTMLDivElement} nhdiv 旧的video div
             * @param data api返回信息
             * @param {Array} data2 字幕信息
             * @param at 视频信息
             * @param rt api中的rt
             * @param {number} h vfi原始高度
             * @param {Function} hf 改变h的函数
             * @param {number} ch 插件叠加高度
             * @param {Function} chf 改变ch的函数
             * @param {boolean} iff false 原H5播放器 true 原Flash播放器
             * @param {HTMLDivElement} rwdp 任务点div
            */
            function ownh5video(vfi,vd,ndiv,odiv,hdiv,nhdiv,data,data2,at,rt,h,hf,ch,chf,iff,rwdp)
            {
                /**@type {boolean} 是否正在播放*/
                var isplay=false;
                var oh=h;
                var och=ch;
                var nh=h;
                var first=true;
                /**@type {number}*/
                var nch;
                if(iff)nch=och+40;else nch=och-15;
                nhdiv.style.display=null;
                hdiv.style.height=nhdiv.clientHeight+"px";
                hdiv.style.width=nhdiv.clientWidth+"px";
                nhdiv.style.display="none";
                var v=vd.createElement('video');
                /**@type {Array<{n:string,s:string,o:HTMLOptionElement}>} 图质列表（从高到低）*/
                var sl=[];
                if(data.httphd!=undefined)sl.push({n:'高清',s:data.httphd,o:vd.createElement('option')});
                if(data.http!=undefined)sl.push({n:"标清",s:data.http,o:vd.createElement('option')});
                if(data.httpmd!=undefined)sl.push({n:"极速",s:data.httpmd,o:vd.createElement('option')});
                console.log(sl);
                v.preload="metadata";
                v.src=sl[0].s;
                v.controls=true;
                v.style.width="100%";
                v.style.height="auto";
                var ad=mArg.defaults;
                /**@param {0|2|3|4} drag 默认 0 播放 2 暂停 3 播完 4
                 * @param {number} time 当前时间（秒
                */
                function sendup(drag,time)
                {
                    $.getJSON(extformat("{0}/{1}?clazzId={2}&playingTime={3}&duration={4}&clipTime=0_{5}&objectId={6}&otherInfo={7}&jobid={8}&userid={9}&isdrag={10}&view=pc&enc={11}&rt={12}&dtype=Video&_t={13}",ad.reportUrl,data.dtoken,ad.clazzId,time,data.duration,data.duration,data.objectid,at.otherInfo,at.property.jobid,ad.userid,drag,md5(extformat("[{0}][{1}][{2}][{3}][{4}][{5}][{6}][0_{7}]",ad.clazzId,ad.userid,at.property.jobid,data.objectid,time*1000,"d_yHJ!$pdA~5",data.duration*1000,data.duration)),rt,getnow()),function(data,success){
                        if(data.isPassed)
                        {
                            lco.innerText="已完成！";
                            rwdp.className="ans-attach-ct ans-job-finished";
                            $.get("studentstudycourselist",{courseId:ad.courseid,chapterId:chapterid,clazzid:ad.clazzId},function(data2,success)
                            {
                                ct.innerHTML=data2;
                                showallchapter();
                            });
                        }
                    })
                }
                var rob=vd.createElement('button');
                rob.innerText="切回原始播放器";
                rob.addEventListener('click',function(){
                    if(isplay)v.pause();
                    hdiv.style.display="none";
                    ndiv.style.display="none";
                    nhdiv.style.display=null;
                    odiv.style.display=null;
                    hf(oh);
                    chf(och);
                })
                ndiv.append(rob);
                var tzd=vd.createElement('div');
                tzd.className="id";
                ndiv.append(tzd);
                var tzl=vd.createElement('div');
                tzl.innerText="选择画质：";
                tzl.className="id";
                tzd.append(tzl);
                var tzs=vd.createElement('select');
                for(var i=0;i<sl.length;i++)
                {
                    var tzo=sl[i].o;
                    tzo.innerText=sl[i].n;
                    tzo.value=i;
                    tzs.append(tzo);
                }
                tzs.value=0;
                tzd.append(tzs);
                function tzschange(){
                    var isp=isplay;
                    var nw=v.currentTime;
                    v.src=sl[tzs.value].s;
                    function jt()
                    {
                        v.currentTime=nw;
                        v.removeEventListener('loadedmetadata',jt);
                        if(isp)v.addEventListener('canplay',jt2);
                    }
                    function jt2()
                    {
                        v.play();
                        v.removeEventListener('canplay',jt2);
                    }
                    v.addEventListener('loadedmetadata',jt);
                }
                tzs.addEventListener('change',tzschange);
                var lco=vd.createElement('div');
                lco.className="id";
                ndiv.append(lco);
                var speedd=vd.createElement('div');
                ndiv.append(speedd);
                var speedl=vd.createElement('div');
                speedl.innerText="播放速度调整：";
                speedl.className="id";
                speedd.append(speedl);
                var speedi=vd.createElement('input');
                speedi.style.width="40px";
                speedi.value=v.playbackRate;
                speedi.className="id";
                speedd.append(speedi);
                var speedb=vd.createElement('button');
                speedb.innerText="调整播放速度";
                speedd.append(speedb);
                var speedo=vd.createElement('div');
                speedo.className="id";
                speedd.append(speedo);
                v.addEventListener('ratechange',function()
                {
                    speedi.value=v.playbackRate;
                });
                speedb.addEventListener('click',function(){
                    try
                    {
                        var speed=speedi.value-1+1;
                        v.playbackRate=speed;
                        speedo.innerText="速度已调整为"+speed;
                    }
                    catch(e)
                    {
                        speedo.innerText=e.message;
                    }
                })
                /**@type {Array<{n:string,s:string}>} */
                var zl=[];
                for(var i=0;i<data2.length;i++)
                {
                    var temp=data2[i];
                    var temp2=temp.url.match(/support\/(\w+).\w+/);
                    if(temp2)
                    {
                        zl.push({n:temp.name,s:"https://cs-ans.chaoxing.com/support/sub/"+temp2[1]+".vtt"});
                    }
                }
                console.log(zl);
                for(var i=0;i<zl.length;i++)
                {
                    var temp3=vd.createElement('track');
                    temp3.kind="subtitles";
                    temp3.label=zl[i].n;
                    if(i==0)temp3.default=true;
                    (function(t,u){
                        function re()
                        {
                            var xhr=new XMLHttpRequest();
                            xhr.open('GET',u,true);
                            xhr.responseType="blob";
                            xhr.onload=function()
                            {
                                if(this.status==200||this.status==304)
                                {
                                    var reader = new FileReader();
                                    reader.readAsText(this.response);
                                    reader.onload=function(e)
                                    {
                                        
                                        if(e.target.result.length>0)
                                        {
                                            var b=new Blob([e.target.result],{type:'text/vtt'});
                                            t.src=URL.createObjectURL(b);
                                            v.append(t);
                                        }
                                        else setTimeout(re,1000);
                                    }
                                }
                                else setTimeout(re,1000);
                            }
                            xhr.send();
                        }
                        re();
                    })(temp3,zl[i].s);
                }
                hdiv.append(v);
                hdiv.style.display=null;
                ndiv.style.display=null;
                function changepos()
                {
                    if(iff)nh=v.clientHeight+75;else nh=v.clientHeight;
                    hdiv.style.height=v.clientHeight+"px";
                    hf(nh);
                }
                var ct=0;
                var cpip=HTMLVideoElement.prototype.requestPictureInPicture!=undefined;
                /**@param {number} ln 上次提交的时间*/
                var ln=null;
                v.addEventListener('loadedmetadata',changepos);
                v.addEventListener('playing',function(){isplay=true;});
                v.addEventListener('pause',function(){
                    isplay=false;
                    ct=v.currentTime;
                    ln=null;
                    if(ct!=v.duration)sendup(3,Math.round(ct));
                    else sendup(4,data.duration+1);
                });
                v.addEventListener('keydown',function(e){
                    function dt(t)
                    {
                        var nt=ct-t;
                        if(nt<0)v.currentTime=0;
                        else v.currentTime=nt;
                    }
                    function ft(t)
                    {
                        var nt=ct+t;
                        if(nt>v.duration)v.currentTime=v.duration;
                        else v.currentTime=nt;
                    }
                    function crt(f)
                    {
                        var sp=Math.round((v.playbackRate+f)*1E8)/1E8;
                        try
                        {
                            v.playbackRate=sp;
                        }
                        catch(e){}
                    }
                    if(e.key.toLocaleLowerCase()=='f'&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)
                    {
                        if(vd.fullscreen)vd.exitFullscreen();
                        else if(vd.fullscreenEnabled)v.requestFullscreen();
                    }
                    else if(e.key.toLocaleLowerCase()=='p'&&cpip&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)
                    {
                        if(!vd.pictureInPictureElement)
                        {
                            v.requestPictureInPicture();
                        }
                        else
                        {
                            vd.exitPictureInPicture();
                        }
                    }
                    else if(e.key=="ArrowLeft"&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)dt(5);
                    else if(e.key=="ArrowRight"&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)ft(5);
                    else if(e.key=="ArrowLeft"&&!e.ctrlKey&&e.shiftKey&&!e.altKey)dt(15);
                    else if(e.key=="ArrowRight"&&!e.ctrlKey&&e.shiftKey&&!e.altKey)ft(15);
                    else if(e.key=="ArrowLeft"&&e.ctrlKey&&!e.shiftKey&&!e.altKey)dt(60);
                    else if(e.key=="ArrowRight"&&e.ctrlKey&&!e.shiftKey&&!e.altKey)ft(60);
                    else if(e.key=="ArrowUp"&&e.ctrlKey&&!e.shiftKey&&!e.altKey)crt(0.1);
                    else if(e.key=="ArrowDown"&&e.ctrlKey&&!e.shiftKey&&!e.altKey)crt(-0.1);
                    else if(e.key.toLocaleLowerCase()=="w"&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)
                    {
                        var bt=-1;
                        var temp=v.textTracks;
                        if(temp.length==0)return;
                        for(var i=0;i<temp.length;i++)
                        {
                            if(temp[i].mode=="showing")
                            {
                                bt=i;
                                break;
                            }
                        }
                        if(bt>-1)temp[bt].mode="hidden";
                        else temp[0].mode="showing";
                    }
                    else if(e.key.toLocaleLowerCase()=="s"&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)
                    {
                        var bt=-1;
                        var temp=v.textTracks;
                        if(temp.length==0)return;
                        for(var i=0;i<temp.length;i++)
                        {
                            if(temp[i].mode=="showing")
                            {
                                bt=i;
                                break;
                            }
                        }
                        temp[bt].mode="hidden";
                        bt++;
                        if(bt==temp.length)bt=0;
                        temp[bt].mode="showing";
                    }
                    else if(e.key.toLocaleLowerCase()=="v"&&!e.ctrlKey&&!e.shiftKey&&!e.altKey)
                    {
                        var s=tzs.value-1+1;
                        if(s<sl.length-1)tzs.value=s+1; else tzs.value=0;
                        tzschange();
                    }
                    else if(e.key.toLocaleLowerCase()=="r"&&!e.ctrlKey&&e.shiftKey&&!e.altKey)
                    {
                        try{v.playbackRate=1}catch(e){}
                    }
                });
                v.addEventListener('timeupdate',function()
                {
                    ct=v.currentTime;
                    if(ln==null)return;
                    if(getnow()-ln>=60000)
                    {
                        sendup(0,Math.round(ct));
                        ln=getnow();
                    }
                })
                v.addEventListener('play',function()
                {
                    if(first)
                    {
                        sendup(0,Math.round(ct));
                        first=false;
                    }
                    else
                    {
                        sendup(2,Math.round(ct));
                    }
                    ln=getnow();
                })
                chf(nch);
                function ret(){
                    hf(nh);
                    chf(nch);
                }
                return ret;
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
                    if(vd2!=null&&isnulld(vd2))
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
                    /**父级div 用于标识是否已完成*/
                    var rwdp=vfi.parentElement;
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
                                vfi.style.setProperty('height',h+130+"px","important");
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
                        if(settings!=null&&settings.apautoplay)autoplay(autoplaybutton);
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
                        function getratechange(){pbri.value=a.playbackRate;}
                        function lockratechange(){try{a.playbackRate=pbri.value-1+1;}catch(e){}}
                        a.addEventListener('ratechange',getratechange);
                        var pbrb2=vd.createElement('button');
                        pbrb2.className="id";
                        pbrb2.innerText="锁定播放速度";
                        pbrb2.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function lockrate(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="锁定播放速度";
                                a.removeEventListener('ratechange',lockratechange);
                                a.addEventListener('ratechange',getratechange);
                                seta(0);
                            }
                            else
                            {
                                src.innerText="取消锁定播放速度";
                                a.removeEventListener('ratechange',getratechange);
                                a.addEventListener('ratechange',lockratechange);
                                seta(1);
                            }
                        }
                        pbrb2.addEventListener('click',function(e){lockrate(e.srcElement)});
                        pbrd.append(pbrb2);
                        var pbro=vd.createElement('div');
                        pbro.className="id";
                        pbrd.append(pbro);
                        pbrb.addEventListener('click',function(){pbr(pbri,pbro)});
                        d2.append(pbrd);
                        d2.append(vd.createElement('br'));
                        /**@param {string} url*/
                        function downloadaudio(url)
                        {
                            window.open(url,'_blank');
                        }
                        var dcompleteb=vd.createElement('button');
                        dcompleteb.innerText="直接完成音频";
                        var downloadaudiob=vd.createElement('button');
                        downloadaudiob.innerText="下载音频（原音频）";
                        var downloadaudiob2=vd.createElement('button');
                        downloadaudiob2.innerText="下载音频（在线）";
                        var objectid=vfi.getAttribute('objectid');
                        console.log(objectid);
                        var at=mArg.attachments;
                        var ad=mArg.defaults;
                        function dcomplete(data,at)
                        {
                            //isdrag 默认 0 播放 2 暂停 3 播完 4
                            $.getJSON(extformat("{0}/{1}?clazzId={2}&playingTime={3}&duration={4}&clipTime=0_{5}&objectId={6}&otherInfo={7}&jobid={8}&userid={9}&isdrag=4&view=pc&enc={10}&rt=&dtype=Audio&_t={11}",ad.reportUrl,data.dtoken,ad.clazzId,data.duration+1,data.duration,data.duration,data.objectid,at.otherInfo,at.property.jobid,ad.userid,md5(extformat("[{0}][{1}][{2}][{3}][{4}][{5}][{6}][0_{7}]",ad.clazzId,ad.userid,at.property.jobid,data.objectid,(data.duration+1)*1000,"d_yHJ!$pdA~5",data.duration*1000,data.duration)),getnow()),function(data,success)
                            {
                                console.log(data);
                                if(data.isPassed)
                                {
                                    rwdp.className="ans-attach-ct ans-job-finished";
                                    alert("已完成！");
                                }
                            })
                        }
                        for(var i3=0;i3<at.length;i3++)
                        {
                            if(at[i3].property.objectid==objectid)break;
                        }
                        if(i3<at.length)at=at[i3]; else at=null;
                        console.log(at);
                        $.getJSON(cxsturl+objectid,function(data,success)
                        {
                            console.log(data);
                            if(true)
                            {
                                (function(a,b){dcompleteb.addEventListener('click',function(){dcomplete(a,b)})})(data,at);
                                d2.append(dcompleteb);
                            }
                            if(data['download']!=undefined)
                            {
                                (function(d){downloadaudiob.addEventListener('click',function(){downloadaudio(d)})})(data.download);
                                d2.append(downloadaudiob);
                            }
                            if(data['http']!=undefined)
                            {
                                (function(d){downloadaudiob2.addEventListener('click',function(){downloadaudio(d)})})(data.http);
                                d2.append(downloadaudiob2);
                            }
                        });
                        vfi.style.setProperty("height",h+20+"px","important");
                        if(settings!=null&&settings.showac)shwohideacontrol(div2,d2);
                        return [st,div,d2];
                    }
                    var r=getdiv();
                    var nnode=null;
                    if(i!=p.childElementCount)nnode=p.children[i];
                    for(var j=0;j<r.length;j++)p.insertBefore(r[j],nnode);
                }
            }
            /**取得内部的嵌套层
             * @param {HTMLIFrameElement} vfi
            */
            function fuckqbook(vfi)
            {
                var vd=vfi.contentDocument;
                /**书籍信息*/
                var bookinfo={};
                /**书籍信息 json*/
                var bookdata;
                /**框架内书籍信息*/
                var bookinfo2=null;
                function getvd()
                {
                    var d2=vfi.contentDocument;
                    if(d2!=null&&isnulld(d2))
                    {
                        vd=d2;
                        console.log(vd);
                        getbookinfo();
                        getfuckbookiframe();
                    }
                    else setTimeout(getvd,1000);
                }
                setTimeout(getvd,1000);
                /**获取书的信息*/
                function getbookinfo()
                {
                    bookdata=$.parseJSON(vfi.getAttribute('data'));
                    console.log(bookdata);
                    bookinfo.bn=bookdata.bookname;
                    bookinfo.a=bookdata.author;
                    bookinfo.p=bookdata.publisher;
                    bookinfo.pd=bookdata.publishdate;
                    console.log(bookinfo);
                }
                function getfuckbookiframe()
                {
                    var fc=vd.getElementsByTagName('iframe');
                    if(fc.length)
                    {
                        console.log(fc);
                        for(var i=0;i<fc.length;i++)
                        {
                            if(fc[i].name=='bookifame')
                            (function(vfii){fuckbook(vfii)})(fc[i]);
                        }
                    }
                    else setTimeout(getfuckbookiframe,1000);
                }
                /**@param {HTMLIFrameElement} vfii*/
                function fuckbook(vfii)
                {
                    if(vfii.hasAttribute('fucked'))return;
                    var h=vfi.clientHeight;
                    console.log(vfii);
                    vfii.setAttribute('fucked',1);
                    /**比较数据信息是否相等*/
                    function comparebookinfo(bi1,bi2)
                    {
                        return bi1.a==bi2.a&&bi1.bn==bi2.bn;
                    }
                    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
                        if(message.action=="bookfuckc2"&&comparebookinfo(bookinfo,message.bi))
                        {
                            sendResponse(bookinfo);
                            bookinfo2=message.bi;
                            adddiv();
                        }
                    });
                    console.log('ok');
                    function adddiv()
                    {
                        var p=vfii.parentElement;
                        for(var i=0;i<p.childElementCount;i++)
                        {
                            if(vfii==p.children[i])break;
                        }
                        i++;
                        var node;
                        if(i==p.childElementCount)node=null; else node=p.children[i];
                        var st=vd.createElement('style');
                        st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                        var div=vd.createElement('div');
                        div.innerText="显示书籍插件控制面板";
                        div.className="id2";
                        div.setAttribute('i',0);
                        var div2=vd.createElement('div');
                        div2.className="id2";
                        div2.style.display="none";
                        var bookinfod=vd.createElement('div');
                        var bookinfol1=vd.createElement('div');
                        bookinfol1.innerText="书籍信息：";
                        bookinfod.append(bookinfol1);
                        var bookinfol2=vd.createElement('div');
                        bookinfol2.innerText="书名：";
                        bookinfol2.className="id";
                        bookinfod.append(bookinfol2);
                        var bookinfobn=vd.createElement('div');
                        bookinfobn.innerText=bookinfo.bn;
                        bookinfobn.className="id";
                        bookinfod.append(bookinfobn);
                        bookinfod.append(vd.createElement('br'));
                        var bookinfol3=vd.createElement('div');
                        bookinfol3.innerText="作者名：";
                        bookinfol3.className="id";
                        bookinfod.append(bookinfol3);
                        var bookinfoa=vd.createElement('div');
                        bookinfoa.innerText=bookinfo.a;
                        bookinfoa.className="id";
                        bookinfod.append(bookinfoa);
                        bookinfod.append(vd.createElement('br'));
                        var bookinfol4=vd.createElement('div');
                        bookinfol4.innerText="出版社：";
                        bookinfol4.className="id";
                        bookinfod.append(bookinfol4);
                        var bookinfop=vd.createElement('div');
                        if(bookinfo.p==bookinfo2.p)
                        {
                            bookinfop.innerText=bookinfo.p;
                        }
                        else
                        {
                            bookinfop.innerText=bookinfo.p+"("+bookinfo2.p+")";
                        }
                        bookinfop.className="id";
                        bookinfod.append(bookinfop);
                        bookinfod.append(vd.createElement('br'));
                        var bookinfol5=vd.createElement('div');
                        bookinfol5.innerText="出版时间：";
                        bookinfol5.className="id";
                        bookinfod.append(bookinfol5);
                        var bookinfopd=vd.createElement('div');
                        if(bookinfo.pd==bookinfo2.pd)
                        {
                            bookinfopd.innerText=bookinfo.pd;
                        }
                        else
                        {
                            bookinfopd.innerText=bookinfo.pd+"("+bookinfo2.pd+")";
                        }
                        bookinfopd.className="id";
                        bookinfod.append(bookinfopd);
                        div2.append(bookinfod);
                        var bookdownd=vd.createElement('div');
                        var bookdownl=vd.createElement('div');
                        bookdownl.innerText="下载书籍：";
                        bookdownl.className="id";
                        bookdownd.append(bookdownl);
                        var bookdowns=vd.createElement('select');
                        var bookdowno1=vd.createElement('option');
                        bookdowno1.value="zip";
                        bookdowno1.innerText="zip";
                        bookdowns.append(bookdowno1);
                        bookdowns.value=bookdowno1.value;
                        bookdownd.append(bookdowns);
                        bookdowns.className="id";
                        var bookdownb=vd.createElement('button');
                        bookdownb.className="id";
                        bookdownb.innerText="下载";
                        /**@type {boolean} 是否正在下载书籍*/
                        var bookdownz=false;
                        /**发起下书或停止下书的请求
                         * @param {HTMLButtonElement} src
                         * @param {HTMLSelectElement} s
                        */
                        function downloadbook(src,s)
                        {
                            if(bookdownz)
                            {
                                src.disabled=true;
                                //发出停止请求
                                chrome.runtime.sendMessage({action:"downloadbooks",bi:bookinfo});
                            }
                            else
                            {
                                src.disabled=true;
                                //发出下书请求
                                chrome.runtime.sendMessage({action:'downloadbook',bi:bookinfo,e:s.value});
                            }
                        }
                        chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
                            if(message.action=="downloadbook3"&&comparebookinfo(bookinfo,message.r))
                            {
                                bookdownz=true;
                                sendResponse(1);
                                bookdownb.innerText="停止下载";
                                bookdownb.disabled=false;
                                bookdowno.innerText="已经开始下载";
                            }
                            if(message.action=="downloadbooks3"&&comparebookinfo(bookinfo,message.r))
                            {
                                bookdownz=false;
                                sendResponse(1);
                                bookdownb.innerText="下载";
                                bookdownb.disabled=false;
                                bookdowno.innerText="停止下载成功";
                            }
                            if(message.action=="downloadbookc2"&&comparebookinfo(bookinfo,message.bi))
                            {
                                bookdownz=false;
                                sendResponse(1);
                                bookdownb.innerText="下载";
                                bookdownb.disabled=false;
                                bookdowno.innerText="下载成功";
                            }
                            if(message.action=="bookautoscroll3"&&comparebookinfo(bookinfo,message.r))
                            {
                                autoscrollz=true;
                                sendResponse(1);
                                bookscrollb.innerText="停止自动滚动";
                                bookscrollb.disabled=false;
                                bookscrollo.innerText="已经开始自动滚动";
                            }
                            if(message.action=="bookautoscrolls3"&&comparebookinfo(bookinfo,message.r))
                            {
                                autoscrollz=false;
                                sendResponse(1);
                                bookscrollb.innerText="自动滚动";
                                bookscrollb.disabled=false;
                                bookscrollo.innerText="自动滚动已停止";
                            }
                            if(message.action=="bookautoscrollc2"&&comparebookinfo(bookinfo,message.bi))
                            {
                                autoscrollz=false;
                                sendResponse(1);
                                bookscrollb.innerText="自动滚动";
                                bookscrollb.disabled=false;
                                bookscrollo.innerText="自动滚动已自动停止";
                            }
                            if(message.action=="downloadbooki2"&&comparebookinfo(bookinfo,message.bi))//下载信息
                            {
                                bookdowno.innerText=message.n+"/"+message.l;
                                sendResponse(1);
                            }
                        });
                        (function(s){bookdownb.addEventListener('click',function(e){downloadbook(e.srcElement,s)});})(bookdowns);
                        bookdownd.append(bookdownb);
                        var bookdowno=vd.createElement('div');
                        bookdowno.className="id";
                        bookdownd.append(bookdowno);
                        div2.append(bookdownd);
                        var bookscrolld=vd.createElement('div');
                        var bookscrolll1=vd.createElement('div');
                        bookscrolll1.innerText="自动滚动方向：";
                        bookscrolll1.className="id";
                        bookscrolld.append(bookscrolll1);
                        var bookscrolls=vd.createElement('select');
                        bookscrolls.className="id";
                        var bookscrollo1=vd.createElement('option');
                        bookscrollo1.innerText="向下";
                        bookscrollo1.value="down";
                        bookscrolls.append(bookscrollo1);
                        var bookscrollo2=vd.createElement('option');
                        bookscrollo2.innerText="向上";
                        bookscrollo2.value="up";
                        bookscrolls.append(bookscrollo2);
                        bookscrolls.value=bookscrollo1.value;
                        bookscrolld.append(bookscrolls);
                        var bookscrolll2=vd.createElement('div');
                        bookscrolll2.innerText="自动滚动速度：";
                        bookscrolll2.className="id";
                        bookscrolld.append(bookscrolll2);
                        var bookscrolli=vd.createElement('input');
                        bookscrolli.value=100;
                        bookscrolli.className="id";
                        bookscrolli.style.width="50px";
                        bookscrolld.append(bookscrolli);
                        var bookscrolll3=vd.createElement('div');
                        bookscrolll3.innerText="像素/s";
                        bookscrolll3.className="id";
                        bookscrolld.append(bookscrolll3);
                        bookscrolld.append(vd.createElement('br'));
                        var bookscrolll4=vd.createElement('div');
                        bookscrolll4.innerText="每秒钟滚动次数：";
                        bookscrolll4.className="id";
                        bookscrolld.append(bookscrolll4);
                        var bookscrolli2=vd.createElement('input');
                        bookscrolli2.value=1;
                        bookscrolli2.className="id";
                        bookscrolli2.style.width="50px";
                        bookscrolld.append(bookscrolli2);
                        var bookscrollb=vd.createElement('button');
                        bookscrollb.innerText="自动滚动";
                        bookscrollb.className="id";
                        /**@type {boolean} 是否正在自动滚动*/
                        var autoscrollz=false;
                        function autoscroll()
                        {
                            if(autoscrollz)
                            {
                                bookscrollb.disabled=true;
                                //发送停止请求
                                chrome.runtime.sendMessage({action:"bookautoscrolls",bi:bookinfo});
                            }
                            else
                            {
                                var speed=bookscrolli.value-1+1;
                                if(isNaN(speed)){bookscrollo.innerText="自动滚动速度不是数字";return;}
                                if(speed<1){bookscrollo.innerText="自动滚动速度应大于等于1";return;}
                                var speed2=Math.round(bookscrolli2.value-1+1);
                                if(isNaN(speed2)){bookscrollo.innerText="每秒钟滚动次数不是数字";return;}
                                if(speed2<1||speed2>100){bookscrollo.innerText="每秒钟滚动次数应是1-100间的整数";return;}
                                if(speed2>speed){bookscrollo.innerText="每秒钟滚动次数大于自动滚动速度会导致无法滚动";return;}
                                bookscrollb.disabled=true;
                                //发出自动滚动请求
                                chrome.runtime.sendMessage({action:"bookautoscroll",bi:bookinfo,f:bookscrolls.value,s:speed,j:speed2});
                            }
                        }
                        bookscrollb.addEventListener('click',autoscroll);
                        bookscrolld.append(bookscrollb);
                        var bookscrollo=vd.createElement('div');
                        bookscrollo.className="id";
                        bookscrolld.append(bookscrollo);
                        div2.append(bookscrolld);
                        /**@param {HTMLDivElement} src
                         * @param {HTMLDivElement} div2
                        */
                        function showhidebcontrols(src,div2)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                div2.style.display="none";
                                src.innerText="显示书籍插件控制面板";
                                vfi.style.setProperty('height',h+20+"px","important");
                                seta(0);
                            }
                            else
                            {
                                div2.style.display=null;
                                src.innerText="隐藏书籍插件控制面板";
                                vfi.style.setProperty('height',h+170+"px","important");
                                seta(1);
                            }
                        }
                        (function(div,div2){div.addEventListener('click',function(e){showhidebcontrols(e.srcElement,div2)})})(div,div2);
                        p.insertBefore(st,node);
                        p.insertBefore(div,node);
                        p.insertBefore(div2,node);
                        vfii.style.height=h+"px";
                        vfi.style.setProperty('height',h+20+"px","important");
                        if(settings!=null&&settings.showbk)
                        {
                            showhidebcontrols(div,div2);
                        }
                    }
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckdocpdf(vfi)
            {
                var vd=vfi.contentDocument;
                /**@type {HTMLDivElement} img*/
                var img=null;
                function getvd()
                {
                    var vv=vfi.contentDocument;
                    if(vv!=null&&isnulld(vv))
                    {
                        vd=vv;
                        console.log(vd);
                        getimg();
                    }
                    else setTimeout(getvd,1000);
                }
                getvd();
                function getimg()
                {
                    var img2=vd.getElementById('img')
                    if(img2!=null)
                    {
                        img=img2;
                        console.log(img);
                        fuckimg();
                    }
                    else setTimeout(getimg,1000);
                }
                function fuckimg()
                {
                    if(img.hasAttribute('fucked'))return;
                    img.setAttribute('fucked',1);
                    var h=vfi.clientHeight;
                    var p=img.parentElement;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(img==p.children[i])break;
                    }
                    i++;
                    var st=vd.createElement('style');
                    st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                    var div=vd.createElement('div');
                    div.innerText="显示pdf控制面板";
                    div.className="id2";
                    var div2=vd.createElement('div');
                    div2.style.display="none";
                    div2.className="id2";
                    /**@param {HTMLDivElement} src*/
                    function showhidepdfcontrols(src)
                    {
                        var i=src.getAttribute('i')-1+1;
                        function seta(value)
                        {
                            src.setAttribute('i',value);
                        }
                        if(i)
                        {
                            src.innerText="显示pdf控制面板";
                            div2.style.display="none";
                            vfi.style.height=h+40+"px";
                            seta(0);
                        }
                        else
                        {
                            src.innerText="隐藏pdf控制面板";
                            div2.style.display=null;
                            vfi.style.height=h+100+"px";
                            seta(1);
                        }
                    }
                    div.addEventListener('click',function(e){showhidepdfcontrols(e.srcElement)});
                    var downloadb=vd.createElement('button');
                    downloadb.innerText="下载原文件";
                    var downloadpb=vd.createElement('button');
                    downloadpb.innerText="下载pdf文件";
                    function download(url)
                    {
                        window.open(url,"_blank");
                    }
                    var objectid=vfi.getAttribute('objectid');
                    console.log(objectid);
                    var ad = mArg.defaults;
                    var atl = mArg.attachments;
                    var at = null;
                    for(var k=0;k<atl.length;k++)
                    {
                        if(atl[k].property.objectid == objectid)
                        {
                            at = atl[k];
                        }
                    }
                    var completeb = document.createElement('button');
                    completeb.innerText = "完成该任务点";
                    div2.append(completeb);
                    completeb.addEventListener('click',function(){
                        var pa = {jobid: at.jobid, knowledgeid: ad.knowledgeid, courseid: ad.courseid, clazzid: ad.clazzId, jtoken: at.jtoken}
                        $.getJSON('https://mooc1-1.chaoxing.com/ananas/job/document', pa, (e, s) => {
                            console.log(e);
                            if(e.status)
                            {
                                alert(e.msg);
                                vfi.parentElement.className = "ans-attach-ct ans-job-finished";
                            }
                        })
                    })
                    $.getJSON(cxsturl+objectid,function(data)
                    {
                        console.log(data);
                        if(data.download!=undefined)
                        {
                            div2.append(downloadb);
                            (function(url){downloadb.addEventListener('click',function(){download(url)})})(data.download);
                        }
                        if(data.pdf!=undefined)
                        {
                            div2.append(downloadpb);
                            (function(url){downloadpb.addEventListener('click',function(){download(url)})})(data.pdf);
                        }
                    });
                    var node=null;
                    if(i<p.childElementCount)node=p.children[i];
                    p.insertBefore(st,node);
                    p.insertBefore(div,node);
                    p.insertBefore(div2,node);
                    vfi.style.height=h+40+"px";
                    if(settings!=null&&settings.showpdf)
                    {
                        showhidepdfcontrols(div);
                    }
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckppt(vfi)
            {
                var vd=vfi.contentDocument;
                /**@type {HTMLDivElement}*/
                var img=null;
                function getvd()
                {
                    var vd2=vfi.contentDocument;
                    if(vd2!=null&&isnulld(vd2))
                    {
                        vd=vd2;
                        console.log(vd)
                        getimg();
                    }
                    else setTimeout(getvd,1000);
                }
                getvd();
                function getimg()
                {
                    var img2=vd.getElementById('img');
                    if(img2!=null)
                    {
                        img=img2;
                        console.log(img);
                        fuckimg();
                    }
                    else setTimeout(getimg,1000);
                }
                function fuckimg()
                {
                    if(img.hasAttribute('fucked'))return;
                    img.setAttribute('fucked',1);
                    var h=vfi.clientHeight;
                    var p=img.parentElement;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(img==p.children[i])break;
                    }
                    i++;
                    var st=vd.createElement('style');
                    st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                    var div=vd.createElement('div');
                    div.className="id2";
                    div.innerText="显示ppt控制面板";
                    div.setAttribute('i',0);
                    var div2=vd.createElement('div2');
                    div2.className="id2";
                    div2.style.display="none";
                    function showhidepptcontrols()
                    {
                        var i=div.getAttribute('i')-1+1;
                        if(i)
                        {
                            div.innerText="显示ppt控制面板";
                            div2.style.display="none";
                            vfi.style.height=h+40+"px";
                            div.setAttribute('i',0);
                        }
                        else
                        {
                            div.innerText="隐藏ppt控制面板";
                            div2.style.display=null;
                            vfi.style.height = h + 70 + "px";
                            div.setAttribute('i',1);
                        }
                    }
                    div.addEventListener('click',showhidepptcontrols);
                    var downloadb=vd.createElement('button');
                    downloadb.innerText="下载原文件";
                    var downloadpb=vd.createElement('button');
                    downloadpb.innerText="下载pdf文件";
                    function download(url)
                    {
                        window.open(url,"_blank");
                    }
                    var objectid=vfi.getAttribute('objectid');
                    console.log(objectid);
                    var ad = mArg.defaults;
                    var atl = mArg.attachments;
                    var at = null;
                    for(var k=0;k<atl.length;k++)
                    {
                        if(atl[k].property.objectid == objectid)
                        {
                            at = atl[k];
                        }
                    }
                    var completeb = document.createElement('button');
                    completeb.innerText = "完成该任务点";
                    div2.append(completeb);
                    completeb.addEventListener('click',function(){
                        var pa = {jobid: at.jobid, knowledgeid: ad.knowledgeid, courseid: ad.courseid, clazzid: ad.clazzId, jtoken: at.jtoken}
                        $.getJSON('https://mooc1-1.chaoxing.com/ananas/job/document', pa, (e, s) => {
                            console.log(e);
                            if(e.status)
                            {
                                alert(e.msg);
                                vfi.parentElement.className = "ans-attach-ct ans-job-finished";
                            }
                        })
                    })
                    $.getJSON(cxsturl+objectid,function(data)
                    {
                        console.log(data);
                        if(data.download!=undefined)
                        {
                            div2.append(downloadb);
                            (function(url){downloadb.addEventListener('click',function(){download(url)})})(data.download);
                        }
                        if(data.pdf!=undefined)
                        {
                            div2.append(downloadpb);
                            (function(url){downloadpb.addEventListener('click',function(){download(url)})})(data.pdf);
                        }
                    });
                    var node=null;
                    if(i!=p.childElementCount)node=p.children[i];
                    p.insertBefore(st,node);
                    p.insertBefore(div,node);
                    p.insertBefore(div2,node);
                    vfi.style.height=h+40+"px";
                    if(settings!=null&&settings.showppt)showhidepptcontrols();
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckhomework(vfi)
            {
                if(vfi.hasAttribute('fucked'))return;
                vfi.setAttribute('fucked',1);
                var p=vfi.parentElement;
                for(var i=0;i<p.classList.length;i++)
                {
                    if(p.classList[i]=="ans-job-finished")return;//作业已完成
                }
                var vd=vfi.contentDocument;
                /**@type {HTMLIFrameElement} 内部内容框架*/
                var vfii=null;
                /**@type {Document} vfii的Document*/
                var vd2=null;
                function getvd()
                {
                    var vd2=vfi.contentDocument;
                    if(vd2!=null&&isnulld(vd2))
                    {
                        vd=vd2;
                        console.log(vd);
                        getiframe();
                    }
                    else setTimeout(getvd,1000);
                }
                getvd();
                function getiframe()
                {
                    var ifrc=vd.getElementsByTagName('iframe');
                    if(ifrc.length)
                    {
                        console.log(ifrc);
                        var f=false;
                        for(var i=0;i<ifrc.length;i++)
                        {
                            if(ifrc[i].name=="frame_content")
                            {
                                vfii=ifrc[i];
                                f=true;
                                break;
                            }
                        }
                        if(f)
                        {
                            console.log(vfii);
                            getvd2();
                        }
                    }
                    else setTimeout(getiframe,1000);
                }
                function getvd2()
                {
                    var vd=vfii.contentDocument;
                    if(vd!=null&&isnulld(vd))
                    {
                        vd2=vd;
                        console.log(vd2);
                        getiframe2();
                    }
                    else setTimeout(getvd2,1000);
                }
                function getiframe2()
                {
                    var ifrc=vd2.getElementsByTagName('iframe');
                    if(ifrc.length)
                    {
                        console.log(ifrc);
                        for(var i=0;i<ifrc.length;i++)
                        {
                            if(ifrc[i].id.match(/^ueditor_[0-9]{1,}/))
                            {
                                console.log(ifrc[i]);
                                (function(vfiii){fuckueditor(vfiii);})(ifrc[i]);
                            }
                        }
                    }
                    else setTimeout(getiframe2,1000);
                }
                /**@param {HTMLIFrameElement} vfiii*/
                function fuckueditor(vfiii)
                {
                    var vd3=vfiii.contentDocument;
                    function getvd3()
                    {
                        var vd=vfiii.contentDocument;
                        if(vd!=null&&isnulld(vd))
                        {
                            vd3=vd;
                            console.log(vd3);
                            thenfuck();
                        }
                        else setTimeout(getvd3,1000);
                    }
                    getvd3();
                    function thenfuck()
                    {
                        /**@type {HTMLBodyElement}*/
                        var bo=vd3.body;
                        var st=vd2.createElement('style');
                        st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                        var div=vd2.createElement('div');
                        div.className="id2";
                        div.innerText="显示文本框控制面板";
                        div.setAttribute('i',0);
                        var div2=vd2.createElement('div');
                        div2.className="id2";
                        div2.style.display="none";
                        function showhideecontrols()
                        {
                            var i=div.getAttribute('i')-1+1;
                            if(i)
                            {
                                div.innerText="显示文本框控制面板";
                                div2.style.display="none";
                                div.setAttribute('i',0);
                            }
                            else
                            {
                                div.innerText="隐藏文本框控制面板";
                                div2.style.display=null;
                                div.setAttribute('i',1);
                            }
                        }
                        div.addEventListener('click',showhideecontrols);
                        var div2l=vd2.createElement('div');
                        div2l.innerText="文本框内容格式：";
                        div2l.className="id";
                        div2.append(div2l);
                        var div2s=vd2.createElement('select');
                        div2s.className="id";
                        var div2o1=vd2.createElement('option');
                        div2o1.innerText="HTML";
                        div2o1.value="HTML";
                        div2s.append(div2o1);
                        var div2o2=vd2.createElement('option');
                        div2o2.innerText="文本";
                        div2o2.value="txt";
                        div2s.append(div2o2);
                        div2s.value=div2o1.value;
                        var txt=false;
                        div2.append(div2s);
                        var div2l2=vd2.createElement('div');
                        div2l2.innerText="文本框内容：";
                        div2.append(div2l2);
                        var textarea=vd2.createElement('textarea');
                        textarea.value=bo.innerHTML;
                        textarea.style="resize:both;overflow:auto;word-wrap:break-word;padding:5px 0;line-height:normal;margin:0;width:100%;";
                        div2.append(textarea);
                        div2s.addEventListener('change',function()
                        {
                            txt=div2s.value=="txt";
                            if(txt)
                            {
                                textarea.value=bo.innerText;
                                textarea.style.lineHeight="12px";
                            }
                            else
                            {
                                textarea.value=bo.innerHTML;
                                textarea.style.lineHeight="normal";
                            }

                        });
                        bo.addEventListener('keydown',function()
                        {
                            setTimeout(function(){if(txt)textarea.value=bo.innerText;else textarea.value=bo.innerHTML;},100);
                        });
                        textarea.addEventListener('keydown',function()
                        {
                            setTimeout(function(){if(txt)bo.innerText=textarea.value;else bo.innerHTML=textarea.value},100);
                        });
                        var p2=vfiii.parentElement.parentElement;
                        var p=p2.parentElement;
                        for(var i=0;i<p.childElementCount;i++)
                        {
                            if(p2==p.children[i])break;
                        }
                        i++;
                        var node=null;
                        if(i!=p.childElementCount)node=p.children[i];
                        p.insertBefore(st,node);
                        p.insertBefore(div,node);
                        p.insertBefore(div2,node);
                        if(settings!=null&&settings.showta)showhideecontrols();
                        if(settings!=null&&settings.tatxt)
                        {
                            div2s.value=div2o2.value;
                            txt=true;
                            textarea.value=bo.innerText;
                            textarea.style.lineHeight="12px";
                        }
                    }
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
                    else if(vff[i].classList[j]=="ans-book")
                    {
                        (function(vfi){fuckqbook(vfi);})(vff[i]);
                    }
                    else if(vff[i].classList[j]=="insertdoc-online-pdf")
                    {
                        (function(vfi){fuckdocpdf(vfi);})(vff[i]);
                    }
                    else if(vff[i].classList[j]=="insertdoc-online-ppt")
                    {
                        (function(vfi){fuckppt(vfi);})(vff[i]);
                    }
                }
            }
            for(var i=0;i<vff.length;i++)
            {
                if(vff[i].src.match(/^https:\/\/mooc1-[0-9]+.chaoxing.com\/ananas\/modules\/work\/index.html/))
                {
                    (function(vfi){fuckhomework(vfi);})(vff[i]);
                }
            }
            }
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
                fuck();
            });
        });
        if(!r)fuck();
    });
}
catch(e)
{
    console.log(e);
    settings=null;
    fuck();
}
function getnow()
{
var d=new Date();
return d.getTime();
}
/**自己实现Ext.String.format 
 * @param {string} format 格式
 * @returns {string}
*/
function extformat(format,...inp)
{
    var need=format.match(/{[0-9]+}/);
    while(need!=null)
    {
        need=need[0];
        var i2=need.match(/[0-9]+/);
        if(i2<inp.length)format=format.replace(need,inp[i2]); else format=format.replace(need,"");
        need=format.match(/{[0-9]+}/);
    }
    return format
}
/**@param i 已重复次数*/
function showallchapter(i=0)
{
    var s=document.getElementsByClassName('knowledgeOpenBtn knowledgeCloseBtnImg');
    if(s.length)
    {
        for(var i2=0;i2<s.length;i2++)s[i2].className="knowledgeOpenBtn knowledgeOpenBtnImg knowledgeOpenCurBtnImg";
    }
    else if(i<5)(function(i){setTimeout(function(){showallchapter(i+1)},1000)})(i);
}
/**检测元素变化通知 
 * @param {MutationCallback} callback 反馈方法
 * @param {Node} target 目标元素
 * @param {MutationObserverInit} config 设置
 * @returns {MutationObserver}
*/
function mbo(callback,target,config)
{
    var mb=new MutationObserver(callback);
    mb.observe(target,config);
    return mb;
}
})();
var mArg=null;
