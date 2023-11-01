function validarForm(){
    var name = document.forms["contactForm"]["name"].value;
    var numero = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;
    var opiniao = document.forms["contactForm"]["opinion"].value;

    if(name === "" || name.lenght < 10){
        alert("O nome deve ter pelo menos 10 caracteres")
        return false;
    }
    if(numero === "" || numero.lenght != 10){
        alert("Numero de telefone inválido")
        return false;
    }
    if(email === "" || !validarEmail(email)){
        alert("Email inválido")
        return false;
    }
    if(opiniao === "" || opiniao.lenght < 10 || opiniao.leght > 50){
        alert("Pedimos que nos forneça uma opinião de 10 à 50 caracteres")
        return false;
    }
    return true;
}
function validarEmail(email){
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //Interessante essa "fórmula" para se validar o email
    return re.test(email)
}