const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61V2Y7iRhT9lahemxmMsbFBaile2HEb8IaJoqiwy3bhlXIZMCP+IFKe8zR/km+aT4gM3eqWZutI8VOpXHXuufeee+oTyHJcojmqweATKAg+QoqaJa0LBAZAroIAEdACPqQQDACjW73e0ErO87Vulmy0Q9Mc+nNVqZOJWD84lZtNCQO1pZ0/gmsLFNUuwd4PALW8bSMFz/v5kWr9hWZtYmPefkDYWsv7lcnvzhdnpUG4s7RHcG0QISY4C4dFhFJEYDJH9RJi8j76xmhqm2hn7pXAwO1TUCT24Wmnti8jNa4u+Wyya5er7mImjFbvo7/g5Mt2Q0Ro6OEhtmdTqThLR9thN0aWLs8uu3ia4Kh4CqzhnX6Jwwz5Ux9lFNP63XW3pmNpVOWxIh+U3sO0FtnjBTMuJKaULHkIR7W2jdMtPmXx+4i7tYg6/bB7GIaaPVPiAkdVPp5Hlb/hzFLsLt2nTbZRRUuS3hJfkhetxP+l7vXCP1PdKcnktOP8k32esAbhi2pvbR1rfNb1qCxhvZinndP76K/8WOgUneGSyXl23+UK05g6VTxfhwddr+vVprAXIxHB8mS90oe0Ij8scmK72zwUj/tFcpKluTQ1hXE1lcnSUA4s2sTS8KzBYamGZ0Ihc07MeXrMtgL1hLZuV4XHM+OdHFXzemQpms2I+nQbrh5vGcWonvpg0Lm2AEEhLimBFOfZbY/jWwD6RwN5BNFbeQHvh6nKZrqS9zeu5LGH7TpziOv0F/zF7e4jXUy0i9WvN1R6BC1QkNxDZYn8CS5pTmoNlSUMUQkGv9061SRNUJpTNMM+GACW5wRGYHsdVmR+LT+eIkhLWBQfM0RBCwQkTzUEBpRUqAVuF4a8qCp9nhEEVhqO2E6fk3mZH/UZtscxrMg0Kab3oCZOUUlhWoBBR+gKHN/rcOy19f/wUMROT5UFRuBHQ4kXWFkRBVmWlZEiioLCd37Cg7v+3gIZOtO7jpvqdzstEGBSUiuriiSH/ovIX35Cz8urjBp15inNAhEweLONKMVZWDaZVRkkXoSPSGnyAIMAJiW6toCPjthDDR44sW7vaA//MBwnPS9UX5uZ3a7UdDDKs/sRHrFBgHbsB9Hjuh84UQw+7FiW+cBAfwc9ketzYgc05bhbSHPnu4p2DlHoYaYKlGq6Omayn0ZLUaj606V2U+Vdiogg/6XKO+jFVWHmMcp+gNt9qFZBKfoVF/bG8dx1u6HhsBHqLoZvcO8SB4NPr7at5H6Dp4rCprd2m8TT20R+pYZB52s9ZLA5DJSl9MsaexEk/i9fPv/955fPf/3TBH3uSAPnIwpxUjaHFweh7K1Gw2X7ctydxmNpGEpK2ER+6eCLM9wnL+SVwyqbpJkqlNTpbseqsdu7u+3aXx+8i6rsN9v58in04Np6/AYIGIA4KpRAaBsPhTQJbfNBDXqhQ7ojc7LXhfnY36oeclwYisZMppN+lcxibB63ykY5BQyXGtGecui0uGjbLZOHie8seEuRHptodyW9DTY0uH0/8ZTzfuXNLkR3ck/XL0q0h7WwFklFuhdBnQWVm8xtJm/Lo+RpvWdxfkipZdiVW1bbyRH7yWFpmpoh87HhDV886+aZyfNbhZ/d5K67AKOb9T+35Gede50A5tp6A/H8lnxHZbKrrw7x7MwXpwdhYVN2HTIpx45Za2PBTDud8g5r7C/uZBzb4NqMdpFAGuQkBQMAM5/k2ActkMCSSq9D/C1fYFograWiMCikL7MPpOYb5yq4/gv6TK+0JgkAAA== ",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
