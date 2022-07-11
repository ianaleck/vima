const form = document.getElementById("credit-application-form");
const button = document.getElementById("submit-btn");
form.addEventListener('submit', (ev) => {
   ev.preventDefault();
   const googleFormEndpoint = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2eijer-fwEnIsLnLIuOJwJ4ohesx4ncojtgkRbviCq04DjQ/formRespons";
   let request = new XMLHttpRequest();
   request.open('GET', googleFormEndpoint, true);
   xmlhttp.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');

   request.onload = function(data) {
        // handle request sent successfully
        console.log(data);
        document.getElementById("success").innerHTML = "Application submitted successfully";
        document.getElementById("error").innerHTML = "";
        button.disabled = false;
        button.innerHTML = "Submit";
   };

   request.onerror = function(error) {
        // handle request failed to send
        console.log(error);
        document.getElementById("error").innerHTML = "";
        document.getElementById("success").innerHTML = "Something went wrong submitting your application";
        button.disabled = false;
        button.innerHTML = "Submit";
   };

   request.send(new FormData(ev.target));

   button.disabled = true;
   button.innerHTML = "Loading...";
});