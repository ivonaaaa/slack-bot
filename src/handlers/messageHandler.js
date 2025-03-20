import { getItems } from "../services/sheetsService.js";
import { extractBestMatch } from "../utils/fuzzySearch.js";

export async function handleMessage(message, say) {
  const items = await getItems();
  const bestMatch = extractBestMatch(message.text, items);

  if (!bestMatch) {
    say(`No results found for _${filteredText}_`);
    return;
  }

  const item = items.find((i) => i.name === bestMatch);
  say(`*${item.name}* is located at: *${item.location}*`);
}
