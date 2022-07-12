import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/treeview/treeview.component";
import * as i2 from "./components/treeview-item/treeview-item.component";
import * as i3 from "./pipes/treeview.pipe";
import * as i4 from "./directives/dropdown.directive";
import * as i5 from "./directives/dropdown-menu.directive";
import * as i6 from "./directives/dropdown-toggle.directive";
import * as i7 from "./components/dropdown-treeview/dropdown-treeview.component";
import * as i8 from "@angular/forms";
import * as i9 from "@angular/common";
export declare class TreeviewModule {
    static forRoot(): ModuleWithProviders<TreeviewModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeviewModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TreeviewModule, [typeof i1.TreeviewComponent, typeof i2.TreeviewItemComponent, typeof i3.TreeviewPipe, typeof i4.DropdownDirective, typeof i5.DropdownMenuDirective, typeof i6.DropdownToggleDirective, typeof i7.DropdownTreeviewComponent], [typeof i8.FormsModule, typeof i9.CommonModule], [typeof i1.TreeviewComponent, typeof i3.TreeviewPipe, typeof i7.DropdownTreeviewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TreeviewModule>;
}
