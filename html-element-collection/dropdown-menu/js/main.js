const menuDropDown = document.getElementsByClassName('wrapper-dropdown')[0];

const toggleActiveDropDown = () => {
  menuDropDown.classList.toggle('active');
}

menuDropDown.onclick = () => toggleActiveDropDown();

const dropDown = document.getElementsByClassName('dropdown');
const menuItems = Array.from(dropDown.getElementsByTagName('a'));

menuItems.forEach((menuItem) => menuItem.onclick = () => toggleActiveDropDown());