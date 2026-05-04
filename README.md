# Tech Gadget Store - Next.js & Firebase Assessment

This is a professional Gadget Store application built with **Next.js (App Router)**, **Tailwind CSS**, and **Firebase Authentication**. The app features a clean UI, responsive design, and protected management routes.

## 🚀 Live Demo
 Link : https://rifat-tech-store-bd.netlify.app/

## ✨ Key Features
- **Firebase Authentication**: Secure Email/Password and Google Login.
- **Dynamic Routing**: Individual product details pages using App Router.
- **Search & Filtering**: Real-time product search and category-wise filtering.
- **Protected Routes**: Secure pages for adding and managing products (accessible only to logged-in users).
- **Responsive UI**: Fully optimized for Mobile, Tablet, and Desktop.
- **Modern Tech Stack**: Built with Next.js 14, Tailwind CSS, Lucide Icons, and React Hot Toast.

## 🛠️ Tech Stack
- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📂 Project Structure & Routes
| Route | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | Landing page with 7 premium sections. |
| `/items` | Public | Searchable and filterable gadget listing. |
| `/items/[id]` | Public | Dynamic product details page. |
| `/about` | Public | Information about the application. |
| `/login` | Public | Email & Google authentication. |
| `/items/add` | **Protected** | Form to add new products. |
| `/items/manage`| **Protected** | Dashboard to view and delete products. |

