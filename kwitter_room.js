//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyA53gz_pLrOhIJpgQa-v7Q30itPsE9YzK4",
  authDomain: "kwitter-744cf.firebaseapp.com",
  databaseURL: "https://kwitter-744cf-default-rtdb.firebaseio.com",
  projectId: "kwitter-744cf",
  storageBucket: "kwitter-744cf.appspot.com",
  messagingSenderId: "99926943387",
  appId: "1:99926943387:web:359d8da2d803a93b7e883e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  
  room_name=localStorage.getItem("room_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
    }
    );
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  console.log("room name-"+Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}