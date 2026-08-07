const form =
document.getElementById("contactForm");

const statusBox =
document.getElementById("status");

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    statusBox.innerHTML =
    "Sending Message...";

    const templateParams = {

        from_name:
        document.getElementById("name").value,

        from_email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        service:
        document.getElementById("service").value,

        message:
        document.getElementById("message").value,

        to_email:
        "aryansahu0010@gmail.com"

    };

    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams
    )

    .then(function(){

        statusBox.innerHTML =
        "✅ Message Sent Successfully";

        statusBox.classList.add(
        "text-green-400"
        );

        form.reset();

    })

    .catch(function(error){

        console.error(error);

        statusBox.innerHTML =
        "❌ Failed To Send Message";

        statusBox.classList.add(
        "text-red-400"
        );

    });

});
