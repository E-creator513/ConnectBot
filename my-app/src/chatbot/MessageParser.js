class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (!this.actionProvider.skills) {
      this.actionProvider.handleSkills(message);
    } else {
      this.actionProvider.handleInterests(message);
    }
  }
}

export default MessageParser;