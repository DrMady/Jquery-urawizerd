var hp = $.get("http://hp-api.herokuapp.com/api/characters")
.then(function(data){
data.forEach(function(characters){

$('.list-group').append('<li class="list-group-item">'+characters.name, characters.house+'</li>');



console.log(characters.name, "Maison: ", characters.house);
})});
