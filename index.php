<?php
ob_start();
session_start();
header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
 
require_once 'config/appsConfig.php';
$apps = new appsConfig();
$apps->loadLibaryClass();
$apps->loadPageTitle();
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=1025px, user-scalable=yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no">
	<title>Famous Hospital ! <?php echo appsConfig::$pagetitle;?></title>
<link rel="shortcut icon" href="<?php appsConfig::URL('apps/images/android-icon-36x36.png')?>">


<link rel="stylesheet" href="<?php appsConfig::URL('apps/css/care.css')?>" type="text/css">

<link rel="stylesheet" href="<?php appsConfig::URL('apps/css/newpopup.css')?>" type="text/css">

<script src="https://use.fontawesome.com/6c0b2c8d9a.js"></script>


<!--Banner-animation Start-->
<script type="text/javascript" async="" src="<?php appsConfig::URL('apps/js/true')?>"></script><script async="" src="<?php appsConfig::URL('apps/js/analytics.js')?>"></script>
<script src="<?php appsConfig::URL('apps/js/jquery_003.js')?>"></script>
<script src="<?php appsConfig::URL('apps/js/care-slider.js')?>"></script>
<link href="<?php appsConfig::URL('apps/css/care-slider.css')?>" rel="stylesheet">
<script type="text/javascript">
		jQuery(document).ready(function(){
			jQuery('#care-banner-demo').careslider({'delay':5000, 'fadeSpeed': 2000,'showNextPrev':true,'showPlayButton':true,'autoStart':true});
		});
</script>
<!--Banner-animation End-->



<!--Input Start-->
<script type="text/javascript" src="<?php appsConfig::URL('apps/js/jquery_004.js')?>"></script>
<script type="text/javascript">
$(function(){
	$('select.styled').customSelect();
});
</script>
<!--Input End-->
<!--menu Start-->
<link rel="stylesheet" href="<?php appsConfig::URL('apps/css/jquery.css')?>" type="text/css" media="screen">
<script src="<?php appsConfig::URL('apps/js/jquery_002.js')?>" type="text/javascript"></script>
<script type="text/javascript">
	jQuery(function(){
		var SelfLocation = window.location.href.split('?');
        switch (SelfLocation[1]) {
          case "justify_right":
            jQuery(".megamenu").megamenu({ 'justify':'right' });
            break;
          case "justify_left":
          default:
            jQuery(".megamenu").megamenu();
        }
      });
</script>
<!--menu End-->
<script type="text/javascript" src="<?php appsConfig::URL('apps/js/crawler.js')?>"></script><style type="text/css">.marquee{white-space:nowrap;overflow:hidden;visibility:hidden;}#marq_kill_marg_bord{border:none!important;margin:0!important;}</style>
<script type="text/javascript" src="<?php appsConfig::URL('apps/js/jvalidations.js')?>"></script>
<script type="text/javascript">
					$(document).ready(function(){
						marqueeInit({
							uniqueid: 'mycrawler',
							style: {
								'padding': '5px',
								'top': '-10px',
								'width': '100%',
							},
							inc: 2, //speed - pixel increment for each iteration of this marquee's movement
							mouse: 'pause', //mouseover behavior ('pause' 'cursor driven' or false)
							moveatleast: 2,
							neutral: 150,
							persist: true,
							savedirection: true
						});
						
						});
</script>
<script src="<?php appsConfig::URL('apps/js/common.js')?>"></script>
<script src="<?php appsConfig::URL('apps/js/functions.js')?>"></script>
<script type="text/javascript">
$(document).ready(function(){
	$('ul.megamenu li').delay(200).fadeIn(200)
})
</script>
<style>
ul.megamenu li {
 display:none;
}
.temp_lnk1 a
{
	width:200px; height:40px;background:#7a6db5; border-radius:25px; line-height:40px; padding-left:35px; padding:10px 50px 10px 25px; color:#fff; font-family:arial; font-size:14px; transition:all,.5s; margin-left:-15px;
}
.temp_lnk1 a:hover
{
	padding-left:50px;
	background:#a62a4f;
}

</style>
      
         
 <script type="text/javascript">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
{  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-15553447-1', 'auto');
ga('send', 'pageview');
</script>        
         
<script type="text/javascript">
function RedirectSmartphone(url){
if (url && url.length > 0 && IsSmartphone())
window.location = url;
}
function IsSmartphone(){
if (DetectUagent("android")) return true;
else if (DetectUagent("iphone")) return true;
else if (DetectUagent("ipod")) return true;
else if (DetectUagent("symbian")) return true;
return false;
}
function DetectUagent(name){
var uagent = navigator.userAgent.toLowerCase();
if (uagent.search(name) > -1)
return true;
else
return false;
}
RedirectSmartphone("http://www.carehospitals.com/mobile/");
</script>
<script type="text/javascript">
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
location.replace("http://www.carehospitals.com/mobile/");
}
</script>         
<script language="javascript">
url = document.location.href;
xend = url.lastIndexOf("/") + 1;
var base_url = url.substring(0, xend);
function LoadCont(val){
		var url =base_url + "get-subcat.php?categoryId="+val;
		//alert(url);
        var jsel = document.createElement('SCRIPT');
        jsel.type = 'text/javascript';
        jsel.src = url;

        document.body.appendChild(jsel);
}


