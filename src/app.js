import bolt from "@slack/bolt";
import config from "./config/config.js";
import { handleMessage } from "./handlers/messageHandler.js";
import { greet } from "./utils/greeter.js";

const { App } = bolt;

const app = new App({
  token: config.slackBotToken,
  signingSecret: config.slackSigningSecret,
  socketMode: true,
  appToken: config.slackAppToken,
  port: config.port,
});

app.event("app_home_opened", async ({ event, client }) => {
  await greet(client, event.user);
});

app.message(async ({ message, say }) => {
  await handleMessage(message, say);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  app.logger.info("⚡️ Bolt app is running!");
})();
