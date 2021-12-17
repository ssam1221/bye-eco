document.getElementById(`startAnimation`).onclick = () => {
    // const start = new Date();
    // setInterval(() => {
    //     document.getElementById(`timer`).innerHTML = new Date() - start;
    // }, 50)

    Slider.init();


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
        text: '안녕하세요. 신성은 책임님,',
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
        text: '유럽에서부터 시작된 인연이',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '같은 파트의 리더 겸 동료까지 이어지는 게 신기하네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '출장 때에도 많이 도움을 받았었고',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '파트장으로 오셨을때에도 단순한 리더 정도가 아니라',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '정말 회사 동료라는 느낌도 많이 받았습니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '갑자기 에코 파트가 사라지고부터,',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '지금은 에코 때 역할이나 느낌이 많이 사라지고 있어서 아쉽습니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '하지만 결국 에코 역할은 B2B에서는 꼭 필요한 역할이니',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '언젠가 에코 역할의 조직이 다시 생기지 않을까 생각합니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '조만간 같은 조직 구성원으로서 다시 만나길 기대해봅니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '필요하시면 언제든지 연락 주세요.' +
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