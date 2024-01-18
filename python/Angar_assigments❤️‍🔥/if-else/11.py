# -> Write a program to display the spell of a digit accepted from user (like user input 0 and display ZERO and so on... till 9)

spellings = ["zero","one","two","three","four","five","six","seven","eight","nine"]

num = int(input("enter a num"))

if num >= 0 and num <= 9 : print(spellings[num])
else : print("invalid input")