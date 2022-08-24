export declare class DetailsPopup {
    detailData: any;
    tagid: string;
    roomsize_selected: any;
    extras_selected: any;
    payments_value: Array<string>;
    constructor(tagid: string, data: any);
    popupDetailsDialog(container: any): void;
    initRadioButtonGroup(): void;
    checkedSelectRadioButton(event: any): void;
    buildMDC(): void;
}
