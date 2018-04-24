import { EventEmitter, SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
import { TreeviewI18n } from './treeview-i18n';
import { TreeviewItem, TreeviewSelection } from './treeview-item';
import { TreeviewConfig } from './treeview-config';
import { TreeviewEventParser } from './treeview-event-parser';
import { TreeviewHeaderTemplateContext } from './treeview-header-template-context';
import { TreeviewItemTemplateContext } from './treeview-item-template-context';
export declare class TreeviewComponent implements OnChanges {
    i18n: TreeviewI18n;
    private defaultConfig;
    private eventParser;
    headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
    itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
    items: TreeviewItem[];
    config: TreeviewConfig;
    selectedChange: EventEmitter<any[]>;
    filterChange: EventEmitter<string>;
    headerTemplateContext: TreeviewHeaderTemplateContext;
    allItem: TreeviewItem;
    filterText: string;
    filterItems: TreeviewItem[];
    selection: TreeviewSelection;
    constructor(i18n: TreeviewI18n, defaultConfig: TreeviewConfig, eventParser: TreeviewEventParser);
    readonly hasFilterItems: boolean;
    readonly maxHeight: string;
    ngOnChanges(changes: SimpleChanges): void;
    onAllCollapseExpand(): void;
    onFilterTextChange(text: string): void;
    /**
     * IE has an issue where it does not send a change event for when an indeterminate checkbox changes to become determinate.
     * To work around this we explicity set it checked if it's indeterminate and we use the onClick event instead of onChange.
     */
    onAllCheckedChange(): void;
    /**
     * IE performs the onClick event before the onChange event while Chrome and perform it in the other order.
     * By pushing the callback onto the event queue it will always be executed immediately after all pending events
     */
    standardizeEventOrder(callback: any): void;
    onItemCheckedChange(item: TreeviewItem, checked: boolean): void;
    raiseSelectedChange(): void;
    private createHeaderTemplateContext();
    private generateSelection();
    private updateFilterItems();
    private filterItem(item, filterText);
    private updateCheckedOfAll();
    private updateCollapsedOfAll();
}
