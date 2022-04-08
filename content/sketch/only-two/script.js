function checkStates() {

  const is_fast = document.querySelector('#s');
  const is_cheap = document.querySelector('#c');
  const is_good = document.querySelector('#q');

  if(is_fast.checked && is_cheap.checked && is_good.checked) {
    let updateState = Math.ceil(Math.random() * 3);
    if(updateState == 1) {
      is_fast.checked = false;
    }
    else if(updateState == 2) {
      is_cheap.checked = false;
    }
    else {
      is_good.checked = false;
    }
  }
}
