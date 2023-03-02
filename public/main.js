let pikachu = document.querySelector('img')

pikachu.addEventListener('click', (evt => {
    alert('grrrrrrrrrrrrrr')
    rollbar.info('Pikachu was clicked')
}))

