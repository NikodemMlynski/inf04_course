def count_control_number(pesel):
    pesel_arr = [int(char) for char in pesel]
    S = sum_multiplies(pesel_arr)
    M = S % 10 
    R = 0 if M == 0 else 10 - M 
    return R

def check_pesel(pesel):
    if count_control_number(pesel) == int(pesel[10]):
        print("Poprawny pesel")
    else:
        print("Niepoprawny pesel")

def check_sex(pesel):
    if  count_control_number(pesel) % 2 == 0:
        print("Kobieta")
    else:
        print("Mężczyzna")

def sum_multiplies(pesel_arr):
    S = 0
    weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
    for i in range(len(pesel_arr)-1):
        S += (weights[i] * pesel_arr[i])
    return S

pesel = input("Wpisz pesel:\n")
check_sex(pesel)
check_pesel(pesel)