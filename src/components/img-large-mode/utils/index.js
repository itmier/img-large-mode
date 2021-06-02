/*
 * @Author: Tmier
 * @Date: 2021-06-02 09:17:39
 * @LastEditTime: 2021-06-02 18:14:32
 * @Description: 
 * @LastModifiedBy: Tmier
 */
export function getBlob(url) {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url,true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      
    }
  })
}