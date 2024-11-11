// TO DISPLAY THE CURRENT TIME AND DATE - Below Tweet
function updateTimeDate() {
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    let date = now.toLocaleDateString();

    document.getElementById('time-date').innerText = `${time} • ${date}`;
}

setInterval(updateTimeDate, 1000); // Time is updated every second
updateTimeDate(); // Initial Function call

// FUNCTION TO TRACK THE CHARACTER COUNT
let totalCount = document.getElementById('total');
let remainingCount = document.getElementById('remain');
let textArea = document.getElementById('text-container');
let btn =  document.querySelector('.tweet-btn');

textArea.addEventListener("input", ()=> {
    updateCounter();
});

function updateCounter(){
    const charCount = textArea.value.length;
    totalCount.innerText = charCount;
    remainingCount.innerText = 100 - charCount;

    // Enable 'TWEET' button if character count is > 0 and < 100
    if(charCount > 0 && charCount <= 100){
        btn.classList.add('js-active');
        btn.classList.remove('js-disable');
        btn.setAttribute('href', 'https://www.instagram.com/yash_singh_rajpoot958?igsh=bTJlcmoycnFmNnNw'); // Enable the link
    }
    else {
        btn.classList.add('js-disable');
        btn.classList.remove('js-active');
        btn.removeAttribute('href'); // Link gets disabled
    }

    // If character count exceeds 100 chars
    if(charCount > 100) {
        textArea.style.backgroundColor = "#f8d7da"; // Change Textarea to 'Red' colour
    } else {
        textArea.style.backgroundColor = "#f3f3f3"; // Default colour
    }
}

updateCounter(); // INITIAL FUNCTION CALL