import { getItems } from "../services/sheetsService.js";

export async function response(say) {
  const items = await getItems();
  if (items.length === 0) {
    await say("No data available.");
    return;
  }

  const formattedItems = items.map((item) => `- ${item.name}`).join("\n");

  await say(`Here are the items available for searching:\n${formattedItems}`);
}
