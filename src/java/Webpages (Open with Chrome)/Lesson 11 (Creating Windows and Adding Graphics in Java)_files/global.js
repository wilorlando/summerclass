var classroomUrl = location.href;
var globalURL = '';
var courseURL = '';
var courseCodeLocation;
var classroomCourseCode = '';
var courseCode;

function urlDetector(){
	if(globalURL == '' && courseURL == ''){
		
		var scriptArray = document.getElementsByTagName("script");
		var scriptSearchStr = "";

		
		for(var i = 0; i < scriptArray.length; i++) {
			
		  var scriptSearchStr = scriptArray[i].src;
		  var globalSearch = scriptSearchStr.search("/global.js");
		  var courseSearch = scriptSearchStr.search("/course.js");
		  
		  if(globalSearch>-1){
			  globalURL = scriptSearchStr.replace("/global.js","/");
			}
		  if(courseSearch>-1 && globalURL != 'undefined'){
				courseCodeLocation = scriptSearchStr.indexOf("/course.js");
				courseCodeStart = courseCodeStop = courseCodeLocation;
				courseCodeStart -= 5;
				classroomCourseCode = scriptSearchStr.substring(courseCodeStart,courseCodeStop);
				courseURL = scriptSearchStr.replace("/course.js","/");
			}
		  if(globalURL != '' && courseURL != ''){
			  i = scriptArray.length;
			}
		}
	}
}

/* --------------------- START JW Player scripts START --------------------- */

var disableGlobalJWplayers;


function runJWsetup(){	
		if(disableGlobalJWplayers != true){
			$('.jw').hide();
			document.write('<div id=vidFrame_'+placeHolderNum+'></div>');	
			if(typeof jwplayer == 'undefined'){
			urlDetector();
			HTML5_jwplayer_scriptPath = globalURL + "jwplayer/HTML5_jwplayers.js";
			HTML5_jwplayer_scriptPath = "<script src="+HTML5_jwplayer_scriptPath+"></script>";
			document.write(HTML5_jwplayer_scriptPath);
			}
		}
}
function runJWloader(){
	if(disableGlobalJWplayers != true){
		if(courseCode == ''){
			courseCode = classroomCourseCode;
		}
		HTML5_video_scriptPath = globalURL + "jwplayer/HTML5_video.js";
		HTML5_video_scriptPath = "<script src="+HTML5_video_scriptPath+"></script>";
		document.write(HTML5_video_scriptPath);
	}
}

function mp3runJWsetup(){
	if(disableGlobalJWplayers != true){
		$('.jw').hide();
		document.write('<div id=audioFrame_'+placeHolderNum+'></div>');	
		if(typeof jwplayer == 'undefined'){
		urlDetector();
		HTML5_jwplayer_scriptPath = globalURL + "jwplayer/HTML5_jwplayers.js";
		HTML5_jwplayer_scriptPath = "<script src="+HTML5_jwplayer_scriptPath+"></script>";
		document.write(HTML5_jwplayer_scriptPath);
		}
	}
}
function mp3runJWloader(){
	if(disableGlobalJWplayers != true){
		if(courseCode == ''){
			courseCode = classroomCourseCode;
		}
		HTML5_audio_scriptPath = globalURL + "jwplayer/HTML5_audio.js";
		HTML5_audio_scriptPath = "<script src="+HTML5_audio_scriptPath+"></script>";
		document.write(HTML5_audio_scriptPath);
	}
}
/* --------------------- STOP JW Player scripts STOP --------------------- */

/* --------------------- START Replace Lightbox2 popup image with with fancybox popup image START --------------------- */

$(document).ready(function() {
	$('[rel]').each(function() {
		relValue = $(this).attr('rel');
		relCheck = relValue.search('lightbox');
		if(relCheck > -1){
			relValue = relValue.replace('lightbox','');
			relValue = relValue.replace('[','');//new
			relValue = relValue.replace(']','');//new
			$(this).addClass('popupimage');
			$(this).attr('rel',relValue);
		}
	});
});
/* --------------------- STOP Replace Lightbox2 popup image with with fancybox popup image STOP --------------------- */


var fancyboxLoaded;


function loadFancyBoxCode(){
if(fancyboxLoaded != true){	
	fancyboxLoaded = true;


/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
'"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
"function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
"image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);	
	}
setFancyBoxStyle();
}

function setFancyBoxStyle(){
	$("a.popupimage").fancybox({
		'titlePosition'	: 'inside',
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade',
		'autoScale'		: false
	});
	
var fancyBoxDivPatch_href;
var fancyBoxDivPatch_id;
var fancyBoxDivPatch_div;

	$("a.popupdiv").fancybox({
/*		'onStart':function(){
			fancyBoxDivPatch_start();
		},	
*/		'centerOnScroll'	: true,
		'titlePosition'		: 'inside',
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'		: false,
		
		'onComplete':function(){
			fancyBoxDivPatch_complete();
		}
	
	});
	$("a.popupsite").fancybox({
		'titlePosition'		: 'inside',
		'width'				: "95%", 
		'height'			: "90%",
		'autoScale'		    : false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'type'				: 'iframe'
	});
	$("a.popupswf").fancybox({
		'titlePosition'		: 'inside',
		'padding'			: 10,
		'autoScale'		    : false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade'
	});
	
	
	$("a.popupdiv").click(function(){
		
		fancyBoxDivPatch_href = $(this).attr('href');
		fancyBoxDivPatch_id = fancyBoxDivPatch_href.replace('#','');
		fancyBoxDivPatch_div = $(fancyBoxDivPatch_href).html();
	})
	/*function fancyBoxDivPatch_start(){
		//Anything that we'd like to happen when popupdiv starts, but before the actual content is loaded
	}*/

	function fancyBoxDivPatch_complete(){
		if($('.fancybox-inline-tmp').exists()){
			$('.fancybox-inline-tmp').html(fancyBoxDivPatch_div).attr('id',fancyBoxDivPatch_id).removeClass('fancybox-inline-tmp').show();
			setFancyBoxStyle();
			$('#fancybox-wrap').animate({"top": ($(window).scrollTop() + 30) + "px"}, "slow" );	
		}
	}
}

/* ------------------START PRINTER FRIENDLY CODEBOX---------------------------- */
var pf_placeholder_image;
var pf_placeholder_interactivity;

