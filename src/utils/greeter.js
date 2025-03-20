export async function greet(client, userId) {
  try {
    await client.chat.postMessage({
      channel: userId,
      text: "🚀 Hi! See what you can search by messaging me this command: *data*",
    });
  } catch (error) {
    console.error("Error while sending welcome message:", error);
  }
}
