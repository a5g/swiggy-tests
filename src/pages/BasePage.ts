// BasePage will hold the generic methods that can be used by other children pages
// This would generally include methods for
// navigation
// findingElements (custom implementation)
// scrolling
// file uploads etc.,
import cnfg from '../../config/env'
const elementTimeout = 15000

const config: any = cnfg()

export default class BasePage {
  navigateTo(url = config.ui.baseurl) {
    try {
      browser.navigateTo(url)
    } catch (err) {
      throw `unable to load page: ${err.toString()}`
    }
  }

  findVisibleElement(locator) {
    let ele = browser.$(locator)
    ele.waitForDisplayed(elementTimeout)

    return ele
  }
}
