const wheel = document.querySelector('.wheel-inside');
const wheelBtn = document.querySelector('.wheel-btn');
const modalFirst = document.querySelector('#modal-1');
const modalSecond = document.querySelector('#modal-2');
const nextTurn = document.querySelector('#modal-btn-1');
const attempt = document.querySelector('span.attempt');

wheelBtn.addEventListener('click', () => {
    rotateWheel(780);
    setTimeout(function() {
        openModal(modalFirst);
    }, 2500);
});

nextTurn.addEventListener('click', () => {
    modalFirst.style.display = 'none';
    rotateWheel(-700);
    setTimeout(function() {
        openModal(modalSecond);
    }, 2500);
    attempt.textContent = '0';
});

function openModal(modal) {
    modal.style.display = 'block';
}

function rotateWheel(degCount) {
    wheel.style.transform = `rotateZ(${degCount}deg)`;
}