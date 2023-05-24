

def binary_search(arr,finding,high,low):
    mid = (high+low)//2
    if arr[mid]==finding:
        print("Len is", mid,"result is ",arr[mid])
    elif finding > arr[mid]:
        binary_search(arr,finding,high,mid+1)
    elif finding < arr[mid]:
        binary_search(arr,finding,mid-1,low)

arr = [2,4,6,89,234,566,788]
finding = 788

binary_search(arr,finding, len(arr)-1,0)
