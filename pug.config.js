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
fs.readdirSync("extracted/").forEach((chapterName) => {
    const chapterDir = "extracted/" + chapterName;
    const chapterNumber = getNumbers(chapterName);

    let chapter = [];

    fs.readdirSync(chapterDir).sort(sortByNumbersInTheName).forEach((fileName) => {
        if (!fileName.endsWith(".json")) return;

        const jsonPath = chapterDir + "/" + fileName;
        const pageData = JSON.parse(fs.readFileSync(jsonPath, {encoding: "utf-8"}));

        pageData.image = "../../" + jsonPath.replace(".json", ".jpg");

        chapter.push(pageData);
    });

    chapters[chapterNumber] = chapter;
    
    
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
        themes: themes,
        appendTitle: "| Nimona"
    }
}