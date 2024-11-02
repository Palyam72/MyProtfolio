const data = {
    selfPlaced: {
        title: "Certificates in Data Science & Machine Learning",
        images: [
            "./images/data-science-machine-learning-1.jpg",
            "./images/data-science-machine-learning-2.jpg",
            "./images/data-science-machine-learning-3.jpg",
            "./images/data-science-machine-learning-4.jpg",
            "./images/data-science-machine-learning-5.jpg",
            "./images/data-science-machine-learning-6.jpg",
            "./images/data-science-machine-learning-7.jpg",
            "./images/data-science-machine-learning-8.jpg",
            "./images/data-science-machine-learning-9.jpg",
            "./images/data-science-machine-learning-10.jpg"
        ],
        ringColor: "ring-green-400"
    },
    examBased: {
        title: "Exam Based Certifications",
        images: [
            "./images/exam-based-internshala-1.jpg",
            "./images/exam-based-internshala-2.jpg",
            "./images/exam-based-internshala-3.jpg",
            "./images/exam-based-internshala-4.jpg",
            "./images/exam-based-nptel-1.jpg",
            "./images/exam-based-nptel-2.jpg",
            "./images/exam-based-nptel-3.jpg",
            "./images/exam-based-nptel-4.jpg"
        ],
        ringColor: "ring-yellow-500"
    },
    internships: {
        title: "My Internships",
        images: [
            "./images/internship-1.jpg",
            "./images/internship-2.jpg",
            "./images/internship-3.jpg",
            "./images/internship-4.jpg",
            "./images/internship-5.jpg"
        ],
        ringColor: "ring-purple-500"
    }
};

function displayCertificates(category) {
    const mainDiv = document.getElementById('main-div');
    const certificates = data[category];

    let content = `
        <div class="bg-black text-white rounded-lg ring-4 ${certificates.ringColor} p-4 w-full max-w-screen-lg mx-auto transition-all duration-500">
            <h2 class="font-bold text-3xl mb-4 text-center animate-pulse">${certificates.title}</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto h-[450px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 transition-transform ease-out duration-500 hover:scale-105">
    `;

    certificates.images.forEach(image => {
        content += `<img class="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300" src="${image}" alt="Certificate">`;
    });

    content += `
            </div>
        </div>
    `;

    mainDiv.innerHTML = content;
}