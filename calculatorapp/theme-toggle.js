const storageKey = 'theme-preference'
const theme = {
  value: getColorPreference(),
}

function getColorPreference () {
  if(localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

function setPreference () {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", theme.value)
}
reflectPreference()

window.onload = () => {
  reflectPreference()
  document.querySelector(".switch").addEventListener("change", (event) => {
    theme.value = event.target.value
    setPreference()
  })
}
