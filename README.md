# Syncfusion JavaScript Spreadsheet Dynamic Questionnaire

A TypeScript-based application that demonstrates dynamic questionnaire management using the Syncfusion JavaScript Spreadsheet component. This sample showcases how to build interactive interview-style forms with real-time data validation, dynamic column rendering, and conditional formatting.

## Overview

This project illustrates the capabilities of the **Syncfusion JavaScript Spreadsheet** component as an alternative UI framework for displaying and managing complex, structured data. Rather than using traditional form builders, it leverages the spreadsheet's grid-based layout to create an intuitive questionnaire interface with support for multiple data sets, dynamic templates, and formula-based calculations.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── app.ts          # Main application logic and spreadsheet initialization
│   │   └── datasource.ts   # Question datasets and column configurations
│   ├── resources/          # Static assets (if any)
│   ├── styles/
│   │   └── styles.css      # Custom styling for the questionnaire
│   └── index.html          # HTML entry point
├── package.json            # Project dependencies and build scripts
├── tsconfig.json           # TypeScript configuration
└── webpack.config.js       # Webpack bundling configuration
```

## Key Features

### 1. **Dynamic Dataset Switching**
- Dropdown selector to switch between multiple questionnaire formats
- Supported datasets:
  - **Default**: Empty baseline configuration
  - **Question Set 1**: Multiple-choice questions with checkbox options and auto-calculated answers
  - **Question Set 2**: Yes/No questions with remark validation and conditional formatting
  - **Question Set 3**: Formula-based questions with learning objectives

### 2. **Interactive Checkbox Cells**
- Custom checkbox template rendering in the spreadsheet grid
- Real-time synchronization between UI checkboxes and cell values
- Dynamic column type detection and rendering

### 3. **Formula-Based Calculations**
- Automatic option counting using `COUNTIF()` formulas
- Dynamic answer calculation using nested `IF()` statements
- Real-time formula evaluation as user selections change

### 4. **Conditional Formatting**
- Apply styling rules based on cell values (e.g., TRUE/FALSE)
- Visual feedback for question validation (green for correct, red for incorrect)
- Supports color-based formatting (`RedFT`, `GreenFT`)

### 5. **Dynamic Column Configuration**
- Custom column widths per question type
- Template-based cell rendering for checkboxes
- Centered alignment for interactive elements
- Custom header styling (bold, center-aligned)

## Use Cases

This sample is ideal for:

- **Interview & Assessment Platforms**: Create interactive questionnaires with instant feedback
- **Survey Applications**: Manage multiple-choice surveys with calculated scoring
- **Form-Heavy UIs**: Replace traditional form builders with a spreadsheet-based interface
- **Data Collection Tools**: Build sophisticated data entry systems with validation
- **Educational Tools**: Create interactive quizzes with real-time answer evaluation
- **HR & Recruitment**: Interactive interview question sets with scoring mechanisms

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- TypeScript knowledge (basic)

### Install Dependencies

```bash
npm install
```

### Development Server

Start the webpack development server:

```bash
npm start
```

The application will be available at `http://localhost:8080/`

### Production Build

Create an optimized production bundle:

```bash
npm build
```

## How It Works

### 1. Initialize the Spreadsheet
The app initializes a Syncfusion Spreadsheet component with custom event handlers:

```typescript
const spreadsheet = new Spreadsheet({
    beforeCellRender: (args) => {
        // Custom cell rendering logic
    }
});
```

### 2. Dynamic Rendering
Before each cell renders:
- Detects the column type from the dataset configuration
- Applies custom width, alignment, and templates
- Renders checkboxes as interactive UI elements for appropriate columns

### 3. Dataset Switching
When a user selects a new dataset from the dropdown:
- The spreadsheet is refreshed
- Column headers and data are updated using `updateRange()`
- Conditional formatting rules are applied based on the dataset type

### 4. Interactive Behavior
- Users click checkboxes to select options
- Formulas automatically calculate selected option counts and answers
- Conditional formatting provides visual feedback on responses

## Technologies Used

- **Syncfusion EJ2 Spreadsheet**: Grid-based interactive component
- **TypeScript**: Type-safe JavaScript development
- **Webpack**: Module bundler and build tool
- **Tailwind 3**: CSS theme
- **Syncfusion EJ2 Buttons**: Checkbox component
- **Syncfusion EJ2 Dropdowns**: Dataset selector dropdown

## Code Highlights

### Dynamic Cell Rendering
```typescript
beforeCellRender: (args) => {
    const column = currentData.columns?.[args.colIndex];
    if (column?.type === 'CheckBox') {
        // Create and render checkbox element
        setCell(args.rowIndex, args.colIndex, activeSheet, {
            style: { textAlign: 'center' },
            template: "CheckBox"
        });
    }
}
```

### Formula Integration
Questions automatically calculate answers:
```typescript
'Selected Option Count': '=COUNTIF(B2:E2,"TRUE")',
'Answer': '=IF(B2=TRUE,"A",IF(C2=TRUE,"B",...))' 
```

### Conditional Formatting
Visual feedback based on answers:
```typescript
conditionalFormats: [
    {
        cFColor: 'RedFT',
        range: 'D1:D100',
        type: 'EqualTo',
        value: 'FALSE'
    }
]
```

## Customization Guide

### Adding New Question Sets
1. Create a new object in `datasource.ts`:
```typescript
export let questionSet4 = {
    columns: [{ type: 'General', width: 100 }, ...],
    data: [{ Question: 'Q1', ... }, ...]
};
```

2. Add a case in the `questionSetChangeHandler()` function:
```typescript
case 'questionSet4':
    currentData = questionSet4;
    columnOrder = ['Question', 'Option1', 'Option2', ...];
    break;
```

3. Update the HTML dropdown with the new option

### Styling
Customize appearance by modifying `src/styles/styles.css` and using Syncfusion theme classes

### Column Types
Extend the `beforeCellRender` handler to support additional column types (e.g., dropdowns, date pickers)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This sample is provided under the Syncfusion license. See the `LICENSE` file for details.

## Resources

- [Syncfusion JavaScript Spreadsheet Feature Tour](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor)
- [Syncfusion JavaScript Spreadsheet Sample Browser](https://document.syncfusion.com/demos/spreadsheet-editor/javascript/#/tailwind3/spreadsheet/default.html)
- [Syncfusion JavaScript Spreadsheet Documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/overview)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Support

For issues, questions, or feedback, please refer to the Syncfusion support channels or visit the [Syncfusion Community Forums](https://www.syncfusion.com/forums).
