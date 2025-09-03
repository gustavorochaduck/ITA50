import math
x = 0
Imput_money = float(5)
list_size = 7
penny_list = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1.0, 2]

for penny in penny_list:
    times = int(Imput_money // penny)
    print(f'The penny {penny} can be pay {times} ')
    x += penny

