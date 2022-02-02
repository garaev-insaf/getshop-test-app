import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/NumBoard.scss";
import "../../../../public/fonts.css";
import { deletingNumbers, fillingNumbers } from "./Scripts/FillingNumbers";

interface IProps {
    phoneInputValueState: string,
    setPhoneInputValueState: React.Dispatch<React.SetStateAction<string>>,
}

enum NumDirection {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
}
const NumBoard: React.FC<IProps> = ({ phoneInputValueState, setPhoneInputValueState }) => {
    const [actualKeyState, setActualKeyState] = useState('');
    useEffect(() => {
        let start: HTMLTableCellElement = document.querySelectorAll<HTMLTableCellElement>('#start')[0];
        start.focus();

        // действия с выделенным блоком
        const actionsWithCell = (sibling: HTMLTableCellElement) => {
            if (sibling != null) {
                start.focus();
                start.style.backgroundColor = '';
                start.style.color = '';
                start.removeAttribute('id'); // удаляем айди с предыдущего элемента
                sibling.focus();
                sibling.style.backgroundColor = 'black';
                sibling.style.color = 'white';
                sibling.id = 'start'; // добавляем айди к текущему элементу
                start = sibling;
            }
        }

        const checkKey = (e: any) => {
            e = e || window.event;
            console.log(e.key);
            if (Number(e.key) < 10 && Number(e.key) >= 0) {
                // перехват нажатия на цифры, чтобы заполняли инпут
                fillingNumbers(e.key, { phoneInputValueState, setPhoneInputValueState })
            }
            if (e.keyCode == '8') {
                deletingNumbers({ phoneInputValueState, setPhoneInputValueState })
            }
            if (e.keyCode == '13') {
                if (Number(start.innerHTML) < 10 && Number(start.innerHTML) >= 0) {
                    // перехват нажатия на цифры, чтобы заполняли инпут
                    fillingNumbers(start.innerHTML, { phoneInputValueState, setPhoneInputValueState })
                }
                else {
                    deletingNumbers({ phoneInputValueState, setPhoneInputValueState })
                }
                actionsWithCell(start);
            }
            // для стрелок
            if (e.keyCode == '38') {
                // up arrow
                const idx = start.cellIndex;
                const nextrow = (start.parentElement.previousElementSibling as HTMLTableRowElement); // без явного предопределения присваивал element, с которым не работал .cells
                if (nextrow != null && nextrow.rowIndex === 2 && idx === 0) {
                    // адекватный переход с 'стереть' на верх
                    const sibling = nextrow.cells[1]; // запоминает откуда переход, чтобы вернуться в то же место
                    actionsWithCell(sibling);
                }
                else if (nextrow != null && nextrow.rowIndex === 2 && idx === 1) {
                    // адекватный переход с '0' на верх
                    const sibling = nextrow.cells[2];
                    actionsWithCell(sibling);
                }
                else if (nextrow != null) {
                    const sibling = nextrow.cells[idx];
                    actionsWithCell(sibling);
                }
            } else if (e.keyCode == '40') {
                // down arrow
                const idx = start.cellIndex;
                const nextrow = start.parentElement.nextElementSibling as HTMLTableRowElement;
                if (nextrow != null && nextrow.rowIndex === 3 && (idx === 0 || idx === 1)) {
                    // переход к 'стереть'
                    const sibling = nextrow.cells[0];
                    actionsWithCell(sibling);
                }
                else if (nextrow != null && nextrow.rowIndex === 3 && (idx === 2)) {
                    // переход к '0'
                    const sibling = nextrow.cells[1];
                    actionsWithCell(sibling);
                }
                else if (nextrow != null) {
                    const sibling = nextrow.cells[idx];
                    actionsWithCell(sibling);
                }
            } else if (e.keyCode == '37') {
                // left arrow
                const sibling: HTMLTableCellElement = start.previousElementSibling as HTMLTableCellElement;
                actionsWithCell(sibling);
            } else if (e.keyCode == '39') {
                // right arrow
                const sibling: HTMLTableCellElement = start.nextElementSibling as HTMLTableCellElement;
                actionsWithCell(sibling);
            }
        }

        // keydown event
        document.onkeydown = (e) => checkKey(e);

    }, [phoneInputValueState]); // обновление в зависимости от состояния, чтобы каждый раз работал с новыми данными

    return (
        <div className="num-board">
            <table className="num-board-table">
                <tbody className="num-board-table-body">
                    <tr>
                        <td id="start">1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Стереть</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export { NumBoard };