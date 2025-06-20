# 🍋 Lemon-Daze - E-Commerce Web App

## 📖 Overview  
**Lemon-Daze** is a full-stack modern e-commerce platform where users can browse, add products to a cart, manage their cart items, and perform secure user authentication.

---

## 🎯 Key Features  

- 🛒 **Add to Cart** — Authenticated users can add products to their cart.
- ❌ **Remove from Cart** — Delete products individually from cart.
- 🔒 **User Authentication** — Secure login and signup using JWT.
- 📦 **Product Listing** — Products fetched from a backend API.
- 💳 **Checkout Simulation** — Simulated checkout experience.
- 📱 **Responsive Design** — Mobile, tablet, and desktop support.
- 🚀 **Loader State Handling** — Shows loader on API calls.
- 🖥️ **Protected Routes** — Certain pages restricted to logged-in users.
- ☁️ **Cloud Deployment** — Railway (backend) and Vercel (frontend).

---

## 🛠️ Tech Stack  

- **Frontend:** React, Tailwind CSS, React Router, Context API  
- **Backend:** Node.js, Express.js, MongoDB  
- **Auth:** JWT (JSON Web Token)  
- **HTTP Client:** Axios (with interceptors for loader management)  
- **Deployment:** Railway (backend), Vercel (frontend)

---

## 🖥️ Live Demo  

🌐 [Live Site](https://lemon-daze.vercel.app)

📂 [Backend Repo](https://github.com/sajan/lemon-daze-backend)

📂 [Frontend Repo](https://github.com/sajan/lemon-daze-frontend)

---

## 📊 Project Flow  

1️⃣ **Homepage Access**  
- User lands on the homepage and can view a list of available products.

2️⃣ **Add to Cart (Authentication Check)**  
- Clicking **Add to Cart**:
  - ✅ If logged in → product gets added to cart.
  - ❌ If not logged in → redirects to the **Login** page with an alert.

3️⃣ **Login Flow**  
- Accessible from the **Login button** in the header.
- From the Login page:
  - User can login.
  - Or navigate to **Signup** if not registered.

4️⃣ **After Successful Login**  
- Authenticated users can:
  - Add products to cart.
  - View/delete products in the **Cart page**.
  - Access **Add Product page**.
  - Logout from the header button.

5️⃣ **Logout Flow**  
- On **Logout**, user is redirected to the homepage.
- Protected routes become inaccessible until logged in again.


## 📝 Learning Outcomes  

- Full-stack integration using MERN stack  
- JWT implementation for secure authentication  
- Global loader management using Axios interceptors  
- Deployment using Railway and Vercel  
- UX enhancements with loaders, error handling, and protected routing



