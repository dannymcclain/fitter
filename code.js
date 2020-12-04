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
                    figma.closePlugin("✓ Fit");
                    break;
                case "fitWidth":
                    item.resize(itemParent.width, item.height);
                    item.x = 0;
                    figma.closePlugin("↔ Fit Width");
                    break;
                case "fitHeight":
                    item.resize(item.width, itemParent.height);
                    item.y = 0;
                    figma.closePlugin("↕ Fit Height");
            }
        }
        // Separate function for groups because X and Y position behave a little different than frames
        else if (itemParent.type === "GROUP" || itemParent.type === "BOOLEAN_OPERATION") {
            switch (selectedCommand) {
                case "fit":
                    item.resize(itemParent.width, itemParent.height);
                    item.x = itemParent.x;
                    item.y = itemParent.y;
                    figma.closePlugin("✓ Fit");
                    break;
                case "fitWidth":
                    item.resize(itemParent.width, item.height);
                    item.x = itemParent.x;
                    figma.closePlugin("↔ Fit Width");
                    break;
                case "fitHeight":
                    item.resize(item.width, itemParent.height);
                    item.y = itemParent.y;
                    figma.closePlugin("↕ Fit Height");
            }
        }
        else {
            if (itemParent.type === "PAGE") {
                figma.closePlugin("⚠️️️ Can't fit to a page.");
            }
            else {
                figma.closePlugin("⚠️️️ Didn't fit.");
            }
        }
    });
}
else
    figma.closePlugin("⚠️ Nothing selected.");
