let start = document.querySelector('.start-js') as HTMLElement;
let spawn = document.querySelector('.spawn-js') as HTMLElement;

let startStamp: number;
let stopStamp: number;
let time: number;
let iteration: number = 1;

function spawnTarget() {
  document.getElementById(`target-${iteration - 1}`)?.remove();

  if (iteration === 7) {
    stopStamp = Date.now();
    time = (stopStamp - startStamp) / 1000;

    let score = document.createElement('p');
    score.id = 'score';
    spawn.appendChild(score);

    let thres = document.getElementById('thres')
      ?.innerText as unknown as Number;

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
  } else {
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
  document.getElementById('score')?.remove();
  document.getElementById('form')?.remove();
  spawnTarget();
  start.style.display = 'none';
  startStamp = Date.now();
});
