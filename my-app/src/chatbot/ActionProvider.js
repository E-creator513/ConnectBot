class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, { getRecommendations }) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.skills = '';
    this.getRecommendations = getRecommendations;
  }

  handleSkills = (message) => {
    this.skills = message;
    const botMessage = this.createChatBotMessage("Great! Now, what are your interests?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  handleInterests = (message) => {
    const interests = message;
    const botMessage = this.createChatBotMessage("Thank you! I'll get you recommendations.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    this.getRecommendations(this.skills, interests);
  };
}

export default ActionProvider;