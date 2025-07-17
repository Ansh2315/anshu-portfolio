import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  constructor() { }

  public gridOption = {
    rowData: [
      { make: "Tesla", model: "Model Y", price: 64950 },
      { make: "Ford", model: "F-Series", price: 33850 },
      { make: "Toyota", model: "Corolla", price: 29600 },
      { make: "Hyundai", model: "Creta", price: 1500000 },
      { make: "BMW", model: "X5", price: 75000 },
      { make: "Audi", model: "Q7", price: 68000 },
      { make: "Mercedes", model: "EQC", price: 99000 },
      { make: "Kia", model: "Seltos", price: 17000 },
      { make: "Nissan", model: "Leaf", price: 31000 },
      { make: "Honda", model: "Civic", price: 24000 },
      { make: "Chevrolet", model: "Bolt", price: 36000 },
      { make: "Volvo", model: "XC90", price: 71000 },
      { make: "MG", model: "ZS EV", price: 29000 },
      { make: "Tata", model: "Nexon EV", price: 20000 },
      { make: "Mahindra", model: "XUV700", price: 25000 },
      { make: "Porsche", model: "Taycan", price: 120000 },
      { make: "Jaguar", model: "I-PACE", price: 85000 },
      { make: "Skoda", model: "Kushaq", price: 23000 },
      { make: "Volkswagen", model: "ID.4", price: 40000 },
      { make: "Renault", model: "Kiger", price: 15000 }
    ],

    columnDefs: [
      { field: "make", headerName: "Make" },
      { field: "model", headerName: "Model" },
      { field: "price", headerName: "Price" }
    ],
    defaultColDef: {
      flex: 1,
      resizable: true
    },
    statusBar: {
      statusPanels: [
        {
          statusPanel: 'agTotalRowCountComponent',
          align: 'left'
        }
      ]
    }

  }

  ngOnInit(): void {
  }

}
