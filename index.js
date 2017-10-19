// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
  return drivers.name
}

function exactMatch(driver, attribute) {
  return drivers.filter(fucntion (driver){
    return drivers.attribute === attribute 
  })
}