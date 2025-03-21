# INTERNSHIP
> 18th ASSIGNMENT

### Slack Bot

This is a simple Slack bot built using Bolt for JavaScript, running in Socket Mode. It allows users to search for stored items and their locations using data from a Google Sheet.

### Key Features
- Responds to user messages by looking up items in a Google Sheet
- Handled response for non existing items
- Supports fuzzy search for better matching
- Accepts a command for listing all available items
- Runs in **Socket Mode** (no need for public URLs like ngrok).

### Technologies used
- JavaScript
- Visual Studio Code
- Google Sheets
- FuzzySet

## Installation and running
To get started with this project, you need to have the following requirements:
1. **A modern web browser**
2. **Visual Studio Code**
3. **Node.js**
4. **Slack Account**
5. **Google Account and Google Sheets**

Steps to Install the Project:
1. **Clone and open the Repository**:
   Open a terminal (or command prompt on your machine) and run the following commands:
   
   ```bash
   git clone https://github.com/ivonaaaa/slack-bot.git
   ```
   ```bash
   cd slack-bot
   ```
2. **Open the project in VS Code**:
   In the same terminal type in this command:
    
   ```bash
   Code .
   ```

3. **Install dependencies**:
   Once you're in the VS Code, open a new terminal and type in this command:
    
   ```bash
   yarn install
   ```
4. **Set up the environment:**
   Create a .env file in the root of the project and add the following:
   ```bash
   SLACK_APP_TOKEN=
   SLACK_BOT_TOKEN=
   SLACK_SIGNING_SECRET=
   GOOGLE_SHEET_ID=
   GOOGLE_SERVICE_ACCOUNT_JSON=./src/config/google-service-account.json
   PORT=3000
   ```
5. **Obtain Slack API Credentials:**
   - Go to [Slack API Apps](https://api.slack.com/apps)
   - Create a new app using **Socket Mode**
   - Add these Bot Token Scopes: app_mentions:read, channels:history, chat:write, chat:write.public, commands, groups:history, im:history, im:read, im:write, mpim:history
   - Enable Event Subscriptions and subscribe to: message.channels, message.groups, message.im, message.mpim, app_home_opened
   - Generate the following tokens and add them to your .env file: SLACK_APP_TOKEN (requires connections:write scope), SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET

6. **Set up Google Sheet**:
   Create a Google Sheet with two columns:
   - **name**: item name
   - **location**: item location
  
   Share it with your Google Service Account (see next step). Copy the Google Sheet ID from the URL(https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit) and add it to the .env file.

7. **Set up Google Service Account**:
   - Go to your Google Cloud Console
   - Create a new project and enable Google Sheets API
   - Create a Service Account and download the JSON credentials
   - Put the file in config directory and rename it into "google-service-account.json"
   
8. **Run the application**:
   Start the app by running the following command:
    
   ```bash
   node src/app.js
   ```
   You should now be able to communicate with the bot! If there seem to be any issues regarding installation, you can visit the detailed instructions [here](https://tools.slack.dev/bolt-js/getting-started/).

