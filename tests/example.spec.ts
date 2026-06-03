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

   //  3.1Очікуємо відкриття форми
   const form = page.locator('form');
   await expect(form).toBeVisible();

  // 4. Локатори форми
  const title = page.locator('textarea[formcontrolname="title"]');
  const tags = page.locator('.tags-box').first();
  const addImage = page.locator('input[type="file"]');
  const mainText = page.locator('div.ql-editor');  
  const author = page.locator('p:has(span:has-text("author"))');
  const date = page.locator('p:has(span:has-text("author"))');
  const source = page.locator('input[formcontrolname="source"]');

  // 5. Перевірка наявності
  await expect(title).toBeVisible();
  await expect(tags).toBeVisible();
  await expect(addImage).toBeVisible();
  await expect(mainText).toBeVisible();
  await expect(author).toBeVisible();
  await expect(date).toBeVisible();
  await expect(source).toBeVisible();

   // 5.1 Перевірка лічильника Title
   await expect(page.getByText('0/170')).toBeVisible();

  // 6. Перевірка тегів

  const allTags = ['News', 'Events', 'Education', 'Initiatives', 'Ads'];

  for (const tag of allTags) {
    await expect(
      page.getByRole('button', { name: tag })
    ).toBeVisible();
  };

   // 7. Перевірка кнопок
   
   await expect(
    page.getByRole('button', { name: 'Cancel' }).nth(1)
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Preview' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Publish' })
  ).toBeVisible();   
 
});