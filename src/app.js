import bolt from "@slack/bolt";
import config from "./config/config.js";
import { handleMessage } from "./handlers/messageHandler.js";

import { getItems } from "./services/sheetsService.js";

const { App } = bolt;

const app = new App({
  token: config.slackBotToken,
  signingSecret: config.slackSigningSecret,
});

app.message(async ({ message, say }) => {
  await handleMessage(message, say);

  //! provjera za DM-ove
  if (message.channel_type === "im") {
    await say(`Hello <@${message.user}>, I received your DM!`);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("Slack Bot is running!");

  const items = await getItems();
  console.log("Dohvaćeni podaci iz getItems:", items);
})();
