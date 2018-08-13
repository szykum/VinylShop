function notifications(option){
	if(option == 1)
		alert("Zostałeś zalogowany.");
	else if(option == 2)
		alert("Strona w w przebudowie. Sprawdz za parę minut.");
	else if(option == 3)
		alert("Zostałeś pomyślnie wylogowany.");
	else if(option == 4)
		alert("Infolinia sklepu pod numerem +48 654 984 111 ");
}

function myMap() {
	var mapOptions = {
	    center: new google.maps.LatLng(53.5, 10.02),
	    zoom: 16,
	    mapTypeId: google.maps.MapTypeId.MAP
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



