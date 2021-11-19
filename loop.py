result = 0

userInputNumbers = input("Please, input numbers using comma (ex. 1,3,5,7): ")

numbersToAdd = userInputNumbers.split(",")

for num in numbersToAdd:
    result += int(num)

print(result)