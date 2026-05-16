let authUser = document.querySelector('.start')
let had = document.querySelector('.buttonUser')
let auth = document.querySelector('.inputAuth')
let UserLogin = document.querySelector('.nicknamesUser')
let UserPassword = document.querySelector('.passwordUser')

authUser.addEventListener('click', function() {
    auth.style.display = 'flex'
    authUser.style.display = 'none'
})


let data = []

let authButton = document.querySelector('.authBtn')
authButton.addEventListener('click', function() {
    let users = {
        name: UserLogin.value,
        password: UserPassword.value
    }
    data.push(users)
    if (UserLogin.value !== '' && UserPassword.value !== '') {
        window.location.href = '/main/main.html'
    }if (UserLogin.value === '' && UserPassword.value === '') {
        alert('Enter your login and password!')
    }if (UserLogin.value === '' && UserPassword.value !== '') {
        alert('Please check that your login is spelled correctly!')
    }if (UserLogin.value !== '' && UserPassword.value === '') {
        alert('Please check that your password is spelled correctly!')
    }
})
