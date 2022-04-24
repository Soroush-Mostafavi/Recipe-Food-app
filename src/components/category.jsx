import React from "react";
import imageone from "..//asset/fish.png";
import imagetwo from "../asset/chicken.png";
import imagethree from "../asset/steak.jpg";
import imagefour from "../asset/vegan.jpg";
import imagefive from "../asset/fruit.png";
import imagesix from "../asset/icecream.jpg";
const Category = ({
  handlefish,
  handlechicken,
  handlefruits,
  handleicecream,
  handlemeat,
  handlevegan,
}) => {
  return (
    <div className="category">
      <button to="./fish" onClick={handlefish}>
        <div className="Fish">
          <h5>Fish</h5>{" "}
          <img
            style={{ borderRadius: "10px" }}
            src={imageone}
            alt="fish-food"
            height="40px"
            width="40px"
          />
        </div>
      </button>
      <button to="./chicken" onClick={handlechicken}>
        <div className="Chicken">
          <h5>Chicken</h5>
          <img
            style={{ borderRadius: "10px" }}
            src={imagetwo}
            height="40px"
            width="40px"
            alt="Chicken-food"
          />
        </div>
      </button>
      <button to="./meat" onClick={handlemeat}>
        <div className="Meat">
          <h5>Meat</h5>{" "}
          <img
            style={{ borderRadius: "10px" }}
            src={imagethree}
            alt="Meat-food"
            height="40px"
            width="40px"
          />
        </div>
      </button>
      <button to="./vegtrian" onClick={handlevegan}>
        <div className="Vegtrian">
          <h5>Vegtrian</h5>
          <img
            style={{ borderRadius: "10px" }}
            src={imagefour}
            alt="Vegtrian-food"
            height="40px"
            width="40px"
          />
        </div>{" "}
      </button>
      <button to="./fruit" onClick={handlefruits}>
        <div className="Fruit">
          <h5>Fruit </h5>{" "}
          <img
            style={{ borderRadius: "10px" }}
            src={imagefive}
            alt="Fruit"
            height="40px"
            width="40px"
          />
        </div>
      </button>
      <button to="./icecream" onClick={handleicecream}>
        <div className="Ice_cream">
          <h5>Ice cream</h5>
          <img
            style={{ borderRadius: "10px" }}
            src={imagesix}
            alt="Ice cream"
            height="40px"
            width="40px"
          />
        </div>
      </button>{" "}
    </div>
  );
};

export default Category;
