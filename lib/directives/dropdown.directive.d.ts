import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DropdownDirective {
    toggleElement: any;
    internalOpen: boolean;
    openChange: EventEmitter<boolean>;
    get isOpen(): boolean;
    onKeyupEsc(): void;
    onDocumentClick(event: MouseEvent): void;
    open(): void;
    close(): void;
    toggle(): void;
    private isEventFromToggle;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropdownDirective, "[ngxDropdown]", ["ngxDropdown"], { "internalOpen": "open"; }, { "openChange": "openChange"; }, never>;
}
