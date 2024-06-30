const form = document.getElementById("form");
const username = document.getElementById("username")
const data = document.getElementById("idade")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const cep = document.getElementById("cep")

form.addEventListener ("submit", (event) => {
    event.preventDefault();
  
    checkForm();
  })

username.addEventListener("blur", () => {
    checkInputUsername();
})   

data.addEventListener("blur", () => {
    checkInputIdade();
})  

email.addEventListener("blur", () => {
    checkInputEmail();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})

cep.addEventListener("blur", () => {
    checkInputCep();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Campo obrigatório")
    }else{ 
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputIdade(){
    const idadeValue = idade.value;

    if (idadeValue === "") {
        errorInput(idade, "Campo obrigatório")
    }else{ 
        const formItem = idade.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Digite um email válido")
    }else{ 
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if (telefoneValue === "") {
        errorInput(telefone, "Digite um número de telefone válido")
    }else{ 
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputCep(){
    const cepValue = cep.value;

    if (cepValue === "") {
        errorInput(cep, "Campo obrigatório")
    }else{ 
        const formItem = cep.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputTelefone();
    checkInputCep();
    checkInputIdade();

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every ( (item) => {
        return item.className === "form-content"
    });
    
    if(isValid){
        alert("Currículo gerado com sucesso")
    }else{ 
        alert("Preencha todos os campos obrigatórios")
    }

}

function errorInput (input, message) {
    const formItem = input.parentElement;
    const textMesssage = formItem.querySelector ("a")

    textMesssage.innerText = message;

    formItem.className = "form-content error"

}