const name = document.getElementById('name')
const email = document.getElementsById('email')
const form = document.getElementsById('form')
const errorElement=document.getElementById('error')
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Please Enter Your Name')
    }
    if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})