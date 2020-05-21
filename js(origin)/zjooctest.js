console.log('zjooctest.js');
window.addEventListener('load',()=>
{
    new ClipboardJS('.btn');
    /**@type {HTMLCollectionOf<HTMLDivElement>*/
    var qc=null;
    function getqc()
    {
        var te=document.getElementsByClassName('questiono-item');
        if(te.length)
        {
            qc=te;
            console.log(qc);
            for(var i=0;i<qc.length;i++)
            {
                ((q)=>{processq(q)})(qc[i]);
            }
        }
        else setTimeout(getqc,1000);
    }
    getqc();
    /**处理每个问题
     * @param {HTMLDivElement} q 问题的div
     */
    function processq(q)
    {
        if(q.childElementCount<2)return;
        if(q.hasAttribute('fucked'))return;
        q.setAttribute('fucked',1);
        /**@type {HTMLDivElement} 问题头部*/
        var qh=q.children[0];
        /**@type {HTMLDivElement}*/
        var fl;
        /**@type {HTMLDivElement}*/
        var fz;
        /**查找问题描述
         * @param {HTMLDivElement} qh 问题头部
        */
        function getfl(qh)
        {
            for(var i=0;i<qh.childElementCount;i++)
            {
                var te=qh.children[i];
                if(te.constructor.name=="HTMLDivElement"&&te.className=="fl")
                {
                    fl=te;
                    break;
                }
            }
        }
        /**查找分值
         * @param {HTMLDivElement} qh 问题头部
        */
        function getfz(qh)
        {
            for(var i=0;i<qh.childElementCount;i++)
            {
                var te=qh.children[i];
                if(te.constructor.name=="HTMLDivElement"&&te.className=="fr")
                {
                    fz=te;
                    break;
                }
            }
        }
        getfl(qh);
        getfz(qh);
        if(fl==undefined||fz==undefined)return;
        var bu=document.createElement('button');
        bu.innerText="复制题目";
        bu.className="btn";
        var tq="tr"+md5(fl.innerText+getnow+fz.innerText);
        var tr=document.createElement('textarea');
        var s=fl.innerText.split('\n')[0]+'\n';
        var te=q.children[1];
        if(te.childElementCount>0)
        {
            te=te.children[0];
            getq();
        }
        function getq()
        {
            for(var i=0;i<te.childElementCount;i++)
            {
                /**@type {HTMLDivElement}*/
                var qq=te.children[i];
                var ql=qq.innerText.split('\n');
                var ss="";
                for(var ij=0;ij<ql.length;ij++)
                {
                    if(ql[ij]!="")ss+=ql[ij];
                }
                s+=(ss+"\n");
            }
        }
        tr.style.width="1px";
        tr.style.height="1px";
        tr.id=tq;
        qh.insertBefore(bu,fz);
        qh.insertBefore(tr,fz);
        tr.value=s;
        bu.setAttribute('data-clipboard-target','#'+tq);
    }
    var getnow=()=>{return new Date().getTime();}
});
