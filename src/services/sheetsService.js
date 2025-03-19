import { GoogleSpreadsheet } from "google-spreadsheet";
import config from "../config/config.js";
import fs from "fs";
import { GoogleAuth } from "google-auth-library";

const creds = JSON.parse(
  fs.readFileSync(config.googleServiceAccountJson, "utf8")
);

const doc = new GoogleSpreadsheet(config.googleSheetId);

export async function loadSheet() {
  try {
    const auth = new GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const authClient = await auth.getClient();
    doc.useOAuth2Client(authClient);

    await doc.loadInfo();
    return doc.sheetsByIndex[0];
  } catch (error) {
    console.error("Error loading Google Sheet:", error);
    return null;
  }
}

export async function getItems() {
  const sheet = await loadSheet();
  console.log("Dohvaćeni podaci iz Google Sheeta:", sheet);
  if (!sheet) return [];

  const rows = await sheet.getRows();
  return rows.map((row) => ({
    name: row.name,
    location: row.location,
  }));
}
