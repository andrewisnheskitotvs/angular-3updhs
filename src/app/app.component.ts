import { Component } from '@angular/core';
import { sampleProducts } from './products';

@Component({
  selector: 'my-app',
  template: `
      <kendo-grid [data]="gridData">
      <kendo-grid-column field="UnitPrice" title="Name"> </kendo-grid-column>
  
      <kendo-grid-column-group title="Q1">
        <kendo-grid-column-group title="10000$">
          <kendo-grid-column field="ProductName" title="P11">
          </kendo-grid-column>
          <kendo-grid-column field="ProductName" title="P12">
          </kendo-grid-column>
        </kendo-grid-column-group>
      </kendo-grid-column-group>
  
      <kendo-grid-column-group title="Q2">
        <kendo-grid-column-group title="20000$">
          <kendo-grid-column field="ProductName" title="P21">
          </kendo-grid-column>
          <kendo-grid-column field="ProductName" title="P22">
          </kendo-grid-column>
        </kendo-grid-column-group>
      </kendo-grid-column-group>
  
      <kendo-grid-column-group title="Q3">
        <kendo-grid-column-group title="30000$">
          <kendo-grid-column field="ProductName" title="P31">
          </kendo-grid-column>
          <kendo-grid-column field="ProductName" title="P32">
          </kendo-grid-column>
        </kendo-grid-column-group>
      </kendo-grid-column-group>
  
      <kendo-grid-column-group title="Q4">
        <kendo-grid-column-group title="40000$">
          <kendo-grid-column field="ProductName" title="P41">
          </kendo-grid-column>
          <kendo-grid-column field="ProductName" title="P42">
          </kendo-grid-column>
        </kendo-grid-column-group>
      </kendo-grid-column-group>
    </kendo-grid>
      `,
})
export class AppComponent {
  public gridData: unknown[] = sampleProducts;
}
