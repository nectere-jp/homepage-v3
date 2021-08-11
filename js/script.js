(function () {
  const menu = document.getElementById("burgerMenu");
  const button = document.getElementById("burgerButton");
  const filter = document.getElementById("burgerFilter");
  const bar1 = document.getElementById("burgerBar1");
  const bar2 = document.getElementById("burgerBar2");
  const bar3 = document.getElementById("burgerBar3");
  let isOpen = false;
  
  const open = () => {
    menu.classList=["header__right--open"]
    filter.classList=["header__filter--open"]
    bar1.classList=["header__burger--1--open"]
    bar2.classList=["header__burger--2--open"]
    bar3.classList=["header__burger--3--open"]
  }

  const close = () => {
    menu.classList=["header__right"]
    filter.classList=["header__filter"]
    bar1.classList=["header__burger--1"]
    bar2.classList=["header__burger--2"]
    bar3.classList=["header__burger--3"]
  }

  button.addEventListener("click", () => {
    isOpen = !isOpen;
    if(isOpen) {
      open();
    } else {
      close();
    }
  })

  filter.addEventListener("click", () => {
    close();
  })

}());