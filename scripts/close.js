async function main() {
    var close_button = await waitForElement("close-btn");

    close_button.addEventListener("click", async () => {
        console.log(`${BRIDGE}/api/close`);
        await fetch(`${BRIDGE}/api/close`);
        window.close();
    });
};

main();
