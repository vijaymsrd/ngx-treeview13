import { TreeviewSelection } from './treeview-item';
import * as i0 from "@angular/core";
export declare abstract class TreeviewI18n {
    abstract getText(selection: TreeviewSelection): string;
    abstract getAllCheckboxText(): string;
    abstract getFilterPlaceholder(): string;
    abstract getFilterNoItemsFoundText(): string;
    abstract getTooltipCollapseExpandText(isCollapse: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeviewI18n, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeviewI18n>;
}
export declare class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection: TreeviewSelection): string;
    getAllCheckboxText(): string;
    getFilterPlaceholder(): string;
    getFilterNoItemsFoundText(): string;
    getTooltipCollapseExpandText(isCollapse: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultTreeviewI18n, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DefaultTreeviewI18n>;
}
