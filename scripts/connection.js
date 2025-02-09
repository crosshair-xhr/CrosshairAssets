async function main() {
    const status_text = await waitForElement("status");
    const launch_button = await waitForElement("launch-btn");
    const version = await waitForElement("version");

    while (true) {
        await sleep(1000);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        try {
            version.textContent = (await fetch(`${BRIDGE}/api/status`)).text();
            connection_status = "online";
        } catch {
            connection_status = "offline";
        } finally {
            clearTimeout(timeoutId);
        };

        status_text.textContent = connection_status.toUpperCase();

        if (connection_status == "offline") {
            launch_button.style.backgroundColor = "#cccccc";
            launch_button.style.opacity = "0.5";
        } else {
            launch_button.style.backgroundColor = "#ffffff";
            launch_button.style.opacity = "1";
        };
    };
}

main();
