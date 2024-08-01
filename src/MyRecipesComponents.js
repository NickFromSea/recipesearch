function MyRecipesComponents({label, image, calories, ingridients}){
    return (
     <div>
      <div className="container">
       <h2>{label}</h2>
      </div>
      <div className="container">
       <img src={image} />
      </div>
      <div className="container">
       <ul className="list">
        {ingridients.map((ingridient, index) => (
         <li key={index}>
          <img
           src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt="icon"
           className="icon"
          />
          {ingridient}
         </li>
        ))}
       </ul>
      </div>

      <div className="container">
       <p>{calories.toFixed()} calories</p>
      </div>
     </div>
    );

}

export default MyRecipesComponents;