function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.querySelector('input#anodigitado')
    var resultado = document.querySelector('div#resultado')

    if(formano.value.length == 0 || formano.value > ano){
        alert('Verifique as informações digitadas e tente novamente!')
    }else{
        var formsex = document.getElementsByName('radiosexo')
        var idade = ano - Number(formano.value)
        var genero = ''
        var imagem = document.createElement('img')

        if(formsex[0].checked){
            genero = 'Gênero Masculino'
            if(idade >= 0 && idade <10){
                imagem.setAttribute("src",'imagem/criança-masculino.jpg')
            }else if(idade >= 11 && idade <25) {
                imagem.setAttribute('src','imagem/jovem-masculino.jpg')
            }else if(idade >= 26 && idade <60){
                imagem.setAttribute('src','imagem/adulto-masculino.jpg')
            }else if(idade > 60){
                imagem.setAttribute('src','imagem/idoso-masculino.jpg')
            }

        }else{
            genero = 'Gênero Feminino'
            if(idade >= 0 && idade <10){
                imagem.setAttribute("src",'imagem/criança-feminina.jpg')
            }else if(idade >= 11 && idade < 25){
                imagem.setAttribute('src', 'imagem/jovem-feminina.jpg')
            }else if(idade > 26 && idade < 60){
                imagem.setAttribute( 'src','imagem/adulta-feminina.jpg')
            }else if(idade > 60){
                imagem.setAttribute('src','imagem/idosa-feminina.jpg')
            }

        }
        resultado.style.textAlign ='center'
        resultado.innerHTML = `O ${genero}, com idade de ${idade} anos.`
        resultado.appendChild(imagem)
        imagem.style.display = 'block';
        imagem.style.margin = '0 auto';
    }
}