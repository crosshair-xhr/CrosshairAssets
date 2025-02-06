// localization
const print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// crosshair
const PORT = 8895;
const bridge = `http://127.0.0.1:${PORT}`

var connection_status = "offline";
