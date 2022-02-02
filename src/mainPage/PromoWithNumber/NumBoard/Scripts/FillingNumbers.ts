import { useEffect, useState } from "react";
interface IChangeNumbersProps {
    event: any,
    phoneInputValueState: string,
    setPhoneInputValueState: React.Dispatch<React.SetStateAction<string>>,
}

interface IFillingNumbersProps {
    value: string,
    phoneInputValueState: string,
    setPhoneInputValueState: React.Dispatch<React.SetStateAction<string>>,
}

interface IDeletingNumber {
    phoneInputValueState: string,
    setPhoneInputValueState: React.Dispatch<React.SetStateAction<string>>,
}
const fillingNumbers = <IFillingNumbersProps>(value: string, { phoneInputValueState, setPhoneInputValueState }) => {
    const phoneNumberInArray = phoneInputValueState.split(''); //перевод строки в массив
    phoneNumberInArray[phoneNumberInArray.indexOf('_')] = value; // находим первое пустое место ('нижнее подчеркивание') и заменяем цифрой
    setPhoneInputValueState(phoneNumberInArray.join(''));
}

const deletingNumbers = <IDeletingNumber>({ phoneInputValueState, setPhoneInputValueState }) => {
    const phoneNumberInArray = phoneInputValueState.split(''); //перевод строки в массив
    const firstDigit = phoneInputValueState.split('').reverse().join('').match(/\d/) // переворачиваем строку и находим первую цифру (последнюю относительно начальной)
    const reversedArray = phoneNumberInArray.reverse(); // работаем с перевернутым массивом
    reversedArray[phoneNumberInArray.indexOf(String(firstDigit))] = '_'; // заменяем первую цифру в перевернутом массиве на "нижнее подчеркивание"
    setPhoneInputValueState(phoneNumberInArray.reverse().join('')); // переворачиваем массив, возвращая в первоначальное положение и переводим в строку
}
const ChangeNumbers = <IChangeNumbersProps>(event, { phoneInputValueState, setPhoneInputValueState }) => {
    const theEvent = event;
    const key: string = theEvent.key || theEvent.which;
    const regexOfNumbers: RegExp = new RegExp('^[0-9]$');
    if (regexOfNumbers.test(key)) {
        // добавление новой цифры
        fillingNumbers(key, { phoneInputValueState, setPhoneInputValueState })
    }
    else if (key === 'Backspace') {
        // удаление последней цифры
        deletingNumbers({ phoneInputValueState, setPhoneInputValueState })
    }
};
export { ChangeNumbers, fillingNumbers, deletingNumbers};
