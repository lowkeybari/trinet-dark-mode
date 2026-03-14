chrome.storage.sync.get("darkMode", function(data) {
    if (data.darkMode === true) {
        document.getElementById("toggleBtn").textContent = "Turn off Dark Mode";
    } else {
        document.getElementById("toggleBtn").textContent = "Turn on Dark Mode";
    }
});

const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", function() {
    console.log("content.js is running");
    chrome.storage.sync.get("darkMode", function(data) {
        const isDark = data.darkMode;
        const newValue = !isDark;
        chrome.storage.sync.set({ darkMode: newValue });

            
    if (newValue === true) {
        document.getElementById("toggleBtn").textContent = "Turn off Dark Mode";
    } else {
        document.getElementById("toggleBtn").textContent = "Turn on Dark Mode";
    }
    });
});