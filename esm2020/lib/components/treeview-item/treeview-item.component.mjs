import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-config";
import * as i2 from "@angular/common";
export class TreeviewItemComponent {
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.checkedChange = new EventEmitter();
        this.onCollapseExpand = () => {
            this.item.collapsed = !this.item.collapsed;
        };
        this.onCheckedChange = () => {
            const checked = this.item.checked;
            if (!isNil(this.item.children) && !this.config.decoupleChildFromParent) {
                this.item.children.forEach(child => child.setCheckedRecursive(checked));
            }
            this.checkedChange.emit(checked);
        };
        this.config = this.defaultConfig;
    }
    onChildCheckedChange(child, checked) {
        if (!this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = undefined;
                    break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
}
TreeviewItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewItemComponent, deps: [{ token: i1.TreeviewConfig }], target: i0.ɵɵFactoryTarget.Component });
TreeviewItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TreeviewItemComponent, selector: "ngx-treeview-item", inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, ngImport: i0, template: "<div *ngIf=\"item\" class=\"treeview-item\">\n  <ng-template [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\n  </ng-template>\n  <div *ngIf=\"!item.collapsed\">\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\n    </ngx-treeview-item>\n  </div>\n</div>\n", styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}\n"], components: [{ type: TreeviewItemComponent, selector: "ngx-treeview-item", inputs: ["config", "template", "item"], outputs: ["checkedChange"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-treeview-item', template: "<div *ngIf=\"item\" class=\"treeview-item\">\n  <ng-template [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\n  </ng-template>\n  <div *ngIf=\"!item.collapsed\">\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\n    </ngx-treeview-item>\n  </div>\n</div>\n", styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TreeviewConfig }]; }, propDecorators: { config: [{
                type: Input
            }], template: [{
                type: Input
            }], item: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFVL0IsTUFBTSxPQUFPLHFCQUFxQjtJQU1oQyxZQUNVLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUg3QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFRdEQscUJBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFBO1FBRUQsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDekU7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUE7UUFiQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQWNELG9CQUFvQixDQUFDLEtBQW1CLEVBQUUsT0FBZ0I7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUU7WUFDeEMsSUFBSSxXQUFXLEdBQVksSUFBSSxDQUFDO1lBQ2hDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzFDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtvQkFDeEIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7aUJBQ2pDO3FCQUFNLElBQUksV0FBVyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVDLFdBQVcsR0FBRyxTQUFTLENBQUM7b0JBQ3hCLE1BQU07aUJBQ1A7YUFDRjtZQUVELElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtnQkFDeEIsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7YUFDakM7U0FFRjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O21IQS9DVSxxQkFBcUI7dUdBQXJCLHFCQUFxQix3S0NYbEMsbWZBVUEsd0pEQ2EscUJBQXFCOzRGQUFyQixxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsbUJBQW1CO3FHQUtwQixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0nO1xuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctY29uZmlnJztcbmltcG9ydCB7IFRyZWV2aWV3SXRlbVRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtLXRlbXBsYXRlLWNvbnRleHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdHJlZXZpZXctaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVldmlldy1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZXZpZXctaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRyZWV2aWV3SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogVHJlZXZpZXdDb25maWc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQ+O1xuICBASW5wdXQoKSBpdGVtOiBUcmVldmlld0l0ZW07XG4gIEBPdXRwdXQoKSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZzogVHJlZXZpZXdDb25maWdcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cblxuICBvbkNvbGxhcHNlRXhwYW5kID0gKCkgPT4ge1xuICAgIHRoaXMuaXRlbS5jb2xsYXBzZWQgPSAhdGhpcy5pdGVtLmNvbGxhcHNlZDtcbiAgfVxuXG4gIG9uQ2hlY2tlZENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gdGhpcy5pdGVtLmNoZWNrZWQ7XG4gICAgaWYgKCFpc05pbCh0aGlzLml0ZW0uY2hpbGRyZW4pICYmICF0aGlzLmNvbmZpZy5kZWNvdXBsZUNoaWxkRnJvbVBhcmVudCkge1xuICAgICAgdGhpcy5pdGVtLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuc2V0Q2hlY2tlZFJlY3Vyc2l2ZShjaGVja2VkKSk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KGNoZWNrZWQpO1xuICB9XG5cbiAgb25DaGlsZENoZWNrZWRDaGFuZ2UoY2hpbGQ6IFRyZWV2aWV3SXRlbSwgY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb25maWcuZGVjb3VwbGVDaGlsZEZyb21QYXJlbnQpIHtcbiAgICAgIGxldCBpdGVtQ2hlY2tlZDogYm9vbGVhbiA9IG51bGw7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkSXRlbSBvZiB0aGlzLml0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGl0ZW1DaGVja2VkID09PSBudWxsKSB7XG4gICAgICAgICAgaXRlbUNoZWNrZWQgPSBjaGlsZEl0ZW0uY2hlY2tlZDtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtQ2hlY2tlZCAhPT0gY2hpbGRJdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICBpdGVtQ2hlY2tlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbUNoZWNrZWQgPT09IG51bGwpIHtcbiAgICAgICAgaXRlbUNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXRlbS5jaGVja2VkICE9PSBpdGVtQ2hlY2tlZCkge1xuICAgICAgICB0aGlzLml0ZW0uY2hlY2tlZCA9IGl0ZW1DaGVja2VkO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJpdGVtXCIgY2xhc3M9XCJ0cmVldmlldy1pdGVtXCI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntpdGVtOiBpdGVtLCBvbkNvbGxhcHNlRXhwYW5kOiBvbkNvbGxhcHNlRXhwYW5kLCBvbkNoZWNrZWRDaGFuZ2U6IG9uQ2hlY2tlZENoYW5nZX1cIj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPGRpdiAqbmdJZj1cIiFpdGVtLmNvbGxhcHNlZFwiPlxuICAgIDxuZ3gtdHJlZXZpZXctaXRlbSBbY29uZmlnXT1cImNvbmZpZ1wiICpuZ0Zvcj1cImxldCBjaGlsZCBvZiBpdGVtLmNoaWxkcmVuXCIgW2l0ZW1dPVwiY2hpbGRcIiBbdGVtcGxhdGVdPVwidGVtcGxhdGVcIlxuICAgICAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGlsZENoZWNrZWRDaGFuZ2UoY2hpbGQsICRldmVudClcIj5cbiAgICA8L25neC10cmVldmlldy1pdGVtPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19