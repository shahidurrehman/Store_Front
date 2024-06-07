const Footer = () => {

  return (
    <footer className="footer bg-dark border-top-1 border-secondary d-print-none mt-auto">
      <div className="container-xl">
        <div className="row text-center align-items-center flex-row-reverse">
          <div className="col-lg-auto ms-lg-auto">
            {/* <ul className="list-inline list-inline-dots mb-0">
      <li className="list-inline-item"><a href="#" className="link-secondary">Home</a></li>

    </ul> */}
          </div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright © 2022&nbsp;<a href="https://strahlenstudios.com" target="_blank" className="link-secondary">Strahlen Studios</a>. All rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
