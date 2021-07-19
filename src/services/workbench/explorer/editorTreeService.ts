import { IMenuItemProps, ITabProps } from 'mo/components';
import { IEditor, IEditorTab } from 'mo/model';
import { EditorTreeEvent } from 'mo/model/workbench/explorer/editorTree';
import { Component } from 'mo/react';
import { EditorService } from 'mo/services';
import { container, singleton } from 'tsyringe';

export interface IEditorTreeService {
    /**
     * Callabck for close a certain tab
     */
    onClose(callback: (tabId: string, groupId: number) => void): void;
    /**
     * Callback for close others tabs except this tabItem
     */
    onCloseOthers(
        callback: (tabItem: IEditorTab, groupId: number) => void
    ): void;
    /**
     * Callback for close saved tabs in this group
     */
    onCloseSaved(callback: (groupId: number) => void): void;
    onSelect(callback: (tabId: string, groupId: number) => void): void;
    /**
     * Callback for close all tabs
     * When specify groupId, it'll close that group
     */
    onCloseAll(callback: (groupId?: number) => void): void;
    /**
     * Callback for save all tabs
     * When specify groupId, it'll save that group
     */
    onSaveAll(callback: (groupId?: number) => void): void;
    /**
     * Callback for adjust editor layout
     */
    onLayout(callback: () => void): void;
    /**
     * Callback for context menu click event which isn't in buit-in menus
     */
    onContextMenu(
        callback: (
            menu: IMenuItemProps,
            file: ITabProps,
            groupId: number
        ) => void
    ): void;
}

@singleton()
export class EditorTreeService
    extends Component<IEditor>
    implements IEditorTreeService {
    protected state: IEditor;
    private readonly editorService: EditorService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.state = this.editorService.getState();
    }
    public onClose(callback: (tabId: string, groupId: number) => void) {
        this.subscribe(EditorTreeEvent.onClose, callback);
    }

    public onCloseOthers(
        callback: (tabItem: IEditorTab, groupId: number) => void
    ) {
        this.subscribe(EditorTreeEvent.onCloseOthers, callback);
    }

    public onCloseSaved(callback: (groupId: number) => void) {
        this.subscribe(EditorTreeEvent.onCloseSaved, callback);
    }

    public onSelect(callback: (tabId: string, groupId: number) => void) {
        this.subscribe(EditorTreeEvent.onSelect, callback);
    }

    public onCloseAll(callback: (groupId?: number) => void) {
        this.subscribe(EditorTreeEvent.onCloseAll, callback);
    }

    public onSaveAll(callback: (groupId?: number) => void) {
        this.subscribe(EditorTreeEvent.onSaveAll, callback);
    }

    public onLayout(callback: () => void) {
        this.subscribe(EditorTreeEvent.onSplitEditorLayout, callback);
    }

    public onContextMenu(
        callback: (
            menu: IMenuItemProps,
            file: ITabProps,
            groupId: number
        ) => void
    ) {
        this.subscribe(EditorTreeEvent.onContextMenu, callback);
    }
}