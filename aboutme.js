var current=0;
slideshow();
function slideshow(){
	var i;
	var img= document.getElementsByClassName('change')
	for(i=0;i<img.length;i++)
	{
		img[i].style.display="none";
	}
	current++;
	if(current>img.length)
	{
		current=1;
	}
	img[current-1].style.display="block";
	setTimeout(slideshow, 2000);
}
$("header li").click(function()
	{
		$("header li").removeClass("selected");
		$(this).addClass("selected");
	});