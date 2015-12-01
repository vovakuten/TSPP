var page = document.getElementById("container");
function message(){
	var name = document.getElementById("name").value;
	var group = "";
	if(document.getElementById("group1").checked ) {
		group = "КН-33";
	}
	
	else if(document.getElementById("group2").checked ) {
		group = "КН-34";
	}
	
	else{
		group = "КН-35";
	}
	page.innerHTML="<div id='text1'> Привіт" + " " + name + "</div> <br>" + "Група" + " " + group;
}
