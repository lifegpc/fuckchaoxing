console.log('notice.js');
(function()
{
/**@typedef {{cid:number,jid:number}} CourseInfo cid为courseId，jid为classId/jcalssId*/
/**是否正处于检测状态*/
var work=false;
/**@type {string} 课程列表uri*/
var uri;
/**@type {number} 课程列表定时器ID*/
var kil=null;
var host;
var deb;
/**@type {Array<CourseInfo>} 课程列表*/
var courselist;
/**@type {number} 检测活动列表定时器*/
var kci=null;
/**@type {Array<number>} 已通知活动列表*/
var tcl=[];
var tcq={};
/**保存内容至localstorage
 * @param data 要保存的内容
 * @param {string} name 变量名
 * @param {()=>void} f 回调函数
*/
function storageset(data,name,f=null)
{
    chrome.storage.local.get(function(obj)
    {
        obj[name]=data;
        if(f)chrome.storage.local.set(obj,f);
        else chrome.storage.local.set(obj);
    })
}
/**从localstorage获取内容
 * @param {string} name 变量名
 * @param d 初始化数据（如果不存在时返回这个并设置为这个）
 * @param {(data)=>void} f 回调函数
*/
function storageget(name,d,f)
{
    chrome.storage.local.get(function(obj)
    {
        if(obj[name])
        {
            f(obj[name]);
        }
        else
        {
            obj[name]=d;
            chrome.storage.local.set(obj);
            f(d);
        }
    })
}
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse)
{
    if(message.action=="startnotice")//设置启用
    {
        if(!work)swork();
        sendResponse(1);
        return;
    }
    if(message.action=="stopnotice")
    {
        if(work)
        {
            if(kil!=null)
            {
                clearTimeout(kil);
                kil=null;
            }
            if(kci!=null)
            {
                clearTimeout(kci);
                kci=null;
            }
            work=false;
        }
        sendResponse(1);
        return;
    }
});
var settings=null;
chrome.storage.sync.get(function(data)
{
    if(!scheck(data,function()
    {
        chrome.storage.sync.get(function(data)
        {
            settings=data;
            if(settings.not)swork();
        });
    }))
    {
        settings=data;
        if(settings.not)swork();
    }
});
function swork()
{
    work=true;
    $.get("http://i.mooc.chaoxing.com/space/index?t="+getnow(),function(d,s)
    {
        var p=new DOMParser();
        var doc=p.parseFromString(d,"text/html");
        var vf=doc.getElementById('frame_content');
        uri=vf.src;
        host=uri.match(/([^:]+:\/\/)?[^\/]+/)[0];
        storageget('tcl',[],function(data)
        {
            tcl=data;
            nw();
        })
    })
}
function nw()
{
    if(kci!=null)//如果有活动列表检测定时任务将删除。
    {
        clearTimeout(kci);
        kci=null;
    }
    $.get(uri,function(d,s)
    {
        var p=new DOMParser;
        var doc=p.parseFromString(d,"text/html");
        /**@type {HTMLInputElement}*/
        var de=doc.getElementById('debug');
        if(de)deb=de.value;else deb="";
        getpagelist(doc,function(l)
        {
            courselist=l;
            dsrw();
        });
        kil=setTimeout(nw,600000);//10分钟
    })
}
/**活动列表定时检测*/
function dsrw()
{
    if(courselist.length)
    {
        checkhdi(0,function()
        {
            kci=setTimeout(dsrw,60000)//1分钟
        });
    }
}
/**检测活动
 * @param {number} i 课程在courselist的索引
 * @param {()=>void} f 回调函数（全部完成时回调）
*/
function checkhdi(i,f)
{
    if(i<courselist.length)
    {
        (function(i){checkhd(courselist[i-1],function(){checkhdi(i,f);})})(i+1);
    }
    else
    {
        f();
    }
}
/**检测活动列表
 * @param {CourseInfo} i 课程信息
 * @param {()=>void} f 回调函数
*/
function checkhd(i,f)
{
    $.get("https://mobilelearn.chaoxing.com/widget/pcpick/stu/index",{courseId:i.cid,jclassId:i.jid},function(d,s)
    {
        var p=new DOMParser();
        var doc=p.parseFromString(d,"text/html");
        parsehd(doc,f);
    })
}
/**解析doc档案
 * @param {Document} d
 * @param {()=>void} f 回调函数
 */
