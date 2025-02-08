// localization
const print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForElement(id, timeout = 100) {
    var element = document.getElementById(id);
    var i = 0;

    while (element == null && i <= 10) {
        await sleep(10);

        element = document.getElementById(id);
        i += 1;
    }

    return element;
}


// crosshair
const PORT = 8895;
const bridge = `http://127.0.0.1:${PORT}`

var connection_status = "offline";