$(document).ready(function(){

		urlDetector();
		loadFancyBoxCode();
		
		var printerFriendlyCheck = classroomUrl.search(/PrintLesson/i);
		var fullscreenCheck = classroomUrl.search(/fullscreen=true/i);
		
		pf_placeholder_image = '<img style="display:none" class="pf_placeholder_image" title="hidden image or multimedia element" alt="hidden image or multimedia element" src="'+globalURL+'images/pf_placeholder_a.png" border="0" />';
		
		pf_placeholder_interactivity = '<img style="display:none" class="pf_placeholder_interactivity" title="hidden image or multimedia element" alt="hidden image or multimedia element" src="'+globalURL+'images/pf_placeholder_a.png" border="0" />';
	
		var printSaveNotebox = "<div id='pf_notebox' align='center'><div class='roundednotebox_pf browser_notebox'><p><strong>Printing This Lesson</strong></p><p>Select what you’d like to include when you print, and then click the <strong>Print Lesson</strong> button:</p><form id='pfForm' name='pfForm' method='post' action=''><p><input name='radio' type='radio' id='pfImagesOnBtn' value='pfImagesOnBtn' checked='checked' onclick='showAllImagesPF()'/><label for='pfImagesOnBtn'>Text, images, and interactive elements (<strong>Note:</strong> Only IE will print Flash elements.)</label></p><p><input type='radio' name='radio' id='pfInteractivityOffBtn' value='pfInteractivityOffBtn' onclick='hideInteractivityPF()'/><label for='pfInteractivityOffBtn'>Text and images only</label></p><p><input type='radio' name='radio' id='pfImagesOffBtn' value='pfImagesOffBtn' onclick='hideAllImagesPF()'/><label for='pfImagesOffBtn'>Text only</label></p><p><INPUT onclick='printlessonPF()' value='Print Lesson' type=button></p></form><p><strong>Saving This Lesson</strong></p><p>For instructions on saving this lesson (shown below), please select the browser you're using.</p><div id='pf_notebox_browser_buttons_container' align='center'><table width='100%' border='0' align='center'><tr><td align='center'><div id='pf_chrome'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_chrome.png' alt='chrome icon' border='0' class='pf_visible'/><br><span class='caption'>Chrome</span></div></div></td><td align='center'><div id='pf_firefox'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_firefox.png' alt='Firefox icon' border='0' class='pf_visible'/><br><span class='caption'>Firefox</span></div></div></td><td align='center'><div id='pf_ie10'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_ie_10.png' alt='Internet Explorer 10 icon' border='0' class='pf_visible'/><br><span class='caption'>IE</span></div></div></td><td align='center'><div id='pf_safari'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_safari.png' alt='Safari icon' border='0' class='pf_visible'/><br><span class='caption'>Safari</span></div></div></td></tr></table></div><div align='center'><INPUT type='button' class='pf_hide_directions_btn' style='display:none;' value='Hide Directions'></div><div id='pf_notebox_browser_directions_container'></div><div align='center'><INPUT type='button' class='pf_hide_directions_btn' style='display:none;' value='Hide Directions'></div></div></div>";
		
		/* This IF is for the new classroom */
		if($('#pf_notebox_container').exists()){
			$(document).ready(function() {
				$('div[id*=vidFrame]').addClass('classroomJwVideoContainer');
				$('div[id*=audioFrame]').addClass('classroomJwAudioContainer');
			});
			$('<link href="'+globalURL+'printer_friendly/printer_friendly.css" rel="stylesheet" type="text/css" media="print">').appendTo($('head'));
			$('#pf_notebox_container').html(printSaveNotebox);
			$('u:contains(INSTRUCTIONS:)').first().hide(); //delete this line after old classroom is completely phased out
			$('ul:contains(To print this page)').first().hide(); //delete this line after old classroom is completely phased out
		}
		 /* delete this ELSE IF after old classroom is completely phased out */
		else if((printerFriendlyCheck > -1)&&(fullscreenCheck == -1)){
			$(document).ready(function() {
				$('div[id*=vidFrame]').addClass('classroomJwVideoContainer');
				$('div[id*=audioFrame]').addClass('classroomJwAudioContainer');
			});

			$('<link href="'+globalURL+'printer_friendly/printer_friendly.css" rel="stylesheet" type="text/css" media="print">').appendTo($('head'));
			$('body').prepend(printSaveNotebox);
			$('u:contains(INSTRUCTIONS:)').first().hide();
			$('ul:contains(To print this page)').first().hide();
		}
		
		$('#showImagesBtnPF').attr('disabled', 'disabled');
		$('#hideImagesBtnPF').removeAttr('disabled');
		
		$('img').addClass('pf_image').before(pf_placeholder_image);
		$('object').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('video').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('audio').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('iframe').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('embed').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('.classroomJwAudioContainer').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('.classroomJwVideoContainer').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		
/* ///////////////////////// BEGIN PF SAVING INSTRUCTIONS ///////////////////////// */

	/* Change the cursor into a pointer finger when hovering over the browser icons */
	$('#pf_chrome,#pf_firefox,#pf_ie10,#pf_safari').css('cursor', 'pointer');
	
	/* Hide the browser directions container when the page loads */
	$('#pf_notebox_browser_directions_container').hide();
	
	/* Function triggered by the 'Hide Directions' button */
	$('.pf_hide_directions_btn').click(function(){
		$('.pf_hide_directions_btn').hide();
		$('#pf_notebox_browser_directions_container').hide("slow");
		$('#pf_chrome, #pf_firefox, #pf_ie10, #pf_safari').fadeTo('slow',1.0);
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	});

	/* When a browser icon is clicked, the other browser icons will fade out to this opacity */
	var pf_image_fade = 0.22;
	
	/* function triggererd by Chrome icon click */	
	$('#pf_chrome').click(function(){
		pf_chrome_html = "<p><strong>Chrome</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Click the <strong>Command</strong> button <span class='NumberedList'><img src='"+globalURL+"printer_friendly/chrome_files/image001.jpg'></span> in the upper-right corner, and choose <strong>Save page as</strong>.</li><p align='center'><b><img src='"+globalURL+"printer_friendly/chrome_files/image002.jpg'></b><br/><span class='caption'>Choose <strong>Save page as</strong></span></p><strong></strong><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your own. However, do not add your own extension to that filename.</li><li>Choose <strong>Webpage, Complete</strong> as the file type.</li><p align='center'><span style='text-align:center'><img src='"+globalURL+"printer_friendly/chrome_files/image003.jpg'><br></span><span class='caption'>Use <strong>Webpage, Complete</strong> as the file type</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>You'll likely see two icons per downloaded lesson, as in the example below.</li><p align='center'><span style='text-align:center'><img src='"+globalURL+"printer_friendly/chrome_files/image004.jpg'><br></span><span class='caption'>Icons for one lesson saved as <strong>Webpage, Complete</strong></span><strong></strong></p><li>To view the lesson, double-click the single file with the *.htm extension. Opening the folder icon won't show you the lesson; it will only display icons for extra files that the lesson needs to display properly.</li><li>If you have multiple programs for opening *.htm files, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With.</strong> You'll be able to select Chrome to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Chrome) but opened using a different browser (like Firefox). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #4 above).</p>";
		
		$('#pf_notebox_browser_directions_container').html(pf_chrome_html).show("slow");
		$('#pf_firefox, #pf_ie10, #pf_safari').fadeTo('slow',pf_image_fade);
		$('#pf_chrome').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})

	/* function triggererd by Firefox icon click */	
	$('#pf_firefox').click(function(){
		pf_firefox_html = "<P><strong>Firefox</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Choose <strong>Firefox</strong> ><strong>Save Page As</strong>. </li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image001.jpg'><br><span class='caption'> Choose <strong>Save Page As</strong></span></p><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your own. However, do not add your own extension to that filename.</li><li>Choose <strong>Web Page, complete</strong> as the file type.</li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image002.jpg'><br><span class='caption'> Use <strong>Web Page, complete</strong> as the file type</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>You'll likely see two icons per downloaded lesson, as in the example below.</li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image003.jpg'><br><span class='caption'> Icons for one lesson saved as <strong>Web Page, complete</strong></span></p><li>To view the lesson, double-click the file with the *.htm extension (the one that looks like a dog-eared piece of paper). Opening the folder icon won't show you the lesson; it will only display icons for extra files that the lesson needs to display properly.</li><li>If you have multiple programs for opening *.htm files, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With</strong>. You'll be able to select Firefox to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Firefox) but opened using a different browser (like Internet Explorer). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #4 above).</p>";
		
		$('#pf_notebox_browser_directions_container').html(pf_firefox_html).show("slow");
		$('#pf_chrome, #pf_ie10, #pf_safari').fadeTo('slow',pf_image_fade);
		$('#pf_firefox').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})



	/* function triggererd by IE10 icon click */	
	$('#pf_ie10').click(function(){
		pf_ie10_html = "<p><strong>Internet Explorer, Desktop Mode</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Click the Tools button<img src='"+globalURL+"printer_friendly/IE10_files/image001.jpg' alt='ie10'> in the upper-right corner, and choose <strong>Save as</strong>.</li><p align='center'><img src='"+globalURL+"printer_friendly/IE10_files/image002.jpg' alt='ie10'><br><span class='caption'>Select <strong>Save as</strong> from the shortcut menu </span></p><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your choice. However, do not add your own extension to that filename.</li><li>Choose Web Archive or Web Archive, single file as the format (file type). (If you have file extensions displayed, you'll see *.mht at the end.) Doing this will save the downloaded lesson as a single file, which is the most convenient method.</li><p align='center'><img src='"+globalURL+"printer_friendly/IE10_files/image003.jpg'><br><span class='caption'>Save the lesson as a <strong>Web Archive</strong>, if possible</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>If you saved the lesson as a Web Archive, double-click the lesson icon. The icon is similar to the image below.</li><p align='center'><img src='"+globalURL+"printer_friendly/IE10_files/image004.jpg'><br><span class='caption'>Icon for a <strong>Web Archive</strong></span><strong></strong></p><li>If you have multiple programs for opening *.mht files, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With</strong>. You'll be able to select Internet Explorer to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Or interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Internet Explorer) but opened using a different browser (like Firefox). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #3 above).</p>";
		
		$('#pf_notebox_browser_directions_container').html(pf_ie10_html).show("slow");
		$('#pf_chrome, #pf_firefox, #pf_safari').fadeTo('slow',pf_image_fade);
		$('#pf_ie10').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})

	/* function triggererd by Safari icon click */	
	$('#pf_safari').click(function(){
		pf_safari_html = "<p><strong>Safari 5.1</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Click the <strong>Page</strong> button <img src='"+globalURL+"printer_friendly/safari_files/image001.jpg'>in the upper-right corner, and choose <strong>Save As</strong>. If you're using a Mac, you can choose File >Save As or click COMMAND + S.</li><p align='center'><img src='"+globalURL+"printer_friendly/safari_files/image002.jpg'><br><span class='caption'>Choose <strong>Save As</strong> from the shortcut menu</span></p><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your own. However, do not add your own extension to that filename.</li><li>Choose <strong>Web Archives</strong> as the file type.</li><p align='center'><img src='"+globalURL+"printer_friendly/safari_files/image003.jpg'><br><span class='caption'>Use <strong>Web Archives</strong> as the file type</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>If you saved the lesson as a .webarchive, double-click the lesson icon to view the lesson. The icon is similar to the image below. If you're using a Mac, the filename extension .webarchive may not appear.</li><p align='center'><img src='"+globalURL+"printer_friendly/safari_files/image004.jpg'><br><span class='caption'>Icon for one lesson saved as a .webarchive</span></p><li>If you have multiple programs for opening Web Archives file types, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With</strong>. You'll be able to select Safari to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Safari) but opened using a different browser (like Chrome). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #3 above).</p>"
		
		$('#pf_notebox_browser_directions_container').html(pf_safari_html).show("slow");
		$('#pf_chrome, #pf_firefox, #pf_ie10').fadeTo('slow',pf_image_fade);
		$('#pf_safari').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})
		
/* ///////////////////////// END PF SAVING INSTRUCTIONS ///////////////////////// */
		
		
});
function printlessonPF(){
		window.print();	
	}
