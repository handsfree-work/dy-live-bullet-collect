const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const resourceLoader = new jsdom.ResourceLoader({
    strictSSL: false,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36",
});

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p></html>`, {
    url: "https://live.douyin.com",
    referrer: "https://live.douyin.com",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
    resources: resourceLoader
});

// const navigator = {
//     plugins: {},
//     webdriver: false,
//     platform: 'Win32',
//     userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36"
// }
const navigator = dom.window.navigator
exports.dom = dom

const {window} = dom

const {document} = window

navigator.webdriver = false
navigator.platform = 'Win32'
console.log(navigator.userAgent)
// exports.dom = {
//     window: {
//         navigator, sessionStorage: {
//             getItem() {
//                 return null
//             }, removeItem() {
//                 return undefined
//             }
//         }, localStorage: {
//             getItem() {
//                 return null
//             }, removeItem() {
//                 return undefined
//             }
//         },
//     }, document: {
//         referer: "https://live.douyin.com", addEventListener() {
//
//         }
//     },
// }
