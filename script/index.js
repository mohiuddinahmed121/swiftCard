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

const loadAllData = () => {
   document.getElementById("allHomeElement").classList.add("hidden");
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

// const loadHome = () => {
//    const homeElement = document.getElementById("allHomeElement");
//    homeElement.innerHTML = "";

//    const homeDiv = document.createElement("div");
//    homeDiv.innerHTML = `
//             <section>
//          <div
//             class="min-h-[60vh] bg-cover bg-[linear-gradient(rgba(17,24,39,0.7),rgba(17,24,39,0.7)),url('./Assets/banner-image.png')]"
//          >
//             <div class="text-center py-10">
//                <h1 class="text-3xl font-bold pt-30 text-white">Best Collection For You</h1>
//                <p class="text-xl mt-5 text-white">
//                   Discover the latest trends in fashion, electronics, and more. <br />
//                   Shop with confidence and style at SwiftCart
//                </p>

//                <button class="btn btn-primary md:mt-5">Shop Now</button>
//             </div>
//          </div>
//       </section>

//       <section class="bg-gray-100">
//          <div class="pt-16 text-center">
//             <h1 class="text-3xl font-bold items-center">Why Choose Us</h1>
//             <p class="text-xl mt-3 text-gray-600">
//                We provide the best shopping experience with top-notch services
//             </p>
//          </div>
//          <div class="flex px-16 py-16 gap-10 flex-col-reverse md:flex-row">
//             <div>
//                <div
//                   class="relative top-5 left-5 border-2 border-white bg-blue-200 rounded-lg px-2 py-2 h-10 w-10"
//                >
//                   <i class="text-blue-600 fa-solid fa-truck"></i>
//                </div>
//                <div class="border border-gray-300 bg-white px-10 py-10 rounded-2xl">
//                   <h3 class="font-bold">Fast Delivery</h3>
//                   <p>Get your orders delivered to your doorstep quickly and efficiently</p>
//                </div>
//             </div>
//             <div>
//                <div
//                   class="relative top-5 left-5 border-2 border-white bg-blue-200 rounded-lg px-2 py-2 h-10 w-10"
//                >
//                   <i class="text-blue-600 fa-solid fa-shield-halved"></i>
//                </div>
//                <div class="border border-gray-300 bg-white px-10 py-10 rounded-2xl">
//                   <h3 class="font-bold">Secure Payment</h3>
//                   <p>Experience safe and secure transactions with our encrypted payment systems</p>
//                </div>
//             </div>
//             <div>
//                <div
//                   class="relative top-5 left-5 border-2 border-white bg-blue-200 rounded-lg px-2 py-2 h-10 w-10"
//                >
//                   <i class="text-blue-600 fa-solid fa-headphones"></i>
//                </div>
//                <div class="border border-gray-300 bg-white px-10 py-10 rounded-2xl">
//                   <h3 class="font-bold">24/7 Support</h3>
//                   <p>Our support team is available around the clock to assist you</p>
//                </div>
//             </div>
//             <div>
//                <div
//                   class="relative top-5 left-5 border-2 border-white bg-blue-200 rounded-lg px-2 py-2 h-10 w-10"
//                >
//                   <i class="text-blue-600 fa-solid fa-arrow-rotate-left"></i>
//                </div>
//                <div class="border border-gray-300 bg-white px-10 py-10 rounded-2xl">
//                   <h3 class="font-bold">Easy Returns</h3>
//                   <p>Not satisfied? Return your products easily within 30 days</p>
//                </div>
//             </div>
//          </div>
//       </section>

//       <section class="py-10">
//          <div class="py-5 pl-36">
//             <h1 class="font-bold text-3xl">Trending Now</h1>
//          </div>
//          <div id="trending-now" class="grid md:grid-cols-3 grid-cols-1 md:px-36 px-10 gap-10">
//             <!-- <div class="card bg-base-100 w-96 shadow-sm">
//                <figure>
//                   <img
//                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                      alt="Shoes"
//                   />
//                </figure>
//                <div class="card-body">
//                   <h2 class="card-title justify-between">
//                      <div class="badge bg-blue-300 text-blue-700">Men's Clothing</div>
//                      <div class="flex items-center gap-2">
//                         <i class="text-yellow-500 fa-solid fa-star"></i>
//                         <p>3.9</p>
//                      </div>
//                   </h2>
//                   <p class="">Fjallraven-Foldsack No.1 Backpackm,..</p>
//                   <h1 class="font-bold text-xl">$109.95</h1>
//                   <div class="flex justify-between">
//                      <div class="btn btn-outline w-40">
//                         <i class="fa-regular fa-eye"></i>Details
//                      </div>
//                      <div class="btn btn-primary w-40">
//                         <i class="fa-solid fa-cart-shopping"></i>Add
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div class="card bg-base-100 w-96 shadow-sm">
//                <figure>
//                   <img
//                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                      alt="Shoes"
//                   />
//                </figure>
//                <div class="card-body">
//                   <h2 class="card-title justify-between">
//                      <div class="badge bg-blue-300 text-blue-700">Men's Clothing</div>
//                      <div class="flex items-center gap-2">
//                         <i class="text-yellow-500 fa-solid fa-star"></i>
//                         <p>3.9</p>
//                      </div>
//                   </h2>
//                   <p class="">Fjallraven-Foldsack No.1 Backpackm,..</p>
//                   <h1 class="font-bold text-xl">$109.95</h1>
//                   <div class="flex justify-between">
//                      <div class="btn btn-outline w-40">
//                         <i class="fa-regular fa-eye"></i>Details
//                      </div>
//                      <div class="btn btn-primary w-40">
//                         <i class="fa-solid fa-cart-shopping"></i>Add
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div class="card bg-base-100 w-96 shadow-sm">
//                <figure>
//                   <img
//                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                      alt="Shoes"
//                   />
//                </figure>
//                <div class="card-body">
//                   <h2 class="card-title justify-between">
//                      <div class="badge bg-blue-300 text-blue-700">Men's Clothing</div>
//                      <div class="flex items-center gap-2">
//                         <i class="text-yellow-500 fa-solid fa-star"></i>
//                         <p>3.9</p>
//                      </div>
//                   </h2>
//                   <p class="">Fjallraven-Foldsack No.1 Backpackm,..</p>
//                   <h1 class="font-bold text-xl">$109.95</h1>
//                   <div class="flex justify-between">
//                      <div class="btn btn-outline w-40">
//                         <i class="fa-regular fa-eye"></i>Details
//                      </div>
//                      <div class="btn btn-primary w-40">
//                         <i class="fa-solid fa-cart-shopping"></i>Add
//                      </div>
//                   </div>
//                </div>
//             </div> -->
//          </div>
//       </section>
//       `;

//    homeElement.append(homeDiv);
// };

loadTrendingthreedata();
