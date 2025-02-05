const print = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (true) {
        await sleep(10000);

        try {
            const result = await fetch("http://127.0.0.1:5304");
            print(result);
        } catch (error) {
            print(error);
        }
    }
}

main();
