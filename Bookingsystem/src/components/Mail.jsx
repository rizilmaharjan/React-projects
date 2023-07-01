export const Mail = () => {
  return (
    <>
      <div className="bg-blue-800 flex flex-col items-center pb-8">
        <div className="pt-14">
          <h1 className="text-white font-semibold text-xl">
            Save time, save money!
          </h1>
          <p className="text-white">
            Sign up and we'll send the best deals to you
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 pt-7">
            <input
              className="w-80 outline-none py-2 px-1 text-gray-400 font-semibold"
              type="text"
              placeholder="Your Email "
            />
            <button className="text-white py-2 px-6 bg-blue-500">
              Subscribe
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <input type="checkbox" />
            <p className="text-white">
              Send me a link to get the FREE Booking.com app!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900">
        <div className="w-fit mx-auto py-3">
          <button className="border-2 border-white px-3 py-1 text-white">
            List your property
          </button>
        </div>
        <hr />
        <div className="w-fit mx-auto py-2 mb-2">
          <span className="text-white underline px-2 font-bold">
            Mobile version
          </span>
          <span className="text-white underline px-2 font-bold">
            Your account
          </span>
          <span className="text-white underline px-2 font-bold">
            Make changes online to your booking
          </span>
          <span className="text-white underline px-2 font-bold">
            Customer Service Help
          </span>
          <span className="text-white underline px-2 font-bold">
            Become an affiliate
          </span>
          <span className="text-white underline px-2 font-bold">
            Booking.com fro Business
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 w-fit mx-auto pt-2 pb-24 text-sm gap-10 text-blue-700">
        <div>
            <p>Countries</p>
            <p>Regions</p>
            <p>Cities</p>
            <p>Districts</p>
            <p>Airports</p>
            <p>Hotels</p>
            <p>Places of interest</p>
        </div>
        <div>
            <p>Homes</p>
            <p>Apartments</p>
            <p>Resorts</p>
            <p>Villas</p>
            <p>Hostels</p>
            <p>B&Bs</p>
            <p>Guest houses</p>
        </div>
        <div>
            <p>Unique places to stay</p>
            <p>All destinations</p>
            <p>Discover</p>
            <p>Reviews</p>
            <p>Travel articles</p>
            <p>Travel Communities</p>
            <p>Seasonal and holiday deals</p>
        </div>
        <div>
            <p>Car rental</p>
            <p>Flight finder</p>
            <p>Restaurant reservations</p>
            <p>Booking.com for Travel Agents</p>
        </div>
        <div>
            <p>Coronavirus (COVID-19) FAQS</p>
            <p>About Booking.com</p>
            <p>Customer Service Help</p>
            <p>Partner help</p>
            <p>Careers</p>
            <p>Sustainability</p>
            <p>Press Center</p>
            <p>Saftey Resource Center</p>
            <p>Investor relations</p>
            <p>Terms & conditions</p>
            <p>Dispute resolution</p>
            <p>How we Work</p>
            <p>Privacy & cookie statement</p>
            <p>Manage cookie settings</p>
            <p>Corporate contact</p>
        </div>
      </div>
    </>
  );
};