function parsehd(d,f)
{
    var hdlist=[];
    /**@type {HTMLDivElement} 活动列表，startlist为正在进行中*/
    var listdiv;
    var courseId;
    var classId;
    var puid;
    var fid;
    function getlistdiv()
    {
        var te=d.getElementById('startList');//正常状态为startList，DEBUG时可修改为endList
        if(te!=null)
        {
            listdiv=te;
            getinfo()
        }
        else setTimeout(getlistdiv,1000);
    }
    function getinfo()
    {
        /**@type {HTMLInputElement}*/
        var t=d.getElementById('puid');
        /**@type {HTMLInputElement}*/
        var t2=d.getElementById('courseId');
        /**@type {HTMLInputElement}*/
        var t3=d.getElementById('classId');
        /**@type {HTMLInputElement}*/
        var t4=d.getElementById('fid');
        if(t!=null&&t2!=null&&t3!=null&&t4!=null)
        {
            puid=t.value;
            courseId=t2.value;
            classId=t3.value;
            fid=t4.value;
            gethdlist();
        }
        else setTimeout(getinfo,1000);
    }
    function gethdlist()
    {
        for(var i=0;i<listdiv.childElementCount;i++)
        {
            /**@type {HTMLDivElement}*/
            var te=listdiv.children[i];
            if(te.childElementCount)
            {
                /**@type {HTMLDivElement}*/
                var te2=te.children[0];
                if(te2.className=="Mct")
                {
                    hdlist.push(te2);
                }
            }
        }
        if(hdlist.length)
        {
            phdi(0,f);
        }
        else//没有活动，调用回调函数
        {
            f();
        }
    }
    /**解析活动
     * @param {number} i 活动在hdlist中的索引
     * @param {()=>void} f 全部完成后的回调函数
    */
    function phdi(i,f)
    {
        if(i<hdlist.length)
        {
            (function(i){phd(hdlist[i],function(){phdi(i+1,f)})})(i);
        }
        else//全部解析完成后回调
        {
            f();
        }
    }
    /**解析活动
     * @param {HTMLDivElement} i 活动div
     * @param {()=>void} f 回调函数
     */
    function phd(i,f)
    {
        var s=i.getAttribute('onclick');
        var s2=s.match(/\(([0-9]+),([0-9]+),([^\)]+)\)/);
        if(s2!=null)
        {
            var acid=s2[1]-1+1;
            if(isintcl(acid))//已通知，跳过解析
            {
                f();
                return;
            }
            var apt=s2[2]-1+1;
            /**@type {string}*/
            var uri;
            /**@type {string}*/
            var title;
            /**@type {string}*/
            var detail;
            activeDetail(acid,apt,function(url)
            {
                uri=url;
                if(uri=="")//解析失败，跳过解析
                {
                    f();
                    return;
                }
                [title,detail]=gethdinfo(i);
                chrome.notifications.create({
                    type:"basic",
                    iconUrl:"ico/128.png",
                    title:title,
                    message:detail
                },function(iid)
                {
                    tcq[iid]={cid:acid,uri:uri}
                    tcl.push(acid);
                    while(tcl.length>1000)tcl.shift();
                    storageset(tcl,'tcl');
                })
                f();
            })
        }
        else//解析失败，跳过解析
        {
            f();
        }
    }
    /**模拟学习通activeDetail
     * @param {number} activeId
     * @param {number} appType
     * @param {(url:string)=>void} f 回调函数
    */
    function activeDetail(activeId,appType,f)
    {
        var url="";
        var host2="https://mobilelearn.chaoxing.com";
        if(appType==11)
        {
            url=host2+"/widget/pick/pc/startPick?activeId="+activeId+"&classId="+classId+"&fid="+fid+"&courseId="+courseId;
        }
        if(appType==2)
        {
            url=host2+"/widget/sign/pcStuSignController/preSign?activeId="+activeId+"&classId="+classId+"&fid="+fid+"&courseId="+courseId;
        }
        if(appType==4)
        {
            url=host2+"/widget/pcAnswer/teaAnswer?activeId="+activeId+"&classId="+classId+"&fid="+fid+"&courseId="+courseId;
        }
        if(appType==14||appType==42)
        {
            url=host2+"/widget/pcvote/goStudentVotePage?activeId="+activeId+"&classId="+classId+"&fid="+fid+"&courseId="+courseId+"&quessequence=1";
        }
        if(appType==43)
        {
            url=host2+"/page/qvote/stu/answerQvote?activeId="+activeId+"&classId="+classId+"&fid="+fid+"&courseId="+courseId;
        }
        if(appType==23)
        {
            url=host2+"/widget/score/pc/queryScore?activeId="+activeId+"&classId="+classId+"&fid="+fid+"&courseId="+courseId;
        }
        if(appType==35)
        {
            $.ajax({
                url:host2+"/v2/apis/taskStu/getActiveInfoForMe",
                type:"post",
                dataType:"json",
			    async:'false',
                data: {"courseId":courseId,"fid":fid,"activeId":activeId},
                success: function(obj)
                {
                    var isNorm = obj.data.isNorm;
					var toAnswerPage =obj.data.toAnswerPage;
					var notInClass = obj.data.notInClass;
                    var useNoteEditor = obj.data.useNoteEditor;
                    if(notInClass==1)
                    {
                        f("");
                        return;
                    }
                    var url="";
					if(isNorm==1){//分组的
						if(useNoteEditor==1){
							if(toAnswerPage==1){
								url = 'https://mobilelearn.chaoxing.com/page/renwuNew/stu/taskDetailStuForAnswer_new?activeId='+activeId+'&courseId='+courseId+"&classId="+classId+"&fid="+fid+"&returnType=3";
							}else{
								url='https://mobilelearn.chaoxing.com/page/renwuNew/stu/taskDetailStuAndAnsDetail_new?courseId='+courseId+'&classId='+classId+'&activeId='+activeId+'&fid='+fid+"&returnType=3";
							}
						}else{
							if(toAnswerPage==1){
								url = 'https://mobilelearn.chaoxing.com/page/renwu/stu/taskDetailStuForAnswer?activeId='+activeId+'&courseId='+courseId+"&classId="+classId+"&fid="+fid+"&returnType=3";
							}else{
								url='https://mobilelearn.chaoxing.com/page/renwu/stu/taskDetailStuAndAnsDetail?courseId='+courseId+'&classId='+classId+'&activeId='+activeId+'&fid='+fid+"&returnType=3";
							}
						}
					}else{
						if(useNoteEditor==1){
							if(toAnswerPage==1){
								url='https://mobilelearn.chaoxing.com/page/renwuNew/notGroup/taskDetailStuForAnswerNotGroup_new?courseId='+courseId+'&classId='+classId+'&activeId='+activeId+'&fid='+fid+"&returnType=3"
							}else{
								url='https://mobilelearn.chaoxing.com/page/renwuNew/notGroup/taskDetailStuAndAnsDetailNotGroup_new?courseId='+courseId+'&classId='+classId+'&activeId='+activeId+'&fid='+fid+"&returnType=3"
							}
						}else{
							if(toAnswerPage==1){
								url='https://mobilelearn.chaoxing.com/page/renwu/notGroup/taskDetailStuForAnswerNotGroup?courseId='+courseId+'&classId='+classId+'&activeId='+activeId+'&fid='+fid+"&returnType=3"
							}else{
								url='https://mobilelearn.chaoxing.com/page/renwu/notGroup/taskDetailStuAndAnsDetailNotGroup?courseId='+courseId+'&classId='+classId+'&activeId='+activeId+'&fid='+fid+"&returnType=3"
							}
                        }
                    }
                    f(url);
                },
                error:function()
                {
                    f("");
                }
            });
        }
        else if(appType==5)
        {
            $.ajax({
                url:host2+"/v2/apis/discuss/getTopicDiscussInfo",
                dataType:"json",
                async:'false',
                data: {"activeId":activeId},
                success:function(data){
                    if (data.result == 1) {
                        url = "https://groupyd.chaoxing.com/pc/course/topicDiscuss/info?uuid=" + data.data.uuid+"&activeId=" + data.data.activeId + "&startTime=" + data.data.startTime + "&timeLong=" + data.data.timeLong+ "&activeStatus=" + data.data.activeStatus + "&courseId=" + courseId;
                        f(url);
                    }
                    else f("");
                },
                error:function()
                {
                    f("");
                }
            });
        }
        else
        {
            f(url);
        }
    }
    /**获得活动详细信息
     * @param {HTMLDivElement} i 活动div
     * @returns {[string,string]} 分别为标题和详细信息
     */
    function gethdinfo(i)
    {
        var title="活动";
        var t=i.children[0];
        if(t)
        {
            t=t.children[0];
            if(t)
            {
                t=t.children[1];
                if(t&&t.tagName=="DD")
                {
                    title=t.innerHTML;
                }
            }
        }
        var detail="详细信息";
        t=i.children[1];
        if(t)
        {
            t=t.children[0];
            if(t&&t.tagName=="A")
            {
                detail=t.innerHTML;
            }
        }
        return [title,detail];
    }
    /**是否已经已通知
     * @param a 活动id
    */
    function isintcl(a)
    {
        for(var i=0;i<tcl.length;i++)
        {
            if(tcl[i]==a)return true;
        }
        return false;
    }
    getlistdiv();
}
function getnow()
{
    return new Date().getTime();
}
/**获取课程列表
 * @param {Document} d
 * @param {(l:Array<CourseInfo>)=>void} f 回调函数
*/
function getpagelist(d,f)
{
    var li=d.getElementById('zla_title');
    var p=new DOMParser();
    if(li.childElementCount)get(0);
    /**@param {number} i*/
    function get(i)
    {
        var l=li.children[i];
        var k=l.children[0];
        var o=k.getAttribute('onclick');
        var re=o.match(/\(([0-9]+)\)/);
        /**@type {Array<CourseInfo>} 课程列表*/
        var ral=[];
        if(re!=null)
        {
            var r=re[1];
            $.get(host+"/visit/courses/study?isAjax=true",{fileId:r,debug:deb},function(d,s)
            {
                var doc=p.parseFromString(d,"text/html");
                /**是否有自定义文件夹*/
                var havefolder=false;
                /**@type {HTMLDivElement}*/
                var uldiv;
                /**@type {HTMLUListElement}*/
                var ul;
                /**@type {Array<HTMLLIElement>}*/
                var lilist=[];
                function getuldiv()
                {
                    var te=doc.getElementsByClassName('ulDiv');
                    if(te.length)
                    {
                        uldiv=te[0];
                        getul();
                    }
                    else setTimeout(getuldiv,100);
                }
                getuldiv();
                function getul()
                {
                    for(var i=0;i<uldiv.childElementCount;i++)
                    {
                        var nn=uldiv.children[i];
                        if(nn.constructor.name=="HTMLUListElement")
                        {
                            ul=nn;
                            break;
                        }
                    }
                    getlilist();
                }
                function getlilist()
                {
                    for(var i=0;i<ul.childElementCount;i++)
                    {
                        /**@type {HTMLLIElement}*/
                        var nn=ul.children[i];
                        if(nn.constructor.name=="HTMLLIElement"&&(nn.className.match(/[0-9]+/)||nn.style.position=="relative"))
                        {
                            lilist.push(nn);
                        }
                    }
                    if(lilist.length)
                    {
                        pthen(0);
                    }
                    else//空标签页，解析下一个
                    {
                        thenf();
                    }
                }
                /**解析课程
                 * @param {number} i2 要解析的内容在lilist的索引
                */
                function pthen(i2)
                {
                    if(i2<lilist.length)
                    {
                        /**@type {HTMLLIElement}*/
                        var nn=lilist[i2];
                        var isfolder=false;
                        var rs=nn.className.match(/[0-9]+/);
                        if(rs!=null)
                        {
                            havefolder=true;
                            isfolder=true;
                            var rn=rs[0]-1+1;
                            (function(i2){getfolder(rn,function(){pthen(i2)})})(i2+1);
                        }
                        else
                        {
                            parsecourse(nn);
                            (function(i2){setTimeout(function(){pthen(i2)})})(i2+1);
                        }
                    }
                    else//解析完毕，解析下一个标签页
                    {
                        thenf();
                    }
                }
                /**解析文件夹
                 * @param {number} i 文件夹ID
                 * @param {()=>void} f 回调函数，回调pthen
                 */
                function getfolder(i,f)
                {
                    $.get(host+"/visit/courses/study?isAjax=true",{fileId:i,debug:deb},function(d,s)
                    {
                        var doc2=p.parseFromString(d,"text/html");
                        /**@type {HTMLDivElement}*/
                        var uldiv2;
                        /**@type {HTMLUListElement}*/
                        var ul2;
                        /**@type {Array<HTMLLIElement>}*/
                        var lilist2=[];
                        function getuldiv2()
                        {
                            var te=doc2.getElementsByClassName('ulDiv');
                            if(te.length)
                            {
                                uldiv2=te[0];
                                getul2();
                            }
                            else setTimeout(getuldiv2,1000);
                        }
                        getuldiv2();
                        function getul2()
                        {
                            for(var i=0;i<uldiv2.childElementCount;i++)
                            {
                                var nn=uldiv2.children[i];
                                if(nn.constructor.name=="HTMLUListElement")
                                {
                                    ul2=nn;
                                    break;
                                }
                            }
                            getlilist2();
                        }
                        function getlilist2()
                        {
                            for(var i=0;i<ul2.childElementCount;i++)
                            {
                                /**@type {HTMLLIElement}*/
                                var nn=ul2.children[i];
                                if(nn.constructor.name=="HTMLLIElement"&&(nn.className.match(/[0-9]+/)||nn.style.position=="relative"))
                                {
                                    lilist2.push(nn);
                                }
                            }
                            if(lilist2.length)
                            {
                                for(var i=0;i<lilist2.length;i++)
                                {
                                    parsecourse(lilist2[i]);
                                }
                                f();//解析完成后调用回调函数
                            }
                            else//空的文件夹，调用回调函数
                            {
                                f();
                            }
                        }
                    })
                }
                /**解析课程信息
                 * @param {HTMLLIElement} li 课程的li元素
                */
                function parsecourse(li)
                {
                    /**@type {CourseInfo}*/
                    var te={};
                    for(var i=0;i<li.childElementCount;i++)
                    {
                        /**@type {HTMLInputElement}*/
                        var nn=li.children[i];
                        if(nn.constructor.name=="HTMLInputElement")
                        {
                            if(nn.name=="courseId")
                            {
                                te.cid=nn.value-1+1;
                            }
                            else if(nn.name=="classId")
                            {
                                te.jid=nn.value-1+1;
                            }
                        }
                    }
                    ral.push(te);
                }
                /**解析下一个标签页*/
                function thenf()
                {
                    if(i+1<li.childElementCount-1)get(i+1);
                    else f(ral);
                }
            });
        }
    }
}
chrome.notifications.onClicked.addListener(function(id)
{
    var q=tcq[id];
    if(q)
    {
        chrome.windows.getAll(function(windows)
        {
            if(windows.length)chrome.tabs.create({url:q.uri});
            else chrome.windows.create({url:q.uri})
        })
    }
})
})();
