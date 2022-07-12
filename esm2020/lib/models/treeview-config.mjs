import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewConfig {
    constructor() {
        this.hasAllCheckBox = true;
        this.hasFilter = false;
        this.hasCollapseExpand = false;
        this.decoupleChildFromParent = false;
        this.maxHeight = 500;
    }
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
}
TreeviewConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TreeviewConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewConfig, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvbW9kZWxzL3RyZWV2aWV3LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sY0FBYztJQUQzQjtRQUVFLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLDRCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNoQyxjQUFTLEdBQUcsR0FBRyxDQUFDO0tBaUJqQjtJQWZDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUN6RSxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQU1wQjtRQUNDLE1BQU0sTUFBTSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7NEdBckJVLGNBQWM7Z0hBQWQsY0FBYzs0RkFBZCxjQUFjO2tCQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdDb25maWcge1xuICBoYXNBbGxDaGVja0JveCA9IHRydWU7XG4gIGhhc0ZpbHRlciA9IGZhbHNlO1xuICBoYXNDb2xsYXBzZUV4cGFuZCA9IGZhbHNlO1xuICBkZWNvdXBsZUNoaWxkRnJvbVBhcmVudCA9IGZhbHNlO1xuICBtYXhIZWlnaHQgPSA1MDA7XG5cbiAgZ2V0IGhhc0RpdmlkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzRmlsdGVyIHx8IHRoaXMuaGFzQWxsQ2hlY2tCb3ggfHwgdGhpcy5oYXNDb2xsYXBzZUV4cGFuZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGZpZWxkcz86IHtcbiAgICBoYXNBbGxDaGVja0JveD86IGJvb2xlYW4sXG4gICAgaGFzRmlsdGVyPzogYm9vbGVhbixcbiAgICBoYXNDb2xsYXBzZUV4cGFuZD86IGJvb2xlYW4sXG4gICAgZGVjb3VwbGVDaGlsZEZyb21QYXJlbnQ/OiBib29sZWFuXG4gICAgbWF4SGVpZ2h0PzogbnVtYmVyLFxuICB9KTogVHJlZXZpZXdDb25maWcge1xuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBUcmVldmlld0NvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBmaWVsZHMpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbiJdfQ==