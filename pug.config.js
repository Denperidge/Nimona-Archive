const fs = require("fs");

let chapters = {};
fs.readdirSync("extracted/").forEach((chapterName) => {
    const chapterDir = "extracted/" + chapterName;
    const chapterNumber = chapterName.replace(/[^\d]+/, "");

    let chapter = [];

    fs.readdirSync(chapterDir).forEach((fileName) => {
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