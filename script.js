const textInput = document.querySelector('#carta-texto');
const createButton = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-gerada');
const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotates = ['rotateleft', 'rotateright'];
const skews = ['skewleft', 'skewright'];
const randomNum = (limit) => Math.round(Math.random() * (limit - 1));
const randomClass = (list) => list[randomNum((list.length))];
const randomStyle = () => randomClass(styles);
const randomSize = () => randomClass(sizes);
const randomRotate = () => randomClass(rotates);
const randomSkew = () => randomClass(skews);
const createSpan = () => document.createElement('span');
const appendSpan = (word) => letterContent.appendChild(word);

createButton.addEventListener('click', () => {
  const errorMessage = 'Por favor, digite o conteúdo da carta.';
  if (textInput.value.trim().length === 0) {
    letterContent.innerHTML = errorMessage;
    return;
  }
  letterContent.innerHTML = '';
  const splittedText = textInput.value.split(' ');
  splittedText.forEach((word) => {
    if (letterContent.innerHTML.length > 0) letterContent.innerHTML += ' ';
    const newSpan = createSpan();
    newSpan.innerHTML = word;
    newSpan.classList.add(randomStyle(), randomSize(), randomRotate(), randomSkew());
    appendSpan(newSpan);
  });
});

letterContent.addEventListener('click', (event) => {
  const chosen = event.target;
  if (chosen.tagName !== 'SPAN') return;
  chosen.className = `${randomStyle()} ${randomSize()} ${randomRotate()} ${randomSkew()}`;
});
