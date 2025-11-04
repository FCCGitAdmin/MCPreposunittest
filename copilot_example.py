
# Topic: Copilot
# This script demonstrates a simple Copilot-like suggestion feature.

def copilot_suggestions(prompt):
    suggestions = {
        "hello": "Hi there! How can I assist you today?",
        "help": "Sure, I can help. What do you need assistance with?",
        "exit": "Goodbye! Have a great day!"
    }
    return suggestions.get(prompt.lower(), "Sorry, I don't have a suggestion for that.")

# Example usage
if __name__ == "__main__":
    user_input = input("Enter a prompt: ")
    print(copilot_suggestions(user_input))
