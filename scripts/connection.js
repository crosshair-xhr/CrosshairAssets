// localization
const print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForElement(id, timeout = 5000) {
    var element = document.getElementById(id);

    while (element == null) {
        element = document.getElementById(id)
        sleep(10)
    }

    return element
}


// crosshair
const PORT = 8895;
const bridge = `http://127.0.0.1:${PORT}`

var connection_status = "offline";
