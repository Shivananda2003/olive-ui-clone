import { FaApple } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="py-10">
      <div className="text-center max-w-3xl mx-auto">

        {/* Avatars */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">

            <div className="flex -space-x-3">
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=1" />
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=2" />
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=3" />
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=4" />

              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border border-white opacity-50">
                3k+
              </div>
            </div>

            <p className="text-sm text-gray-500 ml-2 text-center sm:text-left">
              Trusted by thousands of healthy families
            </p>

          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[42px] md:text-[68px] font-semibold leading-[1.1] text-[#1f2d1f] mt-10 mb-6">
          The Safest Way to <br /> Shop for Groceries
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
          from Your Family’s Diet and Get Expert-Backed Food Insights
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#253612] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 w-fit mx-auto transition-colors duration-300 hover:bg-[#2f4f2f]">
  
            <FaApple className="text-white text-lg" />

            <span className="leading-none">Download for iOS</span>

          </button>
        </div>

      </div>

      {/* ✅ PHONE WITH OVERLAP + CROP */}
      <div className="flex justify-center relative h-[450px] overflow-hidden">

        <div className="relative w-[260px] md:w-[320px] translate-y-16">

          {/* Phone frame */}
          <div className="w-full aspect-[9/19] bg-gray-200 rounded-[2.5rem] p-2 shadow-md relative">

            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10 mt-2"></div>

            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden pt-8">

              {/* Horizontal scrolling content */}
              <div className="animate-scroll-x flex gap-4 p-4">

                {/* Set 1 */}
                <div className="min-w-[180px] bg-gray-100 rounded-xl p-3">
                  <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>

                <div className="min-w-[180px] bg-green-100 rounded-xl p-4 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✔ Safe Product</span>
                </div>

                <div className="min-w-[180px] bg-gray-100 rounded-xl p-3">
                  <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>

                {/* Duplicate for loop */}
                <div className="min-w-[180px] bg-gray-100 rounded-xl p-3">
                  <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>

                <div className="min-w-[180px] bg-green-100 rounded-xl p-4 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✔ Safe Product</span>
                </div>

                <div className="min-w-[180px] bg-gray-100 rounded-xl p-3">
                  <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>

              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}