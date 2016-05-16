let id = 0;

const primaryKeyID = function(){
  return id++
}

const randAdID = function(){
  const randAdIDArr = ['1akswjfk28fb230vbs93', '2sk1g02hdl29v82jolj2', 'kjs19dh39d9s9sh2nsou', 'fabe23jkbdsug3923gfd', 'aadjf20ry0ho2sdhfa02']
  const randIndex = Math.ceil(Math.random()*4)
  return randAdIDArr[randIndex]
}

const randManufacture = function(){
  const randManArr = ['HTC', 'Apple', 'Samsung', 'Motorola', 'Nokia']
  const randIndex = Math.ceil(Math.random()*4)
  return randManArr[randIndex]
}

const randOS = function(){
  const randOsArr = ['android', 'ios']
  const randIndex = Math.ceil(Math.random())
  return randOsArr[randIndex]
}

const randModel = function(){
  const randModelArr = ['s7', 's6', '6', '6s', '4', '4s', 'one', 'note', 'note5']
  const randIndex = Math.ceil(Math.random()*8)
  return randModelArr[randIndex]
}

const randProduct = function(){
  const randProductArr = ['phone', 'tablet']
  const randIndex = Math.ceil(Math.random())
  return randProductArr[randIndex]
}

const randServiceProvider = function(){
  const randSerArr = ['tmobile', 'sprint', 'verizon', 'ATT']
  const randIndex = Math.ceil(Math.random()*3)
  return randSerArr[randIndex]
}
const devices = [
  {
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  },{
    id: primaryKeyID(),
    advertisingID: randAdID(),
    osVersion: randOS(),
    model: randModel(),
    product: randProduct(),
    manufacturer: randManufacture(),
    serviceProvider:randServiceProvider()
  }
]

export default devices;
