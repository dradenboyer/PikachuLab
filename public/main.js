let pikachu = document.querySelector('img')

pikachu.addEventListener('click', (evt => {
    alert('grrrrrrrrrrrrrr')
    axios.get('/rollbar').then(response => {

    }).catch(err => console.log(err))
}))

let btn = document.querySelector('button')

btn.addEventListener('click', evt => {
    axios.get('/button').then(response => {

    }).catch(err => console.log(err))
})




