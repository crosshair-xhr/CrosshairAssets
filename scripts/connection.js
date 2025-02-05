const sleep = ms => new Promise(r => setTimeout(r, ms));
const print = console.log;

async function main() {
    while (true) {
        await sleep(100);

        try {
            const result = await fetch("http://127.0.0.1:5304");
            print(result);
        } catch (error) {
            print(error);
        }
    }
}

main();
