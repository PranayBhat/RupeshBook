user_name = localStorage.getItem("user_name");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCSOmxqSiAJpX5dKBD182tRfZojFGx5ME",
  authDomain: "rupeshbook-56d75.firebaseapp.com",
  databaseURL: "https://rupeshbook-56d75-default-rtdb.firebaseio.com",
  projectId: "rupeshbook-56d75",
  storageBucket: "rupeshbook-56d75.appspot.com",
  messagingSenderId: "81048865054",
  appId: "1:81048865054:web:d60910183b65a1d65d610f",
  measurementId: "G-Y0RL07S2X8"
};
firebase.initializeApp(firebaseConfig);
function logout() {
  console.log("Hi");
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  localStorage.removeItem("Email");
  window.location = "Loign.html";
}
function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase
    .database()
    .ref("/")
    .child(room_name)
    .update({ purpose: "adding room name" });
  console.log("hi");
  localStorage.setItem("room_name", room_name);
}
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML = row;
      });
    });
}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Message.html";}