function hideAllImagesPF(){
	$('.pf_image').hide();
	$('.pf_interactivity').hide();
				
	$('.pf_placeholder_image').show();
	$('.pf_placeholder_interactivity').show();
	
	$('.pf_visible').show().prev('img').hide();
	}
function hideInteractivityPF(){
	$('.pf_interactivity').hide();
	$('.pf_placeholder_interactivity').show();
				
	$('.pf_image').show();
	$('.pf_placeholder_image').hide();
	
	$('.pf_visible').show().prev('img').hide();
	}
function showAllImagesPF(){
	$('.pf_image').show();
	$('.pf_placeholder_image').hide();
		
	$('.pf_interactivity').show();
	$('.pf_placeholder_interactivity').hide();
	
	$('.pf_visible').show().prev('img').hide();
	}

/* ------------------STOP PRINTER FRIENDLY CODEBOX----------------------------------- */

/* ------------------START Saved lesson layout update START----------------------------------- */
$(document).ready(function(){
  var savedLessonWidth = '644px';
  locationCheck = location.hostname;
  ed2goLocationCheck = locationCheck.search(/ed2go/i);
  if(ed2goLocationCheck == -1){
	  $('.left-navigation-links').css('display','none');
	  $('.roundednotebox_pf').html("<p><strong>Offline Content</strong></p><p><strong>Note:</strong> You are currently viewing an offline version of this lesson that was saved to your computer. Please be aware that some elements may not display or function correctly in this mode. If so, log into the classroom to properly view this lesson. Thank you.</p>");
	  pfTitleUpdateText = 'Offline View';
	  pfTitleUpdate = $('.classroom-section-title').html();
	  pfTitleUpdate = pfTitleUpdate.replace(/Printer Friendly/i,pfTitleUpdateText);
	  $('.classroom-section-title').html(pfTitleUpdate);
	  $('.breadcrumb-inactive').text(pfTitleUpdateText);
	  $('.printer-friendly-link-to-top').html('<a href="#title-bar">Back to top</a>');
	  $('.main-content').css({
		 float:'none',
		 width:'auto',
		 marginLeft:'auto',
		 marginRight:'auto' 
	  });
	  $('.title-bar-login-button').hide();
	  $('.title-bar-help-button').hide();
	  $('.title-bar-centering-container, .classroom-footer-text-right-align').css({
		 float:'none',
		 marginLeft:'auto',
		 marginRight:'auto',
		 width:savedLessonWidth
	  });
	  $('.classroom-main-container').css({
		 width:savedLessonWidth
	  });
	  $('.classroom-footer-text').css({
		 width:'auto'
	  });
	  if($('#ctl00_ctrlToggle_pnlSettings').exists()){
		  $('#ctl00_ctrlToggle_pnlSettings').hide();
	  }
	  
  }
  
  
})

/* ------------------STOP Saved lesson layout update STOP----------------------------------- */

/* ------------------START NEXT/FINAL STEPS GLOBAL UPDATE---------------------------- */

var thisCourseTitle = 'this';

/* This function checks to see if objects exist on a page, used in the following if statements */
$.fn.exists = function(){return this.length>0;}

