console.log("test");





const auth = firebase.auth();

  //SingUp - Function

    function singUp()
    {
       
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
        alert("תודה שהצטרפת :)");
    }
  
  
    //SingIn - Function

    function signIn()
    {
      var email = document.getElementById("email");
      var password = document.getElementById("password");

       const promise = auth.signInWithEmailAndPassword(email.value, password.value);
       promise.catch(e => alert(e.message));

        alert("התחברת !" + email.value );
        
    }

    function signOut()
    {
      auth.signOut();
      alert("התנתקת !")
      location.replace("OldmanSignUp.html")
    }


    function change(){
      location.replace("ChooseVol.html");
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        console.log('user logged out');
      }
    })
