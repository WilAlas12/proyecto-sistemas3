

const bloque = document.querySelectorAll('.bloque')
const Att = document.querySelectorAll('.ATt')

// si haces click en el titulo del acordeon se expande

    //debemos quitar la clase activo de todos los bloques, de esa forma solo se puede abrir uno a la vez
    //le damos la clase activo al titulo tocado

    //recorreomos los titulos
    Att.forEach((cadaAtt, i) =>{
        //le asignamos un click a cada uno
        Att[i].addEventListener('click',()=>{


            //verificamos si esta abierto o no
            if(bloque[i].classList.contains('activo')){
                //si esta cerrarmos
                bloque[i].classList.remove('activo')
            }
            else{
            //recorremos los bloques para ver si hay alguno abierto
            //impide que mas de uno este abierto al mismo tiempo y abre el que clikeamos
            bloque.forEach( (cadabloque, i)=>{
                //quitamos la clase activo de todos
                bloque[i].classList.remove('activo')
            })

            //Y abrimos
            bloque[i].classList.add('activo')
            }

        })
    })
