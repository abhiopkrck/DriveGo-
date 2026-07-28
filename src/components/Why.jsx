import "./css/why.css";
import {
FaCar,
FaMoneyBillWave,
FaHeadset,
FaShieldAlt
} from "react-icons/fa";

export default function Why() {

const items=[
{
icon:<FaCar/>,
title:"Wide Fleet",
text:"Choose from 5000+ cars"
},
{
icon:<FaMoneyBillWave/>,
title:"Affordable",
text:"Best Price Guaranteed"
},
{
icon:<FaShieldAlt/>,
title:"Safe",
text:"Sanitized Vehicles"
},
{
icon:<FaHeadset/>,
title:"24/7 Support",
text:"Always Available"
}
];

return(

<section className="why">

<h2>Why MyChoize?</h2>

<div className="why-grid">

{items.map((item,index)=>

<div className="why-card" key={index}>

<div className="icon">{item.icon}</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

)}

</div>

</section>

)

}