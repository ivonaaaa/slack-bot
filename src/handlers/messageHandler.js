import { getItems } from "../services/sheetsService.js";
import { extractBestMatch } from "../utils/fuzzySearch.js";
import { response } from "../utils/commandResponse.js";

export async function handleMessage(message, say) {
  const text = message.text.toLowerCase();
  const items = await getItems();
  const bestMatch = extractBestMatch(message.text, items);

  if (text === "data") {
    await response(say);
    return;
  }

  if (!bestMatch) {
    say(`No results found for _${filteredText}_`);
    return;
  }

  const item = items.find((i) => i.name === bestMatch);
  say(`*${item.name}* is located at: *${item.location}*`);
}
