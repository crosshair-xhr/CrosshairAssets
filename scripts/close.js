async function main() {
    var close_button = await waitForElement("close-btn");

    close_button.addEventListener("click", () => {
        fetch(`${BRIDGE}/api/close`).then(() => {
            window.close();
        });
    });
};

main()
