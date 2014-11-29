function showMenuBar(id) {
	if (id == "about") {
		TweenMax.to($('#aboutbar') , 0, {opacity:0, display:'block', ease:Power1.easeInOut});
		TweenMax.to($('#aboutbar') , .3, {opacity:.68,  ease:Power1.easeInOut});
		TweenMax.to($('#projectbar') , .3, {opacity:0,  ease:Power1.easeInOut});
		TweenMax.to($('#projectbar') ,  .3, {display:'none', ease:Power1.easeInOut});	
	}
	if (id == "project") {
		TweenMax.to($('#projectbar') , 0, {opacity:0, display:'block', ease:Power1.easeInOut});
		TweenMax.to($('#projectbar') , .3, {opacity:.68,  ease:Power1.easeInOut});
		TweenMax.to($('#aboutbar') , .3, {opacity:0,  ease:Power1.easeInOut});
		TweenMax.to($('#aboutbar') ,  .3, {display:'none', ease:Power1.easeInOut});	
	}
}
function hideMenuBar(id) {
		TweenMax.to($('#'+id+'bar') , .3, {opacity:0,  ease:Power1.easeInOut});
		TweenMax.to($('#'+id+'bar') ,  .3, {display:'none', ease:Power1.easeInOut});	
}
function keepMenuBar(id) {
		TweenMax.to($('#'+id+'bar') , 0, {opacity:0, display:'block', ease:Power1.easeInOut});
		TweenMax.to($('#'+id+'bar') , 0, {opacity:.68,  ease:Power1.easeInOut});
}
function emphasizeBlock(id)
{
		TweenMax.to($("#"+id) , .3, {opacity:.5, ease:Power1.easeInOut});
}
function deEmphasizeBlock(id)
{
		TweenMax.to($("#"+id) , .2, {opacity:1, ease:Power1.easeInOut});
}
function showSlideBar() {
		TweenMax.to($('#slideBar') ,0, {display:'block', ease:Power1.easeInOut});
		TweenMax.to($('#slideBar') ,  .3, {right:'0%', ease:Power1.easeInOut});	
}
function hideSlideBar(){
	TweenMax.to($('#slideBar') ,  .4, {right:'-1000%', ease:Power1.easeInOut});
	TweenMax.to($('#slideBar') ,.4, {display:'none', ease:Power1.easeInOut});
}
function highlightSideBar(id){
	TweenMax.to($("#"+id) , .3, {background:"#010243", ease:Power1.easeInOut});
}
function unlightSideBar(id){
	TweenMax.to($("#"+id) , .3, {background:"none", ease:Power1.easeInOut});
}
