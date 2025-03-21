import FuzzySet from "fuzzyset";

export function extractBestMatch(text, items) {
  const names = items.map((item) => item.name);
  const fuzzySet = FuzzySet(names);

  const words = text.replace(/[^a-zćčđšž ]/g, "").split(" ");

  let bestMatch = null;
  let highestScore = 0;
  const MIN_SIMILARITY = 0.7;

  for (const word of words) {
    const matches = fuzzySet.get(word);
    if (
      matches &&
      matches[0][0] > highestScore &&
      matches[0][0] >= MIN_SIMILARITY
    ) {
      highestScore = matches[0][0];
      bestMatch = matches[0][1];
    }
  }

  return bestMatch;
}
