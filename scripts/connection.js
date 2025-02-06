const PORT = 8890;

async function main() {
    const status_endpoint = `http://127.0.0.1:${PORT}/api/status`

    while (true) {
        await sleep(1000);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        try {
            var result = await fetch(status_endpoint);
            connection_status = "online"
        } catch {
            connection_status = "offline"
        } finally {
            clearTimeout(timeoutId)
        }

        document.getElementById("status").textContent = connection_status.toUpperCase()
    }
}

main();
