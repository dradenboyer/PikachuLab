let pikachu = document.querySelector('img')

pikachu.addEventListener('click', (evt => {
    alert('grrrrrrrrrrrrrr')
    axios.get('http://localhost:4000/rollbar').then(response => {

    }).catch(err => console.log(err))
}))




