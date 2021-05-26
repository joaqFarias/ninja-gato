// inicializacion de variable
var cats = ["cat0", "cat1", "cat2", "cat3", "cat4"];
var ninjas = ["ninja0", "ninja1", "ninja2", "ninja3", "ninja4"];
var imagenes = [cats, ninjas];
var ran1 = 0, ran2 = 0;

// inicializacion de imagenes
for (let i = 0; i < 5; i++) {
    ran1 = Math.round(1*Math.random());
    ran2 = Math.floor(5*Math.random());
    $(`#img${i}`).attr("src", `img/${imagenes[ran1][ran2]}.png`);
}

// cambio de imagen por otra random
$("img").click(function () { 
    ran1 = Math.round(1*Math.random());
    ran2 = Math.floor(5*Math.random());
    $(this).attr("src", `img/${imagenes[ran1][ran2]}.png`);
});

