
function myFunction() {
  
  const form = FormApp.openById('formid') 
  const token = ["token"] 
  
  const formResponses = form.getResponses()
  if (formResponses.length > 0) {
    formResponses
  }
  else {
    throw new Error("ไม่พบข้อมูล")
  }
  const itemResponses = formResponses[formResponses.length - 1].getItemResponses()

  var msg = ""
  var titleRespon = []
  var itemRespon = []
  var imgRes = ""
  var urlimage = ""

  for (var i = 0; i < itemResponses.length; i++) {
    titleRespon.push(itemResponses[i].getItem().getTitle())
    itemRespon.push(itemResponses[i].getResponse())

    if (typeof itemRespon[i] == "object") {
      imgRes = "https://drive.google.com/open?id=" + itemRespon[i]
      urlimage = itemRespon[i][0]
    }
    else {
      imgRes = itemRespon[i]
    }
    msg += "( " +(i + 1)+ " )" + titleRespon[i] + " : " + imgRes + "\n"
  }
  // console.log(titleRespon)
  // console.log(itemRespon)

  for (var k = 0; k < token.length; k++) {
    sendlineNotify(token[k], urlimage, msg)
  }
}

function sendlineNotify(token, urlimage, msg) {
  const notify = new lib.lineNotify(token)
  notify.sendImage(urlimage, msg)
}
