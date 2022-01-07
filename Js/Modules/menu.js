export const menuShow = (menuBtn, menu, menuLink) => {
    document.addEventListener("click", e => {
        if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
            document.querySelector(menu).classList.toggle("is-active")
            document.querySelector(menuBtn).classList.toggle("is-active")
          }
      
          if (e.target.matches(menuLink)) {
            document.querySelector(menu).classList.remove("is-active")
            document.querySelector(menuBtn).classList.remove("is-active")
          }
    });  
};
