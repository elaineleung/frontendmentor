const gridEl = document.getElementById("gridEl");

function getData() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // const URL = window.document.URL === "http://127.0.0.1:5500/"
  //   ? "./challenges.json"
  //   : "./public/challenges.json"

  fetch("./public/challenges.json")
    .then((response) => response.json())
    .then((data) => {
      data.challenges.map((item) => {
        const div = document.createElement("div");
        const url = item.internalhost === true ? `./${item.name}` : item.url;
        const repo = item.internalhost === true 
        ? `https://github.com/elaineleung/frontendmentor/tree/main/${item.name}`
        : item.repo

        div.innerHTML = `
        <div class="card">
          <a href="${url}">
            <div class="card__image">
              <img src="./${item.name}/design/desktop.png" />
            </div>
          </a>
          <div class="card__content">
            <a href="${url}">
              <h2 class="card__title">${item.title}</h2>
            </a>
            <a class="card__text" href="${repo}">
              Github repo here
            </a>
          </div>
        </div>
        `;
        gridEl.appendChild(div);
      });
    });
}

// function getData() {
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   fetch("/frontendmentor/public/challenges.json", options)
//     .then((response) => response.json())
//     .then((data) => {
//       data.challenges.map((item) => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <a href="/${item.name}">
//           <div class="card">
//             <div class="card__image">
//               <img src="/frontendmentor/${item.name}/design/desktop.png" />
//             </div>
//             <h3 class="card__title">${item.title}</h3>
//           </div>
//         </a>
//         `;
//         gridEl.appendChild(div);
//       });
//     });
// }

getData();
