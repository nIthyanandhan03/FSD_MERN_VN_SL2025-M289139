function ItemCard({ item }) {
  return (
    <div
      style={{
        width: "250px",
        padding: "15px",
        border: "1px solid #444",
        borderRadius: "10px",
        backgroundColor: "#222",
        color: "#fff",
      }}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3 style={{ margin: "10px 0" }}>{item.title}</h3>

      <p style={{ fontSize: "14px", minHeight: "40px" }}>
        {item.description}
      </p>

      <p style={{ fontWeight: "bold" }}>₹ {item.price}</p>

      <button
        style={{
          padding: "8px 12px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ItemCard;
