let selectedCommand = figma.command;
let mySelection = Array.from(figma.currentPage.selection);
if (mySelection.length > 0) {
    mySelection.forEach(function (item) {
        let itemParent = item.parent;
        if (itemParent.type === "FRAME" || itemParent.type === "COMPONENT") {
            switch (selectedCommand) {
                case "fit":
                    item.resize(itemParent.width, itemParent.height);
                    item.x = 0;
                    item.y = 0;
                    break;
                case "fitWidth":
                    item.resize(itemParent.width, item.height);
                    item.x = 0;
                    break;
                case "fitHeight":
                    item.resize(item.width, itemParent.height);
                    item.y = 0;
            }
            figma.closePlugin("✔ Fitted.");
        }
        else if (itemParent.type === "GROUP") {
            switch (selectedCommand) {
                case "fit":
                    item.resize(itemParent.width, itemParent.height);
                    item.x = itemParent.x;
                    item.y = itemParent.y;
                    break;
                case "fitWidth":
                    item.resize(itemParent.width, item.height);
                    item.x = itemParent.x;
                    break;
                case "fitHeight":
                    item.resize(item.width, itemParent.height);
                    item.y = itemParent.y;
            }
            figma.closePlugin("✔ Fitted.");
        }
        else {
            if (mySelection.length === 1) {
                figma.closePlugin("⚠️️️ Can't fit it.");
            }
            else if (mySelection.length > 1) {
                figma.closePlugin("⚠️️️ Can't fit them.");
            }
        }
    });
}
else
    figma.closePlugin("⚠️ Nothing selected.");
