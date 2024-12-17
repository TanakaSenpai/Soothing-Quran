import verses from "../datas/verses"

const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

export {getRandomVerse}