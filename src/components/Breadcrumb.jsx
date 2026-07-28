import "./css/breadcrumb.css";

export default function Breadcrumb({ title }) {
  return (
    <section className="breadcrumb">

      <h1>{title}</h1>

      <p>Home &gt; {title}</p>

    </section>
  );
}