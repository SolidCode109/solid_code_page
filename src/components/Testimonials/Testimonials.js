// 'use client';

// import React, { useEffect } from "react";

// const testimonials = [
//     {
//         id: "1",
//         name: "Klient 1",
//         image: "/kontakt.webp",
//         testemonial: "Lorem",
//     },
//     {
//         id: "2",
//         name: "Klient 3",
//         image: "/kontakt.webp",
//         testemonial: "Lorem",
//     },
//     {
//         id: "3",
//         name: "Klient 3",
//         image: "/kontakt.webp",
//         testemonial: "Lorem",
//     },
//     {
//         id: "4",
//         name: "Klient 4",
//         image: "/kontakt.webp",
//         testemonial: "Lorem",
//     }
// ];


// // const Testimonials = () => {
// //     useEffect(() => {
// //       const swiper = new window.Swiper('.swiper-container', {
// //           autoplay: {
// //               delay: 5000,
// //           },
// //           loop: true,
// //           slidesPerView: 1,
// //           spaceBetween: 20,
// //           effect: "creative",
// //           creativeEffect: {
// //           prev: {
// //               shadow: true,
// //               translate: ["-120%", 0, -500],
// //           },
// //           next: {
// //               shadow: true,
// //               translate: ["120%", 0, -500],
// //           },
// //           },
// //           pagination: {
// //               el: '.swiper-pagination',
// //               clickable: true,
// //               type: "fraction",
// //           },
// //           on: {
// //               slideChangeTransitionStart: function () {
// //                   document.querySelectorAll('.testimonial-thumb img').forEach(img => {
// //                   img.classList.remove('animated', 'zoomIn');
// //                   img.style.opacity = '0';
// //                   });
// //               },
// //               slideChangeTransitionEnd: function () {
// //                   document.querySelectorAll('.testimonial-thumb img').forEach(img => {
// //                   img.classList.add('animated', 'zoomIn');
// //                   img.style.opacity = '1';
// //                   });
// //               }
// //           }
// //       });
// //     }, []);
  
//     return (
//       <div className="container">
//         <div className="row testimonials justify-content-center">
//           <div className="col-12 col-md-10 col-lg-7">
//             <div className="swiper-container slider-min items">
//               <div className="swiper-wrapper">
//                 {testimonials.map((testimonials, index) => (
//                   <div className="swiper-slide item" key={index}>

//                   </div>
//                 ))}
//               </div>
//               <div className="swiper-pagination"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default Testimonials;