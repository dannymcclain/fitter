let selectedCommand = figma.command;
let mySelection = Array.from(figma.currentPage.selection);
if (mySelection.length > 0) {
    mySelection.forEach(function (item) {
        let itemParent = item.parent;
        if (itemParent.type === "FRAME") {
            switch (selectedCommand) {
                case "fitFrame":
                    item.resizeWithoutConstraints(itemParent.width, itemParent.height);
                    item.x = 0;
                    item.y = 0;
                    break;
                case "fitWidth":
                    item.resizeWithoutConstraints(itemParent.width, item.height);
                    item.x = 0;
                    break;
                case "fitHeight":
                    item.resizeWithoutConstraints(item.width, itemParent.height);
                    item.y = 0;
            }
            figma.closePlugin("✔ Fitted.");
        }
        else {
            figma.closePlugin("⚠️️️ No parent frame.");
        }
    });
}
else
    figma.closePlugin("⚠️ Nothing selected.");
