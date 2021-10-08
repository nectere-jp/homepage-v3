(() => {
  const createCard = () => {
    const card = document.createElement("script");
    card.type = "text/javascript";
    card.async = true;
    card.src = "https://platform.twitter.com/widgets.js";
    script = document.getElementsByTagName('script')[0]
    script.parentNode.insertBefore(card, script);
  }

  let loaded = false;
  const lazyLoad = () => {
    if(!loaded) {
      console.log("I will load!");
      loaded = true;
      ["scroll", "mousemove", "mousedown", "touchstar", "keydown", "load"].forEach(type => {
        window.removeEventListener(type, lazyLoad);
      });
      createCard();
    }
  }

  ["scroll", "mousemove", "mousedown", "touchstar", "keydown"].forEach(type => {
    window.addEventListener(type, lazyLoad);
  });
  window.addEventListener("load", () => {
    if(window.pageYOffset) lazyLoad();
  });
})();