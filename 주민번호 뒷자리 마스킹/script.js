'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input')
  const button = document.querySelector('button')

  button.addEventListener('click', (event) => {


    const str = input.value

    let maskingFunc = {

      checkNull: function (str) {
        if (typeof str == "undefined" || str == null || str === "") {
          return true;
        } else {
          return false;
        }

      },


      rrn: function (str) {
        let originStr = str;
        let rrnStr;
        let maskingStr;
        let strLength;

        if (this.checkNull(originStr) === true) {
          return originStr;
        }
        rrnStr = originStr.match(/(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4]{1}[0-9]{6}\b/gi);
        if (this.checkNull(rrnStr) === false) {
          strLength = rrnStr.toString().split('-').length;
          maskingStr = originStr.toString().replace(rrnStr, rrnStr.toString().replace(/(-?)([1-4]{1})([0-9]{6})\b/gi, "$1$2******"));
        } else {
          rrnStr = originStr.match(/\d{13}/gi);
          if (this.checkNull(rrnStr) === false) {
            strLength = rrnStr.toString().split('-').length;
            maskingStr = originStr.toString().replace(rrnStr, rrnStr.toString().replace(/([0-9]{6})$/gi, "******"));
          } else {
            return originStr;
          }
        }
        return maskingStr;
      }
    }

    alert(maskingFunc.rrn(str));
  })

})



