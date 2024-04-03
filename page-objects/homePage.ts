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
    readonly catalogOnTop: Locator;
    readonly feedbackOnTop: Locator;
    readonly callMe: Locator;
    readonly callMeHeader: Locator;
    readonly callMeNameInput: Locator;
    readonly callMePhoneInput: Locator;
    readonly callMeSubmitButton: Locator;
    readonly callMeThanksTitle: Locator;
    readonly footerWeInSocialMedia: Locator;
    readonly weInInsta: Locator;
    readonly sale: Locator;
    readonly saleActive: Locator;
    readonly secondElementOnSale: Locator;
    readonly searchInput: Locator;
    readonly login: Locator;
    readonly emailLoginInput: Locator;
    readonly passLoginInput: Locator;
    readonly loginButton: Locator;
    readonly usernameLogin: Locator;

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
        this.catalogOnTop = page.locator('//*[@class=\'site-menu__item\'][1] //*[contains(text(),"Каталог")]')
        this.feedbackOnTop = page.locator('//*[@class=\'site-menu__item\'] //*[contains(text(),"Відгуки")]')
        this.callMe = page.locator('.phones__callback-link')
        this.callMeHeader = page.locator('#call-me .popup-header>.popup-title')
        this.callMeNameInput = page.locator('[name="form[title]"]')
        this.callMePhoneInput = page.locator('[name="form[phone]"]')
        this.callMeSubmitButton = page.locator('//*[@type=\'submit\'] [@value=\'Надіслати\']')
        this.callMeThanksTitle = page.locator('[class="popup-body j-text"]')
        this.footerWeInSocialMedia = page.locator('(//*[@class=\'footer__block\']) [4]')
        this.weInInsta = page.locator('//*[@title="Мы в инстаграмме"]')
        this.sale = page.locator('[rel=global_action]')
        this.saleActive = page.locator('[class=\'catalogTabs-nav-i j-special-offers-tab __active\']')
        this.secondElementOnSale = page.locator('(//*[@data-cartproducttype="product"]) [2]')
        this.searchInput = page.locator('.search__input')
        this.login = page.locator('.userbar__button-text')
        this.emailLoginInput = page.locator('#sign-in [class="field j-focus"]')
        this.passLoginInput = page.locator('#login_form_id [type="password"]')
        this.loginButton = page.locator('[value="Увійти"]')
        this.usernameLogin = page.locator('.userbar__button-text')

    }

    async buyFastSubmit (name: string, phone: string) {
        await this.buyFastInputName.fill(name);
        await this.buyFastInputNumber.fill(phone);
        await this.submitOrder.click();
    }
    async callMeBack (name: string, phone: string) {
        await this.callMeNameInput.fill(name);
        await this.callMePhoneInput.fill(phone);
        await this.callMeSubmitButton.click();
    }

    async navigate () {
        await this.page.goto('https://arnage.com.ua/')
    }

    async loginFunction (email: string, password: string){
        await this.login.click();
        await this.emailLoginInput.fill(email);
        await this.passLoginInput.fill(password);
        await this.loginButton.click()
    }
}