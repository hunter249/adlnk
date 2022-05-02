var wpsafelink = "https://href.li/?https://techx4u.net/?9175854=";
var domain = ["",];
var exclude_domain = ["quora.com","medium.com","gmail.com","drive.google.com","facebook.com","twitter.com","amazon.com","yahoo.com","imdb.com","dictionary.com","yelp.com","tripadvisor.com","espn.com","khatrimaza.pics","tttttt.me","khatrimaza.boats","hdmovieplus.top","khatrimaza.hair","t.me","youtube.com","whatsapp.com","starsports.com","netflix.com","cricbuzz.com"];
var els = document.getElementsByTagName("a"); 
for(var i = 0, l = els.length; i < l; i++) {	
	var el = els[i]; 
	var li = el.href;
	li = li.replace("https://", "");
	li = li.replace("http://", "");
	li = li.replace("www.", "");
	li = li.split("/")[0];
	
	if( exclude_domain.length > 0 ) {
		var exists = false;
		for(var d=0; d < exclude_domain.length; d++){
			if(li == exclude_domain[d]){
				exists = true;
			}
		}
		if( !exists ) {
			el.href = wpsafelink + btoa(el.href);
		}
	} else {
		for(var d=0; d < domain.length; d++){
			if(li == domain[d]){
				el.href = wpsafelink + btoa(el.href);
			}
		}
	}
}
