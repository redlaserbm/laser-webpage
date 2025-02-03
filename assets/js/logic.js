const youtube = document.querySelector('#youtube-vid');

const changeDisplayMode = function(display_mode) {
    // Set *all* containers to be invisble
    const bubbleContainers = document.querySelectorAll('.bubble-container');
    bubbleContainers.forEach((container) => {
        container.style.display = 'none';
        console.log(`Container ${container} set to display none.`)
    })

    // Display only the container we want to make visible
    const container = document.querySelector(display_mode);
    container.style.display = 'flex';
}

changeDisplayMode('#new-release');

const homeButton = document.querySelector('#home-button');
homeButton.addEventListener('click', () => {
    changeDisplayMode('#standard');
})

const newButton = document.querySelector('#new-button');
newButton.addEventListener('click', () => {
    console.log('Got to here');
    changeDisplayMode('#new-release');
})