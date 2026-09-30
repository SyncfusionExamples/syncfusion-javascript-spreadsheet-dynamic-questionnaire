import { Spreadsheet, DataSourceChangedEventArgs, getCellAddress, setCell, setColumn, getRangeAddress, getColumnHeaderText } from '@syncfusion/ej2-spreadsheet';
import { data, questionSet1, questionSet2, questionSet3 } from './datasource.ts';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


// Initialize the dropdown for switching datasets
const dropDownListObject: DropDownList = new DropDownList({
    placeholder: "Select an Interview details",
    change: questionSetChangeHandler,
    width: "250px"
});

// Render the dropdown component
dropDownListObject.appendTo('#changeDataDropdown');

const spreadsheet: Spreadsheet = new Spreadsheet({
    beforeCellRender: (args) => {
        // Get column configuration for the current cell
        const column = currentData.columns?.[args.colIndex];
        // Apply column settings to data rows
        if (
            args.cell && args.rowIndex >= 1 &&
            args.rowIndex <= currentData.data.length &&
            column
        ) {
            const activeSheet = spreadsheet.getActiveSheet();
            // Set column width dynamically
            if (column.width) {
                setColumn(activeSheet, args.colIndex, { width: column.width });
            }
            // Render checkbox columns
            if (column.type === 'CheckBox') {
                // Update spreadsheet model with checkbox template
                setCell(args.rowIndex, args.colIndex, activeSheet, {
                    style: { textAlign: 'center' },
                    template: "CheckBox"
                } as any);
                args.cell.template = "CheckBox";
                // Center align checkbox cells
                const style = args.cell.style || {};
                style.textAlign = "center";
                args.cell.style = style;
                // Create checkbox UI element
                const address = args.address;
                const checkboxElement: HTMLInputElement = document.createElement('input');
                args.element.innerHTML = "";
                args.element.appendChild(checkboxElement);
                // Sync checkbox state with cell value
                new CheckBox({
                    checked: String(args.cell.value).toUpperCase() === 'TRUE',
                    change: (e): void => {
                        spreadsheet.updateCell(
                            { value: e.checked ? 'TRUE' : 'FALSE' },
                            address
                        );
                    }
                }, checkboxElement);
            }
        }
    }
});

spreadsheet.appendTo('#spreadsheet');

let currentData = data;
let columnOrder: any;

// Handles dataset selection from dropdown
function questionSetChangeHandler(args: any) {
    const selectedValue = args.value;
    // Refresh spreadsheet before loading new data
    spreadsheet.refresh(true);
    // Update datasource and column order
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
            columnOrder = ['Data', 'Question', 'Functions to learn', 'Formula Description'];
            break;
        case 'default':
            currentData = data;
            break;
    }
    // Load selected dataset into the spreadsheet
    spreadsheet.updateRange({
        startCell: 'A1',
        fieldsOrder: columnOrder,
        dataSource: currentData.data
    }, 0);

    // Apply header styling
    columnOrder.forEach((col: any, index: number) => {
        setCell(0, index, spreadsheet.getActiveSheet(), {
            style: {
                textAlign: 'center',
                fontWeight: 'bold'
            }
        });
    });

    // Apply conditional formatting for the Remark column
    if (currentData === questionSet2) {
        spreadsheet.setSheetPropertyOnMute(
            spreadsheet.getActiveSheet(),
            'conditionalFormats',
            [
                {
                    cFColor: 'RedFT',
                    range: 'D1:D100',
                    type: 'EqualTo',
                    value: 'FALSE'
                },
                {
                    cFColor: 'GreenFT',
                    range: 'D1:D100',
                    type: 'EqualTo',
                    value: 'TRUE'
                }
            ]
        );
    }
    // Resize spreadsheet after data update
    setTimeout(() => {
        spreadsheet.resize();
    });
}