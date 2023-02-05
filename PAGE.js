const firebaseConfig = {
    apiKey: "AIzaSyC1yfAW_j7-nDLNBQyMUCA3D0VxirMALgU",
    authDomain: "lets-chat-web-app-e4430.firebaseapp.com",
    projectId: "lets-chat-web-app-e4430",
    storageBucket: "lets-chat-web-app-e4430.appspot.com",
    messagingSenderId: "645641345746",
    appId: "1:645641345746:web:2e52008e5a259ba6a02b0b",
    measurementId: "G-5K5ZE33VFN"
  };
  
     firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
  
      });
  
      document.getElementById("msg").value="";
  
  }
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code
  
  //End code
      } });  }); }
  getData();
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }
  