// Check storage for the saved preference
console.log("content.js is running");

chrome.storage.sync.get("darkMode", function(data) {
    if (data.darkMode === true) {
        document.body.classList.add("dark-mode");
    }
    // data.darkMode will be either true or false
});