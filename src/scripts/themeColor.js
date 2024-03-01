document.addEventListener("astro:page-load", () => {
  const colorThemes = document.querySelectorAll('[name="theme"]');

  // store theme
  const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
  };

  // set theme when visitor return
  const setTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((theme) => {
      if (theme.id === activeTheme) {
        theme.checked = true;
      }
    });
  };

  colorThemes.forEach((theme) => {
    theme.addEventListener("click", () => {
      storeTheme(theme.id);
    });
  });
  document.onload = setTheme();
});
