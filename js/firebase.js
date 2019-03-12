// conectando FIREBASE como forma de Autenticacion

(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCWcCv1_ZCZRtvUPR_QhnEqsCHq1NdDVQA",
    authDomain: "datadashboard-bbb7f.firebaseapp.com",
    databaseURL: "https://datadashboard-bbb7f.firebaseio.com",
    storageBucket: "datadashboard-bbb7f.appspot.com",
  };
  firebase.initializeApp(config);

  // Obtener elementos 
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    // Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign In 
    // usuario con cuenta
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Añadir Evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // Falta: Comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign In 
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
});

// vigilante en tiempo real: comprueba cualquier cambio de estado en el momento en que se active el evento se ejecutara la funcion callback
    firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        }   else  {
            console.log('no logueado');
            btnLogout.classList.add('hide');
        }
    });

} ());