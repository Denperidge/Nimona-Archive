const fs = require("fs");

const nonNumbers = /[^\d]+/; 
function getNumbers(string) {
    return parseFloat(string.replace(nonNumbers, ""));
}

function sortByNumbersInTheName(a, b) {
    if (getNumbers(a) < getNumbers(b)) {
        return -1;
    } else if (getNumbers(a) > getNumbers(b)) {
        return 1;
    } else {
        return 0;
    }
}


let chapters = {};
let chapterTitles = {};
fs.readdirSync("patched/").forEach((chapterName) => {
    const chapterDir = "patched/" + chapterName;
    const chapterNumber = getNumbers(chapterName);

    let chapter = [];

    fs.readdirSync(chapterDir).sort(sortByNumbersInTheName).forEach((fileName) => {
        if (!fileName.endsWith(".json")) return;

        const jsonPath = chapterDir + "/" + fileName;
        const pageDirPath = chapterDir + "/" + fileName.replace(".json", "");
        const pageData = JSON.parse(fs.readFileSync(jsonPath, {encoding: "utf-8"}));

        let panels = [];
        let panelImages = fs.readdirSync(pageDirPath).map(name => name.replace(".jpg", ""));
        panelImages.forEach((panel) => {
            let panelData = {};
            panelData.image = "../../" + pageDirPath + "/" + panel + ".jpg";
            panelData.alt = pageData["alt-texts"][panel];
            panels.push(panelData)
        });

        pageData.panels = panels;




        chapter.push(pageData);
    });

    chapters[chapterNumber] = chapter;

    let chapterTitleImage = chapterDir + "/chapter.jpg"
    fs.copyFileSync(chapterTitleImage, `assets/static/chapter-${chapterNumber}.jpg`)
    chapterTitles[chapterNumber] = "../../" + chapterTitleImage;
});


let themes = [];
const dir = "src/themes/"
fs.readdirSync(dir).forEach((name) => {
    if (fs.lstatSync(dir + name).isDirectory()) {
        themes.push(name);
    }
});




module.exports = {
    locals: {
        chapters: chapters,
        chapterTitles: chapterTitles,
        themes: themes,
        appendTitle: "| Nimona"
    }
}