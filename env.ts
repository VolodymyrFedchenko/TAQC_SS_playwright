import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.resolve(__dirname, '..', '.env')});


const BASE_UI_URL = process.env.BASE_UI_URL || 'https://playwright.dev/';
const HEADLESS = process.env.HEADLESS === 'true'
const USER_EMAIL = process.env.USER_EMAIL
const USER_PASSWORD = process.env.USER_PASSWORD



export {BASE_UI_URL, HEADLESS, USER_EMAIL, USER_PASSWORD}