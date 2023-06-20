//<form name='form1' action='https://fe.it-academy.by/TestForm.php'></form>
//<form name='form2' action='https://fe.it-academy.by/TestForm.php'></form>


function getMass(){

  let mass1=undefined;
  let mass2=undefined;

  function getNextMass(){
    if ( mass1===undefined ) {
      $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json",
        { type:'GET', dataType:'json', success:function(data){mass1=data;getNextMass()}, error:errorHandler }
      );
      return;
    }
    if ( mass2===undefined ) {
      $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json",
        { type:'GET', dataType:'json', success:function(data){mass2=data;getNextMass()}, error:errorHandler }
      );
      return;
    }
    if ( (mass1!==undefined) && (mass2!==undefined) ){
      formConstructor(mass1,document.forms['form1']);
      formConstructor(mass2,document.forms['form2']);
    }
  }
  getNextMass();
}
function errorHandler(jqXHR,statusStr,errorStr) {
  alert(statusStr+' '+errorStr);
}
function formConstructor(formMass,formName){
  for (numberName of formMass){
    switch (numberName.kind){
      case 'longtext': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        let inputName=document.createElement('input');
        inputName.type='text';
        inputName.name=numberName.name;
        formName.appendChild(labelName);
        formName.appendChild(inputName);
        let br=document.createElement('br');
        formName.appendChild(br);
        break;
      }
      case 'number': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        let inputName=document.createElement('input');
        inputName.type='number';
        inputName.name=numberName.name;
        formName.appendChild(labelName);
        formName.appendChild(inputName);
        let br=document.createElement('br');
        formName.appendChild(br);
        break;
      }
      case 'shorttext': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        let inputName=document.createElement('input');
        inputName.type='shorttext';
        inputName.name=numberName.name;
        formName.appendChild(labelName);
        formName.appendChild(inputName);
        let br=document.createElement('br');
        formName.appendChild(br);
        break;
      }
      case 'combo': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        let selectName=document.createElement('select');
        selectName.name=numberName.name;
        numberName.variants.forEach(function option(v) {
          let optionName=document.createElement('option');
          optionName.innerText=v.text;
          optionName.value=v.value;
          if (v.text=='бытовая техника') {
            optionName.selected=true;
            selectName.appendChild(optionName);
          }
          else {
            selectName.appendChild(optionName);
          }
        });
        formName.appendChild(labelName);
        formName.appendChild(selectName);
        let br=document.createElement('br');
        formName.appendChild(br);
        break;
      }
      case 'radio': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        formName.appendChild(labelName);
        numberName.variants.forEach(function rad(v) {
          let radioName=document.createElement('input');
          radioName.type='radio';
          radioName.name=numberName.name;
          radioName.value=v.value;
          formName.appendChild(radioName)
          let radioText=document.createTextNode(v.text)
          formName.appendChild(radioText)
        });
        let br=document.createElement('br');
        formName.appendChild(br);
        break;
      }
      case 'check': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        let inputName=document.createElement('input');
        inputName.type='checkbox';
        inputName.name=numberName.name;
        inputName.checked=true;
        formName.appendChild(labelName);
        formName.appendChild(inputName);
        let br=document.createElement('br');
        formName.appendChild(br);
        break;
      }
      case 'memo': {
        let labelName=document.createElement('label');
        labelName.innerHTML=numberName.label;
        let br=document.createElement('br');
        let inputName=document.createElement('textarea');
        inputName.name=numberName.name;
        formName.appendChild(labelName);
        formName.appendChild(br);
        formName.appendChild(inputName);
        let br1=document.createElement('br');
        formName.appendChild(br1);
        break;
      }
      case 'submit': {
        let inputName=document.createElement('input');
        inputName.value=numberName.caption;
        inputName.type=numberName.kind;
        formName.appendChild(inputName);
        break;
      }
    }
  }
}
getMass();