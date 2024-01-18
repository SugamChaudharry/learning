# Dream Date Planner:

# Write a Python program that asks the user to enter their dream date details, including the following information:

# -> Name of the person you want to go on a date with.
# -> Preferred location for the date.
# -> Your budget for the date.
# -> The weather forecast for the date.

# Based on this information, create a program that suggests whether the date is feasible. 

# Here's a suggested algorithm:

# 1. Ask the user to enter the name of the person they want to go on a date with.
# 2. Ask for the preferred location for the date.
# 3. Ask for the budget for the date (a numerical value).
# 4. Ask for the weather forecast for the date (sunny, rainy, snowy, etc.).
# 5. Now, use conditional statements to check the feasibility of the date:

# -> If the budget is high, print a message like "You can go all out and plan something exciting!"
# -> If the budget is moderate, suggest a nice but reasonably priced date idea.
# -> If the budget is low, recommend a creative and budget-friendly date option.

# Based on the weather forecast, provide additional suggestions. 

# For example, if it's sunny, suggest an outdoor activity, and if it's rainy, propose an indoor plan.
# (weather input should be taken in a choice based system)

# Display the final date suggestion to the user.

my_gf_name = input("Enter the name of the person you want to go on a date with: ")
location = input("Enter the preferred location for the date: ")
budget = int(input("Enter your budget for the date: "))

weathers = ["sunny", "rainy", "windy""]
print("Choose the weather forecast for the date: ", weathers)
weather = input("Enter the weather forecast for the date: ")

if budget >= 10000 and weather == "sunny":
    print("You can go all out and plan something exciting!")
elif budget >= 5000 and weather == "sunny":
    print("You can go for a picnic.")
elif budget >= 2000 and weather == "sunny":
    print("You can go for a walk.")
elif budget >= 10000 and weather == "rainy":
    print("You can go for a movie.")
elif budget >= 5000 and weather == "rainy":
    print("You can go for a lunch.")
elif budget >= 2000 and weather == "rainy":
    print("You can go for a coffee.")
elif budget >= 10000 and weather == "windy":
    print("You can go for a long drive.")
elif budget >= 5000 and weather == "windy":
    print("You can go for a dinner.")
elif budget >= 2000 and weather == "windy":
    print("You can go for a coffee.")
else:
    print("You can go for a walk.")