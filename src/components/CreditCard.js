/**
 * The react-easy-credit-card component
 *
 * @version 1.0.0
 * @author ashane2e
 */
import "./index.css";
import React, { useState } from "react";
import CreditCardInput from "react-credit-card-input";
import { Card } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Tooltip from "react-png-tooltip";

const CreditCard = (props) => {
  const [cardnumber, setCardnumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [texpiry, setTExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardname, setCardname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let valObj = {
      cardnumber,
      expiry,
      cvc,
      cardname,
    };

    props.onsubmitfunc(valObj);
  };

  return (
    <Card
      style={{
        margin: "15px",
        paddingTop: "15px",
        alignItems: "left",
        textAlign: "left",
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <form id="paymentForm" className="form-group col-12 col-lg-12" onSubmit={handleSubmit}>
        <div className="form-group col-lg-12">
          <div className="row">
            <div className="col-11 col-sm-12 col-lg-4 card-attribute-group">
              <Cards cvc={cvc} expiry={expiry.replace("/", "")} focused={focus} name={cardname} number={cardnumber} />
            </div>
            <div className="col-12 col-sm-12 col-lg-8 row card-attribute-group card-attribute-input-group">
              <div className="col-12 col-sm-12 col-lg-12 row ">
                <label className="col-12 col-sm-5 col-lg-3 card-attribute">{props.cardNumberLabel?props.cardNumberLabel:"Card Number"}</label>
                <CreditCardInput containerClassName="credit-card-container col-12 col-sm-6 col-lg-4 card-attribute" inputStyle={{ marginTop: "5px", border: "0px #c0c0c0 solid", padding: "10px 2px", width: "200px" }} dangerTextClassName="pay-is-invalid" cardNumberInputProps={{ name: "number", value: cardnumber, placeholder: "**** **** **** ****", label: "Card number", onChange: (e) => setCardnumber(e.target.value), onFocus: (e) => setFocus(e.target.name), required: true }} cardExpiryInputProps={{ hidden: true }} cardCVCInputProps={{ hidden: true }} fieldClassName="card-data-input" />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 row">
                <label className="col-12 col-sm-5 col-lg-3 card-attribute">{props.expLabel?props.expLabel:"Month Of Expiry"}</label>
                <input
                  className="col-12 col-sm-6 col-lg-3 card-attribute"
                  id="expiry"
                  value={texpiry}
                  type="month"
                  name="expiry"
                  min={props.expiryMinMonth}
                  onFocus={(e) => {
                    setFocus(e.target.name);
                  }}
                  onChange={(e) => {
                    var month = e.target.value.split("-")[1];
                    var year = e.target.value.split("-")[0];
                    setTExpiry(e.target.value);
                    setExpiry(month + "/" + year.substring(2, 4));
                  }}
                  required
                />
              </div>

              <div className="col-12 col-sm-12 col-lg-12 row">
                <label className="col-12 col-sm-5 col-lg-3 card-attribute">{props.cvcLabel?props.cvcLabel:"CVC"}</label>
                <input
                  className="col-5 col-sm-5 col-lg-2 name-on-card card-attribute"
                  placeholder=""
                  id="cvc"
                  maxLength="4"
                  type="text"
                  name="cvc"
                  pattern="^([0-9]{3}|[0-9]{4})$"
                  value={cvc}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1");
                    setCvc(e.target.value);
                  }}
                  onFocus={(e) => setFocus(e.target.name)}
                  required
                />
                {/* <img className="card-attribute ml-2" title="Accepts only 3 or 4 digit valid code" src="data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDBDMTMuOTcwNiAwIDE4IDQuMDI5NDQgMTggOUMxOCAxMy45NzA2IDEzLjk3MDYgMTggOSAxOEM0LjAyOTQ0IDE4IDAgMTMuOTcwNiAwIDlDMCA0LjAyOTQ0IDQuMDI5NDQgMCA5IDBaTTkgMS43NUM0Ljk5NTk0IDEuNzUgMS43NSA0Ljk5NTk0IDEuNzUgOUMxLjc1IDEzLjAwNDEgNC45OTU5NCAxNi4yNSA5IDE2LjI1QzEzLjAwNDEgMTYuMjUgMTYuMjUgMTMuMDA0MSAxNi4yNSA5QzE2LjI1IDQuOTk1OTQgMTMuMDA0MSAxLjc1IDkgMS43NVpNOS41IDdDOS43NzYxNCA3IDEwIDcuMjIzODYgMTAgNy41VjEzLjVDMTAgMTMuNzc2MSA5Ljc3NjE0IDE0IDkuNSAxNEg4LjVDOC4yMjM4NiAxNCA4IDEzLjc3NjEgOCAxMy41VjcuNUM4IDcuMjIzODYgOC4yMjM4NiA3IDguNSA3SDkuNVpNOS41IDRDOS43NzYxNCA0IDEwIDQuMjIzODYgMTAgNC41VjUuNUMxMCA1Ljc3NjE0IDkuNzc2MTQgNiA5LjUgNkg4LjVDOC4yMjM4NiA2IDggNS43NzYxNCA4IDUuNVY0LjVDOCA0LjIyMzg2IDguMjIzODYgNCA4LjUgNEg5LjVaIiBmaWxsPSIjNjE2RTdDIi8+Cjwvc3ZnPgo=" /> */}
                <span className="card-attribute">
                  <Tooltip tooltip={<img className=" ml-2" alt="CVC info message" src="data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDBDMTMuOTcwNiAwIDE4IDQuMDI5NDQgMTggOUMxOCAxMy45NzA2IDEzLjk3MDYgMTggOSAxOEM0LjAyOTQ0IDE4IDAgMTMuOTcwNiAwIDlDMCA0LjAyOTQ0IDQuMDI5NDQgMCA5IDBaTTkgMS43NUM0Ljk5NTk0IDEuNzUgMS43NSA0Ljk5NTk0IDEuNzUgOUMxLjc1IDEzLjAwNDEgNC45OTU5NCAxNi4yNSA5IDE2LjI1QzEzLjAwNDEgMTYuMjUgMTYuMjUgMTMuMDA0MSAxNi4yNSA5QzE2LjI1IDQuOTk1OTQgMTMuMDA0MSAxLjc1IDkgMS43NVpNOS41IDdDOS43NzYxNCA3IDEwIDcuMjIzODYgMTAgNy41VjEzLjVDMTAgMTMuNzc2MSA5Ljc3NjE0IDE0IDkuNSAxNEg4LjVDOC4yMjM4NiAxNCA4IDEzLjc3NjEgOCAxMy41VjcuNUM4IDcuMjIzODYgOC4yMjM4NiA3IDguNSA3SDkuNVpNOS41IDRDOS43NzYxNCA0IDEwIDQuMjIzODYgMTAgNC41VjUuNUMxMCA1Ljc3NjE0IDkuNzc2MTQgNiA5LjUgNkg4LjVDOC4yMjM4NiA2IDggNS43NzYxNCA4IDUuNVY0LjVDOCA0LjIyMzg2IDguMjIzODYgNCA4LjUgNEg5LjVaIiBmaWxsPSIjNjE2RTdDIi8+Cjwvc3ZnPgo=" />}>
                    <small>Accepts only 3 or 4 digit valid code</small>
                  </Tooltip>{" "}
                </span>
              </div>

              <div className="col-12 col-lg-12 row">
                <label className="col-12 col-sm-5 col-lg-3 card-attribute">{props.cardNameLabel ? props.cardNameLabel:"Name On Card"}</label>
                <input
                  className="col-10 col-sm-5 col-lg-5 name-on-card card-attribute"
                  placeholder=""
                  id="card-name"
                  name="name"
                  type="text"
                  value={cardname}
                  onFocus={(e) => setFocus(e.target.name)}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z. ]/g, "").replace(/(\..*)\./g, "$1");
                    setCardname(e.target.value);
                  }}
                  required
                />
                <span className="card-attribute">
                  <Tooltip tooltip={<img className="ml-2" alt="Name on card info message" src="data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDBDMTMuOTcwNiAwIDE4IDQuMDI5NDQgMTggOUMxOCAxMy45NzA2IDEzLjk3MDYgMTggOSAxOEM0LjAyOTQ0IDE4IDAgMTMuOTcwNiAwIDlDMCA0LjAyOTQ0IDQuMDI5NDQgMCA5IDBaTTkgMS43NUM0Ljk5NTk0IDEuNzUgMS43NSA0Ljk5NTk0IDEuNzUgOUMxLjc1IDEzLjAwNDEgNC45OTU5NCAxNi4yNSA5IDE2LjI1QzEzLjAwNDEgMTYuMjUgMTYuMjUgMTMuMDA0MSAxNi4yNSA5QzE2LjI1IDQuOTk1OTQgMTMuMDA0MSAxLjc1IDkgMS43NVpNOS41IDdDOS43NzYxNCA3IDEwIDcuMjIzODYgMTAgNy41VjEzLjVDMTAgMTMuNzc2MSA5Ljc3NjE0IDE0IDkuNSAxNEg4LjVDOC4yMjM4NiAxNCA4IDEzLjc3NjEgOCAxMy41VjcuNUM4IDcuMjIzODYgOC4yMjM4NiA3IDguNSA3SDkuNVpNOS41IDRDOS43NzYxNCA0IDEwIDQuMjIzODYgMTAgNC41VjUuNUMxMCA1Ljc3NjE0IDkuNzc2MTQgNiA5LjUgNkg4LjVDOC4yMjM4NiA2IDggNS43NzYxNCA4IDUuNVY0LjVDOCA0LjIyMzg2IDguMjIzODYgNCA4LjUgNEg5LjVaIiBmaWxsPSIjNjE2RTdDIi8+Cjwvc3ZnPgo=" />}>
                    <small>
                      Enter a valid card owner name.
                      <br /> Accepts only letters
                    </small>
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button btn btn-warning btn-md" style={{ float: "right" }}>
            {props.submitbuttontext}
          </button>
          <br />
        </div>
      </form>
    </Card>
  );
};

export default CreditCard;
