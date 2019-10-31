let mySelection = figma.currentPage.selection.slice();
mySelection.forEach(function (item) {
    let itemParent = item.parent;
    if (itemParent.type === "FRAME") {
        item.resizeWithoutConstraints(itemParent.width, itemParent.height);
        item.x = 0;
        item.y = 0;
        figma.closePlugin("Done.");
    }
    else {
        figma.closePlugin("No parent frame.");
    }
});
