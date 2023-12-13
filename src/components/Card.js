import React, {useState} from "react";

export default function Card() {
    const handleHover = () => {
      document.getElementById("card").style.boxShadow =
        "10px 10px 10px #888888";
    };

    const handleUnhover = () => {
      document.getElementById("card").style.boxShadow = "5px 5px 5px #888888";
    };
    const cardStyle = {
      margin: "10px",
      width: "22rem",
      maxHeight: "400px",
      boxShadow: "5px 5px 5px",
      transition: "box-shadow 0.3s",
    };
    const numbr = {
      display: "flex",
      justifyContent: "center"
    };
    const qty = {
      width: "10rem"
      
    };
    const [showQuantityControls, setShowQuantityControls] = useState(false);
    const [itemCount, setItemCount] = useState(1);

    const handleAddClick = () => {
      setShowQuantityControls(true);
    };

    const handleIncrement = () => {
      if (itemCount < 10) {
        setItemCount(itemCount + 1);
      }
    };

    const handleDecrement = () => {
      if (itemCount > 1) {
        setItemCount(itemCount - 1);
      } else {
        setShowQuantityControls(false);
      }
    };
  return (
    <div>
      <div
        id="card"
        class="card m-10 p-10"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        style={cardStyle}
      >
        <img src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Pasta</h5>
          <p class="card-text" style={{color:"#ff7800"}}>Tangy red sauce pasta</p>
          <div className="container w-100" style={numbr}>
            {showQuantityControls ? (
              <div className="input-group m-2" style={qty}>
                <button className="input-group-text" onClick={handleDecrement} style={{"backgroundColor": "#ff7800", "color": "#ffffff",borderColor: "#ff7800"}}>
                  -
                </button>
                <span
                  className="form-control"
                  style={{ display: "flex", justifyContent: "center", borderColor: "#ff7800", color: "#ff7800" }}
                >
                  {itemCount}
                </span>
                <button className="input-group-text" onClick={handleIncrement} style={{"backgroundColor": "#ff7800", "color": "#ffffff",borderColor: "#ff7800"}}>
                  +
                </button>
              </div>
            ) : (
              <button
                className="btn"
                onClick={handleAddClick}
                style={{
                  borderColor: "#ff7800",
                  margin: "8px",
                  width: "10rem",
                  backgroundColor: "#ff7800",
                  color: "#ffffff"
                }}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
