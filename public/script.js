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
        div.innerHTML = `
        <div class="card">
          <a href="./${item.name}">
            <div class="card__image">
              <img src="./${item.name}/design/desktop.png" />
            </div>
          </a>
          <a href="./${item.name}">
            <h2 class="card__title">${item.title}</h2>
          </a>
          <a class="card__text" href="https://github.com/elaineleung/frontendmentor/tree/main/${item.name}">
            Github repo here
          </a>
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


