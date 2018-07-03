 export const loadGoogleMap = () => new Promise((resolve) => {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAl2iRLsBmTHjXqPtfb9cgL8rH1-P_EbZQ";
  script.async = true;
  script.onload = resolve;
  document.body.appendChild(script);
})

export const googlePlace = () => {
  // const script = document.createElement("script");
  // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyADM2ER7rHDGJs7drMA78l3aXxik3QRDGc&libraries=places`;
  // script.async = true;
  // script.onload = resolve;
  // document.body.appendChild(script);
}

//온 로드가 되면 리졸브 함수 실행
// 온 로드가
// then 시작되는 조건이 promise안에서 resolve



// const script = document.createElement("script");
// script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAl2iRLsBmTHjXqPtfb9cgL8rH1-P_EbZQ";
// script.async = true;
// script.onload = callback;
// document.body.appendChild(script);
