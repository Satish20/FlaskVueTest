import { Selector } from 'testcafe';
import BasePage from '../pages/basePage';

const basePage = new BasePage();

fixture`Getting Started`
    .page`http://devexpress.github.io/testcafe/example`;

const actualURL = basePage.getPageUrl();

test('Submit name', async t => {
    await basePage.submitName("Satish")

    await t
        .expect(Selector('#article-header').innerText).eql('Thank you, Satish!');
});

test('Select all features', async t =>{

    for(const feature of basePage.featureList){
        await t
        .click(feature.label)
        .expect(feature.checkbox.checked).ok();
    }
});