function Ristorante(){
	this.nome;
	this.posizione;
	this.tipo;
	this.init=function(data){
		this.nome=data.nome;
		this.posizione=data.posizione;
		this.tipo=data.tipo;
		return this;
	};
	this.getNome=function(){
		return this.nome;
	};
	this.getLat=function(){
		return this.posizione.lat;
	};
	this.getLng=function(){
		return this.posizione.lng;
	};
	this.getTipo=function(){
		return this.tipo;
	};
}

var infowindow;
var init=function(){
	//Mappa
	var mapOptions = {
	  center: new google.maps.LatLng(45.5, 9.2),
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);
		
	//Richiesta ristoranti	
	var ristoranti=[];
	$.get('api.php?name=getRistoranti',function(data){
		$.each(data, function(index, value) {
			var ristorante=new Ristorante();
			ristorante.init(value)
			ristoranti.push(ristorante);
		});
		//Riempio la mappa
		$.each(ristoranti, function(index, ristorante) {
			marker = new google.maps.Marker({
				position:  new google.maps.LatLng(ristorante.getLat(), ristorante.getLng()),
				map: map
			});
			marker.set('ristorante',ristorante);
			google.maps.event.addListener(marker, "click", function() {
				if (infowindow) infowindow.close();
				var ristorante = this.get('ristorante');
				infowindow = new google.maps.InfoWindow({content: ristorante.getNome()+'<br />'+ristorante.getTipo()});
				infowindow.open(map, this);
			});			
		});
	});
}

$(document).ready(init);