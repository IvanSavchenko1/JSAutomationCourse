import { expect, type Locator, type Page } from '@playwright/test';

export class CatalogPage {
    readonly page: Page;
    readonly alpineSelector: Locator;
    readonly catalogSearchHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alpineSelector = page.locator('//*[@class=\'filter-check\']//*[contains(text(),"Alpine")]');
        this.catalogSearchHeader = page.locator('.main-h');
    }

    async checkBrandTitles (brandName) {
        for (let i= 1; i<21; i++) {
            let selector = `(//*[@class='catalogCard-title']) [${i}]`
            await expect(this.page.locator(selector)).toContainText(brandName)
        }
    }
}