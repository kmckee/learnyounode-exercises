function getShortMessages(allMessages) {
    return allMessages
        .map(function(item) { 
            return item.message;
        })
        .filter(function(message) { 
            return message.length < 50; 
        });
}

module.exports = getShortMessages;
