# Nimona Archive

This is the repository for the Nimona Archive! The info here will be exclusively for explaining how the site is generated and why it works like it does. For info on the project itself, you can check the website (or its corresponding files in this repo!)

**Project goals:**
- [x] Archive all comics in pure web form*
- [x] Parse the web files into uniform, machine-readable data*
- [x] Use that data to generate a website

- [ ] Add alt text to *every* page*
- [ ] Create an alt text glossary for the characters
- [ ] ... which is loaded in every page where the character appears

- [x] Remove N.D.'s deadname and replace it with their professional name (N.D.)*
- [ ] Add a notice to support the comics print release, N.D.'s stuff & (a) charit(y/ies)**

- [ ] Research & apply aria
- [ ] Ensure proper tab indexes

- [ ] Create theme: cinematic & static movie background
- [ ] Create theme: custom made repeating tile from the webcomic
- [ ] Create theme: original website
- [ ] Create theme: minimal

*\*: These goals will be/have been accomplished in a seperate repository*
*\*\*: Perhaps mermaids (trans youth) or trevor (homeless queer people)? Check if N.D. is fond of any specific charities*


## Tutorial: getting started
Note: the following steps will require you to have a certain `extracted/` folder. You probably don't have that. Please check [here](#extracted-folder) as to why.
```bash
git clone https://github.com/Denperidge/Nimona-Archive.git
cp path/to/extracted/ Nimona-Archive/extracted/
cd Nimona-Archive/
npm install
npm build  # Or use npm start to run an auto-reload server on localhost:1234 
```


## Discussions
### Extracted folder
tl;dr: due to legal reasons, I'm the only one who has it.

So, I manually archived the entire webcomic and wrote a parser for it that creates the `extracted/` folder. For reasons that are hopefully obvious, this is kind of a legal grey zone. A grey zone I will happily tread to make the webcomic more readily available for people (especially for those with disabilities or limited library/shop access) but a grey zone nevertheless. So I'm already happy if I don't get sued over this in general! However if all the stars align and I get the blessing for publishing the raw archive instead of a cease & desist, I'll happily share the parser and the raw files.
