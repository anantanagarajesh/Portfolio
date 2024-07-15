document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const statusElement = document.getElementById("form-status");
        if (data.status === "success") {
            statusElement.textContent = "Message sent successfully!";
        } else {
            statusElement.textContent = "An error occurred. Please try again later.";
        }
    })
    .catch(error => {
        const statusElement = document.getElementById("form-status");
        statusElement.textContent = "An error occurred. Please try again later.";
        console.error("Error sending message:", error);
    });
});
