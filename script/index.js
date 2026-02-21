const loadTrendingthreedata = () => {
   fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => displayTrendingthreedata(json));
};

const displayTrendingthreedata = (trends) => {
   const trendingNow = document.getElementById("trending-now");
   trendingNow.innerHTML = "";

   const topThree = trends.slice(0, 3);
   for (let trend of topThree) {
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
                     <div onclick="loadDetails('${trend.id}')" class="btn btn-outline w-40">
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

const loadAllData = () => {
   document.getElementById("allHomeElement").classList.add("hidden");
   document.getElementById("show-all-product").classList.remove("hidden");
   fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => displayAllProduct(json));
};

const displayAllProduct = (products) => {
   const trendingNow = document.getElementById("show-all-product");
   trendingNow.innerHTML = "";

   for (let product of products) {
      const trendingDiv = document.createElement("div");
      trendingDiv.innerHTML = `
            <div class="card bg-base-100 w-96 h-96 shadow-sm">
               <figure>
                  <img
                     class="h-40 pt-5"
                     src="${product.image}"
                     alt="Shoes"
                  />
               </figure>
               <div class="card-body">
                  <h2 class="card-title justify-between">
                     <div class="badge bg-blue-300 text-blue-700">${product.category}</div>
                     <div class="flex items-center gap-2">
                        <i class="text-yellow-500 fa-solid fa-star"></i>
                        <p>${product.rating.rate}</p>
                     </div>
                  </h2>
                  <p class="">${product.title}</p>
                  <h1 class="font-bold text-xl">$${product.price}</h1>
                  <div class="flex justify-between">
                     <div onclick="loadDetails('${product.id}')" class="btn btn-outline w-40">
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

const loadDetails = async (id) => {
   const url = `https://fakestoreapi.com/products/${id}`;
   const res = await fetch(url);
   const details = await res.json();
   displayDetails(details);
};

const displayDetails = (product) => {
   const detailsBox = document.getElementById("details-container");
   detailsBox.innerHTML = `
   
   <div id="" class="space-y-5">
               <div>
                  <h2 class="text-2xl font-bold">
                     ${product.title}
                  </h2>
               </div>
               <div>
                  <h2 class="font-bold">Description</h2>
                  <p>${product.description}</p>
               </div>
               <div>
                  <h2 class="font-bold">Category</h2>
                  <p>${product.category}</p>
               </div>
               <div>
                  <h2 class="font-bold">Count</h2>
                  <div class="">
                     ${product.rating.count}
                  </div>
               </div>
            </div>

   `;
   document.getElementById("product_modal").showModal();
};

const loadHome = () => {
   document.getElementById("allHomeElement").classList.remove("hidden");
   document.getElementById("show-all-product").classList.add("hidden");
};

loadTrendingthreedata();