$(document).ready(function() {
	
	if($('.stepsBoxPlaceholder').exists()) {
		$('.stepsBoxPlaceholder').hide();
	}
	if($('title').exists()) {
		thisCourseTitle = $(document).attr('title');
		
	}
	else{thisCourseTitle = 'this'};
	
	var SPT_search = thisCourseTitle.search(/Self-Paced Tutorial/i);
	var SPT_course;
	if(SPT_search > -1){
		SPT_course = true;
	}
	else{
		SPT_course = false;
	}
	
	printerFriendlyCheck = classroomUrl.search(/PrintLesson/i); /* checks to see if location is printer-friendly page */
	
	if(printerFriendlyCheck > -1 && !$('#pf_notebox_container').exists() && $('.title-bar-close-button').exists()){
		thisCourseTitleStop = thisCourseTitle.lastIndexOf(": Lesson"); // Removes breadcrumbs from title 
		thisCourseTitle = thisCourseTitle.substring(0,thisCourseTitleStop);
	}
	else if(printerFriendlyCheck > -1 && $('#pf_notebox_container').exists() && !$('.left-navigation-links').exists()){
		thisCourseTitleStop = thisCourseTitle.lastIndexOf(": Lesson"); // Removes breadcrumbs from title 
		thisCourseTitle = thisCourseTitle.substring(0,thisCourseTitleStop);
	}
	
	
	/*
	//The code below is for the new classroom
	if($('#pf_notebox_container').exists()){
		thisCourseTitleStop = thisCourseTitle.lastIndexOf(": Lesson"); // Removes breadcrumbs from title 
		thisCourseTitle = thisCourseTitle.substring(0,thisCourseTitleStop);
	}
	*/
	
	var finalSteps_no_rr;
	var finalStepsIMG_exists;
	var nextStepsIMG_exists;
	
	var otherCourses_innerHTML;
	
	/* Check to see if next or final steps image exists */
    $('img').each(function(){
		
		nextStepsSrcValue = $(this).attr('src');
		nextStepsCheck = nextStepsSrcValue.search(/nextsteps/i);
		
		finalStepsSrcValue = $(this).attr('src');
		finalStepsCheck = finalStepsSrcValue.search(/finalsteps/i);
		
		if(nextStepsCheck > -1){
			nextStepsIMG_exists = true;
		};
		
		if(finalStepsCheck > -1){
			finalStepsIMG_exists = true;
		};
	})	
	
	
	/* This is the new content that appears within the global NEXT steps box */
	var nextSteps_innerHTML = "<div id='nextSteps_item_intro'><p class='nextstepsroundedtitle_global'><img class='next_steps_icon' align='right' src='"+globalURL+"nextsteps/steps_icon.png'><strong>Next Steps</strong></p><p>Okay, you've finished your first lesson. Now what do you do?</p><p>You'll want to take the following steps, in any particular order you like:</p></div><ul><li id='nextSteps_item_quiz'><strong>Take the quiz</strong>. Reinforce what you learned in the lesson by testing yourself with a short five-question quiz. You can access the quiz for each lesson by clicking the <strong>Quizzes</strong> link. </li><li id='nextSteps_item_assignment'><strong>Do the assignment.</strong> Want some hands-on practice applying what you've just learned? Then roll up your sleeves and dig into the assignment! Just click the <strong>Assignments</strong> link to get to each lesson's assignment.</li><li id='nextSteps_item_faqs'><strong>Check out the FAQs</strong>. Since learning something new usually raises questions, every lesson in this course comes with an FAQs section. To get to the FAQs, click the <strong>Resources</strong> link, and then click <strong>FAQs</strong>.</li><li id='nextSteps_item_discussion'><strong>Drop by the Discussion Area</strong>. Come talk with me and your fellow students in the Discussion Area! Ask questions about anything that came up in the lesson, and share your insights with everyone. This is where we'll create a learning community.</li><li id='nextSteps_item_index'><strong>View the index</strong>. If you want to find a topic but can't quite remember where it was, then the index is the place to go. You'll find it by clicking the <strong>Resources</strong> link, and then clicking <strong>Course Index</strong>.</li><li id='nextSteps_item_resources'><strong>Browse resources for further learning</strong>. I've included a list of recommendations for books so you can continue learning more about this topic long after our time together ends. You'll find these by clicking the <strong>Resources</strong> link.</li></ul>";
	
	/* This is the container that holds the NEXT steps content */
	var nextSteps_innerHTML_with_container = '<div style="text-align: center;"><div class="nextstepsrounded_global">'+nextSteps_innerHTML+'</div></div>';
	
	/* This is the new content that appears within the global NEXT steps box for SPTs */
	var nextSteps_innerHTML_SPT = "<div id='nextSteps_item_intro'><p class='nextstepsroundedtitle_global'><img class='next_steps_icon_SPT' align='right' src='"+globalURL+"nextsteps/steps_icon.png'><strong>Next Steps</strong></p><p>Okay, you've finished your first lesson. Now what do you do?</p><p>You'll want to take the following steps, in any particular order you like:</p></div><ul><li id='nextSteps_item_quiz'><strong>Take the quiz</strong>. Reinforce what you learned in the lesson by testing yourself with a short five-question quiz. You can access the quiz for each lesson by clicking the <strong>Quizzes</strong> link. </li><li id='nextSteps_item_assignment'><strong>Do the assignment.</strong> Want some hands-on practice applying what you've just learned? Then roll up your sleeves and dig into the assignment! Just click the <strong>Assignments</strong> link to get to each lesson's assignment.</li><li id='nextSteps_item_faqs'><strong>Check out the FAQs</strong>. Since learning something new usually raises questions, every lesson in this course comes with an FAQs section. To get to the FAQs, click the <strong>Resources</strong> link, and then click <strong>FAQs</strong>.</li><li id='nextSteps_item_index'><strong>View the index</strong>. If you want to find a topic but can't quite remember where it was, then the index is the place to go. You'll find it by clicking the <strong>Resources</strong> link, and then clicking <strong>Course Index</strong>.</li><li id='nextSteps_item_resources'><strong>Browse resources for further learning</strong>.  Included is a list of recommendations for books so you can  continue learning more about this topic long after this course ends. You'll find these by clicking the <strong>Resources</strong> link.</li></ul>";
	
	/* This is the container that holds the NEXT steps content for SPTs */
	var nextSteps_innerHTML_with_container_SPT = '<div style="text-align: center;"><div class="nextstepsrounded_global">'+nextSteps_innerHTML_SPT+'</div></div>';	
	/* This is the new content that appears within the global FINAL steps box */
	var finalSteps_innerHTML = "<div id='finalSteps_item_intro'><p class='finalstepsroundedtitle_global'><img class='final_steps_icon' align='right' src='"+globalURL+"nextsteps/steps_icon.png'><strong>Final Steps</strong></p><p>Now that you've finished the last lesson, is there anything else to do? Yes, several things!</p></div><ul><li id='finalSteps_item_quiz_assignment_faqs'><strong>Quiz, assignment, and FAQs:</strong> You still have a quiz for this lesson, as well as an assignment, so be sure to do these. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</li><li id='finalSteps_item_resources'><strong>Resources for further learning:</strong> If you haven't already checked out the Recommended Books and Resources, now would be a great time. When it comes to a topic like <em>"+thisCourseTitle+"</em>, there's always more to learn. To access these, just click the <strong>Resources</strong> link. </li><li id='finalSteps_item_exam'><strong>Final exam:</strong> Here's the moment all those quizzes have been preparing you for—the cumulative final for this course. Let me give you a tip: Print the final before taking it so you can study and relieve any test anxiety you might have. (You can have the classroom open when you take the final too.) You only get one chance at the final, so you'll want to do your best. To access it, click the <strong>Completion</strong> link and then click <strong>Final Exam</strong>. Good luck!</li><li id='finalSteps_item_evaluation'><strong>Course evaluation:</strong> I'd love to know what you thought of this course and if you have any suggestions for improvement. So please take some time, either before or after you take the final, to fill out a brief evaluation. I appreciate your feedback, and future students will too! You'll find the link to this by clicking <strong>Completion</strong>, and then clicking <strong>Evaluation</strong>.</li><li id='finalSteps_item_discussion'><strong>Discussion Area:</strong> The Discussion Area will be open for two more weeks after Lesson 12's release, so please feel free to stop by and ask any questions (except about the final exam) and share your thoughts.</li></ul>";
	
	/* This is the container that holds the FINAL steps content*/
	var finalSteps_innerHTML_with_container = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML+'</div></div>';
	
	/* This is the new content that appears within the global FINAL steps box with no reccomended resources */
	var finalSteps_innerHTML_no_rr = "<div id='finalSteps_item_intro'><p class='finalstepsroundedtitle_global'><img class='final_steps_icon_no_rr' align='right' src='"+globalURL+"nextsteps/steps_icon.png'><strong>Final Steps</strong></p><p>Now that you've finished the last lesson, is there anything else to do? Yes, several things!</p></div><ul><li id='finalSteps_item_quiz_assignment_faqs'><strong>Quiz, assignment, and FAQs:</strong> You still have a quiz for this lesson, as well as an assignment, so be sure to do these. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</li><li id='finalSteps_item_finalsteps_item_resources'><strong>Resources for further learning:</strong> If you haven't already checked out the Recommended Books, now would be a great time. When it comes to a topic like <em>"+thisCourseTitle+"</em>, there's always more to learn. To access these, just click the <strong>Resources</strong> link. </li><li id='finalSteps_item_exam'><strong>Final exam:</strong> Here's the moment all those quizzes have been preparing you for—the cumulative final for this course. Let me give you a tip: Print the final before taking it so you can study and relieve any test anxiety you might have. (You can have the classroom open when you take the final too.) You only get one chance at the final, so you'll want to do your best. To access it, click the <strong>Completion</strong> link and then click <strong>Final Exam</strong>. Good luck!</li><li id='finalSteps_item_evaluation'><strong>Course evaluation:</strong> I'd love to know what you thought of this course and if you have any suggestions for improvement. So please take some time, either before or after you take the final, to fill out a brief evaluation. I appreciate your feedback, and future students will too! You'll find the link to this by clicking <strong>Completion</strong>, and then clicking <strong>Evaluation</strong>.</li><li id='finalSteps_item_discussion'><strong>Discussion Area:</strong> The Discussion Area will be open for two more weeks after Lesson 12's release, so please feel free to stop by and ask any questions (except about the final exam) and share your thoughts.</li></ul>";
	
	
	
	
	/* This is the container that holds the FINAL steps content with no reccomended resources */
	var finalSteps_innerHTML_with_container_no_rr = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML_no_rr+'</div></div>';
	
	
	/* This is the new content that appears within the global FINAL steps box with no reccomended resources for SPTs*/
	var finalSteps_innerHTML_SPT = "<p class='finalstepsroundedtitle_global'><img class='final_steps_icon_SPT' align='right' src='"+globalURL+"nextsteps/steps_icon.png'><strong>Final Steps</strong></p><p>Now that you've finished the last lesson, is there anything else to do? Yes, several things!</p><ul><li id='finalSteps_item_quiz_assignment_faqs'><strong>Quiz, assignment, and FAQs:</strong> You still have a quiz for this lesson, as well as an assignment, so be sure to do these. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</li><li id='finalSteps_item_finalsteps_item_resources'><strong>Resources for further learning:</strong> If you haven't already checked out the Recommended Books, now would be a great time. When it comes to a topic like <em>"+thisCourseTitle+"</em>, there's always more to learn. To access these, just click the <strong>Resources</strong> link. </li><li id='finalSteps_item_exam'><strong>Final exam:</strong> Here's the moment all those quizzes have been preparing you for—the cumulative final for this course. Let me give you a tip: Print the final before taking it so you can study and relieve any test anxiety you might have. (You can have the classroom open when you take the final too.) You only get one chance at the final, so you'll want to do your best. To access it, click the <strong>Completion</strong> link and then click <strong>Final Exam</strong>. Good luck!</li></ul>";
	
/* Check for older versions of the next/final steps tables via their images */	
if(nextStepsIMG_exists == true || finalStepsIMG_exists == true){	

	/* Checks to see if final steps image contains reccomended resources */
	if ($("img[src$='finalsteps_norr.gif']").exists() || $("img[src$='finalsteps_noRR_2.png']").exists()) {
		  finalSteps_no_rr = true;
	  }
	  else{
		  finalSteps_no_rr = false;
	  };

	
	/* This is the container that holds the FINAL steps content with no reccomended resources for SPTs */
	var finalSteps_innerHTML_with_container_SPT = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML_SPT+'</div></div>';	


	/* This locates and hides the oldest div-based next steps table and inserts empty nextStepsBox box */
		if ($(".nextstepsrounded").exists() || $(".nextstepsrounded_new").exists() || $(".finalstepsrounded").exists() || $(".finalstepsrounded_new").exists() || $("#nextStepsBox").exists() || $("#nextStepsBox_SPT").exists() || $("#finalStepsBox").exists() || $("#finalStepsBox_SPT").exists() || $("#finalStepsBox_no_rr").exists()) {
		  
		  if ($(".nextstepsrounded").exists()) {
			  $(".nextstepsrounded").hide().after('<div id="nextStepsBox"></div>');
		  }
		  /* This locates and hides the newer div-based next steps table and inserts empty nextStepsBox box */
		  else if ($(".nextstepsrounded_new").exists()) {
			  $(".nextstepsrounded_new").hide().after('<div id="nextStepsBox"></div>');
		  }
		  
		  /* Locates and hides the old div-based final steps table, hides old info and inserts new content. The 'other courses' info remains intact */
		  if ($(".finalstepsrounded").exists() && $('.yellowbackground').exists() && !$(".finalstepsrounded").is('table')) {
				$(".finalstepsrounded").addClass('oldFinalSteps');
				$(".oldFinalSteps").addClass('finalstepsrounded');
				$('.finalstepsrounded').addClass('finalstepsrounded_global');
				$('.finalstepsrounded_global').removeClass('finalstepsrounded');
	
				$("p:contains('Final Steps')").nextUntil(".yellowbackground").andSelf().hide();
				$('.yellowbackground').addClass('otherCoursesBar_global');
				$('.otherCoursesBar_global').removeClass('yellowbackground');
				$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" align="right" src="'+globalURL+'nextsteps/other_courses_icon.png">');
				  if(finalSteps_no_rr){
					  $('.otherCoursesBar_global').before(finalSteps_innerHTML_no_rr);
				  }
				  else{
					  $('.otherCoursesBar_global').before(finalSteps_innerHTML);
				}
					
		  }
////////////////////////////////	
			/* This searches for any tables that havev the finalstepsrounded class */	  
		  else if ($(".finalstepsrounded").exists() && $('.yellowbackground').exists() && $(".finalstepsrounded").is('table')) {
			  
				$(".finalstepsrounded").addClass('oldFinalSteps');
				$(".oldFinalSteps").removeClass('finalstepsrounded');
				$('.yellowbackground').addClass('otherCoursesBar_global');
				$('.otherCoursesBar_global').removeClass('yellowbackground');
				$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png">');
				$(".oldFinalSteps p:contains('Final Steps')").nextUntil('.otherCoursesBar_global').andSelf().remove();
				
				otherCourses_innerHTML = $(".oldFinalSteps td:has(.otherCoursesBar_global)").html();
				
				if(finalSteps_no_rr){
					 $(".oldFinalSteps").after('<div id="finalStepsBox_no_rr"></div>');
				  }
				else{
					 $(".oldFinalSteps").after('<div id="finalStepsBox"></div>');
				}
				$(".oldFinalSteps").after('<div id="otherCoursesBox">'+otherCourses_innerHTML+'</div>');
				$(".oldFinalSteps").remove();
				
		  }
/////////////////////////////////////		  
		  /* Locates and hides the newer div-based final steps table, hides old info and inserts new content. The 'other courses' info remains intact */
		  else if ($(".finalstepsrounded_new").exists()) {
			$("p:contains('Final Steps')").nextUntil(".yellowbarbackground_new").andSelf().hide();
			$('.finalstepsrounded_new').addClass('finalstepsrounded_global');
			$('.finalstepsrounded_global').removeClass('finalstepsrounded_new');
			  if(finalSteps_no_rr){
				  $('.yellowbarbackground_new').before(finalSteps_innerHTML_no_rr);
			  }
			  else{
				  $('.yellowbarbackground_new').before(finalSteps_innerHTML);
			  }
			$('.yellowbarbackground_new').addClass('otherCoursesBar_global');
			$('.otherCoursesBar_global').removeClass('yellowbarbackground_new');
			$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" align="right" src="'+globalURL+'nextsteps/other_courses_icon.png">');
			}
			
		  /* Locates and hides the newer div-based final steps table, hides old info and inserts new content. The 'other courses' info remains intact */
		  else if ($(".finalstepsrounded").exists() && $('.yellowbarbackground').exists()) {
			$("p:contains('Final Steps')").nextUntil(".yellowbarbackground").andSelf().hide();
			$('.finalstepsrounded').addClass('finalstepsrounded_global');
			$('.finalstepsrounded_global').removeClass('finalstepsrounded');
			  if(finalSteps_no_rr){
				  $('.yellowbarbackground').before(finalSteps_innerHTML_no_rr);
			  }
			  else{
				  $('.yellowbarbackground').before(finalSteps_innerHTML);
			  }	
			$('.yellowbarbackground').addClass('otherCoursesBar_global');
			$('.otherCoursesBar_global').removeClass('yellowbarbackground');
			$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png">');
			}
			
		
	  			
		}
		

/* -------------- TABLE CHECK START -------------------- */

	/*  This function searches the classroom page for tables without embedded tables and gives them a class '.tableless_table'. This is required because the old next/final steps tables didn't have ids or classes. */
	else{
	  $("table:not(:has(table))").each(function(){
		  $(this).addClass('tableless_table');
	  });
	  
	  /*  This function searches the 'tableless_table' objects (above) and locates the old NEXT steps table, gives it class '.oldNextSteps' */
	  $(".tableless_table:contains('Next Steps')").each(function(){
		  $(this).addClass('oldNextSteps');
	  });
	  
	  /*  This function searches the 'tableless_table' objects (above) and locates the old FINAL steps table, gives it class '.oldFinalSteps' */
	  $(".tableless_table:contains('Final Steps')").each(function(){
		  $(this).addClass('oldFinalSteps');
	  });
	  
	  
	  
	if(SPT_course){
		
		  $(".oldNextSteps").addClass('oldNextSteps_SPT');
		  $(".oldFinalSteps").addClass('oldFinalSteps_SPT');
		  
		  $(".oldNextSteps_SPT").removeClass('oldNextSteps');
		  $(".oldFinalSteps_SPT").removeClass('oldFinalSteps');

		  $(".oldNextSteps_SPT").hide().after('<div id="nextStepsBox_SPT"></div>');
		  $(".oldFinalSteps_SPT").hide().after('<div id="finalStepsBox_SPT"></div>');	  
	}
	else{

	  /*  This hides the oldNextSteps and inserts an empty nextStepsBox that is populated with content later in the nextStepsBox exists function */
	  $(".oldNextSteps").hide().after('<div id="nextStepsBox"></div>');
	  
	  /*  This hides the oldFinalSteps box and inserts an empty finalStepsBox that is populated with content later in the finalStepsBox exists function */
	  $(".oldFinalSteps").hide().after('<div id="finalStepsBox"></div>');	 
	}
	
	  /*  This function searches the 'tableless_table' objects (above) and locates the old OTHER COURSES table, gives it class '.oldOtherCourses' */
	 $(".tableless_table:contains('Other Online Courses')").each(function(){
		  $(this).addClass('oldOtherCourses');
	  });
	 $(".tableless_table:contains('Other Courses')").each(function(){
		  $(this).addClass('oldOtherCourses');
	  });	
	  $(".oldOtherCourses blockquote").contents().unwrap();	 
	  $(".oldOtherCourses strong:contains('Other Courses')").remove();
	  
	  otherCourses_innerHTML = '<p class="otherCoursesBar_global"><strong>Other Courses</strong></p><img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png">'+ $('.oldOtherCourses td:contains("this course")').html();
	  
	  
	  
	  
	/* Hide the old 'other courses' table */
	}
	  $(".oldOtherCourses").hide();

}
/* -------------- TABLE CHECK STOP -------------------- */



	/* Locates empty nextStepsBox and populates it with new info */

	if($('#nextStepsBox_SPT').exists()) {
		$('#nextStepsBox_SPT').html(nextSteps_innerHTML_with_container_SPT);
	}
	else if($('#nextStepsBox').exists()) {
		$('#nextStepsBox').html(nextSteps_innerHTML_with_container);
	};

	if($('#finalStepsBox_no_rr').exists()) {
		$('#finalStepsBox_no_rr').html(finalSteps_innerHTML_with_container_no_rr);
		if($('.oldOtherCourses').exists()){
			$('.finalstepsrounded_global').append(otherCourses_innerHTML);
		}
	}
	else if($('#finalStepsBox_SPT').exists()) {
		$('#finalStepsBox_SPT').html(finalSteps_innerHTML_with_container_SPT);
	}
	
	/* Locates empty finalStepsBox and populates it with new info */
	else if($('#finalStepsBox').exists() && !finalSteps_no_rr) {
		$('#finalStepsBox').html(finalSteps_innerHTML_with_container);
		if($('.oldOtherCourses').exists()){
			$('.finalstepsrounded_global').append(otherCourses_innerHTML);
		}
	}
	/* Locates empty finalStepsBox with no reccomended resources and populates it with new info */
	else if($('#finalStepsBox').exists() && finalSteps_no_rr) {
		$('#finalStepsBox').html(finalSteps_innerHTML_with_container_no_rr);
		if($('.oldOtherCourses').exists()){
			$('.finalstepsrounded_global').append(otherCourses_innerHTML);
		}
	};

	/* Checks to see if other courses box div and class is present, adds div to final steps box */
	if($('#otherCoursesBox').exists() && !$('.otherCoursesBar_global').exists()) {
		$('.finalstepsrounded_global').append('<p class="otherCoursesBar_global"><strong>Other Courses</strong></p><img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png"><p>If you enjoyed this course, here are a few other online courses you might be interested in:</p>');
		$('#otherCoursesBox').appendTo('.finalstepsrounded_global').removeClass('other-courses');
	}
	else if($('#otherCoursesBox').exists() && $('.otherCoursesBar_global').exists()) {
		$('#otherCoursesBox').appendTo('.finalstepsrounded_global').removeClass('other-courses');
	};
	
	/* The following 3 if statements cleanup issues found in varous versions of the final steps tables */
	if($("img[src$='spacer.gif']").exists()){
		$("img[src$='spacer.gif']").hide();
	}
	/* Remove table container from content inside other courses box, if it exists  */
	if($('.finalstepsrounded_global:has(table)')){
		tempTableContent = $('.finalstepsrounded_global td:contains("If you enjoyed this course")').html();
		$('.finalstepsrounded_global table').remove();
		$('.finalstepsrounded_global').append(tempTableContent);
		$('.finalstepsrounded_global blockquote').contents().unwrap();
	}
	/* Remove break tag above other courses paragraph, if it exists */
	if($('.finalstepsrounded_global p:contains("If you enjoyed this course")').prev().is('br')){
		$('.finalstepsrounded_global p:contains("If you enjoyed this course")').prev().remove();
	}

	
	if($('.finalstepsrounded_global').exists()){
	/* Removes hyperlinks from final steps and other courses box */
		//$('.finalstepsrounded_global a :not(.temp_catalog_link)').contents().unwrap(); //updated the 'not' in v49
		$('.finalstepsrounded_global a:not(.temp_catalog_link, .temp_catalog_title_link)').contents().unwrap(); //updated the 'not' in v49
		/* Remove ed2go from final steps box */
		if($('.finalstepsrounded_global *:contains(ed2go)').exists()){
			ed2goTextCleanup = $('.finalstepsrounded_global *:contains(ed2go)').html();
			ed2goTextCleanup = ed2goTextCleanup.replace('ed2go ','');
			$('.finalstepsrounded_global *:contains(ed2go)').html(ed2goTextCleanup);
					
			
			/* Hide any existing images */
			$('.finalstepsrounded_global img:not(.otherCoursesIcon_global, .next_steps_icon, .next_steps_icon_SPT, .final_steps_icon, .final_steps_icon_no_rr)').hide();
		}
		
	}

/* Code to hide or change different parts of the nextStepsBox list */

if($('#nextStepsBox').exists()){
		if($('#nextStepsBox').hasClass('no_quiz')){
			$('#nextSteps_item_quiz').hide();
		}
		if($('#nextStepsBox').hasClass('no_assignment')){
			$('#nextSteps_item_assignment').hide();
		}
		if($('#nextStepsBox').hasClass('no_faqs')){
			$('#nextSteps_item_faqs').hide();
		}
		if($('#nextStepsBox').hasClass('no_discussion')){
			$('#nextSteps_item_discussion').hide();
		}
		if($('#nextStepsBox').hasClass('no_index')){
			$('#nextSteps_item_index').hide();
		}
		if($('#nextStepsBox').hasClass('no_resources')){
			$('#nextSteps_item_resources').hide();
		}
	}

/* Code to hide or change different parts of the finalStepsBox list */

var finalStepsBox_modification_no_quiz = "<p><strong>Assignment and FAQs:</strong> You still have an assignment for this lesson so be sure to do that. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</p>";

var finalStepsBox_modification_no_assignment = "<p><strong>Quiz and FAQs:</strong> You still have a quiz for this lesson, so be sure to try it out. Also, check out the FAQs for this lesson&mdash;you might find the answer to something you're wondering about here.</p>";

var finalStepsBox_modification_no_faqs = "<p><strong>Assignment and FAQs:</strong> You still have an assignment for this lesson, as well as a quiz, so be sure to do those.</p>";



if($('#finalStepsBox').exists()){
	if(
		$('#finalStepsBox').hasClass('no_faqs')&&
		$('#finalStepsBox').hasClass('no_assignment')&&
		$('#finalStepsBox').hasClass('no_quiz')
	){
		$('#finalSteps_item_quiz_assignment_faqs').hide();
	}
	else{
		if($('#finalStepsBox').hasClass('no_quiz')){
			$('#finalSteps_item_quiz_assignment_faqs').html(finalStepsBox_modification_no_quiz);
		}
		else if($('#finalStepsBox').hasClass('no_assignment')){
			$('#finalSteps_item_quiz_assignment_faqs').html(finalStepsBox_modification_no_assignment);
		}
		else if($('#finalStepsBox').hasClass('no_faqs')){
			$('#finalSteps_item_quiz_assignment_faqs').html(finalStepsBox_modification_no_faqs);
		}
	}
	
	if($('#finalStepsBox').hasClass('no_resources')){
		$('#finalSteps_item_resources').hide();
	}
	if($('#finalStepsBox').hasClass('no_exam')){
		$('#finalSteps_item_exam').hide();
	}
	if($('#finalStepsBox').hasClass('no_evaluation')){
		$('#finalSteps_item_evaluation').hide();
	}
	if($('#finalStepsBox').hasClass('no_discussion')){
		$('#finalSteps_item_discussion').hide();
	}
}

});

