// import PhotoAlbum from "react-photo-album";

// const photos = [
//     { src: "assets/img/gallery/gallery-1.jpg", width: 1040, height: 468 },
//     { src: "assets/img/gallery/gallery-2.jpg", width: 1280, height: 720 },
//     { src: "assets/img/gallery/gallery-3.jpg", width: 960, height: 1280 },
//     { src: "assets/img/gallery/gallery-4.jpg", width: 1280, height: 720 },
//     { src: "assets/img/gallery/gallery-5.jpg", width: 1280, height: 720 },
//     { src: "assets/img/gallery/gallery-6.jpg", width: 1200, height: 1600 },
//     { src: "assets/img/gallery/gallery-7.jpg", width: 960, height: 1280 },
//     { src: "assets/img/gallery/gallery-8.jpg", width: 960, height: 1600 },
//     { src: "assets/img/gallery/gallery-9.jpg", width: 768, height: 1024 },
//     { src: "assets/img/gallery/gallery-10.jpg", width: 768, height: 1024 },
//     { src: "assets/img/gallery/gallery-11.jpg", width: 1024, height: 682 },
//     { src: "assets/img/gallery/gallery-12.jpg", width: 1024, height: 682},
//     { src: "assets/img/gallery/gallery-13.jpg", width: 1024, height: 682 },
// ];

// export default function Gallery() {
//     return <PhotoAlbum layout="rows" photos={photos} />;
// }

// import React, { useState } from "react";
// import PhotoAlbum from "react-photo-album";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// const photos = [
//   { src: "assets/img/gallery/gallery-1.jpg", width: 1040, height: 468 },
//   { src: "assets/img/gallery/gallery-2.jpg", width: 1280, height: 720 },
//   { src: "assets/img/gallery/gallery-3.jpg", width: 960, height: 1280 },
//   { src: "assets/img/gallery/gallery-4.jpg", width: 1280, height: 720 },
//   { src: "assets/img/gallery/gallery-5.jpg", width: 1280, height: 720 },
//   { src: "assets/img/gallery/gallery-6.jpg", width: 1200, height: 1600 },
//   { src: "assets/img/gallery/gallery-7.jpg", width: 960, height: 1280 },
//   { src: "assets/img/gallery/gallery-8.jpg", width: 960, height: 1600 },
//   { src: "assets/img/gallery/gallery-9.jpg", width: 768, height: 1024 },
//   { src: "assets/img/gallery/gallery-10.jpg", width: 768, height: 1024 },
//   { src: "assets/img/gallery/gallery-11.jpg", width: 1024, height: 682 },
//   { src: "assets/img/gallery/gallery-12.jpg", width: 1024, height: 682 },
//   { src: "assets/img/gallery/gallery-13.jpg", width: 1024, height: 682 },
// ];

// export default function Album() {
//   const [lightboxIndex, setLightboxIndex] = useState(-1);

//   return (
//     <>
//       <PhotoAlbum
//         photos={photos}
//         layout="rows"
//         targetRowHeight={150}
//         onClick={({ index }) => setLightboxIndex(index)}
//       />

//       <Lightbox
//         slides={photos}
//         open={lightboxIndex >= 0}
//         index={lightboxIndex}
//         close={() => setLightboxIndex(-1)}
//         plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
//       />
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const photos = [
  { src: "assets/img/gallery/gallery-1.jpg", width: 1040, height: 468 },
  { src: "assets/img/gallery/gallery-2.jpg", width: 1280, height: 720 },
  { src: "assets/img/gallery/gallery-3.jpg", width: 960, height: 1280 },
  { src: "assets/img/gallery/gallery-4.jpg", width: 1280, height: 720 },
  { src: "assets/img/gallery/gallery-5.jpg", width: 1280, height: 720 },
  { src: "assets/img/gallery/gallery-6.jpg", width: 1200, height: 1600 },
  { src: "assets/img/gallery/gallery-7.jpg", width: 960, height: 1280 },
  { src: "assets/img/gallery/gallery-8.jpg", width: 960, height: 1600 },
  { src: "assets/img/gallery/gallery-9.jpg", width: 768, height: 1024 },
  { src: "assets/img/gallery/gallery-10.jpg", width: 768, height: 1024 },
  { src: "assets/img/gallery/gallery-11.jpg", width: 1024, height: 682 },
  { src: "assets/img/gallery/gallery-12.jpg", width: 1024, height: 682 },
  { src: "assets/img/gallery/gallery-13.jpg", width: 1024, height: 682 },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width to determine if it's a mobile or desktop layout
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const galleryLayout = isMobile ? "rows" : "columns"; // Choose layout based on screen size

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout={galleryLayout}
        targetRowHeight={150}
        targetColumnWidth={300} // You can adjust this value for desktop layout
        onClick={({ index }) => setLightboxIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
