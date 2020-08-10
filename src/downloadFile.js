export function downloadFile(path, name) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open("get", path);
    xhr.responseType = "blob";
    xhr.send();
    xhr.onload = function () {
      if (this.status === 200 || this.status === 304) {
        if ("msSaveOrOpenBlob" in navigator) {
          navigator.msSaveOrOpenBlob(this.response, name);
          return;
        }
        const url = URL.createObjectURL(this.response);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
  } catch (err) {
    console.log(err);
    window.location.href = path;
  }
}
