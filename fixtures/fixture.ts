import { test, expect } from '@playwright/test'
import { HomePage } from "../page-objects/homePage";

type MyFixtures = {
    homepage: HomePage;
};

export const fixtTest = test.extend<MyFixtures>({
    homepage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.loginFunction('pshe@gmail.com', '12345678');

        await use(homePage);
    }
})

export { expect } from '@playwright/test';