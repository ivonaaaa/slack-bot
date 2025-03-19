import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  slackBotToken: process.env.SLACK_BOT_TOKEN,
  slackSigningSecret: process.env.SLACK_SIGNING_SECRET,
  googleSheetId: process.env.GOOGLE_SHEET_ID,
  googleServiceAccountJson: process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
};

//! di god treba ove podatke neka se importa ovaj config umisto hardkodiranja
