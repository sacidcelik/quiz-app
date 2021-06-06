export default function createElementWithClass(
  elementName,
  elementClassName,
  parent,
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
  parent.appendChild(newElement);
  return newElement;
}
