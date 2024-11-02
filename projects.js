// Projects data
const projectNames = [
    "Movie Recommendation",
    "Health Care Unit",
    "AutoPandas",
    "Twitter Data Analytics",
    "Educational Website",
    "Live Video To Pdf",
    "Auto Data Visualizer",
    "AutoML"
];

const images = {
    "Movie Recommendation": "./images/image2.jpeg",
    "Health Care Unit": "./images/image3.jpeg",
    "AutoPandas": "./images/image7.png",
    "Twitter Data Analytics": "./images/image5.png",
    "Educational Website": "./images/image4.jpeg",
    "Live Video To Pdf": "./images/image6.png",
    "Auto Data Visualizer": "./images/image7.png",
    "AutoML": "./images/image8.png"
};

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const projectsDiv = document.getElementById("projects");

    // Loop through the project names and create project elements
    projectNames.forEach((projectName) => {
        let projectDiv = document.createElement("div");

        // Add classes for styling the project div
        projectDiv.classList.add(
            "group", "flex", "flex-col", "gap-4", "bg-gradient-to-r", "from-gray-800", "via-gray-900", "to-black",
            "rounded-lg", "ring-4", "ring-transparent", "hover:ring-yellow-300", "transition-all", "duration-500", "transform",
            "hover:-translate-y-2", "shadow-lg", "hover:shadow-2xl", "overflow-hidden", "h-[350px]", "p-4", "items-center"
        );

        // Add content inside the project div
        projectDiv.innerHTML = `
            <img class="rounded-lg ring-white ring-2 transition-all duration-500 group-hover:scale-105 group-hover:ring-yellow-300 mb-4 h-[200px] w-[300px] object-cover"
                 src="${images[projectName]}" alt="${projectName} Image">
            <button class="project-btn rounded-lg ring-2 ring-orange-400 bg-orange-300 text-black px-4 py-2 font-bold text-lg
                           transition-transform duration-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:ring-yellow-300 group-hover:scale-105">
                ${projectName}
            </button>
        `;

        // Append each created project div to the parent container
        projectsDiv.appendChild(projectDiv);
    });

    // Attach click event listeners to dynamically created buttons
    const buttons = document.querySelectorAll(".project-btn");
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            projectDescription(projectNames[index]);
        });
    });
});

