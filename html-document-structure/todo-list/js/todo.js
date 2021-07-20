const todoLIst = document.querySelector('.todo-list');
const checkBoxes = todoLIst.querySelectorAll('input');
const todoListDone = todoLIst.querySelector('.done');
const todoListUndone = todoLIst.querySelector('.undone');

const changeState = (e) => {
  const parentLabel = e.target.parentElement;
  if (e.target.checked) {
    todoListDone.appendChild(parentLabel);
  } else {
    todoListUndone.appendChild(parentLabel);
  }
};

for (let checkBox of checkBoxes) {
  checkBox.addEventListener('click', changeState);
}