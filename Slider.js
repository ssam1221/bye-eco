const Slider = (() => {


    function fadeIn(element) {
        let cls = element.getAttribute(`class`);
        if (cls.indexOf(`FadeOut`) !== -1) {
            element.setAttribute(`class`, `${element.getAttribute(`class`).replaceAll(`FadeOut`, `FadeIn`)}`);
        }
        else {
            element.setAttribute(`class`, `${element.getAttribute(`class`)} FadeIn`);
        }
    }

    function fadeOut(element) {
        element.setAttribute(`class`, `${element.getAttribute(`class`).replaceAll(`FadeIn`, `FadeOut`)}`);
    }

    class Slider {
        static BGMPlayer = null;

        static DOMElements = {
            mainContainer: null,
        }

        static contents = [];

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
                            }
                            else {
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
                    fadeIn(div);
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

        static play() {
            const self = this;
            const startBtn = document.getElementById(`startAnimation`);
            const loading = document.getElementById(`loading`);
            fadeOut(startBtn);
            fadeIn(loading);
            setTimeout(() => {
                fadeOut(loading);

                // End
                self.contents.push(() => {

                });

                for (const content of self.contents) {
                    content();
                }
            }, 8000);
        }
    }

    return Slider;
})();