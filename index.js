function comecar() {
    let assunto = document.getElementById("assuntotxt")
    let data = document.getElementById("datatxt")
    const agora = new Date()

    //verifica se algo foi inserido no campo assunto
    if (assunto.value.length == 0) {
        alert("[ERRO]: Por favor, insira um assunto.")
    } else {
        //verifica se a data do assunto em questão foi inserida
        const dataUser = new Date(data.value)
            //transforma a data e hora inserida em milisegundos para comparar com a data e hora atual
        if (dataUser.getTime() < agora) {
            alert("[ERRO]: Por favor, insira uma data válida.")
        } else {
            alert("Tudo OK")
        }
    }
}