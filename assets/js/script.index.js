class User{
    constructor(name, email, birthdate, city, phone, cpf, status){
        this.name = name;
        this.email = email;
        this.birthdate = birthdate.split('-').reverse().join('/');
        this.age = this.caculateAge();
        this.city = city;
        this.phone = phone;
        this.cpf = cpf;
        this.status = status;
        this.sign = this.getZodiacSign();
    }

    
    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
    
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            this.sign = "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            this.sign = "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            this.sign = "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            this.sign = "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            this.sign = "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            this.sign = "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            this.sign = "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            this.sign = "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            this.sign = "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            this.sign = "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            this.sign = "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            this.sign = "Sagitário ♐";
        }
    }

    caculateAge(){
        let date = new Date(2023);

        console.log(date - this.birthdate)
    }
}

class ListUser{
    constructor(){
        this.users = [];
    }
    addUser(user){
        this.users.push(user);
    }
    
}

const listUser = new ListUser();

function createUser(){
    console.log("entrou createUser");
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const birthdate = document.getElementById("birthdate").value;
   const city = document.getElementById("address").value;
   const phone = document.getElementById("phone").value;
   const cpf = document.getElementById("cpf").value;
   const status = false; /* vai retornar false para reprensentar nao registrado */
   const user = new User (name, email, birthdate, city, phone, cpf, status);
   listUser.addUser(user);

   console.log(user);
   clearInputs();
}

function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");
    console.log("Passou pela funcao showRegister()");
}

function showUsers(){
    console.log("entrou pela funcao showUsers");
    document.getElementById("main-div").classList.add("hidden");
    document.getElementById("title-page").classList.add("hidden");
    document.getElementById("sub-div").classList.remove("hidden");
}

function clearInputs(){
    document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("birthdate").value = "";
   city = document.getElementById("address").value = "";
   phone = document.getElementById("phone").value = "";
   cpf = document.getElementById("cpf").value = "";
}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function formatedCellphone(phone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = phone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}
function sendSuccessMsg(msg) {
    console.log("Passou pela funcao sendSucessMsg()");

    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}



// how many functions are there? 12
// how many classes are there? 2

// Boa sorte!
