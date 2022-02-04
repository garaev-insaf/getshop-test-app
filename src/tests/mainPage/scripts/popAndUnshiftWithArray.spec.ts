import { popAndUnshiftActionWithArray } from './../../../mainPage/scripts/scripts';

describe('Дополнение массива конечными значениями в начале и начальными в конце', () => {
    it('На вход поступает массив строк: ', () => {
        // входные значения
        const inputValue: string[] = ['1', '2', '3', '4', '5'];
        const changedArray = inputValue;
        const lastItem = changedArray[changedArray.length - 1];
        changedArray[changedArray.length] = changedArray[0]
        changedArray.unshift(lastItem);
        expect(popAndUnshiftActionWithArray(inputValue)).toBe(changedArray);
    })
})