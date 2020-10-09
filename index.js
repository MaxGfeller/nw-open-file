module.exports = function (cb, option) {
  var el = document.createElement('input')
  el.type = 'file';
  el.style.display = 'none';

  if (option != null && typeof option.accept === 'string') {
    el.setAttribute('accept', option.accept);
  }

  document.body.appendChild(el);
  el.addEventListener('change', function (evt) {
    document.body.removeChild(el);
    cb(this.value);
  })
  el.click();
}
