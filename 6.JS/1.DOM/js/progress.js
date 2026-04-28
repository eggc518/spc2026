let interval;
let timerId;
const timeInput = document.getElementById('timeInput');
const progress = document.getElementById('progress'); //진행율바
const progressText = document.getElementById('progressText'); 
const startButton = document.getElementById('startButton');
const clearButton = document.getElementById('clearButton');

startButton.addEventListener('click', startProgress);
clearButton.addEventListener('click', clearProgress);

// 모듈화를 고려해볼 것!

function startProgress() {
    duration = parseInt(timeInput.value);
    console.log('입력초: ', duration);
    startButton.disabled = true;

    let elapsed = 0; //초과시간

    timerId = setInterval(()=> {
        // console.log('반복호출');
        elapsed++;
        const ratio = Math.floor((elapsed / duration) * 100); //진행률 계산
        progress.style.width = `${ratio}%`; //ration + %
        progressText.textContent = `${ratio}%`;

        if(ratio >= 100) {
            //타이머 중지
            clearInterval(timerId);
            startButton.disabled = false;
        }
    }, 1000);
}

function clearProgress() {
    if(timerId) clearInterval(timerId);
    progress.style.width = '2px'; //살짝 보이게
    timeInput.value = "";
    progressText.textContent = '0%';
    startButton.disabled = false;
}