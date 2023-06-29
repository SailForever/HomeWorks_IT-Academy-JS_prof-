//<script src="http://fe.it-academy.by/JQ/jquery.js"></script>


var name1='NEDVEDSKAJA_2048_Classic';

function info() {
  $.ajax( {
          url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : name1 },
          success : resultFunc, error : errorHandler
      }
  );
}

function resultFunc(resultFull){
  console.log(resultFull.result)
}

function errorHandler(jqXHR,statusStr,errorStr)
{
  alert(statusStr+' '+errorStr);
}

info();






















const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var nameEr='ERMOLOVICH_T3';

let password;
let resultEr;

function info() {
  $.ajax( {
          url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
          data : { f : 'INSERT', n : nameEr, v : JSON.stringify([]) },
          success : info1, error : errorHandler
      }
  );

  function info1(ready) {
    console.log(ready.result)
    password=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : nameEr, p: password },
            success : resultFunc, error : errorHandler
        }
    );
  }

  function resultFunc(resultFull){
    resultEr=[];
    resultEr=JSON.parse(resultFull.result)
    resultEr.push({name:'Aaaa',score:'123'})
    $.ajax( {
              url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
              data : { f : 'UPDATE', n : nameEr, v : JSON.stringify(resultEr), p : password },
              success : update_resultReady, error : errorHandler
            }
          );
  }
}

function update_resultReady(ready){
  console.log(ready.result)
}

function errorHandler(jqXHR,statusStr,errorStr)
{
  alert(statusStr+' '+errorStr);
}

info();