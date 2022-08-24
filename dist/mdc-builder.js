import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { MDCRipple } from '@material/ripple';
import { MDCDialog } from '@material/dialog';
import { MDCSelectHelperText } from '@material/select/helper-text';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { MDCMenu } from '@material/menu';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import { MDCChipSet } from '@material/chips';
import { MDCSwitch } from '@material/switch';
import { MDCCheckbox } from '@material/checkbox';
// export class MDCEleComponent{
//     roomsize: string = "";
//     NewMDCComponents(){
//         let mdcSelectMenuEle = document.querySelector(".mdc-select")!;
//         const select = MDCSelect.attachTo(mdcSelectMenuEle);
//         // select.listen('MDCSelect:change', () => {
//         //     this.roomsize = select.value;
//         // });
//         // for(let mdcSelectMenuEle of mdcSelectMenuList){
//         // }
//         return select;
//     }
// }
// export function NewMdcRadioButtonFormField(){
//     let radioGroup = document.querySelectorAll('.mdc-radio');
//     for(let radio of radioGroup){
//         MDCRadio.attachTo(radio);
//     }
//     const formField = new MDCFormField(document.querySelector('.mdc-form-field')!);
//     //formField.input = radio;
// }
export function NewMdcCheckbox(eleF, eleC) {
    const checkbox = new MDCCheckbox(eleF);
    const formField = new MDCFormField(eleC);
    formField.input = checkbox;
}
export function NewMdcSwitch(ele, isSelected) {
    // for (const el of document.querySelectorAll('.mdc-switch')) {
    //     const switchControl = new MDCSwitch(el as HTMLButtonElement);
    // }
    const switchControl = new MDCSwitch(ele);
    if (isSelected) {
        switchControl.selected = true;
    }
    else {
        switchControl.selected = false;
    }
}
export function NewMdcChips(ele) {
    MDCChipSet.attachTo(ele);
}
export function NewMdcRadioButton(ele) {
    MDCRadio.attachTo(ele);
}
export function NewMdcRadioButtonFormField(eleR, eleF) {
    const radio = new MDCRadio(eleR);
    const formField = new MDCFormField(eleF);
    formField.input = radio;
    //formField.input = radio;
}
export function NewMdcMenus(ele) {
    const menu = new MDCMenu(ele);
    menu.open = true;
}
export function NewMdcTextCounter(ele) {
    MDCTextFieldCharacterCounter.attachTo(ele);
}
export function NewMdcTextHelperText(ele) {
    //const helperText = new MDCSelectHelperText(document.querySelector('.mdc-select-helper-text')!);
    MDCTextFieldHelperText.attachTo(ele);
}
export function NewMdcSelectHelperText(ele) {
    MDCSelectHelperText.attachTo(ele);
}
export function NewMdcSelectComponent(ele, selectedValue) {
    //let mdcSelectMenuEle = document.querySelector(".mdc-select")!;
    const select = MDCSelect.attachTo(ele);
    select.value = selectedValue;
    return select;
}
export function NewMdcTextField(ele) {
    //const un = new MDCTextField(ele!);
    MDCTextField.attachTo(ele);
    //MDCTextField.attachTo(ele!);
}
export function NewMdcSelect(ele) {
    MDCSelect.attachTo(ele);
}
export function NewMdcButton(ele) {
    MDCRipple.attachTo(ele);
}
export function NewMdcDialog() {
    //MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
    //let dialogEle = document.querySelector('.mdc-dialog')!;
    //const dialog = MDCDialog.attachTo(dialogEle);
    let dialogEle = new MDCDialog(document.querySelector('.mdc-dialog'));
}
//# sourceMappingURL=mdc-builder.js.map