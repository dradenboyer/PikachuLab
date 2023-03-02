let pikachu = document.querySelector('img')

pikachu.addEventListener('click', (evt => {
    alert('grrrrrrrrrrrrrr')
    axios.get('/rollbar').then(response => {

    }).catch(err => console.log(err))
}))




