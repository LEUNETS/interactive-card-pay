document.addEventListener('DOMContentLoaded', () => {
    const firstVideo = document.getElementById('firstVideo');
    const secondVideo = document.getElementById('secondVideo');
    const hoveredImage = document.getElementById('hoveredImage');
    const myIdDiv = document.getElementById('myIdDiv');

    //preload - загрузка видео вместе со страницей
    //loop повторение воспроизведения - для второго.

console.log(firstVideo);

    firstVideo.addEventListener('timeupdate', () => {
        if (firstVideo.currentTime >= 6) {
            firstVideo.style.display = 'none';
            secondVideo.style.display = 'block';
           myIdDiv.style.display = 'flex';
        }
    });

    myIdDiv.addEventListener('mouseover', () => {
        secondVideo.style.display = 'none';
        hoveredImage.style.display = 'block';
    });

    myIdDiv.addEventListener('mouseout', () => {
        hoveredImage.style.display = 'none';
        secondVideo.style.display = 'block';
    });
});

object.addEventListener("click", myScript);


