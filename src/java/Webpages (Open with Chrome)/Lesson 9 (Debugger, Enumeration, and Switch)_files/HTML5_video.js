//absolutePath  =  pathFinder.replace("global/jwplayer/placeholder.png","");
absolutePath  =  globalURL.replace("global/","");

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
if(is_chrome == true){}
else{
	//absolutePath  =  absolutePath.replace(/https/i, "http");
	};
	
loco = location.hostname;path = location.pathname;cbCheck = String(loco);cbCheck = cbCheck + "/CourseEditor.aspx";cbLocation = "cb.ed2go.com/CourseEditor.aspx";

cbLocation1 = "cb.dev.ed2go.com/CourseEditor.aspx";
cbLocation2 = "daily.cb.dev.ed2go.com/CourseEditor.aspx";
cbLocation3 = "qa-cb.ed2go.com/CourseEditor.aspx";
cbLocation4 = "s-cb.ed2go.com/CourseEditor.aspx";
cbLocation5 = "cb.test.ed2go.com/CourseEditor.aspx";


	courseCode
	fileName
	videoCaption
	posterImage
	hasCC
	CCbackground:Boolean
	hasHD
	absolutePath
	vidHeight
	vidWidth
	placeHolderNum
	var stopStretch
	
if((screen.availHeight >= 768) && (screen.availWidth >= 1024) && (stopStretch == true))
	{
	vidSkin = "global/jwplayer/modieus.zip";videoFolder = "/video/"; playerLocation = "global/jwplayer/ed2goPlayer3.swf"; file_high = "_high.mp4"; file_low = "_low.mp4";cc_type = ".xml";
	}
else if(stopStretch == undefined || stopStretch == false){
	vidSkin = "global/jwplayer/modieus.zip";videoFolder = "/video/"; playerLocation = "global/jwplayer/player.swf"; file_high = "_high.mp4"; file_low = "_low.mp4";cc_type = ".xml";
	}
	else{
	vidSkin = "global/jwplayer/modieus.zip";videoFolder = "/video/"; playerLocation = "global/jwplayer/player.swf"; file_high = "_high.mp4"; file_low = "_low.mp4";cc_type = ".xml";
	}


if((cbCheck != cbLocation)&&(cbCheck != cbLocation1)&&(cbCheck != cbLocation2)&&(cbCheck != cbLocation3)&&(cbCheck != cbLocation4)&&(cbCheck != cbLocation5)){
document.getElementById('vidFrame_'+placeHolderNum).innerHTML='<div align="center"><div id="placeholder'+placeHolderNum+'"> Loading the player ...</div><br /><div class="video_caption"><font class="caption">'+videoCaption+'</font></div></div>';

CCpath = absolutePath + courseCode+ videoFolder + fileName +cc_type;
HDpath = absolutePath + courseCode+ videoFolder +fileName+file_high;


if(hasHD && hasCC){
	jwplayer("placeholder"+placeHolderNum).setup({
	flashplayer: absolutePath +playerLocation,
	file: absolutePath + courseCode+ videoFolder +fileName+file_low,
	image: absolutePath + courseCode+ videoFolder+posterImage,
	height: vidHeight,
	width: vidWidth ,
	skin: absolutePath +vidSkin, 

	plugins: {
		captions: { file: CCpath, state: "false", back: CCbackground},
		hd: { file: HDpath, fullscreen: true}
		}})}

else if(hasHD && !hasCC){
jwplayer("placeholder"+placeHolderNum).setup({flashplayer: absolutePath +playerLocation,file: absolutePath + courseCode+ videoFolder +fileName+file_low,	image: absolutePath + courseCode+ videoFolder +posterImage,height: vidHeight,width: vidWidth ,skin: absolutePath + vidSkin,
plugins: {hd: { file: absolutePath + courseCode+ videoFolder +fileName+file_high, fullscreen: true }}})}

else if(!hasHD && hasCC){
jwplayer("placeholder"+placeHolderNum).setup({flashplayer: absolutePath +playerLocation,file: absolutePath + courseCode+ videoFolder +fileName+file_low,	image: absolutePath + courseCode+ videoFolder +posterImage,height: vidHeight,width: vidWidth ,skin: absolutePath + vidSkin,
plugins: {captions: { file: absolutePath + courseCode+ videoFolder + fileName +cc_type, state: "false", back: CCbackground}}})}

else {
jwplayer("placeholder"+placeHolderNum).setup({flashplayer: absolutePath +playerLocation,file: absolutePath + courseCode+ videoFolder +fileName+file_low,	
image: absolutePath + courseCode+ videoFolder +posterImage,height: vidHeight,width: vidWidth ,skin: absolutePath + vidSkin
})}};