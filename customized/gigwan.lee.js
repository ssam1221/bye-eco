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
        text: '안녕하세요. 이기관 책임님,',
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
        text: '저희 파트에 오신 이후로,',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '일 이야기만 하던 파트가',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '점점 분위기가 바뀌던 게 생각나네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: 'ECO 때 개발 관련 매니징 하시면서',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '저와 의견 충돌도 많이 났던 것 같은데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '지금 생각해보면 많이 들어주셔서 감사합니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '에뮬레이터 개발하면서도 정말 수고 많으셨고요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '이제는 프레임워크 셀 장으로 가시니',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '거기에서도 충분히 역량을 발휘하실 거라고 믿습니다.<br>' +
            '<span style="font-size: 32px;">(API 이슈 있을 때 문의하기 더 좋아졌네요)</span>',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '나중에도 필요하시면 언제든지 연락 주세요.<br>' +
            '<span style="font-size: 32px;">집들이때에도 보면 좋겠네요.</span>',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '그리고 보안전문가 합격하신 것 축하드립니다.',
        center: true,
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