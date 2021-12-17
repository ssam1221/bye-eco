document.getElementById(`startAnimation`).onclick = () => {

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
        text: '안녕하세요. 유병진 선임님,',
        center: true,
        style: {
            color: `white`,
        },
        start: _textStart,
        duration: 3000,
    });

    Slider.addText({
        text: '박준영 선임입니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '작년까지는 업무가 달라서 거의 이야기 할 일이 별로 없었는데,',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '서초에 오고 에뮬레이터를 하면서 업무를 같이 하게 되었었네요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '처음에 사이니지 에뮬레이터를 같이 하신다고 하셨을 때',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '커머셜TV만 하셔서 처음에는 불안하였는데,',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '오히려 같이 개발하면서 제가 많은 도움을 받았습니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '덕분에 저에게 가장 큰 골치 중 하나였던<br>에뮬레이터를 무사히 끝낼 수 있었습니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '에뮬레이터를 하면서 서로 간<br>유대감도 훨씬 깊어진 것 같은데',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '팀 이동을 해서 짧은 시간만 같이 일을 한 게 아쉽네요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '갑작스럽게 Beanstaller 를 맡게 되셨는데',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addImage({
        x: `calc(50vw - 435px)`,
        y: `20vh`,
        src: 'beanstaller.png',
        style: {},
        start: getImageStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '제가 나가면서 짐만 더 드리게 되서 죄송합니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '필요하시면 언제든지 연락 주세요.<br>' +
            '<span style="font-size: 32px;">집들이때에도 보면 좋겠네요.</span>',
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
        src: `In the Calm Countryside.mp3`,
        start: 1000,
        duration: getTextStart()
    })
    Slider.play();
}