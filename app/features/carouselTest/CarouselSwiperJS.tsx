// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";

// const carouselItems = [
//   { id: 1, title: "Photographie", imageSrc: "/images/photographie1.jpg" },
//   { id: 2, title: "Vidéo Créative", imageSrc: "/images/video1.jpg" },
//   { id: 3, title: "Montage Vidéo", imageSrc: "/images/montage1.jpg" },
// ];

// export default function Carousel() {
//   return (
//     <section className="relative mx-auto w-full max-w-6xl py-10">
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full"
//       >
//         {carouselItems.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
//               <Image
//                 src={item.imageSrc}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
//                 <h2 className="text-xl font-bold">{item.title}</h2>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
