import { test, expect } from '@playwright/test';
import {HomePage} from "../page-objects/homePage";
import {ContactsPage} from "../page-objects/contactsPage"
import {EnergyPage} from "../page-objects/energyPage";
import {BasketPage} from "../page-objects/basketPage"



test.describe("Arnage shop tests", () => {

    test.beforeEach(async ({page})=> {
        await page.goto('https://arnage.com.ua/');
    });

    test('Check logo and main elements', async ({page}) => {
        const homePage = new HomePage(page);

        await expect(homePage.headerLogo).toBeVisible()
        await expect(homePage.salesHits).toBeVisible()
        await expect(homePage.allFeedbacks).toBeVisible()
    });

    test('Check 2 headers via pseudo-classes and aria role', async ({page}) => {
        const homePage = new HomePage(page);

        await expect(homePage.autoSound).toBeVisible()
        await expect(homePage.autoCarAudio).toBeVisible()
        await expect(homePage.newStuff).toBeVisible()
    });

    test('Check My basket text via toHaveText, attribute and ensure that it`s empty', async ({page}) => {
        const homePage = new HomePage(page);

        await expect(homePage.myBasketTitle).toHaveText('Мій кошик')
        await expect(homePage.myBasket).toHaveAttribute('class','basket is-empty')
        await expect(homePage.myBasketContents).not.toHaveAttribute('class', 'basket__value')
    });

    test('Check Contacts', async ({page}) => {
        const homePage = new HomePage(page);
        const contactsPage = new ContactsPage(page);

        await expect(homePage.contacts).toBeVisible()
        await (homePage.contacts).click()
        await expect(contactsPage.addressTitle).toHaveText("Адреса")
    });

    test('Check charging stations adding to cart', async ({page}) => {
        const homePage = new HomePage(page);
        const energyPage = new EnergyPage(page);
        const basketPage = new BasketPage(page);

        await expect(homePage.energyIndependence).toBeVisible()
        await (homePage.energyIndependence).click()
        await (energyPage.powerstations).click()
        await expect(energyPage.vitolS633).toBeVisible()
        await expect(energyPage.vitolS633Buy).toBeVisible()
        await (energyPage.vitolS633Buy).click()
        await expect(basketPage.basketTitle).toBeVisible({timeout: 5000})
        await expect(basketPage.basketTitle).toHaveText('Кошик')
        await expect(basketPage.cartTitle).toHaveText('Портативне джерело живлення Vitol S633')
        await expect(basketPage.cartPrice).toContainText('12 595')
    });

    test('Buying first item in Hits list (Xpath selectors)', async ({page}) => {
        const homePage = new HomePage(page);

        await expect(homePage.headerLogo).toBeVisible()
        await expect(homePage.salesHits).toBeVisible()
        await (homePage.firstItemSalesHits).click()
        await (homePage.buyFast).click()
        await expect(homePage.buyFastHeader).toBeVisible()
        await homePage.buyFastSubmit('[Test]','111111111')
        await expect(homePage.OrderSubmittedHeader).toHaveText('Ваше замовлення отримано', {timeout: 5000})
    });
});