/*
 * @Author: Tmier
 * @Date: 2021-06-02 09:17:39
 * @LastEditTime: 2021-06-03 11:24:06
 * @Description:
 * @LastModifiedBy: Tmier
 */
// blob下载
export async function downFile(url, fileName = "download") {
  try {
    let blob = null;
    // 本地图片 网络图片 base64图片处理
    if (url.startsWith("http")) {
      blob = await getBlob(url);
    } else if (url.startsWith("data:image")) {
      let mime = getBase64Type(url);
      blob = mime ? dataURLtoBlob(url, mime) : dataURLtoBlob(url);
    } else if (url.startsWith("/")) {
      blob = await getBlob(window.origin + url);
    } else {
      return;
    }

    let a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  } catch (error) {
    console.log(error);
  }
}
// 将base64转为blob
export function dataURLtoBlob(base64, mimeType = "image/png") {
  let bytes = window.atob(base64.split(",")[1]);
  let ab = new ArrayBuffer(bytes.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeType });
}
// 将网络url转为blob
export function getBlob(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject();
      }
    };
    xhr.send();
  });
}
// 获取base64文件类型
export function getBase64Type(base64) {
  let index0 = base64.indexOf(":");
  let index1 = base64.indexOf(";");
  let mime = "";
  if (index0 !== -1 && index1 !== -1) {
    mime = base64.slice(index0 + 1, index1);
  }
  return mime;
}
