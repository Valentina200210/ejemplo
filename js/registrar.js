document.getElementById("registrar").onclick = function(){
  
  var username = document.getElementById('user').value;
  var clave = document.getElementById('password').value; 
  var name = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  
  var urllogin = 'https://ServidorTest.carlos-reneren7.repl.co/register';
  var data = {user: username, password: clave, name: name, email: email};

  fetch(urllogin, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:',error))
  .then(response => {
                    if(response.error==false){
                          console.log('Success:', response);
                          localStorage.setItem("user", username);
                          localStorage.setItem("name", name);
                          window.location.href="dashboard.html";
                    }else{
                          alert("Los datos son invalidos");
                    }
                  }
  );
  
}