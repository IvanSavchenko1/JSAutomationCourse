import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly headerLogo: Locator;
    readonly salesHits: Locator;
    readonly allFeedbacks: Locator;
    readonly autoSound: Locator;
    readonly autoCarAudio: Locator;
    readonly newStuff: Locator;
    readonly myBasketTitle: Locator;
    readonly myBasket: Locator;
    readonly myBasketContents: Locator;
    readonly contacts: Locator;
    readonly energyIndependence: Locator;
    readonly firstItemSalesHits: Locator;
    readonly buyFast: Locator;
    readonly buyFastHeader: Locator;
    readonly buyFastInputName: Locator;
    readonly buyFastInputNumber: Locator;
    readonly submitOrder: Locator;
    readonly OrderSubmittedHeader: Locator;



    constructor(page: Page) {
        this.page = page;
        this.headerLogo = page.locator('.header-logo-img');
        this.salesHits = page.locator('.catalogTabs-nav-a:has-text("Хіти продажу")');
        this.allFeedbacks = page.locator('.btn .btn-content:has-text("Всі відгуки")');
        this.autoSound = page.locator('.products-menu__title-link:has-text("Автозвук")');
        this.autoCarAudio = page.locator('.products-menu__title-link:has-text("Автомагнітоли")');
        this.newStuff = page.getByRole("link", { name: "Новинки" });
        this.myBasketTitle = page.locator('.basket__title');
        this.myBasket = page.locator('.header__section>[data-icon="cart"]');
        this.myBasketContents = page.locator('.basket__contents');
        this.contacts = page.locator('.site-menu__link:has-text("Контакти")');
        this.energyIndependence = page.locator('.products-menu__title-link:has-text("Енергонезалежність")');
        this.firstItemSalesHits = page.locator('//*[@class=\'catalog-carousel__wrap promo-slider-list\']/*[1]');
        this.buyFast = page.locator('//*[@class="product-order__block"]//*[@class="btn"]');
        this.buyFastHeader = page.locator('//div[contains(text(),"Замовити швидко")]');
        this.buyFastInputName = page.locator('//input[@name="ProductQuick[delivery_name]"]');
        this.buyFastInputNumber = page.locator('//input[@name="ProductQuick[delivery_phone]"]')
        this.submitOrder = page.locator('//input[@value="Оформити замовлення"]');
        this.OrderSubmittedHeader = page.locator('//*[@class="main-h"]');
    }

    async buyFastSubmit (name: string, phone: string) {
        await this.buyFastInputName.fill(name);
        await this.buyFastInputNumber.fill(phone);
        await this.submitOrder.click();
    }
}