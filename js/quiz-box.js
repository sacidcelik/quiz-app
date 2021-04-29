import { quizCards } from './lib/questions';
import createElementWithClass from './lib/element-creator';

quizCards.forEach((element) => {
  const quizBox = createElementWithClass('article', 'quiz-box');
  const quizContainer = document.querySelector('main');
  quizContainer.appendChild(quizBox);
  const bookmarkIcon = createElementWithClass('div', 'quiz-box__bookmark-icon');
  bookmarkIcon.setAttribute('role', 'img');
  bookmarkIcon.setAttribute('alt', 'Bookmark question');
  quizBox.appendChild(bookmarkIcon);
  const bookmarkAnimation = createElementWithClass(
    'div',
    'quiz-box__bookmark--animation'
  );
  quizBox.appendChild(bookmarkAnimation);
  const questionHeadline = createElementWithClass(
    'h2',
    'quiz-box__headline',
    'Question:'
  );
  quizBox.appendChild(questionHeadline);
  const questionSection = createElementWithClass(
    'section',
    'quiz-box__question'
  );
  quizBox.appendChild(questionSection);
  const question = createElementWithClass(
    'p',
    'quiz-box__question-text',
    element.question
  );
  questionSection.appendChild(question);
  const answerSection = createElementWithClass('section', 'quiz-box__answer');
  quizBox.appendChild(answerSection);
  const showAnswerButton = createElementWithClass(
    'button',
    'quiz-box__button',
    'Show Answer'
  );
  answerSection.appendChild(showAnswerButton);
  const answerClasses = ['quiz-box__answer-text', 'hidden'];
  const answer = createElementWithClass('p', answerClasses, element.answer);
  answerSection.appendChild(answer);
  const tags = createElementWithClass('section', 'tags');
  quizBox.appendChild(tags);
  const tagsContainer = createElementWithClass('ul', 'tags__container');
  tags.appendChild(tagsContainer);
  element.tags.forEach((tag, index) => {
    const tagItem = createElementWithClass(
      'li',
      'tags__item',
      element.tags[index]
    );
    tagsContainer.appendChild(tagItem);
  });
});

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
