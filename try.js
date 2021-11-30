function redirectToRoomName(name){
	console.log(name);
	localStorage.setItem("OpenedRep", name);
	console.log("Success");
	window.location = "rep_card.html";
}