function greeting(){
  let lnumber = document.querySelector('input[name="left"]');
  let rnumber = document.querySelector('input[name="right"]');
  let l = Number(lnumber.value);
  let r = Number(rnumber.value);
  let ans = l + r;
  let p = document.querySelector('span#answer');
  p.textContent = ans;
}
b = document.querySelector('button#calc');
b.addEventListener('click', greeting);