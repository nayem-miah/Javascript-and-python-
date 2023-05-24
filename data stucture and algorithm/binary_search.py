

def binary_search(arr,finding,high,low):
    mid = (high+low)//2
    if arr[mid]==finding:
        print("Len is", mid,"result is ",arr[mid])
    elif finding > arr[mid]:
        binary_search(arr,finding,high,mid)
    elif finding < arr[mid]:
        binary_search(arr,finding,mid,low)

arr = [2,4,6,89,234,566,788,6666]
finding = 566

binary_search(arr,finding, len(arr),0)
