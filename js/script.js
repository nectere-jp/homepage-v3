(function () {
  const menuArea = document.getElementById("burgerMenu");
  const menuItem = document.getElementsByClassName("header__link--inpage");
  const button = document.getElementById("burgerButton");
  const filter = document.getElementById("burgerFilter");
  const bar1 = document.getElementById("burgerBar1");
  const bar2 = document.getElementById("burgerBar2");
  const bar3 = document.getElementById("burgerBar3");
  let isOpen = false;

  [button, filter].forEach(item => {
    item.addEventListener('click', () => {
      isOpen = !isOpen;
      bodyScrollPrevent(isOpen);
      [menuArea, filter].forEach(item => {
        item.classList.toggle("isShow");
      });
      [bar1, bar2, bar3].forEach(item => {
        item.classList.toggle("isOpen");
      })
    })
  })
  Array.from(menuItem).forEach(item => {
    item.addEventListener('click', e => {
      isOpen = !isOpen;
      // e.preventDefault();
      bodyScrollPrevent(isOpen, item.href);
      [menuArea, filter].forEach(item => {
        item.classList.toggle("isShow");
      });
      [bar1, bar2, bar3].forEach(item => {
        item.classList.toggle("isOpen");
      });
    })
  })

  // const bodyScrollPrevent = (flag, menu, linkTarget) => {
  const bodyScrollPrevent = (flag, linkTarget) => {
    let scrollPosition;
    const body = document.getElementsByTagName('body')[0];
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = 
      userAgent.indexOf('iphone') != -3 ||
      userAgent.indexOf('ipad') != -1 ||
      userAgent.indexOf('macintosh') != -1 &&
      'ontouchend' in document;
    const scrollBarWidth = window.innerWidth- document.body.clientWidth;
    if (flag) {
      body.style.paddingRight = `${scrollBarWidth}px`;
      if (isIOS) {
        scrollPosition = -window.pageYOffset;
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.top = `${scrollPosition}px`
      } else {
        body.style.overflow = 'hidden';
      }
    } else {
      // addEventListenerOnce(menu, 'transitionend', () => {
        body.style.paddingRIght = '';
        if (isIOS) {
          scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ''));
          body.style.position = '';
          body.style.width = '';
          body.style.top = '';
        } else {
          body.style.overflow = '';
        }
      // })
    }
  }

  // const addEventListenerOnce = (node, event, callback) => {
  //   const handler = e => {
  //     callback.call(this, e);
  //     node.removeEventListener(event, handler);
  //   };
  //   node.addEventListener(event, handler)
  // }
}());