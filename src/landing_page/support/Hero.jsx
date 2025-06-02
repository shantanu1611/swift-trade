export default function Hero() {
  return (
    <>
      <section className="container-fluid p-5" id="SupportHero">
        <div className=" py-3 px-5" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>

        <div className="row p-5 mb-5 ">
          <div className="col-7 px-5 mb-5 " id="SecCol">
            <h4 className="mx-5">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              className="mx-5 my-3 input-group p-3"
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <a href="" style={{ marginLeft: "2.5rem" }}>
              Track account opening
            </a>
            <a href="" className="mx-3">
              Track segment activation
            </a>
            <a href="" className="mx-2">
              Intraday margins
            </a>
            <br />
            <br />
            <a href="" className="mx-5">
              Kite user manual
            </a>
          </div>

          {/* ================================== */}

          <div className="col-5 px-5 my-3">
            <h4 className="mx-2">Featured </h4>

            <ol style={{ fontSize: "1.1rem" }}>
              <li className="my-3">
                <a href="">Surveillance measure on scrips - June 2025</a>
              </li>
              <li>
                <a href="">Rights Entitlements listing in June 2025</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
