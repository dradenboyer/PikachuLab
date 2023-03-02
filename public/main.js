let pikachu = document.querySelector('img')

pikachu.addEventListener('click', (evt => {
    alert('grrrrrrrrrrrrrr')
    axios.get('http://3.17.205.229//rollbar').then(response => {

    }).catch(err => console.log(err))
}))




