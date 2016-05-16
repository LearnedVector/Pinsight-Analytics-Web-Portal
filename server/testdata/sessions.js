let id = 0;

const primaryKeyID = function(){
  return id++
}

const randAdID = function(){
  const randAdIDArr = ['1akswjfk28fb230vbs93', '2sk1g02hdl29v82jolj2', 'kjs19dh39d9s9sh2nsou', 'fabe23jkbdsug3923gfd', 'aadjf20ry0ho2sdhfa02']
  const randIndex = Math.ceil(Math.random()*4)
  return randAdIDArr[randIndex]
}

const randViewName = function(){
  const randViewArr = ['Home', 'Settings', 'Profile', 'Friends', 'Inbox', 'Forum', 'Side Menu']
  const randIndex = Math.ceil(Math.random()*6)
  return randViewArr[randIndex]
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

const randSessionStart = function(){
  const randSeshArr = [1, 2, 3, 4, 5]
  const randIndex = Math.ceil(Math.random()*4)
  return randSeshArr[randIndex]
}

const randSessionEnd = function(){
  const randSeshArr = [6, 7, 8, 9, 10]
  const randIndex = Math.ceil(Math.random()*4)
  return randSeshArr[randIndex]
}

const sessions = [
  {
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },{
    id: primaryKeyID(),
    screenName: randViewName(),
    sessionStart: randSessionStart(),
    sessionEnd: randSessionEnd(),
    advertisingID: randAdID(),
    appID: randAppID(),
    publisherID: randPubID()
  },
]

export default sessions;
