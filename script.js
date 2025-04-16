function hideLoader() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none"; // Hide loader
        document.getElementById("content").classList.add("show"); // Show content

        // Apply fade-in animation to all elements
        document.querySelectorAll(".fade-element").forEach((element, index) => {
            element.style.animationDelay = `${index * 0.3}s`; // Staggered effect
            element.style.animation = "fadeIn 1.5s ease-out forwards";
        });
    }, 2000); // Wait 2 seconds for loader animation
}

function buttonClick(button, url) {
    button.style.backgroundColor = "#ff9800"; // Change button color on click
    setTimeout(() => {
        if (url.startsWith("mailto:")) {
            window.location.href = url; // Open email in the same tab
        } else {
            window.open(url, "_blank"); // Open other links in a new tab
        }
        button.style.backgroundColor = ""; // Reset button color
    }, 200);
}
