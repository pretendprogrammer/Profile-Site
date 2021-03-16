let laughedMore = false;
const theOfficePic = document.getElementById('mscott');
theOfficePic.addEventListener("mouseenter", function(event) {
    while (laughedMore === false) {
        const moreLaughs = document.createElement('h3');
        moreLaughs.innerHTML = 'Haha... aha... ha... :|';
        moreLaughs.id = 'tempLaugh'
        document.getElementById('jokeSection').appendChild(moreLaughs);
        laughedMore = true;
    }
})
theOfficePic.addEventListener("mouseout", function(event) {
    while (laughedMore === true) {
        document.getElementById('tempLaugh').remove()
        laughedMore = false;
    }
})