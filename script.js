const nodoButton = document.getElementById('button')
const nodoCalificaciones = document.getElementById('calificaciones')
const hijos = Array.from(nodoCalificaciones.children)

function resetearEstiloCalificaciones(){
    hijos.forEach(element => {
        element.style.backgroundColor = ''
        element.style.color = ''
    })
}



hijos.forEach(element => {
    element.addEventListener('click', function(){
        resetearEstiloCalificaciones()
        const calificacion = element.id 
        const nodoCalificacion = document.getElementById('calificacion')
        nodoCalificacion.innerText = calificacion
        element.style.backgroundColor = 'hsl(216, 12%, 54%)'
        element.style.color = 'white'
    })
});

nodoButton.addEventListener('click', function(){
    const nodoRatingStart = document.getElementById('rating_start')
    const nodoRatingEnd = document.getElementById('rating_end')
    nodoRatingStart.style.display = 'none'
    nodoRatingEnd.style.display = 'block'
})