function comecar() {
    let assunto = document.getElementById("assuntotxt")
    let data = document.getElementById("datatxt")
    const dataAtual = Date.now()

    //verifica se algo foi inserido no campo assunto
    if (assunto.value.length == 0) {
        alert("[ERRO]: Por favor, insira um assunto.")
    } else {
        //verifica se a data do assunto em questão foi inserida
        if (data.value.length == 0 || data.value < Date.now()) {
            alert("[ERRO]: Por favor, insira uma data válida.")
        } else {
            alert("Tudo OK")
        }
    }

}