# GoogleForm-Library-LineNotify
เป็นโค้ดที่เอาไว้ใช้กับ Google-Form ส่งข้อมูล+รูปภาพ ผ่าน Library LineNotify

# สามารถส่งได้หลายกลุ่ม :
 ```javascript
const token = ["token1","token2"] //รูปแบบจะเป็นแบบนี้
```
# LibraryLineNotify :
ScriptID: 1Nsy06e5D6PHVUdgIIwEjL77ICYfTmsPcI_XhENneAlrSG-j1U_FwSEoF

# คำสั่ง Library LineNotify :
 ```javascript
 const token ="token"
const notify = new lib.lineNotify(token)
notify.sendText("ทดสอบ Line Notify")
notify.sendImage("https://drive.google.com/file/d/1bWcw_NUPxze8vl_cbES5QJ8WoSmQOaBc/view?usp=sharing","ทดสอบ")

notify.sendImage("1bWcw_NUPxze8vl_cbES5QJ8WoSmQOaBc","ทดสอบ") //สามารถใช้แค่รหัสรูปภาพได้ for Google-Form

notify.sendImage("https://www.krabiteerapongtour.com/uploads/album/album/pic-61238254271.jpg","รูป")
notify.sendSticker(1992,446,"เยี่ยม")
notify.status() //return object {"status":200,"massage":200,"targetType":"USER",target:"WR_Nr"}
 ```
