// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function (driver){
    return driver.name
  })
}

function exactMatch(driver, attribute) {
  return drivers.filter(fucntion (driver){
    return drivers.attribute === attribute
  })
}
