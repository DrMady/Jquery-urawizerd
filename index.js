var hp = $.get("http://hp-api.herokuapp.com/api/characters")
.then(function(data){
data.forEach(function(characters){

// Unavailable feature too lazy to fix it

/*if (characters.house == "Gryffindor") {
	$('#house').addClass('.Gryffindor');
}

else if (characters.house == "Slytherin") {
	$('#house').addClass('.Slytherin');
}

else if (characters.house == "Ravenclaw") {
	$('#house').addClass('.Ravenclaw');
}

else if (characters.house == "Hufflepuff") {
	$('#house').addClass('.Hufflepuff');
}

else {
	$('p').append('None');
}*/

$('.list-group').append('<li id="changer" class="list-group-item active">'+characters.name+'</li>'+'<li id="house" class="list-group-item"> <p>House:</p>'+characters.house+'</li>');



console.log(characters.name, "Maison: ", characters.house);
})});
