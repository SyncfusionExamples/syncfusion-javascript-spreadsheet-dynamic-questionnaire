export let data: any = {
    columns: [],
    data: []
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
            'Answer': '=IF(B2=TRUE,"A",IF(C2=TRUE,"B",IF(D2=TRUE,"C",IF(E2=TRUE,"D",IF(E2=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 2',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B3:E3,"TRUE")',
            'Answer': '=IF(B3=TRUE,"A",IF(C3=TRUE,"B",IF(D3=TRUE,"C",IF(E3=TRUE,"D",IF(E3=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 3',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B4:E4,"TRUE")',
            'Answer': '=IF(B4=TRUE,"A",IF(C4=TRUE,"B",IF(D4=TRUE,"C",IF(E4=TRUE,"D",IF(E4=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 4',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B5:E5,"TRUE")',
            'Answer': '=IF(B5=TRUE,"A",IF(C5=TRUE,"B",IF(D5=TRUE,"C",IF(E5=TRUE,"D",IF(E5=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 5',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B6:E6,"TRUE")',
            'Answer': '=IF(B6=TRUE,"A",IF(C6=TRUE,"B",IF(D6=TRUE,"C",IF(E6=TRUE,"D",IF(E6=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 6',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B7:E7,"TRUE")',
            'Answer': '=IF(B7=TRUE,"A",IF(C7=TRUE,"B",IF(D7=TRUE,"C",IF(E7=TRUE,"D",IF(E7=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 7',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B8:E8,"TRUE")',
            'Answer': '=IF(B8=TRUE,"A",IF(C8=TRUE,"B",IF(D8=TRUE,"C",IF(E8=TRUE,"D",IF(E8=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 8',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B9:E9,"TRUE")',
            'Answer': '=IF(B9=TRUE,"A",IF(C9=TRUE,"B",IF(D9=TRUE,"C",IF(E9=TRUE,"D",IF(E9=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 9',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B10:E10,"TRUE")',
            'Answer': '=IF(B10=TRUE,"A",IF(C10=TRUE,"B",IF(D10=TRUE,"C",IF(E10=TRUE,"D",IF(E10=TRUE,"E","")))))'
        },
        {
            'Question': 'Question 10',
            'A': 'FALSE',
            'B': 'FALSE',
            'C': 'FALSE',
            'D': 'FALSE',
            'Checkbox Count': '=COUNTIF(B11:E11,"TRUE")',
            'Answer': '=IF(B11=TRUE,"A",IF(C11=TRUE,"B",IF(D11=TRUE,"C",IF(E11=TRUE,"D",IF(E11=TRUE,"E","")))))'
        }
    ]
};
export let questionSet2 = {
    columns: [{ type: 'General' }, { type: 'General', width: 360 }, { type: 'General' }, { type: 'General' }],
    data: [
        {
            'S.no': 1,
            'Question': 'What is the shortcut key to insert a new worksheet in Excel?\n(a) Ctrl + V\n(b) Shift + F11\n(c) Ctrl + N\n(d) Ctrl + X',
            'Answer': 'A',
            'correctAnswer': 'B',
            'Remark': ''
        },
        {
            'S.no': 2,
            'Question': 'What is the function to sum a range of cells in Excel?\n(a) ADD\n(b) SUMA\n(c) SUMS\n(d) SUM',
            'Answer': 'D',
            'correctAnswer': 'D',
            'Remark': ''
        },
        {
            'S.no': 3,
            'Question': 'Which of the following is NOT a type of PivotTable?\n(a) Standard PivotTable\n(b) Pivot Chart\n(c) Timeline PivotTable\n(d) Slicer PivotTable',
            'Answer': 'C',
            'correctAnswer': 'A',
            'Remark': ''
        },
        {
            'S.no': 4,
            'Question': 'Which of the following is NOT a way to filter data in Excel?\n(a) AutoFilter\n(b) Advanced Filter\n(c) Slicer\n(d) Data Validation',
            'Answer': 'D',
            'correctAnswer': 'D',
            'Remark': ''
        },
        {
            'S.no': 5,
            'Question': 'Which of the following is NOT a type of data connection in Excel?\n(a) OLE DB Connection\n(b) ODBC Connection\n(c) HTTPS Connection\n(d) Text File Connection',
            'Answer': 'B',
            'correctAnswer': 'C',
            'Remark': ''
        },
        {
            'S.no': 6,
            'Question': 'Which function returns the average of a range?\n(a) AVERAGE\n(b) SUM\n(c) MEDIAN\n(d) COUNT',
            'Answer': 'A',
            'correctAnswer': 'A',
            'Remark': ''
        },
        {
            'S.no': 7,
            'Question': 'Which function returns the highest value in a range?\n(a) MIN\n(b) AVG\n(c) MAX\n(d) COUNT',
            'Answer': 'D',
            'correctAnswer': 'C',
            'Remark': ''
        },
        {
            'S.no': 8,
            'Question': 'Which function returns the lowest value in a range?\n(a) MAX\n(b) MIN\n(c) COUNT\n(d) SUM',
            'Answer': 'B',
            'correctAnswer': 'B',
            'Remark': ''
        },
        {
            'S.no': 9,
            'Question': 'Which Excel feature is used to summarize and analyze large amounts of data?\n(a) Conditional Formatting\n(b) Data Validation\n(c) Flash Fill\n(d) PivotTable',
            'Answer': 'A',
            'correctAnswer': 'D',
            'Remark': ''
        },
        {
            'S.no': 10,
            'Question': 'Which chart type is best suited to show trends over time?\n(a) Line Chart\n(b) Pie Chart\n(c) Doughnut Chart\n(d) Radar Chart',
            'Answer': 'A',
            'correctAnswer': 'A',
            'Remark': ''
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