import { expect, type Locator, type Page } from '@playwright/test';

export class EnergyPage {
    readonly page: Page;
    readonly powerstations: Locator;
    readonly firstPowerstation: Locator;
    readonly firstPowerstatinoBuy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.powerstations = page.locator('.filterMenu-a:has-text("Портативні електростанції")');
        this.firstPowerstation = page.locator('//*[@class=\'catalog-grid__item\'][1]');
        this.firstPowerstatinoBuy = page.locator('//*[@class=\'catalog-grid__item\'][1] //*[@class=\'btn-content\']');
    }
}