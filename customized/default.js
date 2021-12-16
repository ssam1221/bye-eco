document.getElementById(`startAnimation`).onclick = () => {
    // const start = new Date();
    // setInterval(() => {
    //     document.getElementById(`timer`).innerHTML = new Date() - start;
    // }, 50)

    Slider.init();

    Slider.addAudio({
        src: `A Fallen Leaf.mp3`,
        start: 1000,
        duration: 50000
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

    Slider.addText({
        text: '안녕하세요.',
        center: true,
        style: {
            color: `white`,
        },
        start: _textStart, duration: 3000,
    });

    Slider.addText({
        text: '12월 3일을 마지막으로<br>서초로 출근하는<br>박준영 선임입니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });


    Slider.addImage({
        x: `calc(50vw - 250px)`, y: `25vh`,
        src: 'webossignage_logo.png',
        style: {
        },
        start: 9000, duration: 3000,
    });

    Slider.addText({
        text: '19일 부로 14년부터 해 왔던<br>webOS Signage 업무에서,',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addImage({
        x: `calc(50vw - 235px)`, y: `25vh`,
        src: 'procentric_logo.png',
        style: {
        },
        start: 13000, duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '새롭게 클라우드솔루션의<br>Pro:Centric 업무로 이동합니다.',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '오랜 기간동안 하던 업무 대신 새로운 업무',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '오랜 기간동안 하던 업무 대신 새로운 업무',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });






    Slider.addText({
        center: true,
        text: '지금까지 같이 일한 ',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });




    Slider.addText({
        center: true,
        text: '또한 1년 가량 Web Solution 프로젝트에 있으면서,',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '여러모로 도와주신 분들께 감사 드립니다.',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '감사합니다.',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '<span class="PenStyle" style="font-size: 96px;">End of document.</span>',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 30000,
    });

    Slider.play();
}