const Footer = () => {
  return (
    <>
      <div className="bg-black lg:py-24 lg:grid lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-y-8 py-4 px-4 lg:grid lg:grid-cols-4 lg:gap-x-28 lg:w-full">
          <div className="text-white">
            <div>
              <h1 className="text-2xl lg:font-semibold">Abstract</h1>
            </div>
            <div className="py-3">
              <p>Start Trial</p>
              <p>Pricing</p>
              <p>Download</p>
            </div>
          </div>
          <div className="text-white">
            <div>
              <h1 className="text-2xl lg:font-semibold">Resources</h1>
            </div>
            <div className="py-3">
              <p>Blog</p>
              <p>Help Center</p>
              <p>Release Notes</p>
              <p>Status</p>
            </div>
          </div>
          <div className="text-white">
            <div>
              <h1 className="text-2xl lg:font-semibold">Community</h1>
            </div>
            <div className="py-3">
              <p>Twitter</p>
              <p>Linkedin</p>
              <p>Facebook</p>
            </div>
          </div>
          <div className="text-white">
            <div className="py-3">
              <h1 className="text-2xl lg:font-semibold">Company</h1>
            </div>
            <div>
              <p>About Us</p>
              <p>Careers</p>
              <p>Legal</p>
            </div>

            <h1 className="text-white text-xl pt-3">Contact us</h1>
            <p className="text-white">info@abstract.com</p>
          </div>
        </div>

        <div className="px-4 lg:flex lg:flex-col lg:justify-end lg:items-center lg:w-9/12 lg:mx-auto">
          <div>

          <h1 className="text-white text-2xl py-2">© Copyright 2023</h1>
          <p className="text-white">© Copyright 2023</p>
          <p className="text-white">Abstract Studio Design, Inc.</p>
          <p className="text-white">All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
