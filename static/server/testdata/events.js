import Faker from 'faker';

let id = 0;

const primaryKeyID = function(){
  return id++
}

const randAdID = function(){
  const randAdIDArr = ['1akswjfk28fb230vbs93', '2sk1g02hdl29v82jolj2', 'kjs19dh39d9s9sh2nsou', 'fabe23jkbdsug3923gfd', 'aadjf20ry0ho2sdhfa02']
  const randIndex = Math.ceil(Math.random()*4)
  return randAdIDArr[randIndex]
}

const randAppID = function(){
  const randAppIDArr = ['1111', '2222', '3333', '4444', '555']
  const randIndex = Math.ceil(Math.random()*4)
  return randAppIDArr[randIndex]
}

const randPubID = function(){
  const randPubIDArr = ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee']
  const randIndex = Math.ceil(Math.random()*4)
  return randPubIDArr[randIndex]
}

const randViewName = function(){
  const randViewArr = ['Home', 'Settings', 'Profile', 'Friends', 'Inbox', 'Forum', 'Side Menu']
  const randIndex = Math.ceil(Math.random()*6)
  return randViewArr[randIndex]
}

const randCatName = function(){
  const randCatArr = ['Button', 'Tabs', 'Cards', 'Cat1', 'Cat2', 'Cat3']
  const randIndex = Math.ceil(Math.random()*5)
  return randCatArr[randIndex]
}

const randActionName = function(){
  const randActionArr = ['Submit Button', 'Log Out Button', 'Slide Right', 'Slide Left', 'Back', 'Tab1', 'Tab2', 'Tab3', 'Tab4']
  const randIndex = Math.ceil(Math.random()*8)
  return randActionArr[randIndex]
}

const randLabelName = function(){
  const randLabelArr = ['label 1', 'label 2', 'label 3', 'label 4', 'label 5']
  const randIndex = Math.ceil(Math.random()*4)
  return randLabelArr[randIndex]
}


const events = [
  {
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },{
    id: primaryKeyID(),
    viewName: randViewName(),
    advertisingID: randAdID(),
    appID: randAppID(),
    campaignID: Faker.random.number(),
    publisherID: randPubID(),
    categoryName: randCatName(),
    actionName: randActionName(),
    labelName: randLabelName(),
    value: Faker.random.boolean()
  },

]

export default events;
