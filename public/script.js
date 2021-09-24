const gridEl = document.getElementById("gridEl");

function getData() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  fetch("./challenges.json")
    .then((response) => response.json())
    .then((data) => {
      data.challenges.map((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a href="/${item.name}">
          <div class="card">
            <div class="card__image">
              <img src="./${item.name}/design/desktop.png" />
            </div>
            <h3 class="card__title">${item.title}</h3>
          </div>
        </a>
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