/* ------------------STOP NEXT/FINAL STEPS GLOBAL UPDATE---------------------------- */



/* ------------------ START WINDOW OPEN FUNCTION (Used for pop-up windows in some courses) ---------------------------- */

function openWindow(url, w, h, tool, scroll, resize) {
    var X = 0;
    var Y = 0;
    if (screen.availWidth) {
        X = (screen.availWidth / 2) - (w / 2);
        Y = (screen.availHeight / 2) - (h / 2);
    }

    popupWindow = window.open(url, 'popUp', 'left=' + X + 'screenX=' + X + 'screenY=' + Y + ',top=' + Y + ',toolbar=' + tool + ',scrollbars=' + scroll + ',resizable=' + resize + ',height=' + h + ',width=' + w);
    popupWindow.focus();
}

/* ------------------ STOP WINDOW OPEN FUNCTION (Used for pop-up windows in some courses) ---------------------------- */

/* ------------------ START VARIOUS OTHER FUNCTIONS FROM THE ORIGINAL CLASSROOM.JS FILE, USED IN CHAPTERS AND ASSIGNMENTS IN MANY COURSES  ---------------------------- */

function closeWindow() {
    self.close();
}

function goThere(myUrl) {
    opener.window.location = myUrl;
    window.close();
}

function shake_xy(n) {
    if (self.moveBy) {
        for (i = 4; i > 0; i--) {
            for (j = n; j > 0; j--) {
                self.moveBy(0, i);
                self.moveBy(i, 0);
                self.moveBy(0, -i);
                self.moveBy(-i, 0);
            }
        }
    }
}

