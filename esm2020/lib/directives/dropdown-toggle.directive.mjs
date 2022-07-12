import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownToggleDirective {
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
}
DropdownToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownToggleDirective, deps: [{ token: i1.DropdownDirective }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
DropdownToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: DropdownToggleDirective, selector: "[ngxDropdownToggle]", host: { attributes: { "aria-haspopup": "true" }, listeners: { "click": "dropdown.toggle()" }, properties: { "attr.aria-expanded": "dropdown.isOpen" }, classAttribute: "dropdown-toggle" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DropdownToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxDropdownToggle]',
                    host: {
                        class: 'dropdown-toggle',
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'dropdown.isOpen',
                        '(click)': 'dropdown.toggle()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.DropdownDirective }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL2RpcmVjdGl2ZXMvZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFZdEQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNTLFFBQTJCLEVBQ2xDLFVBQXNCO1FBRGYsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFHbEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3BELENBQUM7O3FIQU5VLHVCQUF1Qjt5R0FBdkIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBVG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxpQkFBaUI7d0JBQ3hCLGVBQWUsRUFBRSxNQUFNO3dCQUN2QixzQkFBc0IsRUFBRSxpQkFBaUI7d0JBQ3pDLFNBQVMsRUFBRSxtQkFBbUI7cUJBQy9CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neERyb3Bkb3duVG9nZ2xlXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2Ryb3Bkb3duLXRvZ2dsZScsXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ2Ryb3Bkb3duLmlzT3BlbicsXG4gICAgJyhjbGljayknOiAnZHJvcGRvd24udG9nZ2xlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZHJvcGRvd246IERyb3Bkb3duRGlyZWN0aXZlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgZHJvcGRvd24udG9nZ2xlRWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19