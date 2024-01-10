import { expect, type Locator, type Page } from '@playwright/test';

export class EnergyPage {
    readonly page: Page;
    readonly powerstations: Locator;
    readonly vitolS633: Locator;
    readonly vitolS633Buy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.powerstations = page.locator('.filterMenu-a:has-text("Портативні електростанції")');
        this.vitolS633 = page.locator('[data-id="63061"]');
        this.vitolS633Buy = page.locator('[data-id="63061"] [id=j-buy-button-widget-63061]');
    }
}