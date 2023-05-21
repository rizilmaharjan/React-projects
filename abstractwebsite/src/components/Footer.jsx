const Footer = () => {
  return (
    <>
      <div className="bg-black grid grid-cols-2 grid-rows-2 gap-y-8 py-4 px-4 ">
        <div className="text-white">
          <div>
            <h1 className="text-2xl">Abstract</h1>
          </div>
          <div className="py-3">
            <p>Start Trial</p>
            <p>Pricing</p>
            <p>Download</p>
          </div>
        </div>
        <div className="text-white">
          <div>
            <h1 className="text-2xl">Resources</h1>
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
            <h1 className="text-2xl">Community</h1>
          </div>
          <div className="py-3">
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="text-white">
          <div className="py-3">
            <h1 className="text-2xl">Company</h1>
          </div>
          <div>
            <p>About Us</p>
            <p>Careers</p>
            <p>Legal</p>
          </div>

          <h1 className="text-white text-xl pt-3">Contact us</h1>
          <p className="text-white">info@abstract.com</p>
        </div>

        <div>
            <h1 className="text-white text-2xl">© Copyright 2023</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
