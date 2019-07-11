// spec file contains all tests for swiggy order sample
import { expect } from 'chai'
import InitPage from '../src/pages/InitPage'
import HomePage from '../src/pages/HomePage'
import SearchPage from '../src/pages/SearchPage'
import RestaurantPage from '../src/pages/ResturantPage'
import CheckoutPage from '../src/pages/CheckoutPage'
import * as util from '../util/util'
const data = require(`../data/${util.getResturant()}`)

const initPage: InitPage = new InitPage()
const homePage: HomePage = new HomePage()
const searchPage: SearchPage = new SearchPage()
const restaurantPage: RestaurantPage = new RestaurantPage()
const checkoutPage: CheckoutPage = new CheckoutPage()

describe(`siwggy order tests`, () => {
  it(`should load swiggy init page`, () => {
    homePage.navigateTo()
  })

  it(`should enter delivery location '${data.location}'`, () => {
    initPage.enterDeliveryLocation(data.location)
  })

  it(`should select first result from suggested locations`, () => {
    initPage.selectDeliveryLocationByIndex(1)

    // can choose result by name
    // initPage.selectDeliveryLocationByName(
    //   'Indiranagar, Bengaluru, Karnataka, India',
    // )
  })

  it(`should go to search page`, () => {
    homePage.gotoSearchPage()
  })

  it(`should find resturant '${data.restaurant}'`, () => {
    searchPage.enterResturant(data.restaurant)
    searchPage.chooseResturant(data.restaurant)

    // choose a location, if multiple options are provided
    // bite me restaurant gives two options
    // 1. Indiranagar
    // 2. Koramangala
    if (data.locationOptions && data.locationOptions.length > 0) {
      searchPage.chooseLocation(data.locationOptions[0])
    }
  })

  // iterate through list of items to be added to cart
  // name and qty is provided in the config.
  // refer to data/freshbites.json or data/biteme.json or data/cakezone.json for more details
  data.items.forEach((item, index) => {
    if (item.qty > 0) {
      it(`should add {item: ${item.name}, qty: ${item.qty}}`, () => {
        restaurantPage.addItem(item.name)

        if (item.qty > 1) {
          for (let i = 0; i < item.qty - 1; i++) {
            restaurantPage.increaseQty(item.name)
          }
        }
      })
    }
  })

  it(`should go to checkout page`, () => {
    restaurantPage.gotoCheckoutPage()
  })

  it('should open new user signup form', () => {
    checkoutPage.openSignupForm()
  })

  it(`should fill user details ${JSON.stringify(data.user)}`, () => {
    checkoutPage.fillForm(data.user)
    checkoutPage.clickReferralCodeLink()
    checkoutPage.clickContinueBtn()
  })

  it(`should show email error '${data.error.emailInvalid}'`, () => {
    const err = checkoutPage.getEmailError()

    // verify that right error message is shown in UI
    expect(err).to.eq(data.error.emailInvalid)

    // take screenshot at this point
    browser.takeScreenshot()
  })

  it(`should reduce '${data.items[0].name}' quantity by 1`, () => {
    checkoutPage.decreaseQty(data.items[0].name)

    // verify the qty after reducing
    expect(Number(checkoutPage.getQty(data.items[0].name))).to.eq(
      data.items[0].qty - 1,
    )

    // take screenshot at this point
    browser.takeScreenshot()
  })
})
