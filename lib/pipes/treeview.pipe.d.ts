import { PipeTransform } from '@angular/core';
import { TreeviewItem } from '../models/treeview-item';
import * as i0 from "@angular/core";
export declare class TreeviewPipe implements PipeTransform {
    transform(objects: any[], textField: string): TreeviewItem[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeviewPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TreeviewPipe, "ngxTreeview">;
}
