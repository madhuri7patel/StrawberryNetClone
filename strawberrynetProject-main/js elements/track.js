let parent = document.getElementById("queries");
let divs = document.createElement("div");
let para = document.createElement("h2");
let ma1 = document.createElement("h3");
let ma2 = document.createElement("p");
let ma3 = document.createElement("h3");
let ma4 = document.createElement("p");
let ma5 = document.createElement("a");
let but = document.createElement("button");
but.textContent = "Back To Track Order Page";
but.onclick = function () {
  window.location = "track.html";
};
let q1 = document.getElementById("q1");
q1.addEventListener("click", add);
function add() {
  document.body.innerHTML = null;
  para.textContent = "Shipping & Tax";
  ma1.textContent = "Q. What are the shipping costs?";
  ma2.textContent =
    "A. We endeavour to make checkout as smooth as possible by displaying prices in local currencies. However, not all local currencies are supported by payment gateways. Depending on which payment method you choose, there may be cases in which your order cannot be charged in the local currency that is displayed. If this happens, your order will be charged in a different currency. Rest assured, we will always show you the currency that you are being charged in on the checkout page before you make any payments.Please note that due to currency fluctuations, the final total shown on the order confirmation may differ slightly from the actual charge in your own currency.For current exchange rates, refer to the Currency Conversion Table.CLICK HERE Note to U.S. Based Customers We guarantee that every online transaction you make will be 100% safe. This means you pay nothing if unauthorized charges are made to your card as a result of shopping at our online store. Under the U.S. Fair Credit Billing Act, your U.S. bank cannot hold you liable for more than $50.00 of fraudulent charges. If your bank does hold you liable for any of this $50.00, we will cover the entire liability for you, up to the full $50.00, and in that case you would not need to pay for any of the unauthorized charges made to your card as a result of shopping at our online store. We will only cover this liability if the unauthorized use of your credit card resulted through no fault of your own from purchases made while using the secure server. In the event of the unauthorized use of your credit card, you must notify your credit card provider in accordance with its reporting rules and procedures.";
  ma3.textContent = "Q. How long will it take to get my order?";
  ma4.textContent = "A. Please check here for more details.";
  divs.append(but, para, ma1, ma2, ma3, ma4);
  parent.append(divs);
  document.body.append(parent);
}

let q2 = document.getElementById("q2");
q2.addEventListener("click", add2);
function add2() {
  document.body.innerHTML = null;
  para.textContent = "Q.What if my order hasn't arrived after 14 postal days?";
  ma2.textContent =
    "A. All information supplied to us by the postal services is automatically updated in our online tracking service.If your order has not been delivered within the expected delivery time, please contact your local postal services using the postal reference number provided in your shipping status email.If you are unable to find your order, please contact us and we will gladly follow up on your behalf. Remember to include your order number in all correspondence to ensure prompt service.";
  ma3.textContent =
    "Our customer service agents are standing by to help answer your enquiries. If your call is regarding an order you have placed with us, then please have your order number ready.Remember to dial your international dial-out code first followed by our country code (852).Contact Us : (852) 3516 8719 Customer Service office hour: Monday to Saturday from 9:00 a.m. to 6:00 p.m. and Sunday: Off (HK Time) Our customer service agents are standing by to help answer your enquiries. If your call is regarding an order you have placed with us, then please have your order number ready. Remember to dial your international dial-out code first followed by our country code (852).";
  ma4.textContent = "Contact Us:(852) 3516 8719";
  divs.append(but, para, ma2, ma3, ma4);
  parent.append(divs);
  document.body.append(parent);
}

let q3 = document.getElementById("q3");
q3.addEventListener("click", add3);
function add3() {
  document.body.innerHTML = null;
  para.textContent = "Q. How can I track my order?";
  ma2.textContent =
    "A. If your order was shipped by Express Post then you can track your order through";
  ma5.href = "https://www.strawberrynet.com/customer-service/delivery/";
  ma5.textContent = "https://www.strawberrynet.com/customer-service/delivery/";
  ma3.textContent =
    "You can also use your own country's postal service's website if they have an EMS tracking option available online. For registered airmail, only limited tracking is available and only after a certain period of time from the date of dispatch, normally 10 working days.Please note no tracking is available for non-registered airmail.";
  divs.append(but, para, ma2, ma5, ma3);
  parent.append(divs);
  document.body.append(parent);
}

let q4 = document.getElementById("q4");
q4.addEventListener("click", add4);
function add4() {
  document.body.innerHTML = null;
  para.textContent = "Q. Will there be any taxes/customs duties?";
  ma2.textContent = "A. It depends on the destination.";
  ma3.textContent =
    "We currently ship to over 190 countries excluding France, Monaco, and Turkey.Effective from 18 February 2020, we will no longer cover VAT claims. In the event that your order is charged taxes or other additional charges, you are responsible for all expense occurred, which is not refundable.";
  divs.append(but, para, ma2, ma3);
  parent.append(divs);
  document.body.append(parent);
}

let track = document.getElementById("track");
let status = document.getElementById("status");
let inp = document.getElementById("inp");
console.log(inp.value);
track.onclick = () => {
  if (inp.value.length === 0) {
    alert("Please Provide Valid order number");
  } else {
    para.textContent = "Order Status";
    ma1.textContent = "Order Number : " + (0 + Number(inp.value));
    let d = new Date();
    ma2.textContent =
      "Order Date : " +
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear();
    ma3.textContent =
      "Date : " +
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear() +
      " " +
      d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    var elem = document.createElement("hr");
    elem.setAttribute("width", "1000px");
    ma4.textContent = "Status : " + "This Order Will be handled soon.";
    status.append(para, ma1, ma2, ma3, elem, ma4);
  }
};
