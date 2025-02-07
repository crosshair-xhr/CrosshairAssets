// localization
const print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForElement(id, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const selector = `#${id}`; // Convert ID to a selector
        let element = document.querySelector(selector);
        if (element) return resolve(element);

        const observer = new MutationObserver(() => {
            element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        setTimeout(() => {
            observer.disconnect();
            reject(new Error(`Element #${id} not found within timeout`));
        }, timeout);
    });
}


// crosshair
const PORT = 8895;
const bridge = `http://127.0.0.1:${PORT}`

var connection_status = "offline";
