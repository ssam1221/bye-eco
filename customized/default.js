document.getElementById(`startAnimation`).onclick = () => {
    // const start = new Date();
    // setInterval(() => {
    //     document.getElementById(`timer`).innerHTML = new Date() - start;
    // }, 50)

    Slider.init();

    Slider.addAudio({
        src: `Night Beach Memories.mp3`,
        start: 0,
        duration: 5000
    })

    Slider.addAudio({
        src: `In a Fluffy Cotton Candy.mp3`,
        start: 5000,
        duration: 5000
    })

    Slider.addImage({
        x: 500, y: 500,
        src: '1.png',
        style: {
        },
        start: 1000, duration: 2000,
    });

    Slider.addText({
        x: `40vw`, y: `40vh`,
        text: '안녕하세요.',
        style: {
            color: `red`
        },
        start: 1000, duration: 2000,
    });

    Slider.addText({
        x: 200, y: 200,
        text: 'addText text 222',
        style: {
            color: `blue`,
            fontSize: `24px`
        },
        start: 2000, duration: 1000,
    });

    Slider.play();

}