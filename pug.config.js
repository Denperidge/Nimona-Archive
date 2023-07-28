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
        const base64 = fs.readFileSync(jsonPath.replace(".json", ".jpg"), "base64");

        pageData.image = `data:image/jpg;base64,${base64}`;

        chapter.push(pageData);
    });

    chapters[chapterNumber] = chapter;
    
    
});

module.exports = {
    locals: {
        chapters: chapters,
        appendTitle: "| Nimona"
    }
}