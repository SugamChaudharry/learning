# -> Write a program to check whether a number entered is three digit number or not.

num = int(input("Enter a number: "))

if 100 <= num <= 999:
    print("True")
else:
    print("False")
