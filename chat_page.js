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
room_name = localStorage.getItem('RoomName');

function send() {
 message = document.getElementById("message").value; 
 firebase.database().ref(room_name).push({ 
    name: user_name,
    message: message, 
    like: 0
 });
document.getElementById("message").value = "";
}
function logout() {
    localStorage.removeItem("UserName");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
}
