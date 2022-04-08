//writes group members

	var seconds=0;
	function displayseconds(){
	        seconds += 1;
					
	}
	setInterval(displayseconds,1000);
	
	function redirectpage(){
	        window.location="product/productHtml.html";
	}
	
	setTimeout('redirectpage()',4000);
