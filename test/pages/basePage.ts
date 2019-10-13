import { Selector, ClientFunction, t } from 'testcafe';
import Feature from './featurePage';

export default class BasePage {
    nameInput: Selector;
    submitButton: Selector;
    featureList: Feature[];

    constructor() {
        this.nameInput = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');

        this.featureList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Running tests in background and/or in parallel in multiple browsers'),
            new Feature('Easy embedding into a Continuous integration system'),
            new Feature('Advanced traffic and markup analysis')
        ];
    }

    getPageUrl() {
        return ClientFunction(() => window.location.href);
    }

    async submitName(name: string) {
        await t
            .typeText(this.nameInput, name)
            .click(this.submitButton);

    }
}
