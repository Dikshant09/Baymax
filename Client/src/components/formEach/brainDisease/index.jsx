const BrainDisease = (props) => 
{
  return (
    <>
      <label className="checkContainer">Anxiety
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Anxiety")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Depression
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Depression")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Altered Sensorium
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Altered Sensorium")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Lack Of Concentration
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Lack Of Concentration")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Unsteadines
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Unsteadines")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Headache
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Headache")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Irritability
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Irritability")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Dizziness
        <input type="checkbox" onChange={(e) =>{props.handleChangeBrain(e.target.checked,"Dizziness")}}/>
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default BrainDisease;