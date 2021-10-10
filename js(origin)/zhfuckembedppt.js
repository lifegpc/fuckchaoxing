function fuck_embed_ppt() {
    let li = document.getElementsByTagName('a');
    for (let i = 0; i < li.length; i++) {
        let a = li[i];
        if (a.hasAttribute('fucked')) continue;
        let oc = a.getAttribute('onclick');
        if (oc == null || !oc.startsWith('filePreviewIframe1(')) {
            a.setAttribute('fucked', 1);
            continue;
        }
        oc = oc.slice(19);
        let ocl = oc.split(',');
        let s = "";
        for (let j = 0; j < ocl.length; j++) {
            let t = ocl[j];
            s += t;
            if (t.endsWith("'") || t.endsWith('"')) {
                break;
            }
        }
        if (!s.length) {
            a.setAttribute('fucked', 1);
            continue;
        }
        s = s.slice(1, s.length - 1);
        if (s.indexOf("\\'") > -1) {
            s = s.replace("\\'", "'");
        }
        a.setAttribute('onclick', null);
        a.onclick = null;
        a.href = s;
        a.target = '_blank';
        a.setAttribute('fucked', 1);
    }
    setTimeout(fuck_embed_ppt, 1000);
}

fuck_embed_ppt();
