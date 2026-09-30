import { Spreadsheet, DataSourceChangedEventArgs, getCellAddress, setCell, setColumn } from '@syncfusion/ej2-spreadsheet';
import { data, questionSet1, questionSet2, questionSet3 } from './datasource.ts';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

// initialize DropDownList component
   const dropDownListObject: DropDownList = new DropDownList({
        placeholder:"Select an Interview details",
        change: questionSetChangeHandler,
        width: "250px"
    });

// render initialized DropDownList
dropDownListObject.appendTo('#changeDataDropdown');    

let spreadsheet: Spreadsheet = new Spreadsheet({
    beforeCellRender: (args) => {
        const column = currentData.columns?.[args.colIndex];
        if (
            args.cell && args.rowIndex >= 1 && args.rowIndex <= currentData.data.length &&
            column
        ) {
            const activeSheet = spreadsheet.getActiveSheet();
            if (column.width) {
                setColumn(activeSheet, args.colIndex, { width: column.width });
            }
            if (column.type === 'CheckBox') {
                // updating the model
                setCell(args.rowIndex, args.colIndex, activeSheet, { style: { textAlign: 'center' }, template: "CheckBox" } as any);
                args.cell.template = "CheckBox";
                const style = args.cell.style || {};
                style.textAlign = "center";
                args.cell.style = style;
                // updating the UI
                const address = args.address;
                const checkboxElement: HTMLInputElement = document.createElement('input');
                args.element.innerHTML = "";
                args.element.appendChild(checkboxElement);
                new CheckBox({
                    checked: String(args.cell.value).toUpperCase() === 'TRUE',
                    change: (e): void => {
                        spreadsheet.updateCell({ value: e.checked ? 'TRUE' : 'FALSE' }, address);
                    }
                }, checkboxElement);
            }
        }
    }
});

spreadsheet.appendTo('#spreadsheet');
let currentData = data;
let columnOrder: any;

function questionSetChangeHandler(args: any){
    const selectedValue = args.value;
    spreadsheet.refresh(true);

    switch (selectedValue) {
        case 'questionSet1':
            currentData = questionSet1;
            columnOrder = ['Question', 'A', 'B', 'C', 'D', 'Selected Option Count', 'Answer'];
            break;
        case 'questionSet2':
            currentData = questionSet2;
            columnOrder = ['S.no', 'Question', 'Answer', 'Remark'];
            break;
        case 'questionSet3':
            currentData = questionSet3;
            columnOrder = ['Data', 'Question', 'Functions to learn', 'Formula Used'];
            break;
        case 'default':
            currentData = data;
            break;
    }
    spreadsheet.updateRange({ startCell: 'A1', fieldsOrder: columnOrder, dataSource: currentData.data }, 0);
    if (currentData === questionSet2) {
        currentData.data.forEach((item: any, index: number) => {
            currentData.data.forEach((item: any, index: number) => {
                setCell(index + 1, 3, spreadsheet.getActiveSheet(), {
                    formula: `=IF(C${index + 2}="${item.correctAnswer}",TRUE,FALSE)`
                });
            });
        });
    }
    setTimeout(() => {
        spreadsheet.resize();
    });
};