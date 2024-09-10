var menus = document.querySelectorAll('.menu');
var abrir = document.querySelectorAll('.expandible');

//abrir menu
abrir.forEach(function(abrir){
    abrir.addEventListener('click', function(event){
        event.stopPropagation(); //evita que el evento se propague
        var menu = this.querySelector('.menu');

        //cerrar menu al abrir otro
        menus.forEach(function(otherMenu){
            if(otherMenu !== menu){
                otherMenu.classList.remove('show');
            }
        });

        //abrir actual
        menu.classList.toggle('show');

    });
});

//cerrar menu

document.addEventListener('click', function(e){
    menus.forEach(function(menu){
        if (menu.classList.contains('show') && !menu.contains(e.target)){
                menu.classList.remove('show');
            }
    });
});
