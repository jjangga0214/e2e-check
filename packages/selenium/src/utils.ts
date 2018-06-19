import { By } from 'selenium-webdriver';

export const $ = (selector: string) => driver.findElement(By.css(selector));
export const $$ = (selector: string) => driver.findElements(By.css(selector));
