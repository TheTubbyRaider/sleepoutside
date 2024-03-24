// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
/**
 * Display alert message at top of page
 * @param {string} message - Message to display
 * @param {boolean} scroll - Whether to scroll to top
 */
export function showAlert(message, scroll = true) {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.textContent = message;

  document.body.insertAdjacentElement('afterbegin', alert);

  if (scroll) {
    window.scrollTo(0, 0);
  }
}
try {
  // call ExternalServices 
} catch (error) {
  showAlert(error.message);
}
