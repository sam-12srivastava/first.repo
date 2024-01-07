// const typed= new typed(".text1",{
//     strings: ["Frontend Developer", "Blogger", "Android Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:100,
//     loop:true
// })

ScrollReveal({ 
    reset: true, 
    distance:'80px',
    duration:1000,
    delay:200
});
 ScrollReveal().reveal('.content1 ,.aboutme,.sub ,.spa,.main-text h2,.contact-text h2', { origin:'top' });
// { origin:'top' }

    // document.getElementById("submitButton").addEventListener("click",function(){
    //      alert("your Response is Submitted");
// //  document.getElementById("hye","he","hey","ehy","submitButton").value="";
  //  });
function validateForm() {
    var name = document.getElementById("hye").value;
    var email = document.getElementById("he").value;
    var subject = document.getElementById("hey").value;
    var message = document.getElementById("ehy").value;

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Subject:", subject);
    // console.log("Message:", message);


    if (name == "" || email == "" ||subject=="" || message == "") {
      alert("Please fill out all fields before submitting.");
      return false; // Prevents the form from submitting
    }

    
alert("Your response is submitted");
    return true; // Allows the form to submit
}
function toggleDetails(serviceId) {
    var details = document.getElementById(serviceId + "-details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}