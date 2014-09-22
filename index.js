var cuid = require('cuid')

module.exports = function(cb) {
    var el = document.createElement('input')
    el.type = 'file'
    el.style.display = 'none'
    document.body.appendChild(el)
    el.addEventListener('change', function(evt) {
        cb(this.value)
    })
    el.click()
}
