import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TreeviewComponent } from '../treeview/treeview.component';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-i18n";
import * as i2 from "../../models/treeview-config";
import * as i3 from "../treeview/treeview.component";
import * as i4 from "../../directives/dropdown.directive";
import * as i5 from "../../directives/dropdown-toggle.directive";
import * as i6 from "@angular/common";
import * as i7 from "../../directives/dropdown-menu.directive";
export class DropdownTreeviewComponent {
    constructor(i18n, defaultConfig) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.buttonClass = 'btn-outline-secondary';
        this.selectedChange = new EventEmitter(true);
        this.filterChange = new EventEmitter();
        this.config = this.defaultConfig;
    }
    onSelectedChange(values) {
        this.buttonLabel = this.i18n.getText(this.treeviewComponent.selection);
        this.selectedChange.emit(values);
    }
    onFilterChange(text) {
        this.filterChange.emit(text);
    }
}
DropdownTreeviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownTreeviewComponent, deps: [{ token: i1.TreeviewI18n }, { token: i2.TreeviewConfig }], target: i0.ɵɵFactoryTarget.Component });
DropdownTreeviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DropdownTreeviewComponent, selector: "ngx-dropdown-treeview", inputs: { buttonClass: "buttonClass", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, viewQueries: [{ propertyName: "treeviewComponent", first: true, predicate: TreeviewComponent, descendants: true }], ngImport: i0, template: "<div class=\"dropdown\" ngxDropdown>\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\n    {{buttonLabel}}\n  </button>\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\n    <div class=\"dropdown-container\">\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\n      </ngx-treeview>\n    </div>\n  </div>\n</div>\n", styles: [".dropdown{width:100%;display:inline-block}.dropdown button{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown button:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}\n"], components: [{ type: i3.TreeviewComponent, selector: "ngx-treeview", inputs: ["headerTemplate", "itemTemplate", "items", "config"], outputs: ["selectedChange", "filterChange"] }], directives: [{ type: i4.DropdownDirective, selector: "[ngxDropdown]", inputs: ["open"], outputs: ["openChange"], exportAs: ["ngxDropdown"] }, { type: i5.DropdownToggleDirective, selector: "[ngxDropdownToggle]" }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7.DropdownMenuDirective, selector: "[ngxDropdownMenu]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownTreeviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dropdown-treeview', template: "<div class=\"dropdown\" ngxDropdown>\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\n    {{buttonLabel}}\n  </button>\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\n    <div class=\"dropdown-container\">\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\n      </ngx-treeview>\n    </div>\n  </div>\n</div>\n", styles: [".dropdown{width:100%;display:inline-block}.dropdown button{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown button:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TreeviewI18n }, { type: i2.TreeviewConfig }]; }, propDecorators: { buttonClass: [{
                type: Input
            }], headerTemplate: [{
                type: Input
            }], itemTemplate: [{
                type: Input
            }], items: [{
                type: Input
            }], config: [{
                type: Input
            }], selectedChange: [{
                type: Output
            }], filterChange: [{
                type: Output
            }], treeviewComponent: [{
                type: ViewChild,
                args: [TreeviewComponent, { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi10cmVldmlldy9kcm9wZG93bi10cmVldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLXRyZWV2aWV3L2Ryb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBSS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7QUFTbkUsTUFBTSxPQUFPLHlCQUF5QjtJQVdwQyxZQUNTLElBQWtCLEVBQ2pCLGFBQTZCO1FBRDlCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBWjlCLGdCQUFXLEdBQUcsdUJBQXVCLENBQUM7UUFLckMsbUJBQWMsR0FBRyxJQUFJLFlBQVksQ0FBUSxJQUFJLENBQUMsQ0FBQztRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFRbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFhO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzt1SEF6QlUseUJBQXlCOzJHQUF6Qix5QkFBeUIsdVVBUXpCLGlCQUFpQixnRENyQjlCLDZrQkFZQTs0RkRDYSx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0UsdUJBQXVCO2dJQUt4QixXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDMEMsaUJBQWlCO3NCQUFqRSxTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVldmlld0kxOG4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaTE4bic7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbSc7XG5pbXBvcnQgeyBUcmVldmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1jb25maWcnO1xuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi90cmVldmlldy90cmVldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaGVhZGVyLXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0tdGVtcGxhdGUtY29udGV4dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wZG93bi10cmVldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi10cmVldmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25UcmVldmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzID0gJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSc7XG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dD47XG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0PjtcbiAgQElucHV0KCkgaXRlbXM6IFRyZWV2aWV3SXRlbVtdO1xuICBASW5wdXQoKSBjb25maWc6IFRyZWV2aWV3Q29uZmlnO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPih0cnVlKTtcbiAgQE91dHB1dCgpIGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAVmlld0NoaWxkKFRyZWV2aWV3Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgdHJlZXZpZXdDb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50O1xuICBidXR0b25MYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpMThuOiBUcmVldmlld0kxOG4sXG4gICAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBUcmVldmlld0NvbmZpZ1xuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuXG4gIG9uU2VsZWN0ZWRDaGFuZ2UodmFsdWVzOiBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLmkxOG4uZ2V0VGV4dCh0aGlzLnRyZWV2aWV3Q29tcG9uZW50LnNlbGVjdGlvbik7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHZhbHVlcyk7XG4gIH1cblxuICBvbkZpbHRlckNoYW5nZSh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHRleHQpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIiBuZ3hEcm9wZG93bj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzXCIgdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJidXR0b25cIiBuZ3hEcm9wZG93blRvZ2dsZT5cbiAgICB7e2J1dHRvbkxhYmVsfX1cbiAgPC9idXR0b24+XG4gIDxkaXYgbmd4RHJvcGRvd25NZW51IGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudVwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XG4gICAgICA8bmd4LXRyZWV2aWV3IFtjb25maWddPVwiY29uZmlnXCIgW2hlYWRlclRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCIgW2l0ZW1zXT1cIml0ZW1zXCIgW2l0ZW1UZW1wbGF0ZV09XCJpdGVtVGVtcGxhdGVcIlxuICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3RlZENoYW5nZSgkZXZlbnQpXCIgKGZpbHRlckNoYW5nZSk9XCJvbkZpbHRlckNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8L25neC10cmVldmlldz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==