function MM_findObj(n, d) {
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document); return x;
}

function MM_swapImage() {
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}

function MM_swapImgRestore() {
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() {
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}

/* ------------------ STOP VARIOUS OTHER FUNCTIONS FROM THE ORIGINAL CLASSROOM.JS FILE, USED IN CHAPTERS AND ASSIGNMENTS IN MANY COURSES  ---------------------------- */

/* /////////////////////////////////////// START 2014 November remove  ////////////////////////////////////////////////////////////// */

/* ------------------ START Temp fix for old classroom's assignment alignment section. Delete after Septemeber 2013 STOP ------ 
$(document).ready(function(){
if($('.assignment_style').exists()){
//alert('Old Assignments Section');
$('a[name^="lesson"]').each(function() {
    $(this).css('float','left');
});
}
})
/* ------------------ STOP Temp fix for old classroom's assignment alignment section. Delete after Septemeber 2013  STOP ------ */
/* ------------------ START Temp fix for TH bolding until it's fixed in standards.css START ------ */
$(document).ready(function() {
    $('th').css('font-weight','bold');
});
/* ------------------ STOP Temp fix for TH bolding until it's fixed in standards.css STOP ------ */

/* ------------------ START Temp fix for OLD classroom FAQ links START ------ 
$(document).ready(function(){
	if($('.course-faq').exists()){
	  $("a[href^='UserControls/Old/']").each(function(){
		  tempFAQHref = $(this).attr('href');
		  tempFAQHref = tempFAQHref.replace('UserControls/Old/','');
		  $(this).attr('href',tempFAQHref);
	  })
	}
})
/* ------------------ STOP Temp fix for OLD classroom FAQ links STOP ------ */

/* /////////////////////////////////////// STOP 2014 November remove  ////////////////////////////////////////////////////////////// */


/////////////////////////////// GLOSSARY TOOLTIP START  ///////////////////////////////
var glossaryTooltipDisabled = false;

var glossaryTooltip_terms = ["glossaryTooltip terms should be located within the course.js file of each course."];
var glossaryTooltip_definitions = ["glossaryTooltip definitions should be located within the course.js file of each course."];
var definitionIndex;
$(document).ready(function(){
	if(!glossaryTooltipDisabled){
		for(i=0;i<glossaryTooltip_terms.length;i++){
			glossaryTooltip_terms[i] = glossaryTooltip_terms[i].toLowerCase();
		}; 
		if($('.main-content').exists()){
			if(!$('.pretest').exists() && !$('.lesson-quiz').exists() && !$('.final').exists()){
				$('.main-content').highlightTerm(glossaryTooltip_terms,{ wordsOnly: true,caseSensitive: false});
			}
		}
		else if($('#main-content').exists()){
			if(!$('.pretest').exists() && !$('.lesson-quiz').exists() && !$('.final').exists()){
				$('#main-content').highlightTerm(glossaryTooltip_terms,{ wordsOnly: true,caseSensitive: false});
			}
		}
		$(".highlightTerm").each(function(){
			if($(this).parents().is('a, h1, h2, h3, h4, h5')){
				$(this).removeClass('highlightTerm');
			}
			else{
			definitionIndex =  glossaryTooltip_terms.indexOf($(this).text().toLowerCase())
			$(this).wrap('<abbr rel="glossaryTooltip" title="'+glossaryTooltip_definitions[definitionIndex]+'"></abbr>');
			}
		});
		
		/*$(".highlightTerm").each(function(){
			definitionIndex =  glossaryTooltip_terms.indexOf($(this).text().toLowerCase())
			$(this).wrap('<abbr rel="glossaryTooltip" title="'+glossaryTooltip_definitions[definitionIndex]+'"></abbr>');
		});*/
	}
});

/////////////////////////////// HIGHLIGHT PLUGIN START  ///////////////////////////////

/*
 * jQuery Highlight plugin
 *
 * Based on highlightTerm v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlightTerm-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlightTerm only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlightTerm element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlightTerm'> (default options)
 *   $('#content').highlightTerm('lorem');
 *
 *   // search for and highlightTerm more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlightTerm(['lorem', 'ipsum']);
 *   $('#content').highlightTerm('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlightTerm('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlightTerm('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlightTerm('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlightTerm
 *   $('#content').unhighlightTerm();
 *
 *   // remove custom highlightTerm
 *   $('#content').unhighlightTerm({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlightTerm: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlightTerm = document.createElement(nodeName || 'span');
                highlightTerm.className = className || 'highlightTerm';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlightTerm.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlightTerm, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlightTermed
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlightTerm(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlightTerm = function (options) {
    var settings = { className: 'highlightTerm', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlightTerm = function (words, options) {
    var settings = { className: 'highlightTerm', element: 'span', caseSensitive: false, wordsOnly: false };
    jQuery.extend(settings, options);
    
    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);
    
    return this.each(function () {
        jQuery.highlightTerm(this, re, settings.element, settings.className);
    });
};
/////////////////////////////// HIGHLIGHT PLUGIN STOP  ///////////////////////////////


/*/////////////////////////////// TOOLTIP START  ///////////////////////////////
*
*Copyright free jQuery plugin located at:
*http://osvaldas.info/elegant-css-and-jquery-glossaryTooltip-responsive-mobile-friendly
*
//////////////////////////////////////////////////////////////////////////////*/

$( document ).ready( function()
{
	if(!glossaryTooltipDisabled){
		var targets = $( '[rel~=glossaryTooltip]' ),
			target  = false,
			glossaryTooltip = false,
			title   = false;
	 
		targets.bind( 'mouseenter', function()
		{
			target  = $( this );
			tip     = target.attr( 'title' );
			glossaryTooltip = $( '<div id="glossaryTooltip"></div>' );
	 
			if( !tip || tip == '' )
				return false;
	 
			target.removeAttr( 'title' );
			glossaryTooltip.css( 'opacity', 0 )
				   .html( tip )
				   .appendTo( 'body' );
	 
			var init_glossaryTooltip = function()
			{
				if( $( window ).width() < glossaryTooltip.outerWidth() * 1.5 )
					glossaryTooltip.css( 'max-width', $( window ).width() / 2 );
				else
					glossaryTooltip.css( 'max-width', 340 );
	 
				var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( glossaryTooltip.outerWidth() / 2 ),
					pos_top  = target.offset().top - glossaryTooltip.outerHeight() - 20;
	 
				if( pos_left < 0 )
				{
					pos_left = target.offset().left + target.outerWidth() / 2 - 20;
					glossaryTooltip.addClass( 'left' );
				}
				else
					glossaryTooltip.removeClass( 'left' );
	 
				if( pos_left + glossaryTooltip.outerWidth() > $( window ).width() )
				{
					pos_left = target.offset().left - glossaryTooltip.outerWidth() + target.outerWidth() / 2 + 20;
					glossaryTooltip.addClass( 'right' );
				}
				else
					glossaryTooltip.removeClass( 'right' );
	 
				if( pos_top < 0 )
				{
					var pos_top  = target.offset().top + target.outerHeight();
					glossaryTooltip.addClass( 'top' );
				}
				else
					glossaryTooltip.removeClass( 'top' );
	 
				glossaryTooltip.css( { left: pos_left, top: pos_top } )
					   .animate( { top: '+=10', opacity: 1 }, 50 );
			};
	 
			init_glossaryTooltip();
			$( window ).resize( init_glossaryTooltip );
	 
			var remove_glossaryTooltip = function()
			{
				glossaryTooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
				{
					$( this ).remove();
				});
	 
				target.attr( 'title', tip );
			};
	 
			target.bind( 'mouseleave', remove_glossaryTooltip );
			glossaryTooltip.bind( 'click', remove_glossaryTooltip );
		});

	};

});

