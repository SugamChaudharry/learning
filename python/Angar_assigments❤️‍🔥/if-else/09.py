# Write a program to accept a number from 1 to 7 and display the name of the day like 1 for Sunday , 2 for Monday and so on.

weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

num = int(input("enter a num : "))

if num >= 1 and num <= 7 : print(weeks[num-1])
else : print("invalid week number")