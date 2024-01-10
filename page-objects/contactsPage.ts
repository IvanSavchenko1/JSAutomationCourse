import { expect, type Locator, type Page } from '@playwright/test';

export class ContactsPage {
    readonly page: Page;
    readonly addressTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addressTitle = page.locator('.h3');
    }
}
