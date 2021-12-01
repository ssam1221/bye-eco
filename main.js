window.onload = async () => {

    async function loadScript(src) {
        return new Promise((resolve, reject) => {

            const scriptEl = document.createElement(`script`);
            scriptEl.src = `customized/${src}`;
            scriptEl.onload = resolve;
            scriptEl.onerror = reject;

            document.getElementsByTagName(`head`)[0].appendChild(scriptEl);
        })

    }

    const visitor = location.href.split('?id=')[1];

    console.log(visitor)
    try {

        if (visitor) {
            await loadScript(`${visitor}.js`);
        }
        else {
            await loadScript(`default.js`);
        }
    } catch (err) {
        // console.error(err);
    }
}