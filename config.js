const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/DANUWA-MD/DANUWA-MD/blob/main/images/DANUWA-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "🧠 *ROCHANA-MD is Alive & Fully Operational!* ✅\n━━━━━━━━━━━━━━━━━━━━━━\n💫 *Status:* Online ⚡\n🕐 *Uptime:* Always active\n🌐 *Mode:* Public\n💻 *Server:* Node.js Runtime\n━━━━━━━━━━━━━━━━━━━━━━\n🤖 *Hello there!* I'm *ROCHANA-MD*, your advanced WhatsApp assistant.\nType *help* to explore commands and enjoy automation at its best!\n━━━━━━━━━━━━━━━━━━━━━━\n👨‍💻 *Developer:* Rochana Janadeepa\n🔗 *GitHub:* https://github.com/dissanayakaharshan-hub/ROCHANA-MD\n━━━━━━━━━━━━━━━━━━━━━━\n💙 Thank you for using ROCHANA-MD!\nStay smart. Stay connected. 🚀",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
