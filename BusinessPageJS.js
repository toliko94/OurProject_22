console.log(firebase)





const FullName = document.getElementById('FullName');
const Company = document.getElementById('Company');
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone')
const Msg = document.getElementById('Msg');

const addBtn = document.getElementById('addBtn');





const database = firebase.database();
const usersRef = database.ref('/BuisnessRequest');






    addBtn.addEventListener('click', e => {
      e.preventDefault();
      if (validate() == true)
    {
        
        usersRef.child(Phone.value).set({
          first_name: FullName.value,
          Company_name: Company.value,
          Email: Email.value,
          Phone:Phone.value,
          Msg:Msg.value
      
          
        });
        
        console.log("Data Written")
        alert("תודה שפנית אלינו :)")
        location.replace("BusinessPage.html")
    }
    else
    {
      alert("back to page");
      
    }

    });



function validate(){
  var remember = document.getElementById('checkbox1');
  if (remember.checked){
      
      return true;
  }else{
      alert("אנא אשר את התקנון")
      return false;
  }
}

