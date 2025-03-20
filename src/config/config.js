import dotenv from "dotenv";

dotenv.config();

const config = {
  slackAppToken: process.env.SLACK_APP_TOKEN,
  slackBotToken: process.env.SLACK_BOT_TOKEN,
  slackSigningSecret: process.env.SLACK_SIGNING_SECRET,
  googleSheetId: process.env.GOOGLE_SHEET_ID,
  googleServiceAccountJson: process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
  port: process.env.PORT || 3000,
};

export default config;
