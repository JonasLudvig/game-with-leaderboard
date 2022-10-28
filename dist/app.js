"use strict";
let start = document.querySelector('.start-js');
let spawn = document.querySelector('.spawn-js');
let startStamp;
let stopStamp;
let time;
let iteration = 1;
function spawnTarget() {
    var _a, _b;
    (_a = document.getElementById(`target-${iteration - 1}`)) === null || _a === void 0 ? void 0 : _a.remove();
    if (iteration === 7) {
        stopStamp = Date.now();
        time = (stopStamp - startStamp) / 1000;
        let score = document.createElement('p');
        score.id = 'score';
        spawn.appendChild(score);
        let thres = (_b = document.getElementById('thres')) === null || _b === void 0 ? void 0 : _b.innerText;
        if (time < thres) {
            let form = document.createElement('form');
            form.id = 'form';
            form.method = 'post';
            form.autocomplete = 'off';
            let prompt = document.createElement('h2');
            prompt.innerText = 'HI-SCORE';
            form.appendChild(prompt);
            let player = document.createElement('input');
            player.name = 'player';
            player.type = 'text';
            player.value = 'Name';
            player.pattern = '[A-Za-z0-9 ]{3,24}';
            player.title =
                'Name should consist of 3-24 characters, containing only latin alphabetics, numbers and spaces.';
            player.minLength = 3;
            player.maxLength = 24;
            player.classList.add('input');
            player.required;
            let playerTime = document.createElement('input');
            playerTime.name = 'playerTime';
            playerTime.value = `${time}`;
            playerTime.style.display = 'none';
            let submit = document.createElement('input');
            submit.name = 'submit';
            submit.type = 'submit';
            submit.value = 'Submit';
            submit.classList.add('submit');
            form.appendChild(player);
            form.appendChild(playerTime);
            form.appendChild(submit);
            spawn.appendChild(form);
        }
        score.innerText = `Finished in ${time} seconds!`;
        score.classList.add('score');
        iteration = 1;
        start.style.display = 'block';
    }
    else {
        let target = document.createElement('button');
        target.classList.add('button', `pos-${iteration}`);
        target.id = `target-${iteration}`;
        spawn.appendChild(target);
        start.style.display = 'none';
        target.style.display = 'block';
        target.addEventListener('click', function () {
            iteration++;
            spawnTarget();
        });
    }
}
start.addEventListener('click', function () {
    var _a, _b;
    (_a = document.getElementById('score')) === null || _a === void 0 ? void 0 : _a.remove();
    (_b = document.getElementById('form')) === null || _b === void 0 ? void 0 : _b.remove();
    spawnTarget();
    start.style.display = 'none';
    startStamp = Date.now();
});
//# sourceMappingURL=app.js.map