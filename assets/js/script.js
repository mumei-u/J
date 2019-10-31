document.querySelector('button').addEventListener('click', border);
function border(){
  var password = document.getElementById('password').value;
  var confirm = document.getElementById('confirmPassword').value;
  if(password != confirm){
    document.getElementById('password').style.border = 'solid red';
    document.getElementById('confirmPassword').style.border = 'solid red';
  } else{
    document.getElementById('password').style.border = 'solid green';
    document.getElementById('confirmPassword').style.border = 'solid green';
  }
};
