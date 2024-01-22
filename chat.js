// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBh3T6JyskNGC-sweweWb98nyM8FuzERw4",
    authDomain: "let-s-chat-web-app--1.firebaseapp.com",
    projectId: "let-s-chat-web-app--1",
    storageBucket: "let-s-chat-web-app--1.appspot.com",
    messagingSenderId: "211971138460",
    appId: "1:211971138460:web:852f4bb90d620c0eb81e59"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

<div></div>

//End code

});});}
getData();

function rediectToRoomName()
{
    
}



