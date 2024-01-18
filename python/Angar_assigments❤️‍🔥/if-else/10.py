# -> Write a program to accept a number from 1 to 12 and display name of the month and days in that month like 1 for January and number of days 31 and so on

months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

num = int(input("enter a num : "))

if num >= 1 and num <= 12 : print(months[num-1])
else : print("invalid month number")