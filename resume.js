function showVideo() {
    var div = document.getElementById("Video-Photo");
    div.innerHTML = "";  // Clear the div content

    // Create the video element
    var video = document.createElement("video");
    video.classList.add("rounded-lg", "shadow-lg", "ring-4", "ring-white", "w-3/4", "md:w-full", "object-cover");
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("loop", "loop");  // To ensure it plays without sound (important for autoplay in browsers)
    
    // Add controls (optional, if you want the user to have controls)
    // video.setAttribute("controls", "controls");

    // Create source element
    var source = document.createElement("source");
    source.setAttribute("src", "./video-1.mp4");  // Update this to your correct video path
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);  // Append the <source> to the <video> tag
    div.appendChild(video);  // Append the <video> to the div
}

function showPhoto() {
    var div = document.getElementById("Video-Photo");
    div.innerHTML = "";  // Clear the div content

    // Create the image element
    var img = document.createElement("img");
    img.classList.add("rounded-lg", "shadow-lg", "ring-4", "ring-white", "w-3/4", "md:w-full", "object-cover");
    img.setAttribute("src", "./images/pixelcut-export (1).jpeg");  // Update this to your correct image path

    div.appendChild(img);  // Append the <img> to the div
}
