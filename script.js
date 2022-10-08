const textInput = document.querySelector('#carta-texto');
const createButton = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-gerada');
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
    appendSpan(newSpan);
  });
});
