'use strict';

const tableHeader = Array.from(document.querySelectorAll('.prop__name'));

tableHeader.forEach(item => {
  item.dataset.dir = '1';
  console.log(item.dataset);
});

console.log(tableHeader);
function handleTableClick(event) {
  const currentTarget = event.target;
  if (!currentTarget.classList.contains('prop__name')) return;

  sortTable(currentTarget.dataset.propName, currentTarget.dataset.dir);
  if (currentTarget.dataset.dir === '1') {
    currentTarget.dataset.dir = '-1';
  } else currentTarget.dataset.dir = '1';
}
