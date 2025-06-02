import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-3">
            <img
              src="assets/logo.png"
              alt=""
              style={{ width: "50%" }}
              className="mb-3"
            />
            <p style={{ fontSize: "14px" }}>
              &copy; 2010 - 2025, SwiftTrade Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col-3 ">
            <p className="fs-5">Company</p>
            <a href="" className="text-dark ">
              About
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Philosophy
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Press & media
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Careers
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              SwiftTrade Cares (CSR)
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              SwiftTrade.tech
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Open source
            </a>
            <br />
            <br />
          </div>
          <div className="col-3">
            <p className="fs-5">Support</p>
            <a href="" className="text-dark ">
              Contact us
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Support portal
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              How to file a complaint?
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Status of your complaints
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Bulletin
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Circular
            </a>
            <br />
            <br />
            <a href="" className="text-dark ">
              Z-Connect blog
            </a>
            <br />
            <br />
          </div>
          <div className="col-3">
            <p className="fs-5">Account</p>
            <a href="" className="text-dark ">
              Open demat account
            </a>
            <br />
            <br />{" "}
            <a href="" className="text-dark ">
              Minor demat account
            </a>
            <br />
            <br />{" "}
            <a href="" className="text-dark ">
              NRI demat account
            </a>
            <br />
            <br />{" "}
            <a href="" className="text-dark ">
              Commodity
            </a>
            <br />
            <br />{" "}
            <a href="" className="text-dark ">
              Dematerialisation
            </a>
            <br />
            <br />{" "}
            <a href="" className="text-dark ">
              Fund transfer
            </a>
            <br />
            <br />{" "}
            <a href="" className="text-dark ">
              MTF
            </a>
            <br />
            <br />
          </div>
        </div>
        <div
          className="container mt-5  text-muted "
          style={{ fontSize: "11px", lineHeight: "22px" }}
        >
          <p>
            SwiftTrade Broking Ltd.: Member of NSE, BSE & MCX - SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through SwiftTrade Broking Ltd. - SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through SwiftTrade Commodities Pvt.
            Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238
            Registered Address: SwiftTrade Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to
            <a href="">complaints@SwiftTrade.com</a>, for DP related to{" "}
            <a href="">dp@SwiftTrade.com</a>. Please ensure you carefully read
            the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <a href="">Smart Online Dispute Resolution</a> |{" "}
          <a href="">Grievances Redressal Mechanism</a>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of SwiftTrade and offering such services, please
            <a href="">create a ticket here.</a>
          </p>
        </div>
      </div>
    </>
  );
}
