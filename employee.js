  var config = {
    apiKey: "AIzaSyCk53GxLVRFvVHFyAcT762RM1OB2HF4uXQ",
    authDomain: "employeesheet-86a44.firebaseapp.com",
    databaseURL: "https://employeesheet-86a44.firebaseio.com",
    projectId: "employeesheet-86a44",
    storageBucket: "",
    messagingSenderId: "991692965404"
  };
  firebase.initializeApp(config);











database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
    // Set the variables for highBidder/highPrice equal to the stored values.
    highBidder = snapshot.val().highBidder;
    highPrice = parseInt(snapshot.val().highPrice);

    // Change the text inside the HTML element to reflect the initial value
    $("#highest-bidder").text(snapshot.val().highBidder);
    $("#highest-price").text("$" + snapshot.val().highPrice);

    // Print the data to the console.
    console.log(snapshot.val().highBidder);
    console.log(snapshot.val().highPrice);
  }

  // Keep the variables for highBidder/highPrice equal to the initial values
  else {

    // Change the HTML to reflect the initial value
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text("$" + highPrice);

    // Print the initial data to the console.
    console.log("Current High Price");
    console.log(highBidder);
    console.log(highPrice);
  }

  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});







var eName;
var eRole;
var eStart;
var eRate;


//sumbit function of employee data and push to firebase
$("#submit-employee").on("click", function() {
    event.preventDefault();

    eName= parseInt($("#eName").val().trim());
    eRole= parseInt($("#eRole").val().trim());
    eStart= parseInt($("#eStart").val().trim());
    eRate= parseInt($("#eRate").val().trim());
    console.log(eName+eRate+eRole+eStart);
	 database.ref().push({
        name: eName,
        role: eRole,
        sdate: eStart,
        rate: eRate
      });


	 $("#eName, #eRole, #eStart,#eRate" ).val("");
});






