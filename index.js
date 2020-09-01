function comecar() {
    let assunto = document.getElementById("assuntotxt")
    let data = document.getElementById("datatxt")

    //verifica se algo foi inserido no campo assunto
    if (assunto.value.length == 0) {
        alert("[ERRO]: Por favor, insira um assunto.")
    } else {
        //verifica se a data do assunto em questão foi inserida
        const dataUser = new Date(data.value)
            //transforma a data e hora inserida em milisegundos para comparar com a data e hora atual
        if (dataUser.getTime() < new Date().getTime()) {
            alert("[ERRO]: Por favor, insira uma data válida.")
        } else {
            var cronometro = setInterval(function() {
                var agora = new Date().getTime()
                var distancia = dataUser.getTime() - agora

                //calulo de dias, horas, minutos e segundos
                var dias = Math.floor(distancia / (1000 * 60 * 60 * 24))
                var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))
                var segundos = Math.floor((distancia % (1000 * 60)) / 1000)

                //mostrar sempre duas casas decimais no relogio
                function duasCasas(num, casas) {
                    return num.toString().padStart(casas, 0)
                }

                //mostra no display o tempo restante
                document.getElementById("timer").innerHTML = duasCasas(dias, 2) + " : " + duasCasas(horas, 2) + " : " + duasCasas(minutos, 2) + " : " + duasCasas(segundos, 2)

            }, 1000)

        }
    }
}