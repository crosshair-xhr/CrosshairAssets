async function main() {
    var close_button = await waitForElement("close-btn");

    close_button.addEventListener("click", () => {
        console.log(`url: ${BRIDGE}`);
        fetch(`${BRIDGE}/api/close`);
        window.close();
    });
};

main()
