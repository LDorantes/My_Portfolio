print("The World!")

#---------------------------------------------------------------
# if-else statements
import math
import os
import random
import re
import sys

n = int(input().strip())

# Las condiciones van aquí
if n % 2 != 0:
    print("Weird")
elif n % 2 == 0 and 2 <= n <= 5:
    print("Not Weird")
elif n % 2 == 0 and 6 <= n <= 20:
    print("Weird")
elif n % 2 == 0 and n > 20:
    print("Not Weird")
# ---------------------------------------
# functions

def is_leap(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)


year = int(input())
print(is_leap(year))