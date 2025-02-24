document.addEventListener("DOMContentLoaded", function () {
    // Send a message to content.js to fetch data
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
        });
    });

    // Listen for the response from content.js
    chrome.runtime.onMessage.addListener(function (message) {
        if (message.profileName) {
            document.getElementById("profileName").value = message.profileName;
        }
        if (message.profilePosition) {
            document.getElementById("profilePosition").value = message.profilePosition;
        }
        if (message.profileLocation) {
            document.getElementById("profileLocation").value = message.profileLocation;
        }
        if (message.imageUrl) {
            document.getElementById("imageUrl").value = message.imageUrl;
        }
    });

    // Copy to clipboard function
    function copyToClipboard(inputId) {
        let inputField = document.getElementById(inputId);
        inputField.select();
        document.execCommand("copy");
    }

    document.getElementById("copyNameButton").addEventListener("click", function () {
        copyToClipboard("profileName");
    });

    document.getElementById("copyPositionButton").addEventListener("click", function () {
        copyToClipboard("profilePosition");
    });

    document.getElementById("copyLocationButton").addEventListener("click", function () {
        copyToClipboard("profileLocation");
    });

    document.getElementById("copyImageButton").addEventListener("click", function () {
        copyToClipboard("imageUrl");
    });
});
