console.log('bookimg.js');
(function(){
function fuckbookimg()
{
    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse)
    {
        if(message.action=="getimg2")
        {
            (function(url,id,tid,info){downloadimg(url,id,tid,info)})(message.u,message.id,message.tid,message.i);
            sendResponse(1);
        }
    })
}
function downloadimg(url,id,tid,info)
{
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.responseType="blob";
    xhr.onload=function()
    {
        if(this.status==200||this.status==304)
        {
            var reader = new FileReader();
            reader.readAsDataURL(this.response);
            reader.onload=function(e)
            {
                if(e.target.result.length>0&&e.target.result.split(',')[1]!=undefined&&e.target.result.split(',')[1].length>0)
                chrome.runtime.sendMessage({action:"returnimg",'id':id,'tid':tid,'d':e.target.result.split(',',2)[1],'i':info});
                else
                {
                    (function(url,id,tid,info){setTimeout(function(){downloadimg(url,id,tid,info)},1000)})(url,id,tid,info);
                }
            }
        }
        else
        {
            (function(url,id,tid,info){setTimeout(function(){downloadimg(url,id,tid,info)},1000)})(url,id,tid,info);
        }
    }
    xhr.send();
}
fuckbookimg();
})();
