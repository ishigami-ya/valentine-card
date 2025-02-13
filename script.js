function generateCard() {
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;
    const image = document.getElementById("image").files[0];
    const template = document.querySelector('input[name="template"]:checked').value;

    if (title && message && image) {
        // Set title and message
        document.getElementById("cardTitle").textContent = title;
        document.getElementById("cardMessage").textContent = message;

        // Set image
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("cardImage").src = e.target.result;
        };
        reader.readAsDataURL(image);

        // Apply template style
        const card = document.getElementById("generatedCard");
        card.className = 'card-preview ' + template;

        // Display card preview
        card.style.display = 'block';
    } else {
        alert("Please fill in all fields!");
    }
}
