const BodyDisease = (props) => 
{
    const userData=[
    {name:"Loss Of Appetite"},
    {name:"Loss Of Balance"},
    {name:"Loss Of Smell"},
    {name:"Weight Gain"},
    {name:"Weight Loss"},
    {name:"Muscle Weakness"},
    {name:"High Fever"},
    {name:"Mild Fever"},
    {name:"Cold Hands And Feets"},
    {name:"Throat Irritation"},
    {name:"fast Heart Rate"},
    {name:"Sweating"},
    {name:"Fatigue"},
    {name:"Chills"},
    {name:"Malaise"},
    {name:"Excessive Hunger"},
    {name:"Lethargy"},
    {name:"Phlegm"},
    {name:"Swelled Lymph Nodes"},
    {name:"Swelling Joints"},
    {name:"Obesity"},
    {name:"Restlessness"},
    {name:"Red Spots Over Body"},
    {name:"Stiff Neck"},
    {name:"Mood Swings"},
    {name:"Continuous Sneezing"},
    {name:"Acidity"},
  ]
    
  return (
    <>
      <label className="checkContainer">Loss Of Appetite
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Loss Of Appetite")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Loss Of Balance
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Loss Of Balance")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Loss Of Smell
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Loss Of Smell")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Weight Gain
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Weight Gain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Weight Loss
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Weight Loss")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Muscle Weakness
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Muscle Weakness")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">High Fever
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"High Fever")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Mild Fever
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Mild Fever")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Cold Hands And Feets
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Cold Hands And Feets")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Throat Irritation
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Throat Irritation")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">fast Heart Rate
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"fast Heart Rate")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Sweating
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Sweating")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Fatigue
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Fatigue")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Chills
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Chills")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Malaise
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Malaise")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Excessive Hunger
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Excessive Hunger")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Lethargy
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Lethargy")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Phlegm
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Phlegm")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Swelled Lymph Nodes
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Swelled Lymph Nodes")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Swelling Joints
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Swelling Joints")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Obesity
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Obesity")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Restlessness
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Restlessness")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Red Spots Over Body
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Red Spots Over Body")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Stiff Neck
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Stiff Neck")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Mood Swings
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Mood Swings")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Continuous Sneezing
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Continuous Sneezing")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Acidity
        <input type="checkbox" onChange={(e) =>{props.handleChangeBody(e.target.checked,"Acidity")}}/>
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default BodyDisease;