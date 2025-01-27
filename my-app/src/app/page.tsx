import Cart from "../app/component/Cart/page.jsx"

export default function Home() {
  return (
    <>
    <div>
      <div className="relative">
        {/* Background Image */}
        <img src="/landingPage.png" className="w-full h-[35rem] object-cover" alt="Landing Page" />

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-end text-start text-white  bg-opacity-50 px-4">
          <div className="bg-[#FFF3E3] me-8 p-8 w-[45rem] rounded-md">
            <h3 className="text-lg md:text-2xl text-black">New Arrival</h3>
            <h1 className="text-2xl md:text-5xl font-bold my-4 text-[#B88E2F]">Discover Our New Collection</h1>
            <h3 className="text-sm md:text-lg mb-6 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </h3>
            <button className="bg-[#B88E2F] text-white px-14 py-4 rounded-md  transition
            hover:text-[#B88E2F] hover:bg-white hover:border border-[#B88E2F]">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10 flex justify-center flex-col">
        <div className="mb-14 ">
          <h2 className="text-2xl font-bold text-center">Browse The Range</h2>
          <h3 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        <div className="flex justify-center align-center gap-5">
          <div>
            <img src="/btr_image_1.png" alt="" className="h-[23rem]"/>
            <div className="text-center my-5">
              <p className="font-semibold">Dining</p>
            </div>
          </div>
          <div>
            <img src="/btr_image_2.png" alt="" className="h-[23rem]"/>
            <div className="text-center my-5">
              <p className="font-semibold">Living</p>
            </div>
          </div>
          <div>
            <img src="/btr_image_3.png" alt="" className="h-[23rem]"/>
            <div className="text-center my-5">
              <p className="font-semibold">Bedroom</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl font-bold">Our Products</h2>
        </div>
        <div className="flex justify-center">

          <div className="grid grid-cols-4 gap-4">
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
            <div>
              <Cart/>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button className="border border-[#B88E2F] text-[#B88E2F] w-[14rem] h-[2.5rem] hover:bg-[#B88E2F] hover:text-white">Show More</button>
        </div>
      </div>
    </div>
    </>
  );
}
