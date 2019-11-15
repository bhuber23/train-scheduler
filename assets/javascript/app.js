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

  var train;
  var destination;
  var firstTime;
  var trainFrequency;

  //Grabs form input and defines as variables
  $(".submit-btn").on("click", function(event) {
    event.preventDefault();

    train = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTime = $("#time-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: train,
        place: destination,
        time: firstTime,
        frequency: trainFrequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };


    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    train = childSnapshot.val().name;
    destination = childSnapshot.val().place;
    firstTime = childSnapshot.val().time;
    trainFrequency = childSnapshot.val().frequency;

    console.log(train);
    console.log(firstTime);

    //Math
    var firstTimeConverted = moment(childSnapshot.val().time, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("Difference in time: " + diffTime);
    var tRemainder = diffTime % childSnapshot.val().frequency;

    var minutesAway = childSnapshot.val().frequency - tRemainder;
        console.log("Minutes away " + minutesAway);
    var nextTrain = moment().add(minutesAway, "minutes");
        console.log("Arrival time: " + moment(nextTrain).format("hh:mm"));
    nextTrain = moment(nextTrain).format("hh:mm A");
    console.log(nextTrain);

    //Create new rows
    var newRow = $("<tr>").append(
        $("<td>").text(train),
        $("<td>").text(destination),
        $("<td>").text(trainFrequency),
        $("<td>").text(nextTrain),
        $("<td>").text(minutesAway),
    ); 

    $("#train-table > tbody").append(newRow);
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code)
  
  });

