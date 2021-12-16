document.getElementById(`startAnimation`).onclick = () => {
    // const start = new Date();
    // setInterval(() => {
    //     document.getElementById(`timer`).innerHTML = new Date() - start;
    // }, 50)

    Slider.init();

    Slider.addAudio({
        src: `In the Calm Countryside.mp3`,
        start: 1000,
        duration: 500000
    })

    // Slider.addAudio({
    //     src: `In a Fluffy Cotton Candy.mp3`,
    //     start: 5000,
    //     duration: 5000
    // })

    let _textStart = 1000;

    function getTextStart() {
        _textStart += 4000;
        return _textStart;
    }

    function getImageStart() {
        return _textStart;
    }

    Slider.addText({
        text: 'ID 파싱 테스트',
        center: true,
        style: {
            color: `white`,
        },
        start: _textStart,
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '감사합니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.end(getTextStart());

    Slider.play();
}