import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewI18n {
}
TreeviewI18n.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewI18n, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TreeviewI18n.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewI18n });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewI18n, decorators: [{
            type: Injectable
        }] });
export class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }
        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
DefaultTreeviewI18n.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DefaultTreeviewI18n, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DefaultTreeviewI18n.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DefaultTreeviewI18n });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DefaultTreeviewI18n, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL21vZGVscy90cmVldmlldy1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBZ0IsWUFBWTs7MEdBQVosWUFBWTs4R0FBWixZQUFZOzRGQUFaLFlBQVk7a0JBRGpDLFVBQVU7O0FBVVgsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQVk7SUFDbkQsT0FBTyxDQUFDLFNBQTRCO1FBQ2xDLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUVELFFBQVEsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDckMsS0FBSyxDQUFDO2dCQUNKLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEM7Z0JBQ0UsT0FBTyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxtQkFBbUIsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx5QkFBeUI7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsNEJBQTRCLENBQUMsVUFBbUI7UUFDOUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzVDLENBQUM7O2lIQWxDVSxtQkFBbUI7cUhBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZXZpZXdTZWxlY3Rpb24gfSBmcm9tICcuL3RyZWV2aWV3LWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJlZXZpZXdJMThuIHtcbiAgYWJzdHJhY3QgZ2V0VGV4dChzZWxlY3Rpb246IFRyZWV2aWV3U2VsZWN0aW9uKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRBbGxDaGVja2JveFRleHQoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRGaWx0ZXJQbGFjZWhvbGRlcigpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldEZpbHRlck5vSXRlbXNGb3VuZFRleHQoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRUb29sdGlwQ29sbGFwc2VFeHBhbmRUZXh0KGlzQ29sbGFwc2U6IGJvb2xlYW4pOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0VHJlZXZpZXdJMThuIGV4dGVuZHMgVHJlZXZpZXdJMThuIHtcbiAgZ2V0VGV4dChzZWxlY3Rpb246IFRyZWV2aWV3U2VsZWN0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAoc2VsZWN0aW9uLnVuY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHNlbGVjdGlvbi5jaGVja2VkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxDaGVja2JveFRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGlvbi5jaGVja2VkSXRlbXMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAnU2VsZWN0IG9wdGlvbnMnO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLmNoZWNrZWRJdGVtc1swXS50ZXh0O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGAke3NlbGVjdGlvbi5jaGVja2VkSXRlbXMubGVuZ3RofSBvcHRpb25zIHNlbGVjdGVkYDtcbiAgICB9XG4gIH1cblxuICBnZXRBbGxDaGVja2JveFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0FsbCc7XG4gIH1cblxuICBnZXRGaWx0ZXJQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiAnRmlsdGVyJztcbiAgfVxuXG4gIGdldEZpbHRlck5vSXRlbXNGb3VuZFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ05vIGl0ZW1zIGZvdW5kJztcbiAgfVxuXG4gIGdldFRvb2x0aXBDb2xsYXBzZUV4cGFuZFRleHQoaXNDb2xsYXBzZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzQ29sbGFwc2UgPyAnRXhwYW5kJyA6ICdDb2xsYXBzZSc7XG4gIH1cbn1cbiJdfQ==