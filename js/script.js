var jogador = 'x'
var jogada = 0

function chkJogo(id) {

    let src = chkSrc(id)
    let cpu = document.getElementById('cpu').checked
    if(src == 'branco.png') {

        document.getElementById(id).src = './' + jogador + '.png'
        jogada++

        if(chkVitoria()) {
            alert('Fim do Jogo! Vitória do ' + jogador)
            location.reload()
        }else if(jogada >= 9) {
            alert('Fim do Jogo! Empate!!!')
            location.reload()
        }

        if(jogador == 'x') {
            jogador = 'o'
        } else {
            jogador = 'x'
        }

    }
    if(cpu && jogador == 'o') {
        chkJogo(jogadaDoComputador())
    }

}

function jogadaDoComputador() {

    if(chkSrc('cel5') == 'branco.png') {
        return 'cel5'
    }

    return 'cel' + Math.floor((Math.random() * 9) + 1)
}

function chkSrc(id) {
    let src = document.getElementById(id).src
    return src.substring(src.length - 10, src.length)
}

function chkVitoria() {

    if(chkSrc('cel1') == chkSrc('cel2') && chkSrc('cel1') == chkSrc('cel3') && chkSrc('cel1') != 'branco.png') {
        return true
    }
    if(chkSrc('cel4') == chkSrc('cel5') && chkSrc('cel4') == chkSrc('cel6') && chkSrc('cel4') != 'branco.png') {
        return true
    }
    if(chkSrc('cel7') == chkSrc('cel8') && chkSrc('cel7') == chkSrc('cel9') && chkSrc('cel7') != 'branco.png') {
        return true
    }
    if(chkSrc('cel1') == chkSrc('cel4') && chkSrc('cel1') == chkSrc('cel7') && chkSrc('cel1') != 'branco.png') {
        return true
    }
    if(chkSrc('cel2') == chkSrc('cel5') && chkSrc('cel2') == chkSrc('cel8') && chkSrc('cel2') != 'branco.png') {
        return true
    }
    if(chkSrc('cel3') == chkSrc('cel6') && chkSrc('cel3') == chkSrc('cel9') && chkSrc('cel3') != 'branco.png') {
        return true
    }
    if(chkSrc('cel1') == chkSrc('cel5') && chkSrc('cel1') == chkSrc('cel9') && chkSrc('cel1') != 'branco.png') {
        return true
    }
    if(chkSrc('cel3') == chkSrc('cel5') && chkSrc('cel3') == chkSrc('cel7') && chkSrc('cel3') != 'branco.png') {
        return true
    }

    return false

}