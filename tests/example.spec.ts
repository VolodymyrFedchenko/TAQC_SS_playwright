import { test, expect } from '@playwright/test';
import { USER_EMAIL, USER_PASSWORD } from "../env"

test('Create News form — basic field presence and order', async ({ page }) => {
  
  
  // 1. Відкрити сторінку
  await page.goto('https://www.greencity.cx.ua/#/greenCity/news');

  // 2. Логін 
  await page.locator('img.ubs-header-sing-in-img').click();
  await page.locator('input[formcontrolname="email"]').fill('emir@ua.fm');
  await page.locator('input[formcontrolname="password"]').fill('SuperVova#1');
  await page.locator('button[type="submit"]').click();

  // 3. Натиснути Create News  
  await page.locator('header a.url-name:has-text("Eco news")').click();
  await page.locator('div#create-button').click();

  // 4. Локатори форми
  const title = page.locator('textarea[formcontrolname="title"]');
  const tags = page.locator('.tag-button');
  const addImage = page.locator('input[type="file"]');
  const mainText = page.locator('div.ql-editor');  
  const author = page.locator('p:has(span:has-text("author"))');
  const date = page.locator('p:has(span:has-text("author"))');
  const source = page.locator('input[formcontrolname="source"]');

  // 5. Перевірка наявності
  await expect(title).toBeVisible();
  await expect(tags.first()).toBeVisible();
  await expect(addImage).toBeVisible();
  await expect(mainText).toBeVisible();
  await expect(author).toBeVisible();
  await expect(date).toBeVisible();
  await expect(source).toBeVisible();

  // 6. Перевірка порядку елементів
 
});
