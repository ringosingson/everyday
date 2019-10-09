const btn = document.querySelector('.btn');
const info = document.querySelector('.info');

function getData(url) {
  const ajax = new XMLHttpRequest();
  console.log(ajax);

  ajax.open('GET', url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      info.textContent = this.responseText;
    } else {
      console.log(this.statusText);
    }
  };

  ajax.onerror = function() {
    console.log('There was an error');
  };

  return ajax.send();
}

btn.addEventListener('click', function() {
  getData('info.txt');
});
