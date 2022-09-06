const button = document.getElementsByTagName('button');
const styleCss = document.querySelector('link[rel=stylesheet]')

checkTheme()

for (let index = 0; index <= button.length - 1; index++) {
    button[index].addEventListener('click', function () {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'theme' + [index])
        styleCss.setAttribute('href', 'style-theme' + [index + 1] + '.css')

        checkTheme()
    })
}

function checkTheme() {
    let checkTheme = localStorage.getItem('theme')
    if (checkTheme == 'theme0') {
        styleCss.setAttribute('href', 'style-theme1.css')
        button[0].classList.add('pilih')
        button[1].classList.remove('pilih')
        button[2].classList.remove('pilih')
    }
    else if (checkTheme == 'theme1') {
        styleCss.setAttribute('href', 'style-theme2.css')
        button[0].classList.remove('pilih')
        button[1].classList.add('pilih')
        button[2].classList.remove('pilih')

    }
    else if (checkTheme == 'theme2') {
        styleCss.setAttribute('href', 'style-theme3.css')
        button[0].classList.remove('pilih')
        button[1].classList.remove('pilih')
        button[2].classList.add('pilih')
    }
    else {
        styleCss.setAttribute('href', 'style-theme1.css')
        button[0].classList.add('pilih')
        button[1].classList.remove('pilih')
        button[2].classList.remove('pilih')
    }
}