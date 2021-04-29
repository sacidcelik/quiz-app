export default function createElementWithClass(
  elementName,
  elementClassName,
  elementInnerText = ''
) {
  const newElement = document.createElement(elementName);
  if (typeof elementClassName === 'string') {
    newElement.classList.add(elementClassName);
  } else {
    elementClassName.forEach((element) => {
      newElement.classList.add(element);
    });
  }
  newElement.innerText = elementInnerText;
  return newElement;
}
