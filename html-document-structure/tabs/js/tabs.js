const tabsNav = document.querySelector('.tabs-nav');
const tabsNavItems = tabsNav.getElementsByTagName('li');
const tabsList = document.querySelector('.tabs-content');
const articles = Array.from(tabsList.children);
const ACTIVE_TAB_CLASS = 'ui-tabs-active';
const HIDDEN_ARTICLE_CLASS ='hidden';

for (let i = 0; i < articles.length; i++) {
  const tabsNavItemCopy = tabsNavItems[0].cloneNode(true);
  const link = tabsNavItemCopy.firstChild;
  link.classList.add(articles[i].dataset.tabIcon);
  link.textContent = articles[i].dataset.tabTitle;
  if (i) {
    articles[i].classList.add(HIDDEN_ARTICLE_CLASS);
  } else {
    link.classList.add(ACTIVE_TAB_CLASS);
  }
  tabsNav.appendChild(tabsNavItemCopy);
}

tabsNavItems[0].parentNode.removeChild(tabsNavItems[0]);
const menuLinks = Array.from(tabsNavItems);

const setArticle = (e) => {
  menuLinks.forEach(link => link.firstChild.classList.remove(ACTIVE_TAB_CLASS));
  e.target.classList.add(ACTIVE_TAB_CLASS);
  articles.forEach(article => article.classList.add(HIDDEN_ARTICLE_CLASS));
  const currentArticle = articles.find(article => article.dataset.tabTitle === e.target.textContent);
  currentArticle.classList.remove(HIDDEN_ARTICLE_CLASS);
};

const initTabs = () => {
  menuLinks.forEach(link => link.addEventListener('click', setArticle));
};

document.addEventListener('DOMContentLoaded', initTabs);