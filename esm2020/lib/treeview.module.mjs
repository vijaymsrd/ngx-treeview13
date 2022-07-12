import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { DropdownTreeviewComponent } from './components/dropdown-treeview/dropdown-treeview.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, DefaultTreeviewI18n } from './models/treeview-i18n';
import { TreeviewConfig } from './models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './helpers/treeview-event-parser';
import * as i0 from "@angular/core";
export class TreeviewModule {
    static forRoot() {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
}
TreeviewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeviewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewModule, declarations: [TreeviewComponent,
        TreeviewItemComponent,
        TreeviewPipe,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        DropdownTreeviewComponent], imports: [FormsModule,
        CommonModule], exports: [TreeviewComponent,
        TreeviewPipe,
        DropdownTreeviewComponent] });
TreeviewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewModule, imports: [[
            FormsModule,
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TreeviewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        CommonModule
                    ],
                    declarations: [
                        TreeviewComponent,
                        TreeviewItemComponent,
                        TreeviewPipe,
                        DropdownDirective,
                        DropdownMenuDirective,
                        DropdownToggleDirective,
                        DropdownTreeviewComponent
                    ], exports: [
                        TreeviewComponent,
                        TreeviewPipe,
                        DropdownTreeviewComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvdHJlZXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBcUJsRyxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsY0FBYztnQkFDZCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUU7YUFDdkU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NEdBVlUsY0FBYzs2R0FBZCxjQUFjLGlCQWJ2QixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFWekIsV0FBVztRQUNYLFlBQVksYUFXWixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLHlCQUF5Qjs2R0FHaEIsY0FBYyxZQWxCaEI7WUFDUCxXQUFXO1lBQ1gsWUFBWTtTQUNiOzRGQWVVLGNBQWM7a0JBbkIxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHlCQUF5QjtxQkFDMUIsRUFBRSxPQUFPLEVBQUU7d0JBQ1YsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLHlCQUF5QjtxQkFDMUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24tdHJlZXZpZXcvZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVldmlld0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZXZpZXctaXRlbS90cmVldmlldy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVldmlld1BpcGUgfSBmcm9tICcuL3BpcGVzL3RyZWV2aWV3LnBpcGUnO1xuaW1wb3J0IHsgVHJlZXZpZXdJMThuLCBEZWZhdWx0VHJlZXZpZXdJMThuIH0gZnJvbSAnLi9tb2RlbHMvdHJlZXZpZXctaTE4bic7XG5pbXBvcnQgeyBUcmVldmlld0NvbmZpZyB9IGZyb20gJy4vbW9kZWxzL3RyZWV2aWV3LWNvbmZpZyc7XG5pbXBvcnQgeyBUcmVldmlld0V2ZW50UGFyc2VyLCBEZWZhdWx0VHJlZXZpZXdFdmVudFBhcnNlciB9IGZyb20gJy4vaGVscGVycy90cmVldmlldy1ldmVudC1wYXJzZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRyZWV2aWV3Q29tcG9uZW50LFxuICAgIFRyZWV2aWV3SXRlbUNvbXBvbmVudCxcbiAgICBUcmVldmlld1BpcGUsXG4gICAgRHJvcGRvd25EaXJlY3RpdmUsXG4gICAgRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICAgIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duVHJlZXZpZXdDb21wb25lbnRcbiAgXSwgZXhwb3J0czogW1xuICAgIFRyZWV2aWV3Q29tcG9uZW50LFxuICAgIFRyZWV2aWV3UGlwZSxcbiAgICBEcm9wZG93blRyZWV2aWV3Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRyZWV2aWV3TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmVldmlld01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUcmVldmlld0NvbmZpZyxcbiAgICAgICAgeyBwcm92aWRlOiBUcmVldmlld0kxOG4sIHVzZUNsYXNzOiBEZWZhdWx0VHJlZXZpZXdJMThuIH0sXG4gICAgICAgIHsgcHJvdmlkZTogVHJlZXZpZXdFdmVudFBhcnNlciwgdXNlQ2xhc3M6IERlZmF1bHRUcmVldmlld0V2ZW50UGFyc2VyIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=