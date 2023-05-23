const Footer = () => {
  return (
    <>
      <div className="bg-black lg:grid lg:grid-cols-2 lg:gap-x-10 lg:py-24">
        <div className="grid grid-cols-2 gap-y-8 py-4 px-4 lg:w-[50rem] lg:grid lg:grid-cols-4 lg:mx-24 lg:gap-x-44  lg:h-fit ">
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

        <div className="lg:mx-72 lg:mt-40 lg:h-fit lg:w-7/12">
          <h1 className="text-white text-2xl">© Copyright 2023</h1>
          <p className="text-white">© Copyright 2023</p>
          <p className="text-white">Abstract Studio Design, Inc.</p>
          <p className="text-white">All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
