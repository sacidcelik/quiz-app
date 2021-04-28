const answerButtons = document.querySelectorAll('.quiz-box__button');
const answerTexts = document.querySelectorAll('.quiz-box__answer-text');
const bookmarkIcon = document.querySelectorAll('.quiz-box__bookmark-icon');

answerButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    answerTexts[index].classList.toggle('hidden');
    if (answerTexts[index].classList.contains('hidden')) {
      button.innerText = 'Show Answer';
    } else {
      button.innerText = 'Hide Answer';
    }
  });
});

bookmarkIcon.forEach((button, index) => {
  button.addEventListener('click', () => {
    bookmarkIcon[index].classList.toggle('quiz-box__bookmark-icon--checked');
  });
});
