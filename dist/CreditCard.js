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

const CreditCard = props => {
  const [cardnumber, setCardnumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [texpiry, setTExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardname, setCardname] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    let valObj = {
      cardnumber,
      expiry,
      cvc,
      cardname
    };
    props.onsubmitfunc(valObj);
  };

  return /*#__PURE__*/React.createElement(Card, {
    style: {
      margin: "15px",
      paddingTop: "15px",
      alignItems: "left",
      textAlign: "left",
      borderRadius: "20px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("form", {
    id: "paymentForm",
    className: "form-group col-12 col-lg-12",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group col-lg-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-11 col-sm-12 col-lg-4 card-attribute-group"
  }, /*#__PURE__*/React.createElement(Cards, {
    cvc: cvc,
    expiry: expiry.replace("/", ""),
    focused: focus,
    name: cardname,
    number: cardnumber
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-sm-12 col-lg-8 row card-attribute-group card-attribute-input-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-sm-12 col-lg-12 row "
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 col-sm-5 col-lg-3 card-attribute"
  }, props.cardNumberLabel ? props.cardNumberLabel : "Card Number"), /*#__PURE__*/React.createElement(CreditCardInput, {
    containerClassName: "credit-card-container col-12 col-sm-6 col-lg-4 card-attribute",
    inputStyle: {
      marginTop: "5px",
      border: "0px #c0c0c0 solid",
      padding: "10px 2px",
      width: "200px"
    },
    dangerTextClassName: "pay-is-invalid",
    cardNumberInputProps: {
      name: "number",
      value: cardnumber,
      placeholder: "**** **** **** ****",
      label: "Card number",
      onChange: e => setCardnumber(e.target.value),
      onFocus: e => setFocus(e.target.name),
      required: true
    },
    cardExpiryInputProps: {
      hidden: true
    },
    cardCVCInputProps: {
      hidden: true
    },
    fieldClassName: "card-data-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-sm-12 col-lg-12 row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 col-sm-5 col-lg-3 card-attribute"
  }, props.expLabel ? props.expLabel : "Month Of Expiry"), /*#__PURE__*/React.createElement("input", {
    className: "col-12 col-sm-6 col-lg-3 card-attribute",
    id: "expiry",
    value: texpiry,
    type: "month",
    name: "expiry",
    min: props.expiryMinMonth,
    onFocus: e => {
      setFocus(e.target.name);
    },
    onChange: e => {
      var month = e.target.value.split("-")[1];
      var year = e.target.value.split("-")[0];
      setTExpiry(e.target.value);
      setExpiry(month + "/" + year.substring(2, 4));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-sm-12 col-lg-12 row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 col-sm-5 col-lg-3 card-attribute"
  }, props.cvcLabel ? props.cvcLabel : "CVC"), /*#__PURE__*/React.createElement("input", {
    className: "col-5 col-sm-5 col-lg-2 name-on-card card-attribute",
    placeholder: "",
    id: "cvc",
    maxLength: "4",
    type: "text",
    name: "cvc",
    pattern: "^([0-9]{3}|[0-9]{4})$",
    value: cvc,
    onChange: e => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1");
      setCvc(e.target.value);
    },
    onFocus: e => setFocus(e.target.name),
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "card-attribute"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    tooltip: /*#__PURE__*/React.createElement("img", {
      className: " ml-2",
      alt: "CVC info message",
      src: "data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDBDMTMuOTcwNiAwIDE4IDQuMDI5NDQgMTggOUMxOCAxMy45NzA2IDEzLjk3MDYgMTggOSAxOEM0LjAyOTQ0IDE4IDAgMTMuOTcwNiAwIDlDMCA0LjAyOTQ0IDQuMDI5NDQgMCA5IDBaTTkgMS43NUM0Ljk5NTk0IDEuNzUgMS43NSA0Ljk5NTk0IDEuNzUgOUMxLjc1IDEzLjAwNDEgNC45OTU5NCAxNi4yNSA5IDE2LjI1QzEzLjAwNDEgMTYuMjUgMTYuMjUgMTMuMDA0MSAxNi4yNSA5QzE2LjI1IDQuOTk1OTQgMTMuMDA0MSAxLjc1IDkgMS43NVpNOS41IDdDOS43NzYxNCA3IDEwIDcuMjIzODYgMTAgNy41VjEzLjVDMTAgMTMuNzc2MSA5Ljc3NjE0IDE0IDkuNSAxNEg4LjVDOC4yMjM4NiAxNCA4IDEzLjc3NjEgOCAxMy41VjcuNUM4IDcuMjIzODYgOC4yMjM4NiA3IDguNSA3SDkuNVpNOS41IDRDOS43NzYxNCA0IDEwIDQuMjIzODYgMTAgNC41VjUuNUMxMCA1Ljc3NjE0IDkuNzc2MTQgNiA5LjUgNkg4LjVDOC4yMjM4NiA2IDggNS43NzYxNCA4IDUuNVY0LjVDOCA0LjIyMzg2IDguMjIzODYgNCA4LjUgNEg5LjVaIiBmaWxsPSIjNjE2RTdDIi8+Cjwvc3ZnPgo="
    })
  }, /*#__PURE__*/React.createElement("small", null, "Accepts only 3 or 4 digit valid code")), " ")), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-lg-12 row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 col-sm-5 col-lg-3 card-attribute"
  }, props.cardNameLabel ? props.cardNameLabel : "Name On Card"), /*#__PURE__*/React.createElement("input", {
    className: "col-10 col-sm-5 col-lg-5 name-on-card card-attribute",
    placeholder: "",
    id: "card-name",
    name: "name",
    type: "text",
    value: cardname,
    onFocus: e => setFocus(e.target.name),
    onChange: e => {
      e.target.value = e.target.value.replace(/[^a-zA-Z. ]/g, "").replace(/(\..*)\./g, "$1");
      setCardname(e.target.value);
    },
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "card-attribute"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    tooltip: /*#__PURE__*/React.createElement("img", {
      className: "ml-2",
      alt: "Name on card info message",
      src: "data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDBDMTMuOTcwNiAwIDE4IDQuMDI5NDQgMTggOUMxOCAxMy45NzA2IDEzLjk3MDYgMTggOSAxOEM0LjAyOTQ0IDE4IDAgMTMuOTcwNiAwIDlDMCA0LjAyOTQ0IDQuMDI5NDQgMCA5IDBaTTkgMS43NUM0Ljk5NTk0IDEuNzUgMS43NSA0Ljk5NTk0IDEuNzUgOUMxLjc1IDEzLjAwNDEgNC45OTU5NCAxNi4yNSA5IDE2LjI1QzEzLjAwNDEgMTYuMjUgMTYuMjUgMTMuMDA0MSAxNi4yNSA5QzE2LjI1IDQuOTk1OTQgMTMuMDA0MSAxLjc1IDkgMS43NVpNOS41IDdDOS43NzYxNCA3IDEwIDcuMjIzODYgMTAgNy41VjEzLjVDMTAgMTMuNzc2MSA5Ljc3NjE0IDE0IDkuNSAxNEg4LjVDOC4yMjM4NiAxNCA4IDEzLjc3NjEgOCAxMy41VjcuNUM4IDcuMjIzODYgOC4yMjM4NiA3IDguNSA3SDkuNVpNOS41IDRDOS43NzYxNCA0IDEwIDQuMjIzODYgMTAgNC41VjUuNUMxMCA1Ljc3NjE0IDkuNzc2MTQgNiA5LjUgNkg4LjVDOC4yMjM4NiA2IDggNS43NzYxNCA4IDUuNVY0LjVDOCA0LjIyMzg2IDguMjIzODYgNCA4LjUgNEg5LjVaIiBmaWxsPSIjNjE2RTdDIi8+Cjwvc3ZnPgo="
    })
  }, /*#__PURE__*/React.createElement("small", null, "Enter a valid card owner name.", /*#__PURE__*/React.createElement("br", null), " Accepts only letters")))))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "submit-button btn btn-warning btn-md",
    style: {
      float: "right"
    }
  }, props.submitbuttontext), /*#__PURE__*/React.createElement("br", null))));
};

export default CreditCard;