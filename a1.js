// Name: Meet Thakkar
// ID: 150368231
// Email: msthakkar@myseneca.ca

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Meet Thakkar",
    "msthakkar@myseneca.ca\ Meet Thakkar",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

console.log(httpRequest("GET", "/")); // 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // 200: This course name is WEB700. This assignment was prepared by Student Name
console.log(httpRequest("GET", "/contact")); // 200: Student msthakkar@myseneca.ca\ Meet Thakkar
console.log(httpRequest("POST", "/login")); // 200: Hello, User Logged In
console.log(httpRequest("GET", "/panel")); // 200: Main Panel
console.log(httpRequest("POST", "/logout")); // 200: Logout Complete. Goodbye
console.log(httpRequest("PUT", "/")); // 404: Unable to process PUT request for /

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}

automateTests();
