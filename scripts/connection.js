const sleep = ms => new Promise(r => setTimeout(r, ms));
const print = console.log

while(true) {
    sleep(100);

    try {
        var result = fetch("http://127.0.0.1:5304");
        print(result);
    } catch(error) {
        print(error);
    }
}
