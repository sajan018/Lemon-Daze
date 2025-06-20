import { useEffect, useRef } from "react";
import {
  FaStar,
  FaSmile,
  FaHeart,
  FaSun,
  FaShippingFast,
  FaRegThumbsUp,
  FaUserAlt,
} from "react-icons/fa";

const CARD_WIDTH = 280;
const SPACING = 32;
const OFFSET = 23;
const INTERVAL = CARD_WIDTH + SPACING + OFFSET;
const list = [
  {
    title: "Premium Cotton Fabrics",
    description: "Enjoy ultra-soft, breathable cotton perfect for staying cool and comfy in summer heat.",
    icon: <FaSun />,
  },
  {
    title: "Fast & Reliable Delivery",
    description: "Get your favorite outfits at your doorstep quickly with our express shipping service.",
    icon: <FaShippingFast />,
  },
  {
    title: "Perfect Fit for Every Woman",
    description: "Our size-inclusive designs ensure flattering fits and effortless style for all body types.",
    icon: <FaUserAlt />,
  },
  {
    title: "5-Star Quality Guarantee",
    description: "We use the finest materials and expert craftsmanship to deliver clothes you'll love wearing.",
    icon: <FaStar />,
  },
  {
    title: "Fresh & Trendy Designs",
    description: "Stay ahead in style with vibrant, chic summer collections that turn heads wherever you go.",
    icon: <FaSmile />,
  },
  {
    title: "Pastel & Vibrant Shades",
    description: "Discover a beautiful palette of colors that capture the joy and ease of summer.",
    icon: <FaHeart />,
  },
  {
    title: "Hassle-Free Shopping",
    description: "Enjoy a smooth, intuitive shopping experience with easy checkout and secure payments.",
    icon: <FaRegThumbsUp />,
  },
];

function WhyChooseUs() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const scrollRight = async () => {
    while (true) {
      const scrollLeft = containerRef.current?.scrollLeft;
      const clientWidth = containerRef.current?.clientWidth;
      const scrollWidth = containerRef.current?.scrollWidth;

      if (scrollLeft !== undefined && clientWidth !== undefined && scrollWidth !== undefined) {
        if (scrollLeft > 8 * (CARD_WIDTH + SPACING)) {
          containerRef.current.scrollTo({
            left: scrollLeft - 8 * (CARD_WIDTH + SPACING),
            behavior: "instant",
          });
        } else {
          containerRef.current.scrollBy({ left: INTERVAL, behavior: "smooth" });
        }
      }
      await new Promise((r) => setTimeout(r, 2500));
    }
  };

  useEffect(() => {
    scrollRight();
  }, []);

  return (
    <div className="sm:m-20">
      <h1 className="text-3xl text-center italic ... " >Why Choose US</h1>
      <div
        ref={wrapperRef}
        className="flex h-full sm:mx-6 lg:mx-20 px-4 py-12 items-center overflow-hidden"
      >
        <div
          ref={containerRef}
          className="flex overflow-hidden"
          style={{ gap: `${SPACING}px` }}
        >
          {list.concat(list).map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-2xl shadow-md bg-white border border-gray-400"
              style={{ minWidth: `${CARD_WIDTH}px` }}
            >
              <div className="p-4 bg-white flex flex-col gap-2 object-cover h-[180px]">
                <p className="font-semibold text-gray-700 flex items-center gap-2 border-b pb-2">
                  <span className="text-xl">{item.icon}</span> {item.title}
                </p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default WhyChooseUs;
