  var config = {
    apiKey: "AIzaSyCk53GxLVRFvVHFyAcT762RM1OB2HF4uXQ",
    authDomain: "employeesheet-86a44.firebaseapp.com",
    databaseURL: "https://employeesheet-86a44.firebaseio.com",
    projectId: "employeesheet-86a44",
    storageBucket: "",
    messagingSenderId: "991692965404"
  };
  firebase.initializeApp(config);


 var database = firebase.database();
 
database.ref().on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var data = snapshot.val();

      // Console.loging the last user's data
      console.log(data.name);
      console.log(data.email);
      console.log(data.sdate);
      console.log(data.rate);

 

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
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






