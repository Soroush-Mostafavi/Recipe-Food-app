import React, { useState } from "react";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Sharebutton from "./components/Sharebutton";
import { faker } from "@faker-js/faker";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
////////////////////////////////////////for material ui ////////////////////////////
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Cardbook = ({ recipe, ingredients, setRecipes, recipes }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  ////////////////////////////////////////for material ui ////////////////////////////
  const [openmodal, setOpenmodal] = useState(false);
  const DeleteHandler = () => {
    setRecipes(recipes.filter((el) => el.id !== recipe.id));
  };

  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(toggle !== true);
  };
  return (
    <Fragment>
      <Card className="card">
        <CardHeader
          className="cardHeader"
          avatar={
            <div aria-label="recipe">
              <img
                className="avatar"
                height="50px"
                width="50px"
                src={faker.image.people(1234, 2345, true)}
                alt="food"
              />
            </div>
          }
          action={
            <Tooltip title="Like">
              <IconButton aria-label="add to favorites" onClick={handleClick}>
                {toggle !== false ? (
                  <FavoriteBorderIcon />
                ) : (
                  <FavoriteIcon sx={{ color: red[600] }} />
                )}
              </IconButton>
            </Tooltip>
          }
          title={faker.name.firstName()}
          subheader={faker.address.cityName()}
        />
        <p className="likenumber">
          <ThumbUpOutlinedIcon
            style={{
              fontSize: "15px",
              marginRight: "-20px",
              marginBottom: "-2px",
              paddingLeft: "5px",
            }}
          />
          {faker.random.number({ min: 100, max: 1000 })}{" "}
        </p>
        <CardMedia
          component="img"
          height="194"
          image={recipe.recipe.image}
          alt="Paella dish"
        />
        <CardContent sx={{ height: 90 }}>
          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            Name : {recipe.recipe.label}
          </Typography>
          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            Time to eat : {recipe.recipe.mealType}
          </Typography>
          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            Calories : {recipe.recipe.calories} Cal
          </Typography>
          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            Local : {recipe.recipe.cuisineType}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Delete">
            <IconButton
              aria-label="settings"
              sx={{ color: red[500] }}
              onClick={DeleteHandler}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {openmodal && <Sharebutton closemodal={setOpenmodal} />}
          <Tooltip title="Share">
            <IconButton
              aria-label="share"
              sx={{ color: blue[600] }}
              onClick={() => setOpenmodal(true)}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Tooltip title="Click">
              <ExpandMoreIcon />
            </Tooltip>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingredient:</Typography>
            <Typography paragraph>
              <ol>
                {ingredients.map((ingredient) => (
                  <li>{ingredient.text}</li>
                ))}
                ;
              </ol>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Fragment>
  );
};

export default Cardbook;
