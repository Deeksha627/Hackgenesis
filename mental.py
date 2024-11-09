def ask_question(question, options):
    print(question)
    for i, option in enumerate(options, start=1):
        print(f"{i}. {option}")
    
    while True:
        try:
            answer = int(input("Select an option (1-4): "))
            if 1 <= answer <= 4:
                return 4 - answer  # Mapping choices to scores: 1 (Most frequent) = 3, 4 (Least frequent) = 0
            else:
                print("Please select a valid option (1-4).")
        except ValueError:
            print("Please enter a number (1-4).")

def mental_health_assessment():
    print("Welcome to the Mental Health Self-Assessment\n")

    questions = [
        "1. How often have you felt down, depressed, or hopeless in the past two weeks?",
        "2. How often have you had trouble sleeping, staying asleep, or sleeping too much?",
        "3. How often have you felt little interest or pleasure in doing things you used to enjoy?",
        "4. How often have you felt nervous, anxious, or on edge?"
    ]
    
    options = [
        "Nearly every day",
        "More than half the days",
        "Several days",
        "Not at all"
    ]

    score = sum(ask_question(q, options) for q in questions)
    
    print("\nYour Score:", score)
    if score >= 9:
        print("Feedback: High signs of mental distress. Please consider seeking professional support. \n For consultation please call in our contact )
    elif score >= 5:
        print("Feedback: Moderate signs of mental distress. Monitoring and self-care may help, but professional advice is recommended.")
    else:
        print("Feedback: Low signs of mental distress. Keep maintaining your mental well-being.")

if __name__ == "__main__":
    mental_health_assessment()
