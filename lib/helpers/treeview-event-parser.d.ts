import { TreeviewItem } from '../models/treeview-item';
import { TreeviewComponent } from '../components/treeview/treeview.component';
import * as i0 from "@angular/core";
export declare abstract class TreeviewEventParser {
    abstract getSelectedChange(component: TreeviewComponent): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeviewEventParser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TreeviewEventParser>;
}
export declare class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component: TreeviewComponent): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultTreeviewEventParser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DefaultTreeviewEventParser>;
}
export interface DownlineTreeviewItem {
    item: TreeviewItem;
    parent: DownlineTreeviewItem;
}
export declare class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component: TreeviewComponent): any[];
    private getLinks;
    static ɵfac: i0.ɵɵFactoryDeclaration<DownlineTreeviewEventParser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DownlineTreeviewEventParser>;
}
export declare class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    private currentDownlines;
    private parser;
    getSelectedChange(component: TreeviewComponent): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderDownlineTreeviewEventParser, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderDownlineTreeviewEventParser>;
}
