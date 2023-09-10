const run = document.querySelector('.run');
const rival = document.querySelector('.rival');

const jump =  () => {
run.classList.add('jump');

setTimeout(()=>{
    run.classList.remove('jump');
}, 2000) 
}
const loop = setInterval(()=>{
    const rivalPosition = rival.offsetLeft;
    const runPosition = +window.getComputedStyle(run).bottom.replace('px','');

    console.log(runPosition);

    if(rivalPosition <= 115 && rivalPosition > 0 && runPosition < 115 ){
        rival.style.animation = 'none';
    rival.style.left= `${rivalPosition}px`;
    run.style.animation = 'none';
    run.style.bottom = `${runPosition}px`;
    run.src = "imagens/perdeu.png";
    run.classList.add('lose');
    clearInterval(loop);
    }
}
,10)

document.addEventListener('keydown',jump);