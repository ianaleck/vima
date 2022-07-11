const form = document.getElementById("credit-application-form");
const button = document.getElementById("submit-btn");
form.addEventListener('submit', (ev) => {
   ev.preventDefault();
   const googleFormEndpoint = "https://docs.google.com/forms/d/1djnT008kQPEYcpohfkS-cZ9bHpJRh5UpuyZcanuRqAg/formResponse"

   let request = new XMLHttpRequest();
   request.open('POST', googleFormEndpoint, true);
   //setform type forms
   request.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
   request.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-8');
          request.setRequestHeader('Cache-Control', 'no-store')       

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

   let formData = new FormData(ev.target);
   formData.append("submit", "Submit");

   request.send(formData);

   button.disabled = true;
   button.innerHTML = "Loading...";
});