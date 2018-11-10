module.exports = {
    // List of Keywords/Phrases that will trigger the response. Should be in lowercase.
    triggers: [ " robot ", " bot ", " robots ", " bots " ],
    // Chance out of 100 that the response will trigger. 100 means that it will always trigger.
    chance: 15,
    // Priority of the trigger. If you have 2 responses that have the same trigger, the lower value priority will be used first.
    priority: 1,
    // Code to execute when the response is triggered.
    execute(message) {
        return message.reply("That's Robophobic!");
    },
};