import { expect, type Locator, type Page } from '@playwright/test';

export class FeedbackPage {
    readonly page: Page;
    readonly mainHeader: Locator;
    readonly feedbackButton: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly feedbackInput: Locator;
    readonly submitButton: Locator;
    readonly authorName: Locator;
    readonly feedbackContent: Locator;


    constructor(page: Page) {
        this.page = page;
        this.mainHeader = page.locator('.main-h')
        this.feedbackButton = page.locator('.store-reviews__action-button')
        this.nameInput = page.locator('.p-review-add__form-item [name="form[title]"]')
        this.emailInput = page.locator('.p-review-add__form-item [name="form[email]"]')
        this.feedbackInput = page.locator('.p-review-add__form-item [name="form[text]"]')
        this.submitButton = page.locator('(//*[@type=\'submit\'] [@value=\'Надіслати\'])[2]')
        this.authorName = page.locator('.p-review__body:first-of-type .p-review-author__name')
        this.feedbackContent = page.locator('(//*[@class="p-review__content"])[1]')
    }

    async submitAndCheckFeedback (name: string, feedback: string){
        let randomDigString = (function randomDigitsString() {
            const randomDigits = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
            const randomDigitString = randomDigits.join('');

            return randomDigitString;
        })();
        await this.nameInput.fill(name),
        await this.emailInput.fill(`${randomDigString}@gmail.com`),
        await this.feedbackInput.fill(feedback);
        await this.submitButton.click()
        await expect(this.authorName).toHaveText(name)
        await expect(this.feedbackContent).toHaveText(feedback)
    }
}