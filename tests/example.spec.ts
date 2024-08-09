import {test, expect} from '@playwright/test';
import data from './data.json';

for (let details of data) {
  test(`${details.title}`, async ({page}) => {
    await page.goto('https://playwright.dev/docs/intro');

    const links = await page.locator('a[href]').all();

    links.forEach(async link => {
      const href = await link.getAttribute('href');
      const regex = new RegExp('/$');
      expect.soft(href).toMatch(regex);
    });
  });
}
