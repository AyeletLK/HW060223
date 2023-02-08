let userName = prompt("Please enter your name");
let userEmail = prompt("Please enter your email");
let userAge = prompt("Please enter your age");
let userGender = prompt("Are you Male or Female?");

if (userGender === "Male") {
  alert("ברוך הבא " + userName);
} else if (userGender === "Female") {
  alert("ברוכה הבא " + userName);
} else {
  alert("Please choose: Male / Female");
  prompt("Are you Male or Female?");
}

if (confirm("would you like to subscribe to our newsletter?")) {
  alert("thank you your email " + userEmail + " was registered successfully");
} else {
  alert("Get Lost");
}

if (userAge !== isNaN) {
  //isNaN ==> age is not a number. !== isNan ==> age is a number
  if (userAge < 0) {
    alert(`HaHaHa`);
  } else if (userAge > 120) {
    alert(`Say Hii to God`);
  } else if (userAge <= 18) {
    alert(`Please call your Parents`);
  } else {
    alert(`Welcome Back ${userName}`);
  }
}
