(function(a){var b=function(d,h,u){var i;var o=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09JREFUeNrsmEtIVFEYx+fOjI1WNmkUPUxDjR4USZIUFANBtigoqn1R0Np9C1u2y0XQKrCNKwmJoLDAhOhBhEG1U9Qg7YHNlJaPKaf/B/+Rj8O9Oc29M2N1Pvhx7jn3u/ee/3l+54ZC1qxZs2bNmrV/x5xcnDKZTBjJCrAaVIFqUAs2MR8Hq8BKpuVgOVP9jQz4BqbBFPhKvoAk+ADeMk2SScdxfixWx2iOgm+DFoqpyLUBfNoc+A6eg9aghGwHaz3uvQc94DU/Lr2yHxxlT2lLg37wAHwGEVAPjoMdhu8yUh9Y02BoDWbc7Q6o9nhmK3iqfJPgmNfQBe0e3xgstJAxsEH5REAcOKqsGaTp32a8sxKUG2Vd+QoJ+9B3F5NwXOWvgE/g9MJK4jgvkLxk9r6q8F4kw6DLeOe9fCvjR8iwkT8IysAZo1xWoBkwpsoOgDXgCETVqPKJfCsT9SEkbeQjTDeicruQxihAluxZ8NPluzKZ93GeyRLbWAohXkvwIfDKKBv38BUht4KYx+FQcOYUyPf/EhItgJAhcI3vlg3yAtjs4SshSwfDErneCS4WW0hGLaeOqtwolt0Oda/FZRJnfWUBuAH/N/Q9nK8QP0MrpvYLETXP7JTLalZmNNq8Wvlmghhyfnpkm5HvZrR73ShvoJA6xlfZzVGCwWdohCHlW1PQMNQjRJkADYs816r8Ly3iKyFObyliLbFHoN7F3wGnwDvlOw3Oe7y/FnT7CRpzPVgNcoi42SR4zE1wlkOomUMv7LJAyMR+wvBfwvzdsrsz/HezIQy/xqCE9PJgVcHduBi2cLCCkNaghER5hK0i69ny65iXeKqSJ8gYBUe4mIQZR2VXtjn23AwrKkfdFJEAcxR8/NOjrjVr1gq3Se6RM3pA70mY18UUclU+7PMdJ/h3pU9fl7qHEqDuN/fj9ImrMvkF1G5eF7vifdmKgQHmk26VMVo+yecSKgzpU9ftpRKSoJC41xjn/YTquYGge8T3URe7br/amS97uDXRL+vftFTP7OfAFv6M63G5n8rODaapJScEFTvLyjepnjFN7ndyeHV6iC3Zzwdp/RSGyk1UUHqjjSJOuvi2ERl6D/nDQWxE+YzY3dmaNWvW/jr7JcAAj0e1BA7EkwQAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0tJREFUeNrsmM9LVFEUx30zY2pl/oiiH6YxGv2gUJKkoFCCbFFgVH9AFLSefQtdtpxF0CqalSuJiKCwwIToBxEK1U4Rg7QfmFNajlpO3wPfkcPlPZ3mvXHM7oEPZ+6d89475917zz33FRVZsWLFihUrVtaOONkYpdPpENQGUAmqQDWoBTvZrgCbwEbqUrCeWj8jDX6AGTANvpNvYBJ8Au+pJ8mU4zi/lvMxkmXA90ALgynL9gX4lDnwE7wC7UEFsg9s8fjvI7gL3vLhMipHwWmOlJZ50A8eg68gDKLgLNhv2K4j0cBeDabWUNpd7oNqj2v2gBfKdhKc8Zq6oNPjGUP5DmQMbFc2YVABHNXXDOZpHzPuWQ5Kjb7uXAMJ+YjvARbhuGpfB1/AhcVM4jivoQbZfKQcPgw1ArqNez7M1Rk/gYwY7eOgGFw0+iUDpcCY6jsGNoNTCKpG9U/k6kzERyDzRjtMvQPOHYQuYQCSsmfBb5fnymI+wnUmKbahEIF4peAT4I3RN+5hK4HcCWIdh4qCEydPtv9XIJE8BDIMbvDeskFeAbs8bKVkibMskd8HwNWVDiSt0qmjnBtF2o2r/1pcFnHGVhLALdi/o+3JXAPxM7VK1H4hQS2wOe2SzYqNl7agMl8qiCnnZ0T2Gu0eVrs3jf56BlLH+iqzOUox+BIvYVjZ1uS1DPUoUSZA/TLXtSv7a8vYSonTW4haS+QpiLrYO+A8+KBsZ8Blj/vXgh4/RWO2B6shThE3mQLPuAnOcgo1c+qFXBKELOznLP+lzD8kuzvLfzcZxvRrCCqQXh6syrgbr4QsHqwQSHtQgUR4hK0i2/jmt7It9VQ5T5AlDDjMZBJiHZXJbHMcuRQdlaNukkiBOQo+/+1R14oVK/nbJBvljL5a/PFTa10Cu9fa6MjXk9alRmgpG45uY6Gc76Nj4sQI2yKtLrYd/K7VR92q7jGg+jsKGYh8WLutHK5zsR1Qzss1A+oeneravkIedROgTd4o9DkPmybszv08u4huUv89oU4W+syepGNtLFXibjaZtUGdXE1ZKyNxjkqlqplMkY/cCU6vBNurJpBBOh2j7mJ/zMU2Rvsu6phxj8zIDtod2ooVK1b+KfkjwAC9JXx/mwsoAgAAAABJRU5ErkJggg=="];var r={back:false,color:"#FFFFFF",fontFamily:"Arial,sans-serif",fontSize:15,fontStyle:"normal",fontWeight:"normal",state:true,textDecoration:"none"};var y;var B;var x;var j;var f=[];function l(D,G){D="jwplayercaptions"+D;if(G!==undefined){var H=D+"="+G+"; expires=Wed, 1 Jan 2020 00:00:00 UTC; path=/";document.cookie=H}else{var F=document.cookie.split(";");for(var E=0;E<F.length;E++){var H=F[E];while(H.charAt(0)==" "){H=H.substring(1,H.length)}if(H.indexOf(D)==0){return H.substring(D.length+1,H.length)}}}return null}var A=function(){if(f.length>1){B.show();y.hide();try{d.getPlugin("display").hide();d.getPlugin("dock").hide()}catch(D){}}else{if(f.length==1){r.state=!r.state;l("state",r.state);e()}}};function s(D){console.log("CAPTIONS("+D+")")}function q(D){y.resize(i[0],Math.round(i[1]*0.94))}function p(D){x="idle";e()}function m(){var D=navigator.userAgent.toLowerCase();if(D.match(/ip(hone|ad|od)/i)!==null||D.match(/android/i)!==null){return true}else{return false}}function t(D){j=0;f=[];y.update(0);B.hide();try{d.getPlugin("display").show();d.getPlugin("dock").show()}catch(I){}try{d.getPlugin("display").show();d.getPlugin("dock").show()}catch(I){}var K=d.getPlaylist()[D.index];if(K["captions.files"]){var M=false;var E=K["captions.files"].split(",");if(K["captions.labels"]){var H=K["captions.labels"].split(",")}for(var G=0;G<E.length;G++){var J={file:E[G]};if(H&&H[G]){J.label=H[G]}else{J.label=E[G].substring(E[G].lastIndexOf("/")+1,E[G].indexOf(".")-1)}if(r.label==J.label){M=true;j=f.length;C(J.file)}f.push(J)}if(f.length>1){if(M==false){r.state=false}var L=[{label:"(Off)"}];for(var F=0;F<f.length;F++){L.push({label:f[F].label})}if(r.state){B.populate(L,j+1)}else{B.populate(L,0)}}else{C(f[0].file)}}else{if(K["captions.file"]){f.push({file:K["captions.file"]});C(f[0].file)}}e()}function C(E){var D=new a.captions.srt(w,s);D.load(E)}function w(D){y.populate(D);f[j].data=D;e()}function k(D){x="playing";e()}function v(D){if(r.file){d.getPlaylist()[0]["captions.file"]=r.file}if(r.files){d.getPlaylist()[0]["captions.files"]=r.files}if(r.labels){d.getPlaylist()[0]["captions.labels"]=r.labels}}function e(){if(!f.length){d.getPlugin("dock").setButton("captions");y.hide()}else{if(r.state){d.getPlugin("dock").setButton("captions",A,o[1]);if(x=="playing"){y.show()}else{y.hide()}}else{d.getPlugin("dock").setButton("captions",A,o[0]);y.hide()}}}this.resize=function(E,D){if(d.getRenderingMode()=="flash"||m()){return}B.resize(E,D);y.resize(E,Math.round(D*0.94));i=[E,D]};function g(){if(d.getRenderingMode()=="flash"||m()){return}d.onPlaylist(v);d.onPlaylistItem(t);d.onIdle(p);d.onPlay(k);d.onTime(c);try{d.getPlugin("controlbar").onHide(q);d.getPlugin("controlbar").onShow(z)}catch(D){}if(l("state")!==null){if(l("state")=="true"){r.state=true}else{r.state=false}}if(l("label")!==null){r.label=l("label")}for(var E in h){r[E]=h[E]}y=new a.captions.renderer(r,u);B=new a.captions.selector(n,u);e()}d.onReady(g);function n(E){B.hide();try{d.getPlugin("display").show();d.getPlugin("dock").show()}catch(D){}if(E>0){r.state=true;j=E-1;r.label=f[j].label}else{r.state=false}l("label",r.label);l("state",r.state);if(f[j].data){y.populate(f[j].data)}else{C(f[j].file)}e()}function z(D){var E=D.boundingRect.y;if(E>0){y.resize(i[0],Math.round(E*0.94))}}function c(D){y.update(D.position)}};a.captions={};a().registerPlugin("captions",b,"./captions.swf")})(jwplayer);(function(a){a.captions.renderer=function(p,g){var i;var o;var f;var j;var n;var k;var b="visible";var e;this.hide=function(){c({display:"none"})};this.populate=function(q){j=-1;o=q;d()};function l(q){f.innerHTML=q;if(q==""){b="hidden"}else{b="visible"}setTimeout(m,20)}this.resize=function(r,q){e=r;i=q;m()};function m(){var r=Math.round(p.fontSize*Math.pow(e/400,0.6));var q=Math.round(r*1.4);c({fontSize:r+"px",lineHeight:q+"px",visibility:b});var t=Math.round(e/2-f.clientWidth/2);var s=Math.round(i-f.clientHeight);c({left:t+"px",top:s+"px"})}function d(){var r=-1;for(var q=0;q<o.length;q++){if(o[q]["begin"]<=k&&(q==o.length-1||o[q+1]["begin"]>=k)){r=q;break}}if(r==-1){l("")}else{if(r!=j){j=r;l(o[q]["text"])}}}function h(){f=document.createElement("div");g.appendChild(f);c({color:"#"+p.color.substr(-6),display:"block",fontFamily:p.fontFamily,fontStyle:p.fontStyle,fontWeight:p.fontWeight,height:"auto",margin:"0 0 0 0",padding:"3px 9px",position:"absolute",textAlign:"center",textDecoration:p.textDecoration,whiteSpace:"nowrap",width:"auto"});if(p.back){c({background:"#000"})}else{c({textShadow:"-2px 0px 1px #000,2px 0px 1px #000,0px -2px 1px #000,0px 2px 1px #000,-1px 1px 1px #000,1px 1px 1px #000,1px -1px 1px #000,1px 1px 1px #000"})}}h();this.show=function(){c({display:"block"});m()};function c(q){for(var r in q){f.style[r]=q[r]}}this.update=function(q){k=q;if(o){d()}}}})(jwplayer);(function(a){a.captions.selector=function(r,j){var p;var i;var e;var b;var k;var q=[];function c(s,u){var t=[];if(s>0){t.push("url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAABCAYAAAB3yoT0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC5JREFUeNpi/P//PxMDAwM7EuZA4+PC6OpYGEbBKCAf/APinzjwDzxyKGoAAgwAImkVA8XMdAAAAAAASUVORK5CYII=) no-repeat 0 0")}if(s==p){t.push("url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASlJREFUeNrsVU1vwjAMrTOqCcalTLtyYj+SX8Cf5LQrYlxYK1RIcKQXybLyVbbDDlh6SiS778WJ7TbN0wpGNUHOuWgcEblfCYCYErGB3OWEqHBio0CC3CpEM5plEjDwtwIGPk84ClyDSFEApw/kr4wF4w1rizBP2jN+sHq78rdWZzFLXJsBmSddMd4ZHWOOmIFxYhxFRhZXlxZQd9/i5J78k7FlbODfM3bYXwCf1c1zyCxMRQadIm+w38K3EO9DsYdsCiJzRS5F1jnynECtHUoBKQEnSnHAnWvbwzeKB64SkOQ9qmWnRMIjnxCTFKFIH3jRF/TAMlKmH4wvUabfjDMq6cYVZEsCjzTaJXSzbrTcLJo8KqbOIitmzFgz7P7PuP7LH87TinYXYABVOIZoLrBbUwAAAABJRU5ErkJggg==) no-repeat 20px 0")}if(u){t.push("url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAYCAYAAABTE9enAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOJJREFUeNrs3NEKgzAMQFE7/P9fztjLqNJsWrsy5FwYwzYmrb34FktELBVl2fLt+sp9PTE9tWau+UitaMwfGTt73Zu3t9bMNae51sYDL9X/frw0YrLYETlKsr4r9Ubk6Nl36yCi+u3nI4kdneNT7IgcMWnfr2cca+NNUpJDPzs3IsedamcHFMlhno37xdw/126+sR8LcCMIDUIDhAYIDRAahAYIDRAaIDRAaBAaIDRAaIDQAKFBaIDQAKGBsex7Cj9112qS1STbkyMm7vst9KZzthrzGYPxtXzG4Pqa01xPAQYALYzIMaVqNUoAAAAASUVORK5CYII=) no-repeat 0 1px")}g(q[s].button,{background:t.join(",")})}function n(u){var s=p;var t=o(u);p=t;c(s);c(t);r(t)}function d(s){if(s.target==i||s.target==e){r(p)}}this.hide=function(){i.style.opacity=0;setTimeout(function(){i.style.display="none"},200)};function o(t){for(var s=0;s<q.length;s++){if(t.target==q[s].button){return s}}}function h(s){c(o(s),true)}function f(s){c(o(s),false)}this.populate=function(s,v){q=s;p=v;k.innerHTML="";for(var u=0;u<s.length;u++){var t=document.createElement("li");t.innerHTML=s[u].label;q[u].button=t;k.appendChild(t);g(t,{color:"#FFF",cursor:"pointer",display:"block",font:"12px/25px Arial,sans-serif",fontWeight:"bold",height:"25px",textShadow:"1px 1px 0 #000",textAlign:"center",width:"180px"});t.onclick=n;t.onmouseover=h;t.onmouseout=f;c(u)}m()};this.resize=function(t,s){b=[t,s];m()};function m(){g(i,{height:b[1]+"px",width:b[0]+"px"});g(e,{left:(b[0]-50)+"px"});g(k,{left:Math.round(b[0]/2-90)+"px",top:Math.round(b[1]/2-q.length*12.5)+"px"})}function l(){i=document.createElement("div");i.onclick=d;j.appendChild(i);g(i,{backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAGQCAYAAACJccGfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJlJREFUeNrskksKwDAIRFV6/+v1Nv0sQymkBD+jVchGdOY5hIlop6GEHrXd75hOnNqNIA5Y0cQaPisLGiZgQbbzFdhrS0/ksUUhhb02aKW0Rh6w0i55OCqRdmLd6Mb4C7nzKJkYCqkPh4nLv0QXNIJsg9BRVkpz+Nj6oKOQ+qSuYZuH9HVCcka4qCEgiYnLtWze+Garfu0lwAArHE4YPfyZuAAAAABJRU5ErkJggg==)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",cursor:"pointer",display:"none",opacity:0,position:"relative",webkitTransition:"opacity 150ms linear",MozTransition:"opacity 150ms linear",oTransition:"opacity 150ms linear",transition:"opacity 150ms linear"});e=document.createElement("div");e.onclick=d;i.appendChild(e);g(e,{background:"transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xJREFUeNrsVz1IW1EUjtKtQyh0yRQr2kFCIlHB7cUMBhpCXKKY5UVBnfwZWgUppFvHOEUkg84ucXBxeg1ChiKmUCQ0EV+K1Q4BnyKImujtOem95fp8pvTHeIX7weHlnXNeON+955x7rs0mISEhISEhISEh0UgQQoIgOyBvfuPnBvkM8lZEEiHCYWpqioA6buHnrVQqVeY3MzODfglhiFxfX1eICX19fRikypF4fnV1VTX7oQnELgSR9fX198QC/f39p2D2wM+nZ2dnJbN9aGiIEVFE2RRlcHCQwIrfIjMxMVG+vLz8aNZHIhFGQigimBqK1+vNn5yckHo4Pz8n4McI5EQicYNQR0fHzt7eniWJ3d1d4na7eRJ2m8Cw+/3+L1ZEVFV9NCSwOz07PDwsWhEBPenu7r7RzUQl8bJarX6tVyMXFxckEAgUhN0RiNEP58mNtgUtl8RiMbK/v3+L0MjIiC4cGYjrlTlQbMVdXV21mnA6neTo6OguMuIAVv67Ocienh5W2Bis4nK5vlmlmlDnyNLS0ms+uPHxcRaggSc7dfOEQqFT3m92dla8AxGCJNvb23xwKGGTnxoMBkmhUCDz8/O8n1C1kuACs5x+KeImv4RNQkLiUd3ZNZAHaaPN//sPfT7fh4c4E5r/YfXjIAY91xJ17CjTnD5Bv9FBwlRnp7tJ6NPTqBTCO7gOc9Rya2uroes66e3txQA1RVHI5OTktNlOdQoI3kMSeC+Zm5vDUz8MujQckEhWQ30+n89x08C9EolvbGyk6QzlpKJDMDoSWV1d1Xg7+gOIgkbYoVwuhys/3dbWhsEjQTzp9a2tLYPtDOjTfxLTk78lk81mB+DxDgTvHs6mpqYX7e3tGry3mO3sm0wm40P74uJiaXh4eKFYLJbgu07QLYyNjbWwMqPPgUbUyBrcMWywwLX8xndN036NI5ubm7wddysGxNZGR0cxuBWHw9GZTCYXjo+PMfhP+D00iRrRaDS6kkqlShyhe08v1TB+1vrBwcEy3sGBDKZPbZLFdKJ2A1IG7TpNLVbUBqQgNgl08pTL5RxrApFIBPVaI7ueSsd0fvDTuPYbp3aDGyDt1IeN+Ozu7uH0ekOKXUJCQkJCguKHAAMAvduPUQLB93IAAAAASUVORK5CYII=)",cursor:"pointer",position:"absolute",left:"0px",top:"0px",margin:"0px",padding:"0px",display:"block",width:"50px",height:"50px"});k=document.createElement("ul");i.appendChild(k);g(k,{display:"block",height:"auto",listStyle:"none",margin:"0px",padding:"0px",position:"absolute",width:"180px"})}l();this.show=function(){i.style.display="block";setTimeout(function(){i.style.opacity=1},20)};function g(s,t){for(var u in t){s.style[u]=t[u]}}}})(jwplayer);(function(a){a.captions.srt=function(g,b){var d;var c;function h(k){if(k==0){b("Crossdomain loading denied: "+c)}else{if(k==404){b("SRT File not found: "+c)}else{b("Error "+k+" loading SRT file: "+c)}}}this.load=function(l){c=l;try{d.open("GET",l,true);d.send(null)}catch(k){b("Error loading SRT File: "+l)}};function f(o){var l=[{begin:0,text:""}];o=o.replace(/^\s+/,"").replace(/\s+$/,"");var n=o.split("\r\n\r\n");if(n.length==1){n=o.split("\n\n")}for(var k=0;k<n.length;k++){var m=j(n[k]);if(m.text){l.push(m);if(m.end){l.push({begin:m.end,text:""});delete m.end}}}if(l.length>1){g(l)}else{b("Invalid SRT file: "+c)}}function j(o){var n={};var p=o.split("\r\n");if(p.length==1){p=o.split("\n")}try{var l=p[1].indexOf(" --> ");if(l>0){n.begin=i(p[1].substr(0,l));n.end=i(p[1].substr(l+5))}if(p[2]){n.text=p[2];for(var m=3;m<p.length;m++){n.text+="<br/>"+p[m]}}}catch(k){}return n}function i(k){k=k.replace(",",".");var m=k.split(":");var l=0;if(k.substr(-1)=="s"){l=Number(k.substr(0,k.length-1))}else{if(k.substr(-1)=="m"){l=Number(k.substr(0,k.length-1))*60}else{if(k.substr(-1)=="h"){l=Number(k.substr(0,k.length-1))*3600}else{if(m.length>1){l=Number(m[m.length-1]);l+=Number(m[m.length-2])*60;if(m.length==3){l+=Number(m[m.length-3])*3600}}else{l=Number(k)}}}}return l}function e(){d=new XMLHttpRequest();d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){f(d.responseText)}else{h(d.status)}}}}e()}})(jwplayer);