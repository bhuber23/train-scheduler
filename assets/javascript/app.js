var firebaseConfig = {
    apiKey: "AIzaSyB-kgqUPaLIhOFiemqBzGaKxc677mGyS1A",
    authDomain: "train-scheduler-d5c1a.firebaseapp.com",
    databaseURL: "https://train-scheduler-d5c1a.firebaseio.com",
    projectId: "train-scheduler-d5c1a",
    storageBucket: "train-scheduler-d5c1a.appspot.com",
    messagingSenderId: "532053292521",
    appId: "1:532053292521:web:32b85b7de7f62bca2c4778"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  //Grabs form input and defines as variables
  $(".submit-btn").on("click", function(event) {
    event.preventDefault();

    var train = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTime = $("#time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

    var newTrain = {
        train: train,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");


    console.log(train);

  });

  