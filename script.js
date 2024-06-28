const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")

form.addEventListener ("submit", (event) => {
    event.preventDefault();
  
    checkForm();
  })

username.addEventListener("blur", () => {
    checkInputUsername();
})   

email.addEventListener("blur", () => {
    checkInputEmail();
})

telefone.addEventListener("blur", () => {
    checkInputTelefone();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Esse campo é obrigatório")
    }else{ 
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Esse campo é obrigatório")
    }else{ 
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if (telefoneValue === "") {
        errorInput(telefone, "Esse campo é obrigatório")
    }else{ 
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputTelefone();

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