# -> Write a program to find the lowest number out of two numbers (take user input).

num1 = int(input("enter a number : "));
num2 = int(input("enter a number : "));

if num1 < num2 : print(num1,"is lowest");
elif num2 < num1 : print(num2,"is lowest");
else : print("both are equal");