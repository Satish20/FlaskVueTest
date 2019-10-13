import { Selector } from 'testcafe';

const label = Selector('label');

export default class Feature {
    label: Selector;
    checkbox: Selector;
    constructor(text: string){
        this.label = label.withText(text)
        this.checkbox = this.label.find('input[type=checkbox]')
    }
}