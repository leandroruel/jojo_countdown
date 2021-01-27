export default function Copyright() {
  const today = new Date(Date.now());
  const year = today.getFullYear();

  return (
    <div className="pt-2">
      <div
        className="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl"
      >
        <div className="mt-2">© {year} Kyuppu - All Rights Reserved</div>

        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-twitter-alt"></i>
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-youtube"></i>
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="#" className="w-6 mx-1">
            <i className="uil uil-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
