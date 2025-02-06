async function main() {
    const status_endpoint = `${bridge}/api/status`
    const status_text = document.getElementById("status")
    const launch_button = document.getElementById("launch-btn")

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

        status_text.textContent = connection_status.toUpperCase()

        if (connection_status == "offline") {
            status_text.style.backgroundColor = "#cccccc"
            status_text.style.opacity = "0.5"
        } else {
            status_text.style.backgroundColor = "#ffffff"
            status_text.style.opacity = "1"
        }
    }
}

main();
