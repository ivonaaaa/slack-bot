import bolt from "@slack/bolt";
import config from "./config/config.js";
import { handleMessage } from "./handlers/messageHandler.js";

const { App } = bolt;

const app = new App({
  token: config.slackBotToken,
  signingSecret: config.slackSigningSecret,
  socketMode: true,
  appToken: config.slackAppToken,
  port: config.port,
});

app.message(async ({ message, say }) => {
  if (message.im) await say(`Hello <@${message.user}>, I received your DM!`);

  await handleMessage(message, say);
});

app.message("hello", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  app.logger.info("⚡️ Bolt app is running!");
})();
