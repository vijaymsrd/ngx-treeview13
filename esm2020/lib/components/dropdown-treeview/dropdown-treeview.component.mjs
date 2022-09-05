import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TreeviewComponent } from '../treeview/treeview.component';
import { DropdownDirective } from '../../directives/dropdown.directive';
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
DropdownTreeviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DropdownTreeviewComponent, selector: "ngx-dropdown-treeview", inputs: { buttonClass: "buttonClass", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items", config: "config" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, viewQueries: [{ propertyName: "treeviewComponent", first: true, predicate: TreeviewComponent, descendants: true }, { propertyName: "dropdownDirective", first: true, predicate: DropdownDirective, descendants: true }], ngImport: i0, template: "<div class=\"dropdown\" ngxDropdown>\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\n    {{buttonLabel}}\n  </button>\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\n    <div class=\"dropdown-container\">\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\n      </ngx-treeview>\n    </div>\n  </div>\n</div>\n", styles: [".dropdown{width:100%;display:inline-block}.dropdown button{width:100%;margin-right:.9rem;text-align:left;overflow:hidden;padding-right:30px;text-overflow:ellipsis}.dropdown button:after{position:absolute;right:.6rem;margin-top:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}\n"], components: [{ type: i3.TreeviewComponent, selector: "ngx-treeview", inputs: ["headerTemplate", "itemTemplate", "items", "config"], outputs: ["selectedChange", "filterChange"] }], directives: [{ type: i4.DropdownDirective, selector: "[ngxDropdown]", inputs: ["open"], outputs: ["openChange"], exportAs: ["ngxDropdown"] }, { type: i5.DropdownToggleDirective, selector: "[ngxDropdownToggle]" }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i7.DropdownMenuDirective, selector: "[ngxDropdownMenu]" }] });
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
            }], dropdownDirective: [{
                type: ViewChild,
                args: [DropdownDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi10cmVldmlldy9kcm9wZG93bi10cmVldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLXRyZWV2aWV3L2Ryb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBSS9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7QUFPeEUsTUFBTSxPQUFPLHlCQUF5QjtJQWFwQyxZQUNTLElBQWtCLEVBQ2pCLGFBQTZCO1FBRDlCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBZDlCLGdCQUFXLEdBQUcsdUJBQXVCLENBQUM7UUFLckMsbUJBQWMsR0FBRyxJQUFJLFlBQVksQ0FBUSxJQUFJLENBQUMsQ0FBQztRQUMvQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFVbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFhO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzt1SEEzQlUseUJBQXlCOzJHQUF6Qix5QkFBeUIsdVVBUXpCLGlCQUFpQixvRkFDakIsaUJBQWlCLGdEQ3ZCOUIsNmtCQVlBOzRGREVhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSx1QkFBdUI7Z0lBS3hCLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksY0FBYztzQkFBdkIsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNO2dCQUMwQyxpQkFBaUI7c0JBQWpFLFNBQVM7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUNqQixpQkFBaUI7c0JBQTlDLFNBQVM7dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWV2aWV3STE4biB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pMThuJztcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtJztcbmltcG9ydCB7IFRyZWV2aWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBUcmVldmlld0NvbXBvbmVudCB9IGZyb20gJy4uL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1oZWFkZXItdGVtcGxhdGUtY29udGV4dCc7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7IERyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcGRvd24tdHJlZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi10cmVldmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duVHJlZXZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBidXR0b25DbGFzcyA9ICdidG4tb3V0bGluZS1zZWNvbmRhcnknO1xuICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQ+O1xuICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFRyZWV2aWV3SXRlbVRlbXBsYXRlQ29udGV4dD47XG4gIEBJbnB1dCgpIGl0ZW1zOiBUcmVldmlld0l0ZW1bXTtcbiAgQElucHV0KCkgY29uZmlnOiBUcmVldmlld0NvbmZpZztcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4odHJ1ZSk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQFZpZXdDaGlsZChUcmVldmlld0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRyZWV2aWV3Q29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChEcm9wZG93bkRpcmVjdGl2ZSkgZHJvcGRvd25EaXJlY3RpdmU6IERyb3Bkb3duRGlyZWN0aXZlOyBcbiAgXG4gIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGkxOG46IFRyZWV2aWV3STE4bixcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc6IFRyZWV2aWV3Q29uZmlnXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgb25TZWxlY3RlZENoYW5nZSh2YWx1ZXM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5idXR0b25MYWJlbCA9IHRoaXMuaTE4bi5nZXRUZXh0KHRoaXMudHJlZXZpZXdDb21wb25lbnQuc2VsZWN0aW9uKTtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodmFsdWVzKTtcbiAgfVxuXG4gIG9uRmlsdGVyQ2hhbmdlKHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQodGV4dCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkcm9wZG93blwiIG5neERyb3Bkb3duPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuXCIgW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3NcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cImJ1dHRvblwiIG5neERyb3Bkb3duVG9nZ2xlPlxuICAgIHt7YnV0dG9uTGFiZWx9fVxuICA8L2J1dHRvbj5cbiAgPGRpdiBuZ3hEcm9wZG93bk1lbnUgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51XCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250YWluZXJcIj5cbiAgICAgIDxuZ3gtdHJlZXZpZXcgW2NvbmZpZ109XCJjb25maWdcIiBbaGVhZGVyVGVtcGxhdGVdPVwiaGVhZGVyVGVtcGxhdGVcIiBbaXRlbXNdPVwiaXRlbXNcIiBbaXRlbVRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiXG4gICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvblNlbGVjdGVkQ2hhbmdlKCRldmVudClcIiAoZmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDwvbmd4LXRyZWV2aWV3PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19