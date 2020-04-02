$(document).ready(() => {
  let value = JSON.parse(window.sessionStorage.getItem('isDarkOn'))
  let back = $('#bb');

  value ? back.addClass('inverted') : back.removeClass('inverted');

  document.getElementById('theme-toggle').addEventListener('click', () => {
    let value = JSON.parse(window.sessionStorage.getItem('isDarkOn'))
    window.sessionStorage.setItem('isDarkOn', !value)
  
    value ? back.removeClass('inverted') : back.addClass('inverted');
  });
});
