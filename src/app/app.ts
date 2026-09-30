import { Spreadsheet, DataSourceChangedEventArgs, getCellAddress, setCell, setColumn } from '@syncfusion/ej2-spreadsheet';
import { data, questionSet1, questionSet2, questionSet3 } from './datasource.ts';
import { CheckBox } from '@syncfusion/ej2-buttons';

let spreadsheet: Spreadsheet = new Spreadsheet({
    height: '550px',
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
let fieldsOrder = [];

document.getElementById('changeDataDropdown').addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    spreadsheet.refresh(true);

    switch (selectedValue) {
        case 'questionSet1':
            currentData = questionSet1;
            fieldsOrder = [];
            break;
        case 'questionSet2':
            currentData = questionSet2;
            fieldsOrder = [];
            break;
        case 'questionSet3':
            currentData = questionSet3;
            fieldsOrder = [];
            break;
        case 'default':
            currentData = data;
            break;
    }
    spreadsheet.updateRange({ startCell: 'A1', dataSource: currentData.data }, 0);
    setTimeout(() => {
        spreadsheet.resize();
    });

});