function insert(input) {
  document.form1.inputvalue.value += input;
}

function clearInput() {
  document.form1.inputvalue.value = '';
}

function equal() { 
  let total = document.form1.inputvalue.value;

  if(total) {
    try {
      total = eval(total);
      document.form1.inputvalue.value = total;
    } catch(e) {
      document.form1.inputvalue.value = 'Error';
    }
  }
}

function backspace() {
  let inputvalue = document.form1.inputvalue.value;
  document.form1.inputvalue.value = inputvalue.slice(0, -1);
}