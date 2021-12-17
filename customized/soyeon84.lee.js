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
        text: '안녕하세요. 소연씨.',
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
        text: '예림씨와 같이 들어오시고 멘토/멘티로 시작한 게 얼마 안 된 것 같은데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '곧 선임 단다고 생각하니 미묘한 생각들이 드네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '이제 후임들도 들어오는데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '선임으로써의 모습을 보고 싶었는데 못 보는 게 아쉽군요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '제 회사 생활 중에서도 가장 많이 같이 업무를 한 분을 꼽자면 소연씨 같네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '그 전까지는 혼자서 알아서 하는 분위기였었는데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '개발 업무를 맡으면서 제대로 다른 분과 업무를 했었죠.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: 'Beanstaller 업무 같이 하면서도 많은 도움을 받았고,<br>' +
            '<span style="font-size: 32px;">(철야도 해보고)</span>',
        center: true,
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
        text: '에뮬레이터 개발 처음에는 삽질만 했었기도 했고.<br>' +
            '<span style="font-size: 32px;">(중간에 탈주해서 혼자 고통받은건 추가)</span>',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '같이 일하면서 서로 도와주고 의지하고 했던 게 생각납니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '또한 스파티움 하면서 많이 발전하신 것 같고<br>본인 방향성도 정한 것 같은 느낌이 드네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '확실히 관리적인 면에서는 저보다 훨씬 뛰어나니',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '계속 역량을 키우면 어디 가서든 충분히 인정받으실 수 있을겁니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '앞으로도 꾸준히 뛰어난 모습을 계속 보여주면 좋겠습니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '평택도 출퇴근 하시니까 시간 나면<br>종종 커피타임 가져서 현황 알려주시고,',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '희정씨도 잘 챙겨주세요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '궁금한 거 문의할 거 등등 있으면 언제든지 연락 주시고요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '곧 YB모임때 또다시 보죠.',
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
        src: `Mocha Coffee.mp3`,
        start: 1000,
        duration: getTextStart()
    });
    Slider.play();
}