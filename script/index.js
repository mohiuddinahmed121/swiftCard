const loadTrendingthreedata = () => {
   fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => displayTrendingthreedata(json));
};

const displayTrendingthreedata = (trends) => {
   const trendingNow = document.getElementById("trending-now");
   trendingNow.innerHTML = "";

   for (let trend of trends) {
      // create element
      const trendingDiv = document.createElement("div");
      trendingDiv.innerHTML = `
            <div class="card bg-base-100 w-96 h-96 shadow-sm">
               <figure>
                  <img
                     class="h-40 pt-5"
                     src="${trend.image}"
                     alt="Shoes"
                  />
               </figure>
               <div class="card-body">
                  <h2 class="card-title justify-between">
                     <div class="badge bg-blue-300 text-blue-700">${trend.category}</div>
                     <div class="flex items-center gap-2">
                        <i class="text-yellow-500 fa-solid fa-star"></i>
                        <p>${trend.rating.rate}</p>
                     </div>
                  </h2>
                  <p class="">${trend.title}</p>
                  <h1 class="font-bold text-xl">$${trend.price}</h1>
                  <div class="flex justify-between">
                     <div class="btn btn-outline w-40">
                        <i class="fa-regular fa-eye"></i>Details
                     </div>
                     <div class="btn btn-primary w-40">
                        <i class="fa-solid fa-cart-shopping"></i>Add
                     </div>
                  </div>
               </div>
            </div>
      `;

      trendingNow.append(trendingDiv);
   }
};

loadTrendingthreedata();
