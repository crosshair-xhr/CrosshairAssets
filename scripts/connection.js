const PORT = 8890;

async function main() {
    while (true) {
        await sleep(1000);

        try {
            endpoint = `http://127.0.0.1:${PORT}/api/status`

            const result = await fetch();
            print("Recieved status, Online...");
            print(status)
        } catch (error) {
            alert("");
        }
    }
}

main();
