import { getItems } from "../services/sheetsService.js";
import FuzzySet from "fuzzyset";

export async function handleMessage(message, say) {
  const text = message.text.toLowerCase();

  if (text === "refresh") {
    say("Cache refreshed!");
    return;
  }

  const items = await getItems();
  const names = items.map((item) => item.name);
  const fuzzySet = FuzzySet(names);

  const matches = fuzzySet.get(text);
  if (!matches) {
    say(`No results found for _${text}_`);
    return;
  }

  const bestMatch = matches[0][1];
  const item = items.find((i) => i.name === bestMatch);

  say(`*${item.name}* is located at: *${item.location}*`);
}
