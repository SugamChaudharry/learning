my_gf_name = input("Enter the name of the person you want to go on a date with: ")
location = input("Enter the preferred location for the date: ")
budget = int(input("Enter your budget for the date: "))

weathers = ["sunny", "rainy", "windy"]
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