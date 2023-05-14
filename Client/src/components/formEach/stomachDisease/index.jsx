
const StomachDisease = (props) => 
{
  return (
    <>
      <label className="checkContainer">Swelling Of Stomach
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Swelling Of Stomach")}}/>
        <span className="checkmark"></span>
    </label>
    <label className="checkContainer">Indigestion
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Indigestion")}}/>
        <span className="checkmark"></span>
    </label>
    <label className="checkContainer">Diarrhoea
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Diarrhoea")}}/>
        <span className="checkmark"></span>
    </label>
    <label className="checkContainer">Constipation
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Constipation")}}/>
        <span className="checkmark"></span>
    </label>
    <label className="checkContainer">Stomach Bleeding
        <input type="checkbox" onChange={(e) =>{props.handleChangeStomach(e.target.checked,"Stomach Bleeding")}}/>
        <span className="checkmark"></span>
    </label>
    </>
  );
}

export default StomachDisease;