function projectDescription(projectName) {
    // Get the project info div
    let div = document.getElementById("projects-info");
    div.innerHTML = "";  // Clear previous content

    const projectDesc = {
        "Movie Recommendation": "This movie recommendation system is powered by machine learning techniques...",
        "Health Care Unit": "The Health Care Unit is an advanced health prediction web application designed to help users evaluate their risk for various medical conditions",
        "AutoPandas": "AutoPandas revolutionizes the way data manipulation tasks are handled by automating the generation of Pandas code, making it accessible to users of all skill levels. With a Streamlit backend, this innovative tool streamlines the process of data handling, allowing users to perform complex data manipulation tasks with just a few clicks. By automatically generating the necessary Pandas code, AutoPandas eliminates the need for extensive coding knowledge, empowering users to focus on analyzing their data rather than getting lost in technical details. This powerful combination of automation and user-friendly design makes AutoPandas an essential resource for data analysts, researchers, and anyone looking to enhance their data manipulation capabilities effortlessly.",
        "Twitter Data Analytics": "A comprehensive Twitter data analytics dashboard using PowerBI...",
        "Educational Website": "The Educational Website is a dynamic online platform designed to provide comprehensive learning resources across various subjects...",
        "Live Video To Pdf": "Live Video To PDF is an innovative and user-friendly tool designed to capture and extract frames from live video streams seamlessly. Built using Streamlit, PyAutoGUI, and FPDF, this application allows users to select specific frames without interrupting the ongoing video, ensuring a smooth viewing experience. Users can easily navigate through the live feed, choose the desired frames, and compile them into a neatly formatted PDF document for easy sharing and reference. This powerful tool is perfect for educators, content creators, and professionals who need to document live events or presentations efficiently, providing a convenient solution for capturing and preserving important moments in real time.",
        "Auto Data Visualizer": "Auto Data Visualizer is a powerful no-code platform designed to simplify the process of data analysis and visualization for users of all skill levels. Leveraging cutting-edge technologies such as Streamlit, Pandas, Matplotlib, Seaborn, and Klib, it automates the generation of insightful visualizations and summary statistics, allowing users to focus on interpreting their data rather than getting bogged down in technical details. With its user-friendly interface, Auto Data Visualizer enables users to easily upload datasets, explore trends, and create compelling visual representations of their data without the need for programming expertise. This seamless integration of advanced data analysis tools empowers users to make data-driven decisions quickly and effectively.",
        "AutoML": "AutoML is a platform that automates the machine learning workflow, from data preprocessing to model deployment..."
    };

    const links = {
        "Movie Recommendation": "https://movierecommendation-fhsyboyqzkj6b2c66w2rmr.streamlit.app/",
        "Health Care Unit": "https://healthcaresystem-pv8mmeuqekrsgbtrwg2oqd.streamlit.app/",
        "AutoPandas": "https://datapreproceappr-jmghh9eqpbdxr3dvetsfam.streamlit.app/",
        "Twitter Data Analytics": "https://github.com/yourgithubusername/Twitter-Data-Analytics",
        "Educational Website": "https://sites.google.com/view/to-next-level/home",
        "Live Video To Pdf": "https://github.com/yourgithubusername/Live-Video-To",
        "Auto Data Visualizer": "https://github.com/yourgithubusername/Auto-Data-",
        "AutoML": "https://github.com/yourgithubusername/AutoML"
    };

    const screenShotImages = {
        "Movie Recommendation": ["./images/mr_image1.png", "./images/mr_image2.png", "./images/mr_image3.png", "./images/mr_image4.png"],
        "Health Care Unit": ["./images/hc_image1.png", "./images/hc_image2.png", "./images/hc_image3.png", "./images/hc_image4.png"],
        "AutoPandas": ["./images/apa_image1.png", "./images/apa_image2.png", "./images/apa_image3.png", "./images/apa_image4.png"],
        "Twitter Data Analytics": ["./images/tda_image1.png", "./images/tda_image2.png", "./images/tda_image3.png", "./images/tda_image4.png"],
        "Educational Website": ["./images/ew_image1.png", "./images/ew_image2.png", "./images/ew_image3.png", "./images/ew_image4.png"],
        "Live Video To Pdf": ["./images/vtp_image1.png", "./images/vtp_image2.png", "./images/vtp_image3.png", "./images/vtp_image4.png"],
        "Auto Data Visualizer": ["./images/adv_image1.png", "./images/adv_image2.png", "./images/adv_image3.png", "./images/adv_image4.png"],
        "AutoML": ["./images/aml_image1.png", "./images/aml_image2.png", "./images/aml_image3.png", "./images/aml_image4.png"]
    };

    // Create a div for screenshots and add images (use grid layout)
    let screenShotsDiv = document.createElement("div");
    screenShotsDiv.classList.add("grid", "grid-cols-2", "gap-4", "w-full");

    screenShotImages[projectName].forEach((screenshot) => {
        let screenShotImg = document.createElement("img");
        screenShotImg.src = screenshot;
        screenShotImg.alt = "Screenshot of " + projectName;
        screenShotImg.classList.add("w-full", "rounded-lg", "object-cover", "ring-2", "ring-gray-200");
        screenShotsDiv.appendChild(screenShotImg);
    });

    div.appendChild(screenShotsDiv);

    // Add project description
    let description = document.createElement("p");
    description.textContent = projectDesc[projectName];
    description.classList.add("mt-4", "text-white", "text-lg", "rounded-lg", "bg-black", "ring-pink-500", "ring-2", "p-4", "font-bold");
    div.appendChild(description);

    // Add button to view repository
    let projectRepo = document.createElement("a");
    projectRepo.classList.add("flex", "mt-4", "bg-orange-500", "text-black", "items-center", "font-bold", "py-2", "px-4", "rounded-lg", "hover:rounded-full", "hover:ring", "hover:ring-pink-500");
    projectRepo.textContent = "Go To Project";
    projectRepo.href = links[projectName];
    projectRepo.target = "_blank";
    div.appendChild(projectRepo);
}
