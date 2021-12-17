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
        text: '안녕하세요. 예림씨.',
        center: true,
        style: {
            color: `white`,
        },
        start: _textStart,
        duration: 3000,
    });

    Slider.addText({
        text: '접니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '평범하게 메일로만 인사하는 건 제 취향이 아닌거같아서',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '이런거 만들어봤습니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '예림씨도 입사한 이후에 이것저것 많은 일들을 했던 것 같은데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '특히 같이 야근하면서 NDK 했던 건 아직도 기억에 남네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '개인적으로 올해 초에 DX로 가신 건 정말 잘한 선택인 것 같아요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '여기 있었으면 개발업무도 제대로 못했을테고',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '개발자사이트 한다고 하면 인정도 제대로 못 받았을 것 같았으니까요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '앞으로도 본인의 주력 역량 꾸준히 키워서',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '전문가로 인정받고 다녔으면 좋겠습니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '그리고 서초로 납치되기 전에 시간 나면<br>소연씨랑 같이 종종 커피타임 가지면 좋겠네요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: 'YB모임때 또다시 보죠.',
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
        src: `Night Beach Memories.mp3`,
        start: 1000,
        duration: getTextStart()
    });
    Slider.play();
}