
(function() {

    
        // Extract profile name using <h1>
        const nameElement = document.querySelector("h1");
        const profileName = nameElement ? nameElement.innerText.trim() : "Not Found";



    // Extract profile image URL - Handling both cases
    let profileImageUrl = "Not Found";
    

    // Case 1: Viewing someone else's profile
    let profileImageElement = document.querySelector(".pv-top-card__non-self-photo-wrapper img");


    // Case 2: Viewing your own profile (if the first case doesn't find an image)
    if (!profileImageElement) {
        profileImageElement = document.querySelector(".profile-photo-edit img");
    }


    // Get the image URL if found
    if (profileImageElement) {
        profileImageUrl = profileImageElement.src;
    }



    // Extract position (job title)
    const positionElement = document.querySelector(".text-body-medium.break-words");
    const profilePosition = positionElement ? positionElement.innerText.trim() : "Not Found";


    // Extract location
    const locationElement = document.querySelector(".text-body-small.inline.t-black--light.break-words");
    const profileLocation = locationElement ? locationElement.innerText.trim() : "Not Found";

    // Send extracted data to popup.js
    chrome.runtime.sendMessage({ profileName, profilePosition, profileLocation, imageUrl: profileImageUrl });


})();

