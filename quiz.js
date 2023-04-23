document.addEventListener('DOMContentLoaded', postData);
console.log(document.location.search);

const data = document.location.search;
const params = new URLSearchParams(data);
