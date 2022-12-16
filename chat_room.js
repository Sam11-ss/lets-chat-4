var firebaseConfig = {
    apiKey: "AIzaSyB_irqI5AWWidWOOW1am6TuCRbytj6X-U0",
    authDomain: "lets-chat-40b97.firebaseapp.com",
    databaseURL: "https://lets-chat-40b97-default-rtdb.firebaseio.com",
    projectId: "lets-chat-40b97",
    storageBucket: "lets-chat-40b97.appspot.com",
    messagingSenderId: "130179008168",
    appId: "1:130179008168:web:8b31bcfbcfb96360bda49d"
  };
    
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem('UserName');
document.getElementById("user_name_label").innerHTML="Welcome " + user_name + "!";

function add_room() {
        roomname = document.getElementById("room_name_input").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"Adding room name"          
    });
    localStorage.setItem("RoomName" , roomname);
    window.location="chat_page.html";

}


    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name = "+ Room_names);
row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML+=row; 
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("RoomName" , name);
    window.location="chat_page.html";
}
function logout() {
    localStorage.removeItem("UserName");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
}
