document.getElementById(`startAnimation`).onclick = () => {
    // const start = new Date();
    // setInterval(() => {
    //     document.getElementById(`timer`).innerHTML = new Date() - start;
    // }, 50)

    Slider.init();


    let _textStart = 1000;

    function getTextStart() {
        _textStart += 4000;
        return _textStart;
    }

    function getImageStart() {
        return _textStart;
    }

    Slider.addText({
        text: '안녕하세요, 현성씨.',
        center: true,
        style: {
            color: `white`,
        },
        start: _textStart,
        duration: 3000,
    });

    Slider.addText({
        text: '이메일로만 하면 재미없어서 따로 만들어봤습니다.',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '입사하자마자 중국 출장으로 시작한 게 아직도 기억에 남네요.',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '이전에는 업무 이야기 말고는 거의 대화가 없던 것 같았는데',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '갑작스러운 터키 출장 이후로',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '같이 고생하면서 많이 가까워진 것 같습니다.',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '그 전에는 정말 일만 하는 스타일인 줄 알았어요.',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '현성씨도 제대로 된 개발 업무를 같이 해봤으면 참 좋았을텐데',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '그러지 못한 게 아쉽네요.',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '브라우저 셀에서도 잘 하시리라고 믿습니다.',
        center: true,
        style: {
            color: `white`,
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '같은 오산평택 멤버니 이전처럼 종종 저녁이나 고기 먹으러 같이 가고요.<br>' +
        '<span style="font-size: 32px;">규황씨도 같이 껴서</span>',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '1월에 YB모임때 다시 봅시다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
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
    Slider.addAudio({
        src: `In the Peaceful Countryside.mp3`,
        start: 1000,
        duration: getTextStart()
    });
    Slider.play();
}