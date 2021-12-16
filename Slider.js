const Slider = (() => {

    const visitor = location.href.split('?id=')[1];

    function fadeIn(element) {
        if (null === element.getAttribute(`class`)) {
            element.setAttribute(`class`, `fade`);
        } else {
            element.setAttribute(`class`, `${element.getAttribute(`class`)} fade`);
        }
        element.style.visibility = `visible`;
        element.setAttribute(`class`, `${element.getAttribute(`class`).replaceAll(`fade`, `FadeIn`).replaceAll(`FadeOut`, `FadeIn`)}`);

    }

    function fadeOut(element) {
        element.setAttribute(`class`, `${element.getAttribute(`class`).replaceAll(`fade`, `FadeOut`).replaceAll(`FadeIn`, `FadeOut`)}`);
        setTimeout(() => {
            element.style.visibility = `hidden`;
        }, 950)
    }

    class Slider {
        static BGMPlayer = null;

        static DOMElements = {
            mainContainer: null,
        }

        static contents = [];
        static lastContentStart = 0;
        static lastContentEnd = 0;

        static BGMs = [];

        static init() {
            this.BGMPlayer = document.getElementById(`bgmPlayer`);

            for (const id in this.DOMElements) {
                this.DOMElements[id] = document.getElementById(id);
            }

        }

        static addAudio(params) {

            params.src
            params.start
            params.duration

            const audioTitle = document.getElementById(`bgmPlayerTitle`);
            const audioTag = document.createElement(`audio`);

            audioTag.style.visibility = `hidden`;
            audioTag.volume = 1;
            audioTag.src = `./BGM/${params.src}`;
            audioTag.load();
            this.DOMElements.mainContainer.appendChild(audioTag);
            // audioTag.play();

            this.contents.push(() => {
                let interval = 0;

                setTimeout(() => {
                    audioTitle.innerHTML = `&#x266B; ${params.src.replace(`.mp3`, ``)}`;
                    fadeIn(audioTitle);
                    audioTag.play();

                    setTimeout(() => {
                        fadeOut(audioTitle);
                        setTimeout(() => {
                            audioTitle.innerHTML = ``;
                        }, 1000)
                    }, 3000)

                    setTimeout(() => {
                        interval = setInterval(() => {
                            if (audioTag.volume >= 0.05) {
                                audioTag.volume -= 0.05;
                            } else {
                                audioTag.volume = 0;
                                audioTag.muted = true;
                            }

                            if (0 === audioTag.volume) {
                                clearInterval(interval);
                                this.DOMElements.mainContainer.removeChild(audioTag);
                            }
                        }, 50);
                    }, params.duration - 1000);
                }, params.start);
            });

            // self.contents.push(() => {

            //     let interval = 0;

            //     setTimeout(() => {
            //         self.BGMPlayer.volume = 1;
            //         self.BGMPlayer.src = `./BGM/${params.src}`;
            //         self.BGMPlayer.play();
            //         setTimeout(() => {
            //             interval = setInterval(() => {
            //                 if (self.BGMPlayer.volume >= 0.05) {
            //                     self.BGMPlayer.volume -= 0.05;
            //                 }
            //                 if (0 === self.BGMPlayer.volume) {
            //                     clearInterval(interval);
            //                 }
            //             }, 50);
            //         }, params.duration - 1000);
            //     }, params.start);
            // });
        }

        static addImage(params) {
            params.x
            params.y
            params.src
            params.style
            params.start
            params.duration


            const self = this;

            self.lastContentStart = Math.max(params.start, self.lastContentStart);
            self.lastContentEnd = Math.max(params.start + params.duration, self.lastContentStart + params.duration);

            self.contents.push(() => {
                setTimeout(() => {
                    const div = document.createElement(`div`);

                    div.innerHTML = `<img src='./res/${params.src}'>`;
                    if (`style` in params) {
                        for (const css in params.style) {
                            div.style[css] = params.style[css];
                        }
                    }

                    fadeIn(div);
                    div.style.position = `absolute`;
                    div.style.left = params.x;
                    div.style.top = params.y;

                    self.DOMElements.mainContainer.appendChild(div);
                    setTimeout(() => {
                        fadeOut(div);
                        setTimeout(() => {
                            self.DOMElements.mainContainer.removeChild(div);
                        }, 1000);
                    }, params.duration);
                }, params.start);
            });
        }

        static addText(params) {
            params.x
            params.y
            params.text
            params.style
            params.start
            params.duration

            const self = this;

            self.lastContentStart = Math.max(params.start, self.lastContentStart);
            self.lastContentEnd = Math.max(params.start + params.duration, self.lastContentStart + params.duration);

            self.contents.push(() => {
                setTimeout(() => {
                    const div = document.createElement(`div`);
                    div.setAttribute(`class`, `textContents`);

                    div.innerHTML = params.text;
                    if (`style` in params) {
                        for (const css in params.style) {
                            div.style[css] = params.style[css];
                        }
                    }
                    if (params.center) {
                        div.style.width = `100vw`;
                        div.style.height = `100vh`;
                        div.style.display = `table-cell`;
                        div.style.verticalAlign = `middle`;
                        div.style.left = `0`;
                        div.style.top = `0`;
                    } else {
                        div.style.position = `absolute`;
                        div.style.left = params.x;
                        div.style.top = params.y;
                    }
                    div.style.left = params.x;
                    div.style.top = params.y;
                    self.DOMElements.mainContainer.appendChild(div);
                    fadeIn(div);
                    setTimeout(() => {
                        fadeOut(div);
                        setTimeout(() => {
                            self.DOMElements.mainContainer.removeChild(div);
                        }, 1000);
                    }, params.duration);
                }, params.start);
            });
        }

        static end(time) {
            if (visitor) {
                const duration = 5000;
                this.addImage({
                    center: true,
                    src: `ending/eco.jpg`,
                    style: {},
                    start: time,
                    duration: duration,
                });
                this.addText({
                    x: `0`,
                    y: `80vh`,
                    text: '<span class="PenStyle" style="font-size: 96px;">End of document.</span>',
                    style: {
                        color: `white`,
                        width: `100vw`,
                        display: `table-cell`,
                        verticalAlign: `middle`,
                        textAlign: `center`
                    },
                    start: time + duration,
                    duration: 300000,
                })
                this.addImage({
                    x: `calc(50vw - 480px)`,
                    y: `calc(50vh - 270px)`,
                    src: `ending/${visitor}.jpg`,
                    style: {},
                    start: time + duration,
                    duration: 300000,
                });
            } else {
                this.addText({
                    center: true,
                    text: '<span class="PenStyle" style="font-size: 96px;">End of document.</span>',
                    // style: {
                    //     color: `white`,
                    //     width: `100vw`,
                    //     display: `table-cell`,
                    //     verticalAlign: `middle`,
                    //     textAlign: `center`
                    // },
                    start: time,
                    duration: 300000,
                })
            }
        }

        static play() {
            // document.getElementsByTagName('body')[0].requestFullscreen();
            const self = this;
            const startBtn = document.getElementById(`startAnimation`);
            const loading = document.getElementById(`loading`);
            fadeOut(startBtn);
            fadeIn(loading);
            setTimeout(() => {
                startBtn.style.visibility = `hidden`;
                startBtn.innerHTML = `다시보기`;
                fadeOut(loading);
                setTimeout(() => {
                    loading.style.visibility = `hidden`;
                }, 1000);

                // End


                for (const content of self.contents) {
                    content();
                }
            }, 1000);
        }
    }

    return Slider;
})();