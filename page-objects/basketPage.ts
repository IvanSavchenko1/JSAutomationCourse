import { expect, type Locator, type Page } from '@playwright/test';

export class BasketPage {
    readonly page: Page;
    readonly basketTitle: Locator;
    readonly cartTitle: Locator;
    readonly cartPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.basketTitle = page.locator('.overlay>.popup .popup-title');
        this.cartTitle = page.locator('.cart-title');
        this.cartPrice = page.locator('.cart-price')
    }
}