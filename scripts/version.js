async function main() {
    var version = waitForElement("version");
    var available_version = await (await fetch("https://crosshair-xhr.github.io/CrosshairAssets/version")).text();
    var current_version = await (await fetch(`${BRIDGE}/api/status`)).text();

    version.textContent = current_version;

    if (available_version != current_version) {
        version.style.color = "#ff0000"
    }
};

main();