/////////////////////////////// TOOLTIP STOP  ///////////////////////////////

/////////////////////////////// GLOSSARY TOOLTIP STOP  ///////////////////////////////




/////////////////////////////// FULLSCREEN-VIEW RESPONSIVE METATAG START  ///////////////////////////////
var mobileFriendlyFullscreen = true;

$(document).ready(function(){
	if(mobileFriendlyFullscreen){
		if($('.lesson-fullscreen').exists()){
			//$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />');
			$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1" />');
			$('.lesson-fullscreen img').css('max-width','100%');
		}
	}
});

/////////////////////////////// FULLSCREEN-VIEW RESPONSIVE METATAG STOP  ///////////////////////////////


/////////////////////////////// HTML5 AUDIO PLAYER START  ///////////////////////////////

var ILC_HTML5_audio_enabled = false; //Set this variable to true in the course.js file in order to use the player
var ILC_HTML5_audio_btn_playing_CSS = "ILC_HTML5_audio_btn_playing"; //*OPTIONAL: Change this class name in course.js to change the CSS style of the buttons
var ILC_HTML5_audio_btn_stopped_CSS = "ILC_HTML5_audio_btn_stopped"; //*OPTIONAL: Change this class name in course.js to change the CSS style of the buttons
var ILC_HTML5_playBtnText = "Play"; //*OPTIONAL: Change this text in course.js file
var ILC_HTML5_playingBtnText = "Loading..."; //*OPTIONAL: Change this text in course.js file


var ILC_HTML5_audio_tracks_array = []; // don't touch
var ILC_HTML5_audioBtnTarget = ""; // don't touch

$(document).ready(function(e) {
  if(ILC_HTML5_audio_enabled && $('.ILC_HTML5_audio_btn').exists()){
	var ILC_HTML5_current_audio_track = new Audio(); // don't touch
	var ILC_HTML5_newAudioTrack = new Audio; // don't touch
	
	$('.ILC_HTML5_audio_btn').text(ILC_HTML5_playBtnText);
	$('.ILC_HTML5_audio_btn').addClass(ILC_HTML5_audio_btn_stopped_CSS);
	
	$('.ILC_HTML5_audio_btn').each(function(e){
	  ILC_HTML5_audioBtnThis = $(this).attr('id');
	  ILC_HTML5_newAudioTrack = new Audio(courseURL+'audio/'+ILC_HTML5_audioBtnThis+'.mp3');
	  ILC_HTML5_audio_tracks_array.push(ILC_HTML5_newAudioTrack);
	});
	
	$('.ILC_HTML5_audio_btn').click(function(e){
	  e.preventDefault();
	  ILC_HTML5_current_audio_track.pause();
	  ILC_HTML5_audioBtnTarget = String(e.target.id);
	  $('.ILC_HTML5_audio_btn').removeClass(ILC_HTML5_audio_btn_playing_CSS);
	  $('.ILC_HTML5_audio_btn').addClass(ILC_HTML5_audio_btn_stopped_CSS);
	  $("#"+ILC_HTML5_audioBtnTarget).removeClass(ILC_HTML5_audio_btn_stopped_CSS);
	  $("#"+ILC_HTML5_audioBtnTarget).addClass(ILC_HTML5_audio_btn_playing_CSS);
	  ILC_HTML5_audio_btn_index = $('.ILC_HTML5_audio_btn').index(this);
	  
	  //ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index].currentTime=0;
	  ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index].play();
	  ILC_HTML5_current_audio_track = ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index];
	  
	  $('.ILC_HTML5_audio_btn').text(ILC_HTML5_playBtnText);
	  $("#"+ILC_HTML5_audioBtnTarget).text(ILC_HTML5_playingBtnText);
	  
	  var ILC_HTML5_audio_onEnded = function() {
		$("#"+ILC_HTML5_audioBtnTarget).text(ILC_HTML5_playBtnText);
		$("#"+ILC_HTML5_audioBtnTarget).addClass(ILC_HTML5_audio_btn_stopped_CSS);
		$("#"+ILC_HTML5_audioBtnTarget).removeClass(ILC_HTML5_audio_btn_playing_CSS);
	  }
	  
	  ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index].addEventListener('ended', ILC_HTML5_audio_onEnded, false);	
	});
  }
});

