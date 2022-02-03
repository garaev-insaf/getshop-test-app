export const popAndUnshiftActionWithArray = (arr: string[]) => {
    const lastItem = arr[arr.length - 1];
    arr[arr.length] = arr[0]
    arr.unshift(lastItem);
    return arr;
}