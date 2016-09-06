var interval = 3000;

handle = setInterval(function () {
  var el = document.getElementById('Taboola_NATIVE_TABOOLA_ARTICLE');
  if (el) {
    console.log('running!', el);
    el.style = 'display:none';
    clear(handle);
  }
}, interval);

function clear(handle) {
  clearInterval(handle);
  console.log('clearing');
}

