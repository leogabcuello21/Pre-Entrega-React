import "./Item.css";
export const Item = ({ name, price, description, image, children }) => {
  const imageSrc =
    image.startsWith("images/") ? `/${image}` : image;

  return (
    <article className="card">
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {children}
    </article>
  );
};