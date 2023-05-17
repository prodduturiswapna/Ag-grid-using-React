import React, { Component } from "react";
import "./App.css";

import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


import { NumberFormatter } from "./lib/NumberFormatter";
import { NumericCellEditor } from "./lib/NumericEditor";
import { RangeFilter } from "./lib/RangeFilter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
    };
  }

  componentDidMount() {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => this.setState({ rowData }));
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "400px", width: "1200px" }}

      >

        <AgGridReact
          defaultColDef={{ sortable: true, filter: true ,resizable:true, editable:true, animateRows:true}}
          pagination={true}
          
          frameworkComponents={{
            numberFormatter: NumberFormatter,
            numericCellEditor: NumericCellEditor,
            rangeFilter: RangeFilter,
          }}
          rowData={this.state.rowData}
        >
          <AgGridColumn field="make" width="400" headerHeight = "150"></AgGridColumn>
          <AgGridColumn field="model" width="400" ></AgGridColumn>
          <AgGridColumn field="price" width="400"  ></AgGridColumn>
          {/* // editable= {true}
                    // cellRenderer= 'numberFormatter'
                    // cellEditor= 'numericCellEditor'
                    // filter= 'rangeFilter' */}
        </AgGridReact>
      </div>
    );
  }
}

export default App;
