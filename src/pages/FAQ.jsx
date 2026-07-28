import { useState } from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import "../components/css/faq.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    title: "RESERVATION",
    content:
      "Book your self-drive car online in just a few clicks. Choose location, pickup date and return date."
  },
  {
    title: "DOCUMENTATION",
    content:
      "Carry your Driving License, Aadhaar Card or Passport while collecting the vehicle."
  },
  {
    title: "OPERATIONS",
    content:
      "Vehicles are available 24×7 with unlimited kilometers and roadside assistance."
  },
  {
    title: "INCIDENTS",
    content:
      "Immediately contact customer care in case of an accident or breakdown."
  },
  {
    title: "LEGAL",
    content:
      "All rentals are governed by MyChoize rental agreement and applicable Indian laws."
  },
  {
    title: "PAYMENTS",
    content:
      "UPI, Credit Card, Debit Card and Net Banking are accepted."
  },
  {
    title: "SCHEDULE OF CHARGES",
    content:
      "Fuel, tolls, traffic fines and late return charges are charged separately."
  }
];

export default function FAQ() {

  const [open,setOpen]=useState(null);

  const toggle=(index)=>{
    setOpen(open===index ? null : index);
  }

  return(

<>
<Navbar/>

<Breadcrumb title="FAQ's"/>

<section className="faq-page">

{
faqData.map((item,index)=>(

<div className="faq-card" key={index}>

<div
className="faq-header"
onClick={()=>toggle(index)}
>

<h3>{item.title}</h3>

{
open===index ? <FaMinus/> : <FaPlus/>
}

</div>

<div className={open===index ? "faq-body active" : "faq-body"}>

<p>{item.content}</p>

</div>

</div>

))
}

</section>

<Footer/>

</>

)

}