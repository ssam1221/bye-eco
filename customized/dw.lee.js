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
        text: '안녕하세요. 동원 선임님,',
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
        text: '맞선임이셨는데 평택에 있을 때에는 업무 이야기만 했던 것 같네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '저희 업무도 같이 한 게 대부분이 사이니지 이슈 해결이어서',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '각자도생으로 업무를 진행하기도 했고요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '서로 업무가 아닌 잡담도 하면서 가까워진 게 1~2년 된거 같은데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '더 친해질 수 있었는데 팀 이동을 하면서 보기가 어려워지는 게 아쉽네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '저희 둘이 특히 출장이 많았는데 담당 지역이 달라서 같이 못 가기도 했고요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '갑작스럽게 제가 하던 일들을 맡게 되셨는데',
        style: {
            color: `white`
        },
        start: getTextStart(),
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
        text: '원하시는 팀 이동 꼭 달성하시길 바라고,',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '필요하시면 언제든지 연락 주세요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '탈출 성공하셔서 평택에서 봐요.',
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