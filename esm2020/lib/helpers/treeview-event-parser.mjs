import { Injectable } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class TreeviewEventParser {
}
TreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewEventParser, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewEventParser, decorators: [{
            type: Injectable
        }] });
export class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!isNil(checkedItems)) {
            return checkedItems.map(item => item.value);
        }
        return [];
    }
}
DefaultTreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DefaultTreeviewEventParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DefaultTreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DefaultTreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DefaultTreeviewEventParser, decorators: [{
            type: Injectable
        }] });
export class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!isNil(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!isNil(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                    item,
                    parent
                }];
        }
        return null;
    }
}
DownlineTreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DownlineTreeviewEventParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DownlineTreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DownlineTreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DownlineTreeviewEventParser, decorators: [{
            type: Injectable
        }] });
export class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    constructor() {
        super(...arguments);
        this.currentDownlines = [];
        this.parser = new DownlineTreeviewEventParser();
    }
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
}
OrderDownlineTreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OrderDownlineTreeviewEventParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
OrderDownlineTreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OrderDownlineTreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: OrderDownlineTreeviewEventParser, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctZXZlbnQtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvaGVscGVycy90cmVldmlldy1ldmVudC1wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUsvQixNQUFNLE9BQWdCLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtxSEFBbkIsbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBRHhDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtJQUNqRSxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7d0hBUlUsMEJBQTBCOzRIQUExQiwwQkFBMEI7NEZBQTFCLDBCQUEwQjtrQkFEdEMsVUFBVTs7QUFrQlgsTUFBTSxPQUFPLDJCQUE0QixTQUFRLG1CQUFtQjtJQUNsRSxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxNQUFNLEdBQTJCLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENB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Q0FBZ0M7a0lBQWhDLGdDQUFnQzs0RkFBaEMsZ0NBQWdDO2tCQUQ1QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0nO1xuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcbiAgYWJzdHJhY3QgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRyZWV2aWV3RXZlbnRQYXJzZXIgZXh0ZW5kcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcbiAgICBjb25zdCBjaGVja2VkSXRlbXMgPSBjb21wb25lbnQuc2VsZWN0aW9uLmNoZWNrZWRJdGVtcztcbiAgICBpZiAoIWlzTmlsKGNoZWNrZWRJdGVtcykpIHtcbiAgICAgIHJldHVybiBjaGVja2VkSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxpbmVUcmVldmlld0l0ZW0ge1xuICBpdGVtOiBUcmVldmlld0l0ZW07XG4gIHBhcmVudDogRG93bmxpbmVUcmVldmlld0l0ZW07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb3dubGluZVRyZWV2aWV3RXZlbnRQYXJzZXIgZXh0ZW5kcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcbiAgICBjb25zdCBpdGVtcyA9IGNvbXBvbmVudC5pdGVtcztcbiAgICBpZiAoIWlzTmlsKGl0ZW1zKSkge1xuICAgICAgbGV0IHJlc3VsdDogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmdldExpbmtzKGl0ZW0sIG51bGwpO1xuICAgICAgICBpZiAoIWlzTmlsKGxpbmtzKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQobGlua3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIGdldExpbmtzKGl0ZW06IFRyZWV2aWV3SXRlbSwgcGFyZW50OiBEb3dubGluZVRyZWV2aWV3SXRlbSk6IERvd25saW5lVHJlZXZpZXdJdGVtW10ge1xuICAgIGlmICghaXNOaWwoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSB7XG4gICAgICAgIGl0ZW0sXG4gICAgICAgIHBhcmVudFxuICAgICAgfTtcbiAgICAgIGxldCByZXN1bHQ6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5nZXRMaW5rcyhjaGlsZCwgbGluayk7XG4gICAgICAgIGlmICghaXNOaWwobGlua3MpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChsaW5rcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBpdGVtLFxuICAgICAgICBwYXJlbnRcbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRvd25saW5lVHJlZXZpZXdFdmVudFBhcnNlciBleHRlbmRzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xuICBwcml2YXRlIGN1cnJlbnREb3dubGluZXM6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSBbXTtcbiAgcHJpdmF0ZSBwYXJzZXIgPSBuZXcgRG93bmxpbmVUcmVldmlld0V2ZW50UGFyc2VyKCk7XG5cbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcbiAgICBjb25zdCBuZXdEb3dubGluZXM6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSB0aGlzLnBhcnNlci5nZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQpO1xuICAgIGlmICh0aGlzLmN1cnJlbnREb3dubGluZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnREb3dubGluZXMgPSBuZXdEb3dubGluZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdERvd25saW5lczogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xuICAgICAgdGhpcy5jdXJyZW50RG93bmxpbmVzLmZvckVhY2goZG93bmxpbmUgPT4ge1xuICAgICAgICBsZXQgZm91bmRJbmRleCA9IC0xO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXdEb3dubGluZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRvd25saW5lLml0ZW0udmFsdWUgPT09IG5ld0Rvd25saW5lc1tpXS5pdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3VuZEluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGludGVyc2VjdERvd25saW5lcy5wdXNoKG5ld0Rvd25saW5lc1tmb3VuZEluZGV4XSk7XG4gICAgICAgICAgbmV3RG93bmxpbmVzLnNwbGljZShmb3VuZEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudERvd25saW5lcyA9IGludGVyc2VjdERvd25saW5lcy5jb25jYXQobmV3RG93bmxpbmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RG93bmxpbmVzO1xuICB9XG59XG4iXX0=