var firebaseConfig = {
    apiKey: "AIzaSyDQzYEcp_O-xp_FfLT842gcOy-BJTE1Qgk",
    authDomain: "argon-3fe97.firebaseapp.com",
    databaseURL: "https://argon-3fe97.firebaseio.com",
    projectId: "argon-3fe97",
    storageBucket: "argon-3fe97.appspot.com",
    messagingSenderId: "621276750798",
    appId: "1:621276750798:web:b9ed551917db5f283cc19f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)


  

  var database = firebase.database();
var counter=0;

  function increaseCounter(number) {

    database.ref().on("value", function(snapshot) {
        
    
        counter =snapshot.val().buttons[number].clickCount
        console.log(counter);
        counter ++;
        console.log(counter);
         
    });
     var newNumber ={
              clickCount: counter
          }
      database.ref("buttons/"+number).set(newNumber);    
      
      
  }
  database.ref().on("value", function(snapshot) {
    $("#counterLikes-1").text(snapshot.val().buttons[1].clickCount);
    $("#counterLikes-2").text(snapshot.val().buttons[2].clickCount);
    $("#counterLikes-3").text(snapshot.val().buttons[3].clickCount);
    $("#counterLikes-4").text(snapshot.val().buttons[4].clickCount);
    $("#counterLikes-5").text(snapshot.val().buttons[5].clickCount);
    $("#counterLikes-6").text(snapshot.val().buttons[6].clickCount);
    $("#counterLikes-7").text(snapshot.val().buttons[7].clickCount);
    $("#counterLikes-8").text(snapshot.val().buttons[8].clickCount);
    $("#counterLikes-9").text(snapshot.val().buttons[9].clickCount);
  })
