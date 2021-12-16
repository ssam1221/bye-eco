window.onload = async () => {

    async function loadScript(src) {
        return new Promise((resolve, reject) => {
            try {

                const scriptEl = document.createElement(`script`);
                scriptEl.src = `customized/${src}`;
                scriptEl.onload = resolve;
                scriptEl.onerror = reject;

                document.getElementsByTagName(`head`)[0].appendChild(scriptEl);
            } catch (err) {
                reject(err);
            }
        });
    }

    const visitor = location.href.split('?id=')[1];

    console.log(`visitor : ${visitor}`)
    try {

        if (visitor) {
            await loadScript(`${visitor}.js`);
        } else {
            await loadScript(`default.js`);
        }
    } catch (err) {
        document.getElementById(`startAnimation`).innerHTML = `Unknown user`;
        document.getElementById(`startAnimation`).disabled = true;
    }
}