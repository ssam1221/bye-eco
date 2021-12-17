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
        text: '희정씨, 안녕하세요.',
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
        text: '개인적으로 모든 후임 분들과 같이 코딩하면서 업무를 해 보고 싶었는데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '희정씨만 같이 코드를 보면서 개발을 한 적이 거의 없어서 아쉽네요.<br>' +
        '<span style="font-size: 32px;">(야근도 유일하게 같이 못해봤고요)</span>',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '혼자 커머셜TV 쪽 업무로 배정받아서',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '같이 대화 할 기회가 많이 없어서 아쉬웠는데',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '그래도 스파티움 하면서부터 많이 이야기를 나누네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '에코 때 많이 챙겨주지 못해서 미안한 감이 있었지만',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        text: '팀 합병 후 짧게나마 도움이 된 것 같아서 다행이네요.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '희정씨도 곧 선임 달 예정이고',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '후임도 들어오는데',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '양희정 선임 어떤 모습일까 보고 싶었는데 못 보는 게 아쉽습니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '충분히 본인 잠재력이 있고',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '업무 수행능력이 낮은 것도 아니니',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '어떤 일을 하더라도 분명히 인정받을 날이 올 겁니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '이전에도 말했지만 전 우리 연구원분들 중에<br>일 못한다고 생각하는 사람 없습니다.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '스파티움 쪽에서도 승승장구하시고,',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '팀 이동한다고 해서 아예 남남이 되는 건 아니니까,',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '궁금한 거나 문의나 도와줄 게 있다면,',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '언제든지 연락 주세요.',
        style: {
            color: `white`
        },
        start: getTextStart(),
        duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '조만간 YB모임때 다시 봅시다.',
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