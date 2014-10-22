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