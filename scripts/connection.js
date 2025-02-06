async function main() {
    const status_endpoint = `${bridge}/api/status`

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

        if (connection_status == "offline") {
            document.getElementById("launch-btn").style.backgroundColor = "#eeeeee"
        } else {
            document.getElementById("launch-btn").style.backgroundColor = "#ffffff"
        }
    }
}

main();
