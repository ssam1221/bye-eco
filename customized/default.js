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
        text: '안녕하세요.',
        center: true,
        style: {
            color: `white`,
        },
        start: _textStart, duration: 3000,
    });

    Slider.addText({
        text: '12월 17일을 마지막으로<br>팀 이동을 하는<br>박준영 선임입니다.',
        center: true,
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });


    Slider.addText({
        text: '19일 부로 14년부터 약 7년 간 해 왔던<br>webOS Signage 업무에서,',
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
        start: getImageStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '제가 그나마 잘 하고 잘 하고 싶어하는 업무를 해 보고 싶기도 하고,',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '이 외에도 여러 이유로,',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '새롭게 클라우드솔루션의<br>Pro:Centric 업무로 이동합니다.',
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
        start: getImageStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '오랜 기간동안 같이 하던 동료 분들과,',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '몇 년을 해 오던 업무 대신 새로운 업무를 하게 되어,',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '뭔가 복잡한 생각과 감정이 계속 드네요.',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '저를 지금 자리에 있게 해 주신 (구) 에코 분들께도 감사드리고,',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '1년 가량 Web Solution 프로젝트에 있으면서,',
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
        text: '팀을 이동해서도 업무로 도움 받을 일이 많을 것 같습니다.',
        style: {
            color: `white`
        },
        start: getTextStart(), duration: 3000,
    });

    Slider.addText({
        center: true,
        text: '앞으로도 잘 부탁 드립니다.',
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

    Slider.end(getTextStart());

    Slider.addAudio({
        src: `A Fallen Leaf.mp3`,
        start: 1000,
        duration: getTextStart()
    })
    Slider.play();
}