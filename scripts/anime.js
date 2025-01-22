// Animate text
document.addEventListener('DOMContentLoaded', function () {
    var textWrapper = document.querySelector('.ml10 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1700,
            delay: (el, i) => 100 * i
        }).add({
            
            targets: '.ml10 .letter',
            rotateY: 0,
            duration: 0
        });
});
