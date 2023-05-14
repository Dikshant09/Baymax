const GenitalDisease = (props) => 
{
  return (
    <>
      <label className="checkContainer">Abnormal Menstruation
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Abnormal Menstruation")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Continuous Feel Of Urine
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Continuous Feel Of Urine")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Dark Urine
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Dark Urine")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Yellow Urine
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Yellow Urine")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Polyuria
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Polyuria")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Burning Micturition
        <input type="checkbox" onChange={(e) =>{props.handleChangeGenital(e.target.checked,"Burning Micturition")}}/>
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default GenitalDisease;