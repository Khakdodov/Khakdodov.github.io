modifyTime = (val) => val<10 ? "0"+val : val;
displayTime = () => {
  date = new Date();
  var hr = date.getHours();
  var mn = date.getMinutes();
  var sec = date.getSeconds();
  var day = date.getDate();
  var mon = date.getMonth()+1;
  var yr = date.getFullYear();
  var part_day = "AM";

  part_day = (hr >= 12) ? "PM" : "AM"; 
  hr = (hr == 0) ? 12 : ((hr > 24) ? (hr - 24): hr); 
  hr = modifyTime(hr);
  mn = modifyTime(mn);
  sec = modifyTime(sec);
  document.getElementById("dc").innerText = day + "/" + mon + "/" + yr + "\n" + 
    hr + " : " + mn + " : " + sec + " " + part_day;
}

setInterval(displayTime,1000);



navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

alert(navigator.sayswho);


function timeMsg()
{
var t=setTimeout("alertMsg()",5000);
}
function alertMsg()
{
alert("— И сколько же это будет стоить?— Это бесплатно!— Звучит дороговато.");
}




var a = new Array();
var count = 5;
for (var i=0; i<count; i++)
    a[i]=parseInt(prompt("Введите 5 целых чисел:", ""));
alert("Массив: "+a.join(", ")); // вывод массива

function  minPar(x, y) {
            let m = Math.min(x,y)
            alert('Минимальное число: '+ m);
        }
        let x = prompt('Первое число:')
        let y = prompt('Второе число:')
         minPar(x, y) ;


let n = prompt('Введите число:')
        let np = 0
        function powNum(x) {
           return np = Math.pow(x, 2)
            
        }
        function outputNum(x) {
            powNum(n)
            alert( ' ' + n + ' в степени 2 равно ' + np);
        }
        outputNum(n)


