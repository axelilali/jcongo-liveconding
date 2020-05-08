const qt = document.getElementsByClassName('qt')

for(i=0;i<qt.length;i++){
  console.log(qt[i].parentElement);
  console.log(qt[i].innerText);

  if(qt[i].innerText==''){
    qt[i].parentElement.style.display = 'none'
  }
}
