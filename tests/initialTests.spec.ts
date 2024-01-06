import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
    await page.goto('https://arnage.com.ua/');
});

test.describe("Arnage shop tests", () => {

    test('Check logo and main elements', async ({page}) => {

        await expect(page.locator('.header-logo-img')).toBeVisible()
        await expect(page.locator('.catalogTabs-nav-a:has-text("Хіти продажу")')).toBeVisible()
        await expect(page.locator('.btn .btn-content:has-text("Всі відгуки")')).toBeVisible()
    });


    test('Check 2 headers via pseudo-classes and aria role', async ({page}) => {

        await expect(page.locator('.products-menu__title-link:has-text("Автозвук")')).toBeVisible()
        await expect(page.locator('.products-menu__title-link:has-text("Автомагнітоли")')).toBeVisible()
        await expect(page.getByRole("link", { name: "Новинки" })).toBeVisible()
    });

    test('Check My basket text via toHaveText, attribute and ensure that it`s empty', async ({page}) => {

        await expect(page.locator('.basket__title')).toHaveText('Мій кошик')
        await expect(page.locator('.header__section>[data-icon="cart"]')).toHaveAttribute('class','basket is-empty')
        await expect(page.locator('.basket__contents')).not.toHaveAttribute('class', 'basket__value')

    });

    test('Check Contacts', async ({page}) => {

        await expect(page.locator('.site-menu__link:has-text("Контакти")')).toBeVisible()
        await (page.locator('.site-menu__link:has-text("Контакти")')).click()
        await expect(page.locator('.h3')).toHaveText("Адреса")
    });

    test('Check charging stations adding to cart', async ({page}) => {

        await expect(page.locator('.products-menu__title-link:has-text("Енергонезалежність")')).toBeVisible()
        await (page.locator('.products-menu__title-link:has-text("Енергонезалежність")')).click()
        await (page.locator('.filterMenu-a:has-text("Портативні електростанції")')).click()
        await expect(page.locator('[data-id="63061"]')).toBeVisible()
        await expect(page.locator('[data-id="63061"] [id=j-buy-button-widget-63061]')).toBeVisible()
        await (page.locator('[data-id="63061"] [id=j-buy-button-widget-63061]')).click()
        await expect(page.locator('.overlay>.popup .popup-title')).toBeVisible({timeout: 10000})
        await expect(page.locator('.overlay>.popup .popup-title')).toHaveText('Кошик')
        await expect(page.locator('.cart-title')).toHaveText('Портативне джерело живлення Vitol S633')
        await expect(page.locator('.cart-price')).toContainText('12 595')
    });

});