</script>
<!-- Facebook Pixel Code -->


<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1429451780714193&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->


<style type="text/css">#lhc_status_container.hide-status{display:none!important;}#lhc_status_container * {direction:ltr;text-align:left;;font-family:arial;font-size:12px;box-sizing: content-box;zoom:1;margin:0;padding:0}
#lhc_status_container .status-icon{text-decoration:none;font-size:12px;font-weight:bold;color:#ffffff;display:block;padding:10px 10px 10px 35px;background:url('//www.carehospitals.com/chat/design/defaulttheme/images/icons/user_green_chat.png') no-repeat left center}
#lhc_status_container:hover{}
#lhc_status_container #offline-icon{background-image:url('//www.carehospitals.com/chat/design/defaulttheme/images/icons/user_gray_chat.png')}
#lhc_status_container{box-sizing: content-box;-webkit-border-top-left-radius: 20px;-moz-border-radius-topleft: 20px;border-top-left-radius: 20px;-webkit-box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);border:1px solid #e3e3e3;border-right:0;border-bottom:0;;-moz-box-shadow:-1px -1px 5px rgba(50, 50, 50, 0.17);box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);padding:5px 0px 0px 5px;width:190px;font-family:arial;font-size:12px;transition: 1s;position:fixed;bottom:0;right:0;;background-color:#887ab8;z-index:9989;}@media only screen and (max-width : 640px) {#lhc_need_help_container{display:none;}#lhc_status_container{position:relative;top:0;right:0;bottom:0;left:0;width:auto;border-radius:2px;box-shadow:none;border:1px solid #e3e3e3;margin-bottom:5px;}}
</style><style type="text/css">#lhc_need_help_container{width:235px;border-radius:20px;background:#92B830;position:absolute;color:#ffffff;padding:10px;border:1px solid #dbe257;margin-top:-105px;}#lhc_need_help_container:hover{background-color:#84A52E}#lhc_need_help_container:hover #lhc_need_help_triangle{border-top-color:#84A52E}#lhc_need_help_triangle{width: 0;height: 0;border-left: 20px solid transparent;border-right: 10px solid transparent;border-top: 15px solid #92B830;position:absolute;bottom:-14px;}#lhc_need_help_close{float:right;border-radius:10px;background:#435A05;padding:0px 6px;color:#FFF;right:10px;font-size:16px;font-weight:bold;text-decoration:none;margin-top:0px;line-height:20px}#lhc_need_help_close:hover{background-color:#74990F;}#lhc_need_help_image{padding-right:10px;float:left;cursor:pointer;}#lhc_need_help_image img{border-radius:30px;border:1px solid #d0d0d0}#lhc_need_help_main_title{font-size:16px;font-weight:bold;cursor:pointer;line-height:1.5}#lhc_need_help_sub_title{cursor:pointer;line-height:1.5}</style><script id="lhc_operator_message" type="text/javascript" src="Care%20Hospitals%20-%20Multispecialty%20Healthcare%20Centers%20in%20India_files/0"></script>



</head>
<body>

<div id="lhc_status_container"><div id="lhc_need_help_container" style="margin-left:-80px;"><span id="lhc_need_help_triangle" style="right:15px;"></span><a id="lhc_need_help_close" title="Close" onclick="return lh_inst.lhc_need_help_hide();" href="#">×</a><div onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_image"><img src="Care%20Hospitals%20-%20Multispecialty%20Healthcare%20Centers%20in%20India_files/operator.png" width="60" height="60"></div><div onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_main_title">Need help?</div><span onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_sub_title">Our staff are always ready to help</span></div><a id="online-icon" class="status-icon" href="#" onclick="return lh_inst.lh_openchatWindow()">Online Chat Support</a></div>


<?php include_once 'apps/public/header.php';?>

<script>
$(document).ready(function(){
   $(document).on("click","#searchbutt",function(){
     var form = $(this).closest("form");
     //console.log(form);
     form.submit();
   });
});

</script>
<script language="JavaScript" type="text/JavaScript">
function doValidate(){
    var frm = document.frmsrch;
        if(frm.txtDoc.value==""){
			
			if(GenValidation(frm.sel_branch, 'Location' , '', '') == 0)
			return false;
		}
		return true;
}		
</script> 
<script>
$(document).ready(function() {
	$('#get_pop').delay(2000).fadeIn(400);
$(window).load(function() {
      document.getElementById('sel_branch').value='';
	  document.getElementById('speciality').value='';
	  $("#anim_div").animate({marginTop:"7%"},500);
	  
	   
	  
});
});
function get_pop_close()
{
	$("#anim_div").animate({marginTop:"-500px"},"slow",function(){
		document.getElementById("get_pop").style.display="none";
	});
}

</script>
<style>
#get_pop
{
	display:none;
}
</style>





<main style="min-height: 460px;">
<?php
appsConfig::renderBody();
?>
</main>




<?php include_once 'apps/public/footer.php';?>






<script type="text/javascript" src="<?php appsConfig::URL('apps/js/jquery.js')?>"></script>
<script type="text/javascript" src="<?php appsConfig::URL('apps/js/bootstrap.js')?>"></script>
<script type="text/javascript" src="<?php appsConfig::URL('apps/js/jquery_002.css')?>"></script>
</body>
</html>

<?php ob_end_flush();?>






