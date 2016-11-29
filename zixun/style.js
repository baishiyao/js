 $("#box").on("click","a",function(e){
       e.preventDefault();
       $(this).addClass("on").siblings().removeClass("on");
       var attribute=$(this).attr("href");
       var index=$(this).index();
       $(attribute).css({
           "-webkit-transform":"translate3d(0%,0,0)"
       }).siblings().css({
           "-webkit-transform":"translate3d(100%,0,0)"
       })
 })

 var firstScroll=new iScroll("home");

$.ajax({
	"url":"data.json",
	"type":"get",
	success:function(data){
	var str="";
	for(var i=0;i<data.length;i++){
		str+="<ul>"
			+"<li>"
				+"<div>"+"<img src='"+data[i].src+"'>"+"</div>"
				+"<div>"
					+"<p>"+data[i].biaoti+"</p>"
					+"<p>"+"<span>"+"<a>"+data[i].Num+"</a>"+data[i].pingl+"</span>"+"<span>"+data[i].riqi+"</span>"+"</p>"
				+"</div>"
			+"</li>"
		+"</ul>"
	}
	$("#home_1").html(str);
	console.log(data);
}
})