userName1 = input("Enter the name of the first person: ")
userAge1 = int(input("Enter the age of the first person: "))
userName2 = input("Enter the name of the second person: ")
userAge2 = int(input("Enter the age of the second person: "))

score = (len(userName1) + len(userName2)) * (userAge1 + userAge2)

if score < 500:
    print(" papa kehte hai bada naam karega, beta hamara aisa kaam karega ")
elif 500 <= score <= 200:
    print(" kuch kuch hota hai ")
else:
    print(" resta mubaraka ho 😍❤️‍🔥🥳🥳🥳🥳🥳🥳🥳🥳💇💇💇💇💇")