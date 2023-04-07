import "./index.css";
import { useEffect, useState } from "react";
import BodyDisease from "../formEach/bodyDisease/index";
import SkinDisease from "../formEach/skinDisease/index";
import PainDisease from "../formEach/painDisease/index";
import GenitalDisease from "../formEach/genitalDisease/index";
import StomachDisease from "../formEach/stomachDisease/index";
import LegDisease from "../formEach/legDisease/index";
import EyeDisease from "../formEach/eyeDisease/index";
import MouthDisease from "../formEach/mouthDisease/index";
import BrainDisease from "../formEach/brainDisease/index";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import { val, lis1 } from "./data";

const Info = ({ setSymptoms, setPredictions }) => {
  const [loading, setLoading] = useState(false);

  const [change, setChange] = useState({
    text1: "none",
    button11: "block",
    button12: "none",
    text2: "none",
    button21: "block",
    button22: "none",
    text3: "none",
    button31: "block",
    button32: "none",
    text4: "none",
    button41: "block",
    button42: "none",
    text5: "none",
    button51: "block",
    button52: "none",
    text6: "none",
    button61: "block",
    button62: "none",
    text7: "none",
    button71: "block",
    button72: "none",
    text8: "none",
    button81: "block",
    button82: "none",
    text9: "none",
    button91: "block",
    button92: "none",
    text10: "none",
    button101: "block",
    button102: "none",
  });

  // ------------------body
  const [LossOfAppetite, setLossOfAppetite] = useState(0);
  const [LossOfBalance, setLossOfBalance] = useState(0);
  const [LossOfSmell, setLossOfSmell] = useState(0);
  const [WeightGain, setWeightGain] = useState(0);
  const [WeightLoss, setWeightLoss] = useState(0);
  const [MuscleWeakness, setMuscleWeakness] = useState(0);
  const [HighFever, setHighFever] = useState(0);
  const [MildFever, setMildFever] = useState(0);
  const [ColdHandsAndFeets, setColdHandsAndFeets] = useState(0);
  const [ThroatIrritation, setThroatIrritation] = useState(0);
  const [FastHeartRate, setFastHeartRate] = useState(0);
  const [Sweating, setSweating] = useState(0);
  const [Fatigue, setFatigue] = useState(0);
  const [Chills, setChills] = useState(0);
  const [Malaise, setMalaise] = useState(0);
  const [ExcessiveHunger, setExcessiveHunger] = useState(0);
  const [Lethargy, setLethargy] = useState(0);
  const [Phlegm, setPhlegm] = useState(0);
  const [SwelledLymphNodes, setSwelledLymphNodes] = useState(0);
  const [SwellingJoints, setSwellingJoints] = useState(0);
  const [Obesity, setObesity] = useState(0);
  const [Restlessness, setRestlessness] = useState(0);
  const [RedSpotsOverBody, setRedSpotsOverBody] = useState(0);
  const [StiffNeck, setStiffNeck] = useState(0);
  const [MoodSwings, setMoodSwings] = useState(0);
  const [ContinuousSneezing, setContinuousSneezing] = useState(0);
  const [Acidity, setAcidity] = useState(0);

  function handleChangeBody(e, i) {
    if (i === "Loss Of Appetite") {
      if (e === true) setLossOfAppetite(1);
      else setLossOfAppetite(0);
    } else if (i === "Loss Of Balance") {
      if (e === true) setLossOfBalance(1);
      else setLossOfBalance(0);
    } else if (i === "Loss Of Smell") {
      if (e === true) {
        setLossOfSmell(1);
      } else {
        setLossOfSmell(0);
      }
    } else if (i === "Weight Gain") {
      if (e === true) {
        setWeightGain(1);
      } else {
        setWeightGain(0);
      }
    } else if (i === "Weight Loss") {
      if (e === true) {
        setWeightLoss(1);
      } else {
        setWeightLoss(0);
      }
    } else if (i === "Muscle Weakness") {
      if (e === true) {
        setMuscleWeakness(1);
      } else {
        setMuscleWeakness(0);
      }
    } else if (i === "High Fever") {
      if (e === true) {
        setHighFever(1);
      } else {
        setHighFever(0);
      }
    } else if (i === "Mild Fever") {
      if (e === true) {
        setMildFever(1);
      } else {
        setMildFever(0);
      }
    } else if (i === "Cold Hands And Feets") {
      if (e === true) {
        setColdHandsAndFeets(1);
      } else {
        setColdHandsAndFeets(0);
      }
    } else if (i === "Throat Irritation") {
      if (e === true) {
        setThroatIrritation(1);
      } else {
        setThroatIrritation(0);
      }
    } else if (i === "fast Heart Rate") {
      if (e === true) {
        setFastHeartRate(1);
      } else {
        setFastHeartRate(0);
      }
    } else if (i === "Sweating") {
      if (e === true) {
        setSweating(1);
      } else {
        setSweating(0);
      }
    } else if (i === "setFatigue") {
      if (e === true) {
        setFatigue(1);
      } else {
        setFatigue(0);
      }
    } else if (i === "Chills") {
      if (e === true) {
        setChills(1);
      } else {
        setChills(0);
      }
    } else if (i === "Malaise") {
      if (e === true) {
        setMalaise(1);
      } else {
        setMalaise(0);
      }
    } else if (i === "ExcessiveHunger") {
      if (e === true) {
        setExcessiveHunger(1);
      } else {
        setExcessiveHunger(0);
      }
    } else if (i === "Lethargy") {
      if (e === true) {
        setLethargy(1);
      } else {
        setLethargy(0);
      }
    } else if (i === "Phlegm") {
      if (e === true) {
        setPhlegm(1);
      } else {
        setPhlegm(0);
      }
    } else if (i === "SwelledLymphNodes") {
      if (e === true) {
        setSwelledLymphNodes(1);
      } else {
        setSwelledLymphNodes(0);
      }
    } else if (i === "SwellingJoints") {
      if (e === true) {
        setSwellingJoints(1);
      } else {
        setSwellingJoints(0);
      }
    } else if (i === "Obesity") {
      if (e === true) {
        setObesity(1);
      } else {
        setObesity(0);
      }
    } else if (i === "Restlessness") {
      if (e === true) {
        setRestlessness(1);
      } else {
        setRestlessness(0);
      }
    } else if (i === "RedSpotsOverBody") {
      if (e === true) {
        setRedSpotsOverBody(1);
      } else {
        setRedSpotsOverBody(0);
      }
    } else if (i === "StiffNeck") {
      if (e === true) {
        setStiffNeck(1);
      } else {
        setStiffNeck(0);
      }
    } else if (i === "MoodSwings") {
      if (e === true) {
        setMoodSwings(1);
      } else {
        setMoodSwings(0);
      }
    } else if (i === "ContinuousSneezing") {
      if (e === true) {
        setContinuousSneezing(1);
      } else {
        setContinuousSneezing(0);
      }
    } else if (i === "Acidity") {
      if (e === true) {
        setAcidity(1);
      } else {
        setAcidity(0);
      }
    }
  }

  // --------brain
  const [Anxiety, setAnxiety] = useState(0);
  const [Depression, setDepression] = useState(0);
  const [AlteredSensorium, setAlteredSensorium] = useState(0);
  const [LackOfConcentration, setLackOfConcentration] = useState(0);
  const [Unsteadiness, setUnsteadiness] = useState(0);
  const [Headache, setHeadache] = useState(0);
  const [Irritability, setIrritability] = useState(0);
  const [Dizziness, setDizziness] = useState(0);

  function handleChangeBrain(e, i) {
    if (i === "Anxiety") {
      if (e === true) {
        setAnxiety(1);
      } else {
        setAnxiety(0);
      }
    } else if (i === "Depression") {
      if (e === true) {
        setDepression(1);
      } else {
        setDepression(0);
      }
    } else if (i === "Altered Sensorium") {
      if (e === true) {
        setAlteredSensorium(1);
      } else {
        setAlteredSensorium(0);
      }
    } else if (i === "Lack Of Concentration") {
      if (e === true) {
        setLackOfConcentration(1);
      } else {
        setLackOfConcentration(0);
      }
    } else if (i === "Unsteadiness") {
      if (e === true) {
        setUnsteadiness(1);
      } else {
        setUnsteadiness(0);
      }
    } else if (i === "Headache") {
      if (e === true) {
        setHeadache(1);
      } else {
        setHeadache(0);
      }
    } else if (i === "Irritability") {
      if (e === true) {
        setIrritability(1);
      } else {
        setIrritability(0);
      }
    } else if (i === "Dizziness") {
      if (e === true) {
        setDizziness(1);
      } else {
        setDizziness(0);
      }
    }
  }

  // ---------genital
  const [AbnormalMenstruation, setAbnormalMenstruation] = useState(0);
  const [ContinuousFeelOfUrine, setContinuousFeelOfUrine] = useState(0);
  const [DarkUrine, setDarkUrine] = useState(0);
  const [YellowUrine, setYellowUrine] = useState(0);
  const [Polyuria, setPolyuria] = useState(0);
  const [BurningMicturition, setBurningMicturition] = useState(0);
  function handleChangeGenital(e, i) {
    if (i === "Abnormal Menstruation") {
      if (e === true) {
        setAbnormalMenstruation(1);
      } else {
        setAbnormalMenstruation(0);
      }
    } else if (i === "Continuous Feel Of Urine") {
      if (e === true) {
        setContinuousFeelOfUrine(1);
      } else {
        setContinuousFeelOfUrine(0);
      }
    } else if (i === "Dark Urine") {
      if (e === true) {
        setDarkUrine(1);
      } else {
        setDarkUrine(0);
      }
    } else if (i === "Yellow Urine") {
      if (e === true) {
        setYellowUrine(1);
      } else {
        setYellowUrine(0);
      }
    } else if (i === "Polyuria") {
      if (e === true) {
        setPolyuria(1);
      } else {
        setPolyuria(0);
      }
    } else if (i === "Burning Micturition") {
      if (e === true) {
        setBurningMicturition(1);
      } else {
        setBurningMicturition(0);
      }
    }
  }

  // ------------------Eyes
  const [RednessOfEyes, setRednessOfEyes] = useState(0);
  const [WateringFromEyes, setWateringFromEyes] = useState(0);
  const [YellowingOfEyes, setYellowingOfEyes] = useState(0);
  const [BlurredAndDistortedVision, setBlurredAndDistortedVision] = useState(0);
  function handleChangeEyes(e, i) {
    if (i === "Redness Of Eyes") {
      if (e === true) {
        setRednessOfEyes(1);
      } else {
        setRednessOfEyes(0);
      }
    } else if (i === "Watering From Eyes") {
      if (e === true) {
        setWateringFromEyes(1);
      } else {
        setWateringFromEyes(0);
      }
    } else if (i === "Yellowing Of Eyes") {
      if (e === true) {
        setYellowingOfEyes(1);
      } else {
        setYellowingOfEyes(0);
      }
    } else if (i === "Blurred And Distorted Vision") {
      if (e === true) {
        setBlurredAndDistortedVision(1);
      } else {
        setBlurredAndDistortedVision(0);
      }
    }
  }

  // ---------leg
  const [SwollenLegs, setSwollenLegs] = useState(0);
  const [ProminentVeinsOnCalf, setProminentVeinsOnCalf] = useState(0);
  function handleChangeLegs(e, i) {
    if (i === "Swollen Legs") {
      if (e === true) {
        setSwollenLegs(1);
      } else {
        setSwollenLegs(0);
      }
    } else if (i === "Prominent Veins On Calf") {
      if (e === true) {
        setProminentVeinsOnCalf(1);
      } else {
        setProminentVeinsOnCalf(0);
      }
    }
  }

  // -----------mouth
  const [Cough, setCough] = useState(0);
  const [UlcersOnTongue, setUlcersOnTongue] = useState(0);
  const [PatchesInThroat, setPatchesInThroat] = useState(0);
  const [SlurredSpeech, setSlurredSpeech] = useState(0);
  const [Breathlessness, setBreathlessness] = useState(0);
  function handleChangeMouth(e, i) {
    if (i === "Cough") {
      if (e === true) {
        setCough(1);
      } else {
        setCough(0);
      }
    } else if (i === "Ulcers On Tongue") {
      if (e === true) {
        setUlcersOnTongue(1);
      } else {
        setUlcersOnTongue(0);
      }
    } else if (i === "Patches In Throat") {
      if (e === true) {
        setPatchesInThroat(1);
      } else {
        setPatchesInThroat(0);
      }
    } else if (i === "Slurred Speech") {
      if (e === true) {
        setSlurredSpeech(1);
      } else {
        setSlurredSpeech(0);
      }
    } else if (i === "Breathlessness") {
      if (e === true) {
        setBreathlessness(1);
      } else {
        setBreathlessness(0);
      }
    }
  }

  // ----------------pain
  const [PainfulWalking, setPainfulWalking] = useState(0);
  const [BellyPain, setBellyPain] = useState(0);
  const [MusclePain, setMusclePain] = useState(0);
  const [HipJointPain, setHipJointPain] = useState(0);
  const [KneePain, setKneePain] = useState(0);
  const [NeckPain, setNeckPain] = useState(0);
  const [PainInAnalRegion, setPainInAnalRegion] = useState(0);
  const [PainDuringBowelMovements, setPainDuringBowelMovements] = useState(0);
  const [ChestPain, setChestPain] = useState(0);
  const [AbdominalPain, setAbdominalPain] = useState(0);
  const [BackPain, setBackPain] = useState(0);
  const [PainBehindTheEyes, setPainBehindTheEyes] = useState(0);
  const [StomachPain, setStomachPain] = useState(0);
  const [JointPain, setJointPain] = useState(0);
  function handleChangePain(e, i) {
    if (i === "Painful Walking") {
      if (e === true) {
        setPainfulWalking(1);
      } else {
        setPainfulWalking(0);
      }
    } else if (i === "Belly Pain") {
      if (e === true) {
        setBellyPain(1);
      } else {
        setBellyPain(0);
      }
    } else if (i === "Muscle Pain") {
      if (e === true) {
        setMusclePain(1);
      } else {
        setMusclePain(0);
      }
    } else if (i === "Hip Joint Pain") {
      if (e === true) {
        setHipJointPain(1);
      } else {
        setHipJointPain(0);
      }
    } else if (i === "Knee Pain") {
      if (e === true) {
        setKneePain(1);
      } else {
        setKneePain(0);
      }
    } else if (i === "Neck Pain") {
      if (e === true) {
        setNeckPain(1);
      } else {
        setNeckPain(0);
      }
    } else if (i === "Pain In Anal Region") {
      if (e === true) {
        setPainInAnalRegion(1);
      } else {
        setPainInAnalRegion(0);
      }
    } else if (i === "Pain During Bowel Movements") {
      if (e === true) {
        setPainDuringBowelMovements(1);
      } else {
        setPainDuringBowelMovements(0);
      }
    } else if (i === "Chest Pain") {
      if (e === true) {
        setChestPain(1);
      } else {
        setChestPain(0);
      }
    } else if (i === "Abdominal Pain") {
      if (e === true) {
        setAbdominalPain(1);
      } else {
        setAbdominalPain(0);
      }
    } else if (i === "Back Pain") {
      if (e === true) {
        setBackPain(1);
      } else {
        setBackPain(0);
      }
    } else if (i === "Pain Behind The Eyes") {
      if (e === true) {
        setPainBehindTheEyes(1);
      } else {
        setPainBehindTheEyes(0);
      }
    } else if (i === "Stomach Pain") {
      if (e === true) {
        setStomachPain(1);
      } else {
        setStomachPain(0);
      }
    } else if (i === "Joint Pain") {
      if (e === true) {
        setJointPain(1);
      } else {
        setJointPain(0);
      }
    }
  }

  // --------skin
  const [Blackheads, setBlackheads] = useState(0);
  const [SkinRash, setSkinRash] = useState(0);
  const [Itching, setItching] = useState(0);
  const [InternalItching, setInternalItching] = useState(0);
  const [SkinPeeling, setSkinPeeling] = useState(0);
  function handleChangeSkin(e, i) {
    if (i === "Blackheads") {
      if (e === true) {
        setBlackheads(1);
      } else {
        setBlackheads(0);
      }
    } else if (i === "Skin Rash") {
      if (e === true) {
        setSkinRash(1);
      } else {
        setSkinRash(0);
      }
    } else if (i === "Itching") {
      if (e === true) {
        setItching(1);
      } else {
        setItching(0);
      }
    } else if (i === "Internal Itching") {
      if (e === true) {
        setInternalItching(1);
      } else {
        setInternalItching(0);
      }
    } else if (i === "Skin Peeling") {
      if (e === true) {
        setSkinPeeling(1);
      } else {
        setSkinPeeling(0);
      }
    }
  }

  // ------------stomach
  const [SwellingOfStomach, setSwellingOfStomach] = useState(0);
  const [Indigestion, setIndigestion] = useState(0);
  const [Diarrhoea, setDiarrhoea] = useState(0);
  const [Constipation, setConstipation] = useState(0);
  const [StomachBleeding, setStomachBleeding] = useState(0);
  function handleChangeStomach(e, i) {
    if (i === "Swelling Of Stomach") {
      if (e === true) {
        setSwellingOfStomach(1);
      } else {
        setSwellingOfStomach(0);
      }
    } else if (i === "Indigestion") {
      if (e === true) {
        setIndigestion(1);
      } else {
        setIndigestion(0);
      }
    } else if (i === "Diarrhoea") {
      if (e === true) {
        setDiarrhoea(1);
      } else {
        setDiarrhoea(0);
      }
    } else if (i === "Constipation") {
      if (e === true) {
        setConstipation(1);
      } else {
        setConstipation(0);
      }
    } else if (i === "Stomach Bleeding") {
      if (e === true) {
        setStomachBleeding(1);
      } else {
        setStomachBleeding(0);
      }
    }
  }

  const [displayModaleError, setDisplayModaleError] = useState("none");
  const [displayModaleSuccess, setDisplayModaleSuccess] = useState("none");

  const [img1, setImg1] = useState("");
  const [hosp, setHosp] = useState("");
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");
  const [m4, setM4] = useState("");
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [info4, setInfo4] = useState("");
  const [rem1, setRem1] = useState("");
  const [rem2, setRem2] = useState("");
  const [rem3, setRem3] = useState("");
  const [rem4, setRem4] = useState("");
  const [submitClick, setSubmitClick] = useState(false);

  var lis=[LossOfAppetite, LossOfBalance, LossOfSmell, WeightGain, WeightLoss, MuscleWeakness, 
    HighFever, MildFever, ColdHandsAndFeets, ThroatIrritation, FastHeartRate, Sweating,Fatigue ,
     Chills , Malaise , ExcessiveHunger , Lethargy , Phlegm , SwelledLymphNodes , SwellingJoints ,
      Obesity , Restlessness , RedSpotsOverBody , StiffNeck , MoodSwings , ContinuousSneezing , Acidity
      ,PainfulWalking, BellyPain, MusclePain, HipJointPain, KneePain, NeckPain, PainInAnalRegion, PainDuringBowelMovements,
       ChestPain, AbdominalPain, BackPain, PainBehindTheEyes, StomachPain, JointPain,RednessOfEyes, WateringFromEyes,YellowingOfEyes
       , BlurredAndDistortedVision,SwellingOfStomach, Indigestion, Diarrhoea, Constipation, StomachBleeding,Cough, UlcersOnTongue, 
       PatchesInThroat, SlurredSpeech,Breathlessness,Anxiety, Depression, AlteredSensorium, LackOfConcentration, Unsteadiness,Headache 
       , Irritability , Dizziness ,AbnormalMenstruation, ContinuousFeelOfUrine, DarkUrine, YellowUrine, Polyuria,BurningMicturition,
       Blackheads, SkinRash, Itching, InternalItching, SkinPeeling,SwollenLegs, ProminentVeinsOnCalf]

  var lis1 = [
    "Loss Of Appetite", "Loss Of Balance", "Loss Of Smell", "Weight Gain", "Weight Loss", "Muscle Weakness", "High Fever", "Mild Fever", 
    "Cold Hands And Feets", "Throat Irritation", "Fast Heart Rate", "Sweating", "Fatigue", "Chills", "Malaise", "Excessive Hunger", "Lethargy", 
    "Phlegm", "Swelled Lymph Nodes", "Swelling Joints", "Obesity", "Restlessness", "Red Spots Over Body", "Stiff Neck", "Mood Swings",
    "Continuous Sneezing", "Acidity", "Painful Walking", "Belly Pain", "Muscle Pain", "Hip Joint Pain", "Knee Pain", "Neck Pain",
    "Pain In Anal Region", "Pain During Bowel Movements", "Chest Pain", "Abdominal Pain", "Back Pain", "Pain Behind The Eyes", "Stomach Pain", "Joint Pain",
    "Redness Of Eyes", "Watering From Eyes", "Yellowing Of Eyes", "Blurred And Distorted Vision", "Swelling Of Stomach", "Indigestion", "Diarrhoea", "Constipation",
    "Stomach Bleeding", "Cough", "Ulcers On Tongue", "Patches In Throat", "Slurred Speech", "Breathlessness", "Anxiety", "Depression", "Altered Sensorium",
    "Lack Of Concentration", "Unsteadiness", "Headache", "Irritability", "Dizziness", "Abnormal Menstruation", "Continuous Feel Of Urine","Dark Urine", "Yellow Urine",
    "Polyuria", "Burning Micturition", "Blackheads", "Skin Rash", "Itching", "Internal Itching", "Skin Peeling", "Swollen Legs", "Prominent Veins On Calf",
  ];

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    setPredictions(["Predicting........"]);
    setSubmitClick(true);

    var ans = "";
    var li = [];

    for (var i = 0; i < 77; i++) {
      if (lis[i] === 1) {
        li.push(lis1[i]);
      }
    }

    var len = li.length;

    if (len === 0) {
      setDisplayModaleError("block");
      setDisplayModaleSuccess("none");
    } else {
      setDisplayModaleSuccess("block");
      setDisplayModaleError("none");

      for (i = 0; i < len - 1; i++) {
        ans = ans + li[i] + ",";
      }
      ans = ans + li[len - 1];

      axios
        .post(process.env.REACT_APP_BACKEND_API, {
          data: [ans],
        })
        .then((response) => String(response.data.data))
        .then((res) => {
          let a = res;
          var l = [];
          var word = "";
          for (i = 0; i < a.length; i++) {
            if (a[i] === "|") {
              l.push(word);
              word = "";
            } else {
              word = word + a[i];
            }
          }
          l.push(word);

          setSymptoms(li);
          setPredictions([...new Set(l)]);

          setM1(l[0]);
          setM2(l[1]);
          setM3(l[2]);
          setM4(l[3]);

          for (i = 0; i < val.length; i++) {
            if (val[i].diseaseName === String(l[0])) {
              setHosp(val[i].diseaseHospital);
              setImg1(val[i].diseaseImg);
              setInfo1(val[i].diseaseInfo);
              setRem1(val[i].diseaseRem);
              break;
            }
          }

          for (i = 0; i < val.length; i++) {
            if (val[i].diseaseName === String(l[1])) {
              setInfo2(val[i].diseaseInfo);
              setRem2(val[i].diseaseRem);
              break;
            }
          }
          for (i = 0; i < val.length; i++) {
            if (val[i].diseaseName === String(l[2])) {
              setInfo3(val[i].diseaseInfo);
              setRem3(val[i].diseaseRem);
              break;
            }
          }
          for (i = 0; i < val.length; i++) {
            if (val[i].diseaseName === String(l[3])) {
              setInfo4(val[i].diseaseInfo);
              setRem4(val[i].diseaseRem);
              break;
            }
          }
        });
    }
    setLoading(false);
    setSubmitClick(true);
  };

  // Automatic Smooth Scroll whenever we hit submit button
  useEffect(() => {
    if (submitClick) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [submitClick]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="questions">
        <div className="title">
          <h2 style={{ fontSize: "3rem" }}>Check Up Form</h2>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Body Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button11 }}
                  onClick={() => {
                    setChange({
                      text1: "block",
                      button11: "none",
                      button12: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button12 }}
                  onClick={() => {
                    setChange({
                      text1: "none",
                      button11: "block",
                      button12: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text1 }}>
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                <BodyDisease handleChangeBody={handleChangeBody} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Skin Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button21 }}
                  onClick={() => {
                    setChange({
                      text2: "block",
                      button21: "none",
                      button22: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button22 }}
                  onClick={() => {
                    setChange({
                      text2: "none",
                      button21: "block",
                      button22: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text2 }}>
              <p>
                <SkinDisease handleChangeSkin={handleChangeSkin} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Leg Related Issues</span>? if yes
                then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button31 }}
                  onClick={() => {
                    setChange({
                      text3: "block",
                      button31: "none",
                      button32: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button32 }}
                  onClick={() => {
                    setChange({
                      text3: "none",
                      button31: "block",
                      button32: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text3 }}>
              <p>
                <LegDisease handleChangeLegs={handleChangeLegs} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Pain Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button41 }}
                  onClick={() => {
                    setChange({
                      text4: "block",
                      button41: "none",
                      button42: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button42 }}
                  onClick={() => {
                    setChange({
                      text4: "none",
                      button41: "block",
                      button42: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text4 }}>
              <p>
                <PainDisease handleChangePain={handleChangePain} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Genital Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button51 }}
                  onClick={() => {
                    setChange({
                      text5: "block",
                      button51: "none",
                      button52: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button52 }}
                  onClick={() => {
                    setChange({
                      text5: "none",
                      button51: "block",
                      button52: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text5 }}>
              <p>
                <GenitalDisease handleChangeGenital={handleChangeGenital} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Stomch Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button71 }}
                  onClick={() => {
                    setChange({
                      text7: "block",
                      button71: "none",
                      button72: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button72 }}
                  onClick={() => {
                    setChange({
                      text7: "none",
                      button71: "block",
                      button72: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text7 }}>
              <p>
                <StomachDisease handleChangeStomach={handleChangeStomach} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Eye Related Issues</span>? if yes
                then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button81 }}
                  onClick={() => {
                    setChange({
                      text8: "block",
                      button81: "none",
                      button82: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button82 }}
                  onClick={() => {
                    setChange({
                      text8: "none",
                      button81: "block",
                      button82: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text8 }}>
              <p>
                <EyeDisease handleChangeEyes={handleChangeEyes} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Mouth Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button91 }}
                  onClick={() => {
                    setChange({
                      text9: "block",
                      button91: "none",
                      button92: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button92 }}
                  onClick={() => {
                    setChange({
                      text9: "none",
                      button91: "block",
                      button92: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text9 }}>
              <p>
                <MouthDisease handleChangeMouth={handleChangeMouth} />
              </p>
            </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
            <div className="question-title">
              <p style={{ fontSize: "20px", marginBottom: "0.5rem" }}>
                Do you have{" "}
                <span style={{ color: "red" }}>Brain Related Issues</span>? if
                yes then select from given options.
              </p>
              <button type="button" className="question-btn">
                <span
                  className="plus-icon"
                  style={{ display: change.button101 }}
                  onClick={() => {
                    setChange({
                      text10: "block",
                      button101: "none",
                      button102: "block",
                    });
                  }}
                >
                  <i className="far fa-plus-square"></i>
                </span>
                <span
                  className="minus-icon"
                  style={{ display: change.button102 }}
                  onClick={() => {
                    setChange({
                      text10: "none",
                      button101: "block",
                      button102: "none",
                    });
                  }}
                >
                  <i className="far fa-minus-square"></i>
                </span>
              </button>
            </div>
            <div className="question-text" style={{ display: change.text10 }}>
              <p>
                <BrainDisease handleChangeBrain={handleChangeBrain} />
              </p>
            </div>
          </article>
        </div>
        <div
          className="info-error-outer"
          style={{ display: displayModaleError }}
        >
          <div className="info-error-inner">
            <div className="info-error-inner-inner">
              Must check at least 1 symptom to get the result<br></br>
              For better/accurate result provide more info
            </div>
          </div>
        </div>
        <div
          className="info-error-outer"
          style={{ display: displayModaleSuccess }}
        >
          <div className="info-error-inner">
            <div className="info-error-inner-inner-success">
              Get the result in one click<br></br>
              For better/accurate result provide more info
            </div>
          </div>
        </div>
        <div className="info-button-outer">
          <button className="info-button" onClick={handleSubmit}>
            Submit Info
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;