/////////////////////////////// HTML5 AUDIO PLAYER STOP  ///////////////////////////////

/////////////////////////////// CB NOTES START  ///////////////////////////////

$(document).ready(function(e) {
    //$('#main-paragraph-text h1').before('<hr class="temp-break-space">');
	//$('#main-paragraph-text hr').addClass('temp-break-space');
		
	//$('.main-paragraph-text h1').before('<hr class="temp-break-space">');
	//$('.main-paragraph-text hr').addClass('temp-break-space');
});

/////////////////////////////// CB NOTES STOP  ///////////////////////////////

/////////////////////////////// START -- AUTOMAKE CHECK -- START ///////////////////////////////

$(document).ready(function(){
	
	var automake_quiz_test;	
	var automake_reveal_test;
	$('#main-paragraph-text li, .main-paragraph-text li').each(function(){
		
		var automake_check = $(this).clone()
								.children()
								.remove()
								.end()
								.text();
		var automake_test_start = automake_check.search(/\[#/gi);
		var automake_test_stop = automake_check.search(/\#]/gi);
		
		if(automake_test_start > -1 && automake_test_stop > -1){
			$(this).hide();
			
			automake_quiz_test = automake_check.search(/automake_quiz/gi);
			automake_reveal_test = automake_check.search(/automake_reveal/gi);
			
			automake_check = automake_check.replace('[#    ','');
			automake_check = automake_check.replace('[#   ','');
			automake_check = automake_check.replace('[#  ','');
			automake_check = automake_check.replace('[# ','');
			automake_check = automake_check.replace('[#','');
			automake_check = automake_check.replace('    #]','')
			automake_check = automake_check.replace('   #]','')
			automake_check = automake_check.replace('  #]','')
			automake_check = automake_check.replace(' #]','');
			automake_check = automake_check.replace('#]','');
			$(this).parent().wrap('<div class="'+automake_check+'"></div>');
			$(this).addClass('automake_tag');
			
			if(automake_quiz_test > -1){
				$(this).next().wrap('<ul class="automake_quiz_group"></ul>');
			}
			
		}
		else if(automake_check === ',' && automake_quiz_test > -1){
			$(this).next('li').wrap('<ul class="automake_quiz_group"></ul>')
			$(this).remove();
		}
		automake_check = null;
	});
	if($('.automake_quiz').length > 0){
		$('.automake_quiz').hide();
		//automake_quiz_init();
		$('head').append('<link rel="stylesheet" type="text/css" href="'+globalURL+'automake/automake_quiz/automake_quiz.css" />');
		$.getScript(globalURL+"automake/automake_quiz/automake_quiz.js");
	}
	if($('.automake_reveal').length > 0){
		$('.automake_reveal').hide();
		//automake_reveal_init();
		$('head').append('<link rel="stylesheet" type="text/css" href="'+globalURL+'automake/automake_reveal/automake_reveal.css" />');
		$.getScript(globalURL+"automake/automake_reveal/automake_reveal.js");
	}
})
	
/////////////////////////////// STOP -- AUTOMAKE CHECK -- STOP ///////////////////////////////


/////////////////////////////// START -- QUIZ BUTTON FIXIT -- START ///////////////////////////////
/* This disables the 'screwDefaultButtons.js effect in the quizzes, pretest and finals to make them accessible to screen readers. It also hides the 'retake quiz' image and replaces it with a plain text link.  */

IE_pre8 = true;
$(document).ready(function(){
	if($('#ctl00_cphMain_ctl00_rptResults_ctl06_quiz_submit_btn').exists()){
		$('#ctl00_cphMain_ctl00_rptResults_ctl06_quiz_submit_btn').hide();	
		$('#ctl00_cphMain_ctl00_rptResults_ctl06_hlkRetake').text('Retake Quiz');
	}
});
/////////////////////////////// STOP -- QUIZ BUTTON FIXIT -- STOP ///////////////////////////////

/*  ================== START -- PRESTO CHANGO -- START ================== */
$(document).ready(function(){
	if(($('.presto').exists() && $('.chango').exists())||($('.presto').exists() && $('.changeo').exists())){
		
		if($('.changeo').exists()){
			$('.changeo').each(function(){
				$(this).addClass('chango');
			});
		}
		$('.presto,.chango').css('cursor','pointer');
		$('.chango').fadeTo(0,0).hide();
		$('.presto').click(function(event){
			event.preventDefault();
			var prestoIndex = $(this).index('.presto');
			$(this).fadeTo('fast',0,function(){
				$(this).hide();
				$('.chango:eq('+prestoIndex+')').show().fadeTo('fast',1.0);
			});
			
			
		})
		$('.chango').click(function(event){
			event.preventDefault();
			var changoIndex = $(this).index('.chango');
			$(this).fadeTo('fast',0,function(){
				$(this).hide();
				$('.presto:eq('+changoIndex+')').show().fadeTo('fast',1.0);
			})
		})
	}
})
/*  ================== STOP -- PRESTO CHANGO -- STOP ================== */

/*  ================== START -- AUTO VIDEO -- START ================== */

$(document).ready(function(){
	$('.courseVideo,.courseVideoTemp').hide();
	
	$('#main-content,.main-content').find('.courseVideo').each(function(){
		var courseVideo_var = window[$(this).text()];
		var courseVideoTranscript_var = window[$(this).text()+'_TRANS'];
		var courseVideoTranscript_img = 'https://api.ed2go.com/CourseBuilder/2.0/images/resources/dev/global/video/transcript.png';
		var courseVideo_container = '';
		if(courseVideoTranscript_var == ''){
			courseVideo_container = '<div class="courseVideoSection">'+courseVideo_var+'</div>'
		}
		else{
			courseVideo_container = '<div class="courseVideoSection">'+courseVideo_var+'<div class="courseTranscriptArea"><a href="'+courseVideoTranscript_var+'" target="_blank"><div class="courseTranscriptIcon"><img src="'+courseVideoTranscript_img+'" alt=""></div><div class="courseTranscriptText">DOWNLOAD VIDEO TRANSCRIPT</div></a></div></div>'
		}

		$(this).after(courseVideo_container);
	});
});

/*  ================== STOP -- AUTO VIDEO -- STOP ================== */

/*  ================== START -- gameEQ / textEQ -- START ================== */
$(document).ready(function(){
	var EQskipCount = 0;
	var EQcount = 0;
	var textEQ_btn_label_show = "Show Text Equivalent";
	var textEQ_btn_label_hide = "Hide Text Equivalent";
	
	if($('h5:contains("[#TOGGLE#]")').exists()||$('h5:contains("[#BIGMAC#]")').exists()){
		$('h5:contains("[#TOGGLE#]"),h5:contains("[#BIGMAC#]")').each(function(){
			if(EQcount > 2){
				EQcount = 0;
			}
			EQcount ++;
			
			$(this).before('<div class="textEQ_'+EQcount+'"></div>');
			$(this).remove();
		})
		
	$('.textEQ_2').toggle();
	
	$('.textEQ_1').each(function(){ 
	EQskipCount ++;
		$(this).nextUntil('.textEQ_2').appendTo(this);
		$(this).before('<div class="textEQ_container"><button class="textEQ_btn">Toggle</button><a class="skip_activity_link" href="#skip_activity_'+EQskipCount+'">skip this activity</a></div><a class="skip_activity_anchor" name="skip_activity_'+EQskipCount+'" id="skip_activity_'+EQskipCount+'"></a>');
	});
	
	
	$('.textEQ_2').each(function(){ 
		$(this).append('<p align="center" class="caption">Text equivalent start.</p>');
		$(this).nextUntil('.textEQ_3').appendTo(this);
		$(this).append('<p align="center" class="caption">Text equivalent stop.</p>');
	});
	$('.textEQ_container').each(function(){
		$(this).nextUntil('.textEQ_3').appendTo(this);
		
		
	});
	$('.textEQ_3').each(function(){
		$(this).remove();
	});
	$('.skip_activity_anchor').each(function(){
		$(this).insertAfter($(this).parent('.textEQ_container'));
	});
	$('.textEQ_btn').text(textEQ_btn_label_show);
	$('.textEQ_btn').click(function(event){
		event.preventDefault();
		if($(this).siblings('.textEQ_1').is(':visible')){
			$(this).siblings('.textEQ_1').fadeToggle("fast",function(){
				$(this).siblings('.textEQ_2').fadeToggle("fast");
			});
		}
		else{
			$(this).siblings('.textEQ_2').fadeToggle("fast",function(){
				$(this).siblings('.textEQ_1').fadeToggle("fast");
			});
		}
		
		$(this).toggleClass('textEQ_btn_clicked');
		if($(this).hasClass('textEQ_btn_clicked')){
			$(this).text(textEQ_btn_label_hide);
		}
		else{
			$(this).text(textEQ_btn_label_show);
		}
	})
	}
})
/*  ================== STOP -- gameEQ / textEQ -- STOP ================== */
