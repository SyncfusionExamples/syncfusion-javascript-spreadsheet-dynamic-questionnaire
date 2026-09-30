export let data: any = {
    columns: [{ type: 'General' }, { type: 'General' }, { type: 'General' }, { type: 'General', width: 150 }, { type: 'General', width: 200 }, { type: 'General', width: 250 }],
    data:
        [{
            OrderID: 10248,
            CustomerID: 'VINET',
            EmployeeID: 5,
            ShipName: 'Vins et alcools Chevalier',
            ShipCity: 'Reims',
            ShipAddress: '59 rue de lAbbaye'
        },
        {
            OrderID: 10249,
            CustomerID: 'TOMSP',
            EmployeeID: 6,
            ShipName: 'Toms Spezialitäten',
            ShipCity: 'Münster',
            ShipAddress: 'Luisenstr. 48'
        },
        {
            OrderID: 10250,
            CustomerID: 'HANAR',
            EmployeeID: 4,
            ShipName: 'Hanari Carnes',
            ShipCity: 'Rio de Janeiro',
            ShipAddress: 'Rua do Paço, 67'
        },
        {
            OrderID: 10251,
            CustomerID: 'VICTE',
            EmployeeID: 3,
            ShipName: 'Victuailles en stock',
            ShipCity: 'Lyon',
            ShipAddress: '2, rue du Commerce'
        },
        {
            OrderID: 10252,
            CustomerID: 'SUPRD',
            EmployeeID: 4,
            ShipName: 'Suprêmes délices',
            ShipCity: 'Charleroi',
            ShipAddress: 'Boulevard Tirou, 255'
        }]
};

export let questionSet1 = {
    columns: [{ type: 'General', width: 90 },
    { type: 'CheckBox' },
    { type: 'CheckBox' },
    { type: 'CheckBox' },
    { type: 'CheckBox' },
    { type: 'General' },
    { type: 'General' }
    ],
    data: [
        {
            'Question': 'Question 1',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B2:E2,"TRUE")',
            'Answer': 'A'
        },
        {
            'Question': 'Question 2',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B3:E3,"TRUE")',
            'Answer': 'C'
        },
        {
            'Question': 'Question 3',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B4:E4,"TRUE")',
            'Answer': 'D'
        },
        {
            'Question': 'Question 4',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B5:E5,"TRUE")',
            'Answer': 'B'
        },
        {
            'Question': 'Question 5',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B6:E6,"TRUE")',
            'Answer': 'A'
        },
        {
            'Question': 'Question 6',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B7:E7,"TRUE")',
            'Answer': 'D'
        },
        {
            'Question': 'Question 7',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B8:E8,"TRUE")',
            'Answer': 'C'
        },
        {
            'Question': 'Question 8',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B9:E9,"TRUE")',
            'Answer': 'B'
        },
        {
            'Question': 'Question 9',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B10:E10,"TRUE")',
            'Answer': 'A'
        },
        {
            'Question': 'Question 10',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B11:E11,"TRUE")',
            'Answer': 'D'
        }
    ]
};
export let questionSet2 = {
    columns: [{ type: 'General' }, { type: 'General', width: 360 }, { type: 'General' }, { type: 'General' }],
    data: [
        {
            'S.no': 1,
            'Question': 'What is the shortcut key to insert a new worksheet in Excel?\n(a) Ctrl + V\n(b) Shift + F11\n(c) Ctrl + N\n(d) Ctrl + X',
            'Answer': 'B',
            'Remark': 'TRUE'
        },
        {
            'S.no': 2,
            'Question': 'What is the function to sum a range of cells in Excel?\n(a) ADD\n(b) SUMA\n(c) SUMS\n(d) SUM',
            'Answer': 'D',
            'Remark': 'FALSE'
        },
        {
            'S.no': 3,
            'Question': 'Which of the following is NOT a type of PivotTable?\n(a) Standard PivotTable\n(b) Pivot Chart\n(c) Timeline PivotTable\n(d) Slicer PivotTable',
            'Answer': 'A',
            'Remark': 'TRUE'
        },
        {
            'S.no': 4,
            'Question': 'Which of the following is NOT a way to filter data in Excel?\n(a) AutoFilter\n(b) Advanced Filter\n(c) Slicer\n(d) Data Validation',
            'Answer': 'D',
            'Remark': 'TRUE'
        },
        {
            'S.no': 5,
            'Question': 'Which of the following is NOT a type of data connection in Excel?\n(a) OLE DB Connection\n(b) ODBC Connection\n(c) HTTPS Connection\n(d) Text File Connection',
            'Answer': 'C',
            'Remark': 'FALSE'
        },
        {
            'S.no': 6,
            'Question': 'Which function returns the average of a range?\n(a) AVERAGE\n(b) SUM\n(c) MEDIAN\n(d) COUNT',
            'Answer': 'A',
            'Remark': 'TRUE'
        },
        {
            'S.no': 7,
            'Question': 'Which function returns the highest value in a range?\n(a) MIN\n(b) AVG\n(c) MAX\n(d) COUNT',
            'Answer': 'C',
            'Remark': 'TRUE'
        },
        {
            'S.no': 8,
            'Question': 'Which function returns the lowest value in a range?\n(a) MAX\n(b) MIN\n(c) COUNT\n(d) SUM',
            'Answer': 'B',
            'Remark': 'FALSE'
        },
        {
            'S.no': 9,
            'Question': 'Which Excel feature is used to summarize and analyze large amounts of data?\n(a) Conditional Formatting\n(b) Data Validation\n(c) Flash Fill\n(d) PivotTable',
            'Answer': 'D',
            'Remark': 'TRUE'
        },
        {
            'S.no': 10,
            'Question': 'Which chart type is best suited to show trends over time?\n(a) Line Chart\n(b) Pie Chart\n(c) Doughnut Chart\n(d) Radar Chart',
            'Answer': 'A',
            'Remark': 'TRUE'
        }
    ]
};
export let questionSet3 = {
    columns: [{ type: 'General' }, { type: 'General', width: 360 }, { type: 'General', width: 200 }, { type: 'General' }, { type: 'General', width: 100 }],
    data: [
        {
            'Data': 78,
            'Question': 'How many data observations are present (sample size)?',
            'Functions to learn': 'COUNT',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 69,
            'Question': 'What is the sum of the data?',
            'Functions to learn': 'SUM',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 65,
            'Question': 'What is the mean (average) of the data?',
            'Functions to learn': 'AVERAGE',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 99,
            'Question': 'What is the median of the data?',
            'Functions to learn': 'MEDIAN',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 72,
            'Question': 'What is the minimum value of the data?',
            'Functions to learn': 'MIN',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 53,
            'Question': 'What is the maximum value of the data?',
            'Functions to learn': 'MAX',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 92,
            'Question': 'What is the square root of the sample size?',
            'Functions to learn': 'SQRT',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 50,
            'Question': 'What is the value of the third observation when squared?',
            'Functions to learn': 'POWER',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 54,
            'Question': 'What is the sample variance?',
            'Functions to learn': 'VAR.S',
            'Answer': '',
            'Formula Used': '#N/A'
        },
        {
            'Data': 100,
            'Question': 'What is the sample standard deviation?',
            'Functions to learn': 'STDEV.S',
            'Answer': '',
            'Formula Used': '#N/A'
        }
    ]
};