 // Показать полупрозрачный DIV, чтобы затенить страницу
    // (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
    function showCover() {
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';

      // убираем возможность прокрутки страницы во время показа модального окна с формой
      document.body.style.overflowY = 'hidden';

      document.body.append(coverDiv);
    }

    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }

    function showPrompt(text, callback) {
      showCover();
      let form = document.getElementById('prompt-form');
      let container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
      form.text.value = '';

      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
      }

      form.onsubmit = function() {
        let value = form.text.value;
        if (value == '') return false; // игнорируем отправку пустой формы

        complete(value);
        return false;
      };

      form.cancel.onclick = function() {
        complete(null);
      };

      document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
      };

      let lastElem = form.elements[form.elements.length - 1];
      let firstElem = form.elements[0];

      lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };

      firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }

    document.getElementById('show-button').onclick = function() {
      showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert("Вы ввели: " + value);
      });
    };

function func() {  
  
    // строка  
    var str = 'Конкатенация';  
  
    // соединение строк  
    var value = str.concat(' трёх',' строк');  
    document.write(value);    
}  
func(); 

document.getElementById('button__popup').onclick = function(){
      let popup =
      window.open("", "", "width=800, height=390, scrollbars=no, resizable=no, top=250', left=350");
      popup.document.write('<img src="privet.gif">');
  }

function refresh(){
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}


setInterval(refresh, 100);