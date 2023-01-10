const header = document.querySelector('.show-more')
const grid = document.querySelector('#projects-more')

if (header) {
    header.addEventListener('click', () => {
        grid.classList.toggle('hidden')
    
        if (grid.classList.contains('hidden')) {
            header.innerText = 'Show more'
        }
        else {
            header.innerText = 'Show less'
        }
    })
}
