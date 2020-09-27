export default {
  getAttrArrs(arr, attr) {
    let attrValue = arr.map(item => {
      return item[attr]
    })
    let attrValueList = []
    for (let i = 0; i < attrValue.length; i++) {
      if (attrValue.indexOf(attrValue[i]) === i) {
        attrValueList.push(attrValue[i])
      }
    }
    let newAttr = []
    let newAttrs = []
    for (let i = 0; i < attrValueList.length; i++) {
      newAttr = []
      newAttr = arr.filter(function (item) {
        return item[attr] === attrValueList[i]
      })
      newAttrs.push(newAttr)
    }
    return newAttrs
  }
}