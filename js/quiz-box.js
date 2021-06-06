import { quizCards } from './lib/questions';
import createElementWithClass from './lib/element-creator';

quizCards.forEach((element) => {
  const quizContainer = document.querySelector('main');
  const quizBox = createElementWithClass('article', 'quiz-box', quizContainer);
  const bookmarkIcon = createElementWithClass(
    'div',
    'quiz-box__bookmark-icon',
    quizBox
  );
  bookmarkIcon.setAttribute('role', 'img');
  bookmarkIcon.setAttribute('alt', 'Bookmark question');
  const bookmarkAnimation = createElementWithClass(
    'div',
    'quiz-box__bookmark--animation',
    quizBox
  );
  const questionHeadline = createElementWithClass(
    'h2',
    'quiz-box__headline',
    quizBox,
    'Question:'
  );
  const questionSection = createElementWithClass(
    'section',
    'quiz-box__question',
    quizBox,
    ''
  );
  const question = createElementWithClass(
    'p',
    'quiz-box__question-text',
    questionSection,
    element.question
  );
  const answerSection = createElementWithClass(
    'section',
    'quiz-box__answer',
    quizBox,
    ''
  );
  const showAnswerButton = createElementWithClass(
    'button',
    'quiz-box__button',
    answerSection,
    'Show Answer'
  );
  const answerClasses = ['quiz-box__answer-text', 'hidden'];
  const answer = createElementWithClass(
    'p',
    answerClasses,
    answerSection,
    element.answer
  );
  const tags = createElementWithClass('section', 'tags', quizBox);
  const tagsContainer = createElementWithClass(
    'ul',
    'tags__container',
    tags,
    ''
  );
  element.tags.forEach((tag, index) => {
    const tagItem = createElementWithClass(
      'li',
      'tags__item',
      tagsContainer,
      element.tags[index]
    );
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
