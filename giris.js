const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginFormButon");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.kullanici.value;
    const password = loginForm.sifre.value;

    if(username === 'ead' && password === 'ead1') {
        window.location ="./index.html";
        alert('Girişiniz Başarılı!');
    } else {
        window.location = "./giris.html";
        alert('Girişiniz Başarısız!');
    }
})