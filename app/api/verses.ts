import verses from "../datas/verses"

const getRandomVerses = () => {
    const shuffledVerses = [...verses]; // Create a copy of the verses array
    for (let i = shuffledVerses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index
      [shuffledVerses[i], shuffledVerses[j]] = [shuffledVerses[j], shuffledVerses[i]]; // Swap the elements
    }
    return shuffledVerses; 
}

const getVersesByCategory = (category: string) => {
    const verses = getRandomVerses();
    return verses.filter((verse) => verse.category === category);
}

export {getRandomVerses, getVersesByCategory}