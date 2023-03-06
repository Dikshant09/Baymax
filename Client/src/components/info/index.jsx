import './index.css';
import { useEffect, useState } from 'react';
import BodyDisease from '../formEach/bodyDisease/index';
import SkinDisease from '../formEach/skinDisease/index';
import LegDisease from '../formEach/legDisease/index';
import PainDisease from '../formEach/painDisease/index';
import GenitalDisease from '../formEach/genitalDisease/index';
import StomachDisease from '../formEach/stomachDisease/index';
import EyeDisease from '../formEach/eyeDisease/index';
import MouthDisease from '../formEach/mouthDisease/index';
import BrainDisease from '../formEach/brainDisease/index';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

import {
    addDoc,
    collection,
    serverTimestamp,
  } from "firebase/firestore";
  
  import { db } from "../../firebase.config.js";
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';

const val=[
    {
        "diseaseId": 1,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Fungal Infection",
        "diseaseRem" : "Yoghurt and other probiotics have an ample amount of good bacteria that help stave off many fungal infections. These fight off microbes that cause these infections.Clean the affected area with soap and water twice daily before you apply any home remedies or any other medication.Apple cider vinegar has antifungal properties. You could mix two tablespoons in warm water and drink it up or dip a cotton ball in it and dab over your skin. ",
        "diseaseInfo": "A fungal infection, also called mycosis, is a skin disease caused by a fungus. There are millions of species of fungi. They live in the dirt, on plants, on household surfaces, and on your skin. Sometimes, they can lead to skin problems like rashes or bumps.",
        "diseaseImg":  "https://els-jbs-prod-cdn.jbs.elsevierhealth.com/cms/asset/591604dd-c12a-4a0f-b957-dbbe49d06bb6/gr1.jpg"
    },
    {
        "diseaseId": 2,
        "diseaseHospital":{name:"Institute of Liver and Biliary Sciences",info:"The Institute of Liver and Biliary Sciences is a mono-superspeciality hospital for liver and biliary diseases located at New Delhi, India.",address:"D1 ilbs, D-1, Vasant Kunj Rd, Ghitorni, New Delhi, Delhi 110070",phone:"1800 11 5354"},
        "diseaseName": "Hepatitis C",
        "diseaseRem" : "Silymarin. This extract of the milk thistle plant is the most popular herbal remedy for hepatitis C. Some people use it to bring down inflammation and remove toxins from the liver. In animal and cell studies, silymarin blocked the hepatitis C virus and protected the liver from damage.",
        "diseaseInfo": "Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage. The hepatitis C virus (HCV) spreads through contaminated blood.",
        "diseaseImg":  "https://medlineplus.gov/images/HepatitisC.jpg"
    },
    {
        "diseaseId": 3,
        "diseaseHospital":{name:"Institute of Liver and Biliary Sciences",info:"The Institute of Liver and Biliary Sciences is a mono-superspeciality hospital for liver and biliary diseases located at New Delhi, India.",address:"D1 ilbs, D-1, Vasant Kunj Rd, Ghitorni, New Delhi, Delhi 110070",phone:"1800 11 5354"},
        "diseaseName": "Hepatitis E",
        "diseaseRem" : "hepatitis E goes away on its own in about 4-6 weeks.You can make your recovery faster by taking adequate rest and eating a ballanced diet. Treatment focuses on supportive care, rehydration and rest.",
        "diseaseInfo": "Hepatitis E is a liver infection caused by the hepatitis E virus (HEV). HEV is found in the stool of an infected person. It is spread when someone unknowingly ingests the virus even in microscopic amounts.",
        "diseaseImg":  "https://cdnrmi-19948.kxcdn.com/cdn/ff/BuvZWOUAXovtVqgPj3lGfhqyHS3I4J8JonznylPS1XY/1592998875/public/Disease-2020-06/bigstock-Hepatitis-E-Viral-Infection-247374850-e1568915255101.jpg"
    },
    {
        "diseaseId": 4,
        "diseaseName": "Alcoholic Hepatitis",
        "diseaseHospital":{name:"Safdarjung Hospital",info:"Safdarjung Hospital is a multi-specialty hospital, and the largest central government hospital in India if measured by bed strength. It is associated with Vardhman Mahavir Medical College and located in the heart of New Delhi on the Ring Road, opposite to the All India Institute of Medical Sciences.",address:"Ansari Nagar East, near to AIIMS Metro Station, New Delhi, Delhi 110029",phone:"011 2673 0000"},
        "diseaseRem" : "There is currently no cure for alcoholic hepatitis,early symptoms can be reduced by stopping alcohol consumption.Treatment involves hydration, nutritional care and stopping alcohol use. Steroid drugs can help reduce liver inflammation.",
        "diseaseInfo": "Alcoholic hepatitis is most likely to occur in people who drink heavily over many years. However, the relationship between drinking and alcoholic hepatitis is complex. Not all heavy drinkers develop alcoholic hepatitis, and the disease can occur in people who drink only moderately.",
        "diseaseImg":  "https://www.verywellhealth.com/thmb/IyBXDdxlsP4euk3aYnLeKiuLBDk=/1000x1000/smart/filters:no_upscale()/difference-between-hepatitis-and-cirrhosis-1760108-FINAL-cc31505f91864e408afa71e438eb0dfe.png"
    },
    {
        "diseaseId": 5,
        "diseaseHospital":{name:"PGIMER, Chandigarh",info:"Postgraduate Institute of Medical Education and Research is a public medical university in Chandigarh, India. It is an 'Institute of National Importance'. It has educational, medical research, and training facilities for its students including all specialties, super specialties and sub specialties.",address:"Madhya Marg, Sector 12, Chandigarh, 160012",phone:"0172 274 7585"},
        "diseaseName": "Tuberculosis",
        "diseaseRem" : "long course treatment prescribed by doctor.Treatment isn't always required for those without symptoms. Patients with active symptoms will require a long course of treatment involving multiple antibiotics.",
        "diseaseInfo": "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes.",
        "diseaseImg":  "https://images.medicinenet.com/images/article/main_image/tuberculosis-tb-disease.jpg"
    },
    {
        "diseaseId": 6,
        "diseaseName": "Common Cold",
        "diseaseHospital":{name:"PGIMER, Chandigarh",info:"Postgraduate Institute of Medical Education and Research is a public medical university in Chandigarh, India. It is an 'Institute of National Importance'. It has educational, medical research, and training facilities for its students including all specialties, super specialties and sub specialties.",address:"Madhya Marg, Sector 12, Chandigarh, 160012",phone:"0172 274 7585"},
        "diseaseRem" : "Water, juice, clear broth or warm lemon water with honey helps loosen congestion and prevents dehydration. Avoid alcohol, coffee and caffeinated sodas, which can make dehydration worse.Over-the-counter saline nasal drops and sprays can help relieve stuffiness and congestion.",
        "diseaseInfo": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
        "diseaseImg":  "https://www.cdc.gov/dotw/common-cold/images/main_928px.jpg?_=88393"
    },
    {
        "diseaseId": 7,
        "diseaseName": "Pneumonia",
        "diseaseHospital":{name:"SGPGIMS, Lucnow :",info:"Sanjay Gandhi Postgraduate Institute of Medical Sciences has been established under the State Legislature Act in 1983 and is named after Sanjay Gandhi.It was created by the state of Uttar Pradesh as a centre of excellence for providing medical care, education and research of the highest order.",address:"5 km from the main city. Lucknow is located about 500km east of New Delhi and is the capital of Uttar Pradesh.",phone:"0522-2494070"},
        "diseaseRem" : "The typical pneumonia treatment plan consists of rest, antibiotics, and increased fluid intake. You should take it easy even if your symptoms begin to subside. Depending on the cause of pneumonia, your doctor may prescribe an antiviral medication instead of an antibiotic.",
        "diseaseInfo": "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus (purulent material), causing cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia",
        "diseaseImg":  "https://www.clevelandclinic.org/healthinfo/ShowImage.ashx?PIC=4404&width=450"
    },
    {
        "diseaseId": 8,
        "diseaseHospital":{name:"SKIMS,Srinagar :",info:"Sher-i-Kashmir Institute of Medical Sciences, often abbreviated as SKIMS, is the largest medical Institute under State Legislature Act in the Indian union territory of Jammu and Kashmir.",address:"SKIMS Main Rd, Soura, Srinagar, Jammu and Kashmir 190011.",phone:"0194 240 1013"},
        "diseaseName": "Dimorphic hemmorhoids(piles)",
        "diseaseRem" : "Eat more fruits, vegetables and whole grains. Doing so softens the stool and increases its bulk, which will help you avoid the straining that can worsen symptoms from existing hemorrhoids. Add fiber to your diet slowly to avoid problems with gas.Warm bath with Epsom salt. Warm baths can help soothe irritation from hemorrhoids.",
        "diseaseInfo": "Hemorrhoids are swollen, enlarged veins that form inside and outside the anus and rectum. They can be painful, uncomfortable and cause rectal bleeding. Hemorrhoids are also called piles. Were all born with hemorrhoids, but at baseline, they dont bother us. Its only when they become swollen and enlarged that they produce irritating symptoms.",
        "diseaseImg":  "https://www.clevelandclinic.org/healthinfo/ShowImage.ashx?PIC=4404&width=450"
    },
    {
        "diseaseId": 9,
        "diseaseHospital":{name:"SKIMS,Srinagar :",info:"Sher-i-Kashmir Institute of Medical Sciences, often abbreviated as SKIMS, is the largest medical Institute under State Legislature Act in the Indian union territory of Jammu and Kashmir.",address:"SKIMS Main Rd, Soura, Srinagar, Jammu and Kashmir 190011.",phone:"0194 240 1013"},
        "diseaseName": "Heart attack",
        "diseaseRem" : "consult a doctor immediately.",
        "diseaseInfo": "A heart attack occurs when an artery supplying your heart with blood and oxygen becomes blocked. Fatty deposits build up over time, forming plaques in your heart's arteries. If a plaque ruptures, a blood clot can form and block your arteries, causing a heart attack.",
        "diseaseImg":  "https://www.parkview.com/media/Image/Dashboard_952_heartattack_9_20.jpg"
    },
    {
        "diseaseId": 10,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Varicose veins",
        "diseaseRem" : "Regular exercise encourages better blood circulation in the legs, which helps to push along the blood that has collected in the veins. Exercise also helps to lower a person’s blood pressure, which is another contributing factor to varicose veins.Use compression stockings and eat more flavonoids.",
        "diseaseInfo": "Varicose veins are twisted, enlarged veins. Any vein that is close to the skin's surface (superficial) can become varicosed. Varicose veins most commonly affect the veins in the legs. That's because standing and walking increase the pressure in the veins of the lower body.",
        "diseaseImg":  "https://images.squarespace-cdn.com/content/v1/5c1bf89faa49a143533bb409/1598477908453-0EB3TFAIU7GTEMPMA6FQ/varicose-vein.png?format=1000w"
    },
    {
        "diseaseId": 11,
        "diseaseHospital":{name:"svimstpt :",info:"Sri Venkateswara Institute of Medical Sciences, a tertiary care referral centre and a jewel in the crown of the Tirumala Tirupati Devasthanams, Tirupati, has established itself as a Medical University of repute with the blessings of Lord Venkateswara.",address:"Alipiri Road, Tirupati-517501 Andhra Pradesh, India",phone:"0877-2287777"},
        "diseaseName": "Hypothyroidism",
        "diseaseRem" :  "The standard treatment for hypothyroidism is taking daily thyroid hormone replacement medication,intake of vitamins and probiotics.Taking certain vitamin supplements can have an effect on your thyroid health. Low thyroid hormones can affect your body's vitamin B-12 levels. Taking a vitamin B-12 supplement may help you repair some of the damage hypothyroidism caused.",
        "diseaseInfo": "Hypothyroidism (underactive thyroid) is a condition in which your thyroid gland doesn't produce enough of certain crucial hormones. Hypothyroidism may not cause noticeable symptoms in the early stages.",
        "diseaseImg":  "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2019-09/hypothyroid.jpg?itok=0eB_1nNn"
    },
    {
        "diseaseId": 12,
        "diseaseHospital":{name:"svimstpt :",info:"Sri Venkateswara Institute of Medical Sciences, a tertiary care referral centre and a jewel in the crown of the Tirumala Tirupati Devasthanams, Tirupati, has established itself as a Medical University of repute with the blessings of Lord Venkateswara.",address:"Alipiri Road, Tirupati-517501 Andhra Pradesh, India",phone:"0877-2287777"},
        "diseaseName": "Hyperthyroidism",
        "diseaseRem" : "Hyperthyroidism is often treated with antithyroid drugs, which stop the overproduction of thyroid hormone.",
        "diseaseInfo": "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat. Several treatments are available for hyperthyroidism.",
        "diseaseImg":  "https://pulmonaryhypertensionnews.com/wp-content/uploads/2017/03/shutterstock_508392580.jpg"
    },
    {
        "diseaseId": 13,
        "diseaseHospital":{name:"SKIMS,Srinagar :",info:"Sher-i-Kashmir Institute of Medical Sciences, often abbreviated as SKIMS, is the largest medical Institute under State Legislature Act in the Indian union territory of Jammu and Kashmir.",address:"SKIMS Main Rd, Soura, Srinagar, Jammu and Kashmir 190011.",phone:"0194 240 1013"},
        "diseaseName": "Hypoglycemia",
        "diseaseRem" :  "Consuming high-sugar foods or drinks, such as orange juice or regular fizzy drinks, can treat this condition. Alternatively, medication can be used to raise blood sugar levels. It's also important that a doctor identifies and treats the underlying cause.",
        "diseaseInfo": "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source.",
        "diseaseImg":  "https://www.verywellhealth.com/thmb/Tf6ukU1KBprPJbj2_PnfMR6Jzw4=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/hypoglycemia-causes-risk-factors-1087616-V1-b35604db5fdd44868fb5598d97df7855.jpg"
    },
    {
        "diseaseId": 14,
        "diseaseHospital":{name:"SKIMS,Srinagar :",info:"Sher-i-Kashmir Institute of Medical Sciences, often abbreviated as SKIMS, is the largest medical Institute under State Legislature Act in the Indian union territory of Jammu and Kashmir.",address:"SKIMS Main Rd, Soura, Srinagar, Jammu and Kashmir 190011.",phone:"0194 240 1013"},
        "diseaseName": "Osteoarthristis",
        "diseaseRem" :  "Applying hot or cold packs to the joints can relieve the pain and symptoms of osteoarthritis in some people. A hot-water bottle filled with either hot or cold water and applied to the affected area can be very effective in reducing pain.Medication, physiotherapy and sometimes surgery can help reduce pain and maintain joint movement.",
        "diseaseInfo": "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of the bones wears down over time.",
        "diseaseImg":  "https://cdn.novusspinecenter.com/wp-content/uploads/2019/02/osteoarthritis_1500x1386-400x370.jpg"
    },
    {
        "diseaseId": 15,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Arthritis",
        "diseaseRem" : "Your weight can have a big impact on arthritis symptoms. Extra weight puts more pressure on your joints, especially your knees, hips, and feet.Heat and cold treatments can help relieve arthritis pain and inflammation.Meditation and relaxation techniques may help reduce the pain of arthritis by lowering stress and enabling you to cope with it better. Reducing stress may also help lower inflammation and pain.",
        "diseaseInfo": "Arthritis is the swelling and tenderness of one or more joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.",
        "diseaseImg":  "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/44/ds01122_ds00020_im03689_mcdc7_arthritis_typesthu_jpg.jpg"
    },
    {
        "diseaseId": 16,
        "diseaseHospital":{name:"svimstpt :",info:"Sri Venkateswara Institute of Medical Sciences, a tertiary care referral centre and a jewel in the crown of the Tirumala Tirupati Devasthanams, Tirupati, has established itself as a Medical University of repute with the blessings of Lord Venkateswara.",address:"Alipiri Road, Tirupati-517501 Andhra Pradesh, India",phone:"0877-2287777"},
        "diseaseName": "Paroymsal Positional Vertigo",
        "diseaseRem" :  "Benign paroxysmal positional vertigo may go away on its own within a few weeks or months. But, to help relieve BPPV sooner, your doctor, audiologist or physical therapist may treat you with a series of movements known as the canalith repositioning procedure.Benign paroxysmal positional vertigo may go away on its own within a few weeks or months. But, to help relieve BPPV sooner, your doctor, audiologist.",
        "diseaseInfo": "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo — the sudden sensation that you're spinning or that the inside of your head is spinning. BPPV causes brief episodes of mild to intense dizziness. It is usually triggered by specific changes in your head's position.",
        "diseaseImg":  "https://premierneurologycenter.com/wp-content/uploads/sites/436/2015/10/BPPV.jpg.optimal.jpg"
    },
    {
        "diseaseId": 17,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Acne",
        "diseaseRem" : "applying apple cider vinegar on the site and Zinc is an essential nutrient that’s important for cell growth, hormone production, metabolism, and immune function.",
        "diseaseInfo": "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples. Acne is most common among teenagers, though it affects people of all ages.",
        "diseaseImg":  "https://cdn-prod.medicalnewstoday.com/content/images/articles/107/107146/acne.jpg"
    },
    {
        "diseaseId": 18,
        "diseaseHospital":{name:"svimstpt :",info:"Sri Venkateswara Institute of Medical Sciences, a tertiary care referral centre and a jewel in the crown of the Tirumala Tirupati Devasthanams, Tirupati, has established itself as a Medical University of repute with the blessings of Lord Venkateswara.",address:"Alipiri Road, Tirupati-517501 Andhra Pradesh, India",phone:"0877-2287777"},
        "diseaseName": "Urinary tract infection",
        "diseaseRem" :  "Hydration status has been linked to the risk of urinary tract infection.Some evidence shows that increasing your intake of vitamin C could protect against urinary tract infections.Drinking unsweetened cranberry juice is one of the most well-known natural remedies for urinary tract infections. If drinking unsweetened cranberry juice isn’t your thing, you can also take it in capsule form.",
        "diseaseInfo": "A urinary tract infection (UTI) is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra.",
        "diseaseImg":  "https://www.cdc.gov/antibiotic-use/community/images/uti-lg.jpg"
    },
    {
        "diseaseId": 19,
        "diseaseHospital":{name:"svimstpt :",info:"Sri Venkateswara Institute of Medical Sciences, a tertiary care referral centre and a jewel in the crown of the Tirumala Tirupati Devasthanams, Tirupati, has established itself as a Medical University of repute with the blessings of Lord Venkateswara.",address:"Alipiri Road, Tirupati-517501 Andhra Pradesh, India",phone:"0877-2287777"},
        "diseaseName": "Psoriasis",
        "diseaseRem" :  "Dietary supplements may help ease psoriasis symptoms from the inside.Use a humidifier to keep the air in your home or office moist. This can help prevent dry skin before it starts.Topical ointments, light therapy and medication can offer relief.",
        "diseaseInfo": "Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp. Psoriasis is a common, long-term (chronic) disease with no cure. It tends to go through cycles, flaring for a few weeks or months, then subsiding for a while or going into remission.",
        "diseaseImg":  "https://media.istockphoto.com/vectors/psoriasis-skin-disease-types-of-derma-problem-vector-id1126111640"
    },
    {
        "diseaseId": 20,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Hepatitis D",
        "diseaseRem" : "Consult a doctor immediately.",
        "diseaseInfo": "Hepatitis D, also known as delta hepatitis, is a liver infection caused by the hepatitis D virus (HDV). Hepatitis D only occurs in people who are also infected with the hepatitis B virus.",
        "diseaseImg":  "https://www.news-medical.net/image.axd?picture=2018%2F8%2FHepatitis_D.jpg"
    },
    {
        "diseaseId": 21,
        "diseaseHospital":{name:"PGIMER, Chandigarh",info:"Postgraduate Institute of Medical Education and Research is a public medical university in Chandigarh, India. It is an 'Institute of National Importance'. It has educational, medical research, and training facilities for its students including all specialties, super specialties and sub specialties.",address:"Madhya Marg, Sector 12, Chandigarh, 160012",phone:"0172 274 7585"},
        "diseaseName": "Hepatitis B",
        "diseaseRem" : "Treatment for chronic hepatitis B may include: Antiviral medications. Several antiviral medications — including entecavir (Baraclude), tenofovir (Viread), lamivudine (Epivir), adefovir (Hepsera) and telbivudine (Tyzeka) — can help fight the virus and slow its ability to damage your liver.The condition often clears up on its own. Chronic cases require medication and possibly a liver transplant.",
        "diseaseInfo": "Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV). For some people, hepatitis B infection becomes chronic, meaning it lasts more than six months. Having chronic hepatitis B increases your risk of developing liver failure, liver cancer or cirrhosis — a condition that permanently scars of the liver.",
        "diseaseImg":  "https://www.news-medical.net/image.axd?picture=2019%2F8%2Fshutterstock_1103225849.jpg"
    },
    {
        "diseaseId": 22,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Allergy",
        "diseaseRem" : "Consider using an air filter in your indoor environments.High-efficiency particulate air (HEPA) filters are one type of air filter to consider. By trapping airborne irritants such as pollen, dust, and pet dander, HEPA filters reduce allergens in your home.Bromelain is an enzyme found in papaya and pineapple. Natural healers consider bromelain to be effective at improving breathing by reducing swelling.",
        "diseaseInfo": "Allergies are your body's reaction to a normally harmless substance such as pollen, molds, animal dander, latex, certain foods and insect stings. Allergy symptoms range from mild rash or hives, itchiness, runny nose, watery/red eyes to life-threatening.",
        "diseaseImg":  "https://www.verywellhealth.com/thmb/dFjhxIeFmybTKlacu1mCPQ57FOM=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/hormone-allergy-82663-ca91df10002742eeab0c0618d95fbaaf.jpg"
    },
    {
        "diseaseId": 23,
        "diseaseHospital":{name:"PGIMER, Chandigarh",info:"Postgraduate Institute of Medical Education and Research is a public medical university in Chandigarh, India. It is an 'Institute of National Importance'. It has educational, medical research, and training facilities for its students including all specialties, super specialties and sub specialties.",address:"Madhya Marg, Sector 12, Chandigarh, 160012",phone:"0172 274 7585"},
        "diseaseName": "Hepatitis A",
        "diseaseRem" :  "Your body will clear the hepatitis A virus on its own. In most cases of hepatitis A, the liver heals within six months with no lasting damage.The condition clears up on its own in one or two months. Rest and adequate hydration can help.",
        "diseaseInfo": "Hepatitis A is a vaccine-preventable liver infection caused by the hepatitis A virus (HAV). HAV is found in the stool and blood of people who are infected. Hepatitis A is very contagious. It is spread when someone unknowingly ingests the virus — even in microscopic amounts — through close personal contact with an infected person or through eating contaminated food or drink.",
        "diseaseImg":  "https://gloveclinic.com/wp-content/uploads/2019/12/hep_a.jpg"
    },
    {
        "diseaseId": 24,
        "diseaseHospital":{name:"PGIMER, Chandigarh",info:"Postgraduate Institute of Medical Education and Research is a public medical university in Chandigarh, India. It is an 'Institute of National Importance'. It has educational, medical research, and training facilities for its students including all specialties, super specialties and sub specialties.",address:"Madhya Marg, Sector 12, Chandigarh, 160012",phone:"0172 274 7585"},
        "diseaseName": "GERD",
        "diseaseRem" : "Chew gum,sleep on your left side, elevate the head of your bed,eat dinner early.Relief from lifestyle changes and over-the-counter medication is usually temporary. Stronger medication may be required.",
        "diseaseInfo": "Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) can irritate the lining of your esophagus. Many people experience acid reflux from time to time.",
        "diseaseImg":  "https://cdn-prod.medicalnewstoday.com/content/images/articles/014/14085/gerd-diagram.jpg"
    },
    {
        "diseaseId": 25,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Chronic cholestasis",
        "diseaseRem" : "Cool baths, which may make the itching feel less intense , taking Oatmeal baths, creams or lotions, which may soothe the skin.Cholestasis often does not respond to medical therapy of any sort. Some reports indicate success in children with chronic cholestatic diseases with the use of ursodeoxycholic acid (20-30 mg/kg/d), which acts to increase bile formation and antagonizes the effect of hydrophobic bile acids on biological membranes.",
        "diseaseInfo": "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases.",
        "diseaseImg":  "https://aasldpubs.onlinelibrary.wiley.com/cms/asset/9e67f6bf-30a7-49f8-88ca-897934392687/cld591-fig-0003-m.jpg"
    },
    {
        "diseaseId": 26,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Drug Reaction",
        "diseaseRem" : "seek a doctor immediately.",
        "diseaseInfo": "A drug allergy is the abnormal reaction of your immune system to a medication. Any medication — over-the-counter, prescription or herbal — is capable of inducing a drug allergy. However, a drug allergy is more likely with certain medications. The most common signs and symptoms of drug allergy are hives, rash or fever.",
        "diseaseImg":  "https://s3.amazonaws.com/HMP/c360/imported/transfer/Screen_Shot_2013-01-16_at_9.59.23_AM_0.png"
    },
    {
        "diseaseId": 27,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Peptic ulcer diseae",
        "diseaseRem" : "Cabbage Juice and licorice,Treatment usually includes medication to decrease stomach acid production. If it is caused by bacteria, antibiotics may be required.",
        "diseaseInfo": "Peptic ulcer disease is a condition in which painful sores or ulcers develop in the lining of the stomach or the first part of the small intestine (the duodenum). Normally, a thick layer of mucus protects the stomach lining from the effect of its digestive juices.",
        "diseaseImg":  "https://patient.gastro.org/wp-content/uploads/2021/11/CGH_Patient-ed-ulcer_2018-1024x824.jpg"
    },
    {
        "diseaseId": 28,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "AIDS",
        "diseaseRem" : "Please seek a doctor immediately.",
        "diseaseInfo": "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease.",
        "diseaseImg":  "https://www.cdc.gov/dotw/hiv-aids/images/main_928px.jpg?_=02353"
    },
    {
        "diseaseId": 29,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Diabetes",
        "diseaseRem" : "Exercise regularly,manage your carb intake,eat more fiber, medication might be required depending on the type.Controlling blood sugar through diet, oral medication or insulin is the main treatment. Regular screening for complications is also required.",
        "diseaseInfo": "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.",
        "diseaseImg":  "https://www.news-medical.net/image.axd?picture=2020%2F4%2Fshutterstock_571889917.jpg"
    },
    {
        "diseaseId": 30,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Gastroenteritis",
        "diseaseRem" : "Avoiding contaminated food and water and washing hands can often help prevent infection. Rest and rehydration are the mainstays of treatment.Let your stomach settle. Stop eating solid foods for a few hours.",
        "diseaseInfo": "Gastroenteritis is an inflammation of the lining of the intestines caused by a virus, bacteria, or parasites. Viral gastroenteritis is the second most common illness in the U.S. The cause is often a norovirus infection. It spreads through contaminated food or water or by contact with an infected person.",
        "diseaseImg":  "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/51/mcdc7_viral_gastroenteritisthu_jpg.jpg"
    },
    {
        "diseaseId": 31,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Bronchial Asthma",
        "diseaseRem" : "Asthma can usually be managed with rescue inhalers to treat symptoms (salbutamol) and controller inhalers that prevent symptoms (steroids). Severe cases may require longer-acting inhalers that keep the airways open (formoterol, salmeterol, tiotropium), as well as inhalant steroids.",
        "diseaseInfo": "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing. The disease is chronic and interferes with daily working.",
        "diseaseImg":  "https://www.practostatic.com/health-wiki/images/9c589391f028b28594b44e1586c42a8b.jpg"
    },
    {
        "diseaseId": 32,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Hypertension",
        "diseaseRem" : "Can be treated by lowering sodium intake and maintaining good fluid ballance,if symptoms persists please consult a doctor.Increase physical activity.Limit alcohol.Don't smoke.",
        "diseaseInfo": "High blood pressure (hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
        "diseaseImg":  "https://www.medstarhealth.org/-/media/project/mho/medstar/services/h3_high-blood-pressure.jpg?h=410&iar=0&w=730&hash=8692F8FFA3E6ADDDB0D115854C20EFDC"
    },
    {
        "diseaseId": 33,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Migraine",
        "diseaseRem" : "caffeine might help,preventive and pain-relieving medication can help manage migraine headaches.You don't need a prescription to get painkillers like acetaminophen, ibuprofen, or naproxen. You can also buy migraine remedies that have a combination of pain relievers.",
        "diseaseInfo": "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.",
        "diseaseImg":  "https://www.scientificanimations.com/wp-content/uploads/2020/03/Medical-Animation-showing-Migraine-Triggers.jpg"
    },
    {
        "diseaseId": 34,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Cervical spondylosis",
        "diseaseRem" : "no specific treatment is required. If symptoms occur, treatments include medication, corticosteroid injections, physiotherapy and sometimes surgery.consult a doctor if neccesary",
        "diseaseInfo": "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs). Cervical spondylosis is very common and worsens with age.",
        "diseaseImg":  "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/34/ds00697_im02193_mcdc_7_spondylosisthu_jpg.jpg"
    },
    {
        "diseaseId": 35,
        "diseaseHospital":{name:"sctimst trivandrum :",info:"Sree Chitra Tirunal Institute for Medical Sciences & Technology, Trivandrum, is an Institution of National Importance established by an Act of Parliament in 1980.",address:"GWCG+FGX, Jai Nagar W Rd, Chalakkuzhi, Thiruvananthapuram, Kerala 695011",phone:"0471 244 3152"},
        "diseaseName": "Paralysis (brain hemorrhage)",
        "diseaseRem" : "immediate doctor attention required.",
        "diseaseInfo": "A hemorrhagic stroke occurs when a blood vessel in the brain bursts, spilling blood into nearby tissues. The resulting pressure and blood flow interruption cause damage that may include facial paralysis — inability to move the muscles of the face on one or both sides.",
        "diseaseImg":  "https://3.imimg.com/data3/DR/NE/MY-7001242/paralysis-stroke-500x500.png"
    },
    {
        "diseaseId": 36,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Jaundice",
        "diseaseRem" : "If you have acute viral hepatitis, jaundice will go away on its own as the liver begins to heal. If a blocked bile duct is to blame, your doctor may suggest surgery to open it.At par with cow’s milk regarding nutrients, goat’s milk is easy to digest and is suitable for infants and adults alike. Goat’s milk also has useful antibodies that help in curing jaundice.",
        "diseaseInfo": "Jaundice is a condition in which the skin, whites of the eyes and mucous membranes turn yellow because of a high level of bilirubin, a yellow-orange bile pigment. Jaundice has many causes, including hepatitis, gallstones and tumors. In adults, jaundice usually doesn't need to be treated. Prevention.",
        "diseaseImg":  "https://www.thesurgeonscollective.com.au/wp-content/uploads/2018/07/BRON-jaundice-perth.jpg"
    },
    {
        "diseaseId": 37,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Malaria",
        "diseaseRem" : "Drink plenty of water to keep yourself hydrated. You can even include coconut water, lemon water and fruits that contain a high amount of water like cucumber, oranges. Water helps to flush out toxins from the body.Ginger is also a useful antimalaria medicine. It can be boiled with water and reduced into a delicious concoction that will effectively help you with the recovery process. The antibacterial nature of ginger ensures that the disease does not increase further.",
        "diseaseInfo": "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills. While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries.",
        "diseaseImg":  "https://www.news-medical.net/image.axd?picture=2021%2F10%2Fshutterstock_1483138139-1.jpg"
    },
    {
        "diseaseId": 38,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Chicken pox",
        "diseaseRem" : "Apply calamine lotion,serve sugar-free popsicles,wear mittens to prevent scratching.Another itch-relieving option to add to a bath is baking soda. Add one cup of baking soda to a shallow, lukewarm bath. Soak for 15 to 20 minutes. Your child can take up to three baths a day if they find this approach soothing.",
        "diseaseInfo": "Chickenpox is an infection caused by the varicella-zoster virus. It causes an itchy rash with small, fluid-filled blisters. Chickenpox is highly contagious to people who haven't had the disease or been vaccinated against it. Today, a vaccine is available that protects children against chickenpox. Routine vaccination is recommended by the U.S. Centers for Disease Control and Prevention (CDC).",
        "diseaseImg":  "https://www.lalpathlabs.com/blog/wp-content/uploads/2017/05/causes-of-chicken-pox.jpg"
    },
    {
        "diseaseId": 39,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Dengue",
        "diseaseRem" : "Giloy juice is a well-known remedy for dengue fever,papaya leaf juice is a great remedy to increase platelet count.Increased water intake helps alot.A strong immune system help you prevent dengue and also help in quick recovery from dengue fever. Strong immunity will also treat the initial symptoms of dengue.",
        "diseaseInfo": "Dengue is a viral infection transmitted to humans through the bite of infected mosquitoes. The primary vectors that transmit the disease are Aedes aegypti mosquitoes and, to a lesser extent, Ae. albopictus. The virus responsible for causing dengue, is called dengue virus (DENV).",
        "diseaseImg":  "https://imgnew.outlookindia.com/public/uploads/articles/2021/9/9/dengyee.jpg"
    },
    {
        "diseaseId": 40,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Typhoid",
        "diseaseRem" : "Increase fluid Intake,have Apple Cider Vinegar,treatment includes antibiotics.Bananas can bring down the fever and treat diarrhoea in people with typhoid. Bananas have pectin, a soluble fiber that helps the intestines absorb fluids, thus curing diarrhoea. Potassium in the fruit helps in replacing the electrolytes lost through loose motions. It is one of the best things to eat when having typhoid.",
        "diseaseInfo": "Typhoid is a bacterial infection that can lead to a high fever, diarrhea, and vomiting. It can be fatal. It is caused by the bacteria Salmonella typhi. The infection is often passed on through contaminated food and drinking water, and it is more prevalent in places where handwashing is less frequent.",
        "diseaseImg":  "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2017/12/typhoid-bacteria-3d-render.jpg?w=1155&h=1524"
    },
    {
        "diseaseId": 41,
        "diseaseHospital":{name:"AIIMS,DELHI",info:"All India Institute of Medical Sciences, New Delhi is a public hospital and medical research university based in New Delhi, India. The institute is governed by the AIIMS Act, 1956 and operates autonomously under the Ministry of Health and Family Welfare.",address:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",phone:"011 2658 8500"},
        "diseaseName": "Impetigo",
        "diseaseRem" : "Consult a doctor.Impetigo is treated with prescription mupirocin antibiotic ointment or cream applied directly to the sores two to three times a day for five to 10 days.Antibiotics shorten the infection and can help prevent spread to others.",
        "diseaseInfo": "Impetigo (im-peh-TIE-go) is a bacterial infection of the skin that is most common in young children. Doctors use antibiotics to treat impetigo. Antibiotics can also help protect others from getting sick. On This Page. Two Bacteria Can Cause Impetigo.",
        "diseaseImg":  "https://content.ca.healthwise.net/resources/13.0/en-ca/media/medical/hw/acj2015_460x300.jpg"
    }

]

const Info = ({setSymptoms, setPredictions}) => 
{
    const auth = getAuth();
    const[loading,setLoading]=useState(false);
    const[resultDisplay,setResultDisplay]=useState("none")
    
    const handleLoading = async() =>
    {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },8000);
    }

    const[change,setChange]=useState({
        text1:'none',button11:'block',button12:'none',
        text2:'none',button21:'block',button22:'none',
        text3:'none',button31:'block',button32:'none',
        text4:'none',button41:'block',button42:'none',
        text5:'none',button51:'block',button52:'none',
        text6:'none',button61:'block',button62:'none',
        text7:'none',button71:'block',button72:'none',
        text8:'none',button81:'block',button82:'none',
        text9:'none',button91:'block',button92:'none',
        text10:'none',button101:'block',button102:'none',
    })

    // ------------------body
    const[LossOfAppetite,setLossOfAppetite]=useState(0);
    const[LossOfBalance,setLossOfBalance]=useState(0)
    const[LossOfSmell,setLossOfSmell]=useState(0);
    const[WeightGain,setWeightGain]=useState(0)
    const[WeightLoss,setWeightLoss]=useState(0);
    const[MuscleWeakness,setMuscleWeakness]=useState(0);
    const[HighFever,setHighFever]=useState(0)
    const[MildFever,setMildFever]=useState(0);
    const[ColdHandsAndFeets,setColdHandsAndFeets]=useState(0)
    const[ThroatIrritation,setThroatIrritation]=useState(0);
    const[FastHeartRate,setFastHeartRate]=useState(0)
    const[Sweating,setSweating]=useState(0);
    const[Fatigue,setFatigue]=useState(0);
    const[Chills,setChills]=useState(0)
    const[Malaise,setMalaise]=useState(0);
    const[ExcessiveHunger,setExcessiveHunger]=useState(0)
    const[Lethargy,setLethargy]=useState(0);
    const[Phlegm,setPhlegm]=useState(0);
    const[SwelledLymphNodes,setSwelledLymphNodes]=useState(0)
    const[SwellingJoints,setSwellingJoints]=useState(0);
    const[Obesity,setObesity]=useState(0)
    const[Restlessness,setRestlessness]=useState(0);
    const[RedSpotsOverBody,setRedSpotsOverBody]=useState(0)
    const[StiffNeck,setStiffNeck]=useState(0);
    const[MoodSwings,setMoodSwings]=useState(0)
    const[ContinuousSneezing,setContinuousSneezing]=useState(0);
    const[Acidity,setAcidity]=useState(0);

    function handleChangeBody(e,i)
    {
    if(i==='Loss Of Appetite')
    {
        if(e===true)
        {
            setLossOfAppetite(1)
        }
        else
        {
            setLossOfAppetite(0)
        }
    }
    else if(i==="Loss Of Balance")
    {
        if(e===true)
        {
            setLossOfBalance(1)
        }
        else
        {
            setLossOfBalance(0)
        }
    }
    else if(i==="Loss Of Smell")
    {
        if(e===true)
        {
            setLossOfSmell(1)
        }
        else
        {
            setLossOfSmell(0)
        }
    }
    else if(i==="Weight Gain")
    {
        if(e===true)
        {
            setWeightGain(1)
        }
        else
        {
            setWeightGain(0)
        }
    }
    else if(i==="Weight Loss")
    {
        if(e===true)
        {
            setWeightLoss(1)
        }
        else
        {
            setWeightLoss(0)
        }
    }
    else if(i==="Muscle Weakness")
    {
        if(e===true)
        {
            setMuscleWeakness(1)
        }
        else
        {
            setMuscleWeakness(0)
        }
    }
    else if(i==="High Fever")
    {
        if(e===true)
        {
            setHighFever(1)
        }
        else
        {
            setHighFever(0)
        }
    }
    else if(i==="Mild Fever")
    {
        if(e===true)
        {
            setMildFever(1)
        }
        else
        {
            setMildFever(0)
        }
    }
    else if(i==="Cold Hands And Feets")
    {
        if(e===true)
        {
            setColdHandsAndFeets(1)
        }
        else
        {
            setColdHandsAndFeets(0)
        }
    }
    else if(i==="Throat Irritation")
    {
        if(e===true)
        {
            setThroatIrritation(1)
        }
        else
        {
            setThroatIrritation(0)
        }
    }
    else if(i==="fast Heart Rate")
    {
        if(e===true)
        {
            setFastHeartRate(1)
        }
        else
        {
            setFastHeartRate(0)
        }
    }
    else if(i==="Sweating")
    {
        if(e===true)
        {
            setSweating(1)
        }
        else
        {
            setSweating(0)
        }
    }

    else if(i==="setFatigue")
    {
        if(e===true)
        {
            setFatigue(1)
        }
        else
        {
            setFatigue(0)
        }
    }
    else if(i==="Chills")
    {
        if(e===true)
        {
            setChills(1)
        }
        else
        {
            setChills(0)
        }
    }
    else if(i==="Malaise")
    {
        if(e===true)
        {
            setMalaise(1)
        }
        else
        {
            setMalaise(0)
        }
    }
    else if(i==="ExcessiveHunger")
    {
        if(e===true)
        {
            setExcessiveHunger(1)
        }
        else
        {
            setExcessiveHunger(0)
        }
    }
    else if(i==="Lethargy")
    {
        if(e===true)
        {
            setLethargy(1)
        }
        else
        {
            setLethargy(0)
        }
    }
    else if(i==="Phlegm")
    {
        if(e===true)
        {
            setPhlegm(1)
        }
        else
        {
            setPhlegm(0)
        }
    }else if(i==="SwelledLymphNodes")
    {
        if(e===true)
        {
            setSwelledLymphNodes(1)
        }
        else
        {
            setSwelledLymphNodes(0)
        }
    }else if(i==="SwellingJoints")
    {
        if(e===true)
        {
            setSwellingJoints(1)
        }
        else
        {
            setSwellingJoints(0)
        }
    }else if(i==="Obesity")
    {
        if(e===true)
        {
            setObesity(1)
        }
        else
        {
            setObesity(0)
        }
    }else if(i==="Restlessness")
    {
        if(e===true)
        {
            setRestlessness(1)
        }
        else
        {
            setRestlessness(0)
        }
    }else if(i==="RedSpotsOverBody")
    {
        if(e===true)
        {
            setRedSpotsOverBody(1)
        }
        else
        {
            setRedSpotsOverBody(0)
        }
    }else if(i==="StiffNeck")
    {
        if(e===true)
        {
            setStiffNeck(1)
        }
        else
        {
            setStiffNeck(0)
        }
    }else if(i==="MoodSwings")
    {
        if(e===true)
        {
            setMoodSwings(1)
        }
        else
        {
            setMoodSwings(0)
        }
    }else if(i==="ContinuousSneezing")
    {
        if(e===true)
        {
            setContinuousSneezing(1)
        }
        else
        {
            setContinuousSneezing(0)
        }
    }else if(i==="Acidity")
    {
        if(e===true)
        {
            setAcidity(1)
        }
        else
        {
            setAcidity(0)
        }
    }
    }  

    // --------brain
    const[Anxiety,setAnxiety]=useState(0);
    const[Depression,setDepression]=useState(0)
    const[AlteredSensorium,setAlteredSensorium]=useState(0);
    const[LackOfConcentration,setLackOfConcentration]=useState(0)
    const[Unsteadiness,setUnsteadiness]=useState(0)
    const[Headache,setHeadache]=useState(0)
    const[Irritability,setIrritability]=useState(0);
    const[Dizziness,setDizziness]=useState(0)

    function handleChangeBrain(e,i)
    {
    if(i==="Anxiety")
    {
        if(e===true)
        {
            setAnxiety(1)
        }
        else
        {
            setAnxiety(0)
        }
    }
    else if(i==="Depression")
    {
        if(e===true)
        {
            setDepression(1)
        }
        else
        {
            setDepression(0)
        }
    }
    else if(i==="Altered Sensorium")
    {
        if(e===true)
        {
            setAlteredSensorium(1)
        }
        else
        {
            setAlteredSensorium(0)
        }
    }
    else if(i==="Lack Of Concentration")
    {
        if(e===true)
        {
            setLackOfConcentration(1)
        }
        else
        {
            setLackOfConcentration(0)
        }
    }
    else if(i==="Unsteadiness")
    {
        if(e===true)
        {
            setUnsteadiness(1)
        }
        else
        {
            setUnsteadiness(0)
        }
    }
    else if(i==="Headache")
    {
        if(e===true)
        {
            setHeadache(1)
        }
        else
        {
            setHeadache(0)
        }
    }
    else if(i==="Irritability")
    {
        if(e===true)
        {
            setIrritability(1)
        }
        else
        {
            setIrritability(0)
        }
    }
    else if(i==="Dizziness")
    {
        if(e===true)
        {
            setDizziness(1)
        }
        else
        {
            setDizziness(0)
        }
    }
    }

    // ---------genital
    const[AbnormalMenstruation,setAbnormalMenstruation]=useState(0);
    const[ContinuousFeelOfUrine,setContinuousFeelOfUrine]=useState(0);
    const[DarkUrine,setDarkUrine]=useState(0);
    const[YellowUrine,setYellowUrine]=useState(0);
    const[Polyuria,setPolyuria]=useState(0);
    const[BurningMicturition,setBurningMicturition]=useState(0);
    function handleChangeGenital(e,i)
    {
    if(i==="Abnormal Menstruation")
    {
        if(e===true)
        {
            setAbnormalMenstruation(1)
        }
        else
        {
            setAbnormalMenstruation(0)
        }
    }
    else if(i==="Continuous Feel Of Urine")
    {
        if(e===true)
        {
            setContinuousFeelOfUrine(1)
        }
        else
        {
            setContinuousFeelOfUrine(0)
        }
    }
    else if(i==="Dark Urine")
    {
        if(e===true)
        {
            setDarkUrine(1)
        }
        else
        {
            setDarkUrine(0)
        }
    }
    else if(i==="Yellow Urine")
    {
        if(e===true)
        {
            setYellowUrine(1)
        }
        else
        {
            setYellowUrine(0)
        }
    }
    else if(i==="Polyuria")
    {
        if(e===true)
        {
            setPolyuria(1)
        }
        else
        {
            setPolyuria(0)
        }
    }
    else if(i==="Burning Micturition")
    {
        if(e===true)
        {
            setBurningMicturition(1)
        }
        else
        {
            setBurningMicturition(0)
        }
    }
    }

    // ------------------Eyes
    const[RednessOfEyes,setRednessOfEyes]=useState(0);
    const[WateringFromEyes,setWateringFromEyes]=useState(0);
    const[YellowingOfEyes,setYellowingOfEyes]=useState(0);
    const[BlurredAndDistortedVision,setBlurredAndDistortedVision]=useState(0);
    function handleChangeEyes(e,i)
    {
    if(i==="Redness Of Eyes")
    {
        if(e===true)
        {
            setRednessOfEyes(1)
        }
    else
        {
            setRednessOfEyes(0)
        }
    }
    else if(i==="Watering From Eyes")
    {
        if(e===true)
        {
            setWateringFromEyes(1)
        }
        else
        {
            setWateringFromEyes(0)
        }
    }
    else if(i==="Yellowing Of Eyes")
    {
        if(e===true)
        {
            setYellowingOfEyes(1)
        }
        else
        {
            setYellowingOfEyes(0)
        }
    }
    else if(i==="Blurred And Distorted Vision")
    {
        if(e===true)
        {
            setBlurredAndDistortedVision(1)
        }
        else
        {
            setBlurredAndDistortedVision(0)
        }
    }
    }

    // ---------leg
    const[SwollenLegs,setSwollenLegs]=useState(0);
    const[ProminentVeinsOnCalf,setProminentVeinsOnCalf]=useState(0)
    function handleChangeLegs(e,i)
    {
    if(i==="Swollen Legs")
    {
        if(e===true)
        {
            setSwollenLegs(1)
        }
        else
        {
            setSwollenLegs(0)
        }
    }
    else if(i==="Prominent Veins On Calf")
    {
        if(e===true)
        {
            setProminentVeinsOnCalf(1)
        }
        else
        {
            setProminentVeinsOnCalf(0)
        }
    }
    }

    // -----------mouth
    const[Cough,setCough]=useState(0);
    const[UlcersOnTongue,setUlcersOnTongue]=useState(0)
    const[PatchesInThroat,setPatchesInThroat]=useState(0);
    const[SlurredSpeech,setSlurredSpeech]=useState(0);
    const[Breathlessness,setBreathlessness]=useState(0);
    function handleChangeMouth(e,i)
    {
    if(i==="Cough")
    {
        if(e===true)
        {
            setCough(1)
        }
        else
        {
            setCough(0)
        }
    }
    else if(i==="Ulcers On Tongue")
    {
        if(e===true)
        {
            setUlcersOnTongue(1)
        }
        else
        {
            setUlcersOnTongue(0)
        }
    }
    else if(i==="Patches In Throat")
    {
        if(e===true)
        {
            setPatchesInThroat(1)
        }
        else
        {
            setPatchesInThroat(0)
        }
    }
    else if(i==="Slurred Speech")
    {
        if(e===true)
        {
            setSlurredSpeech(1)
        }
        else
        {
            setSlurredSpeech(0)
        }
    }
    else if(i==="Breathlessness")
    {
        if(e===true)
        {
            setBreathlessness(1)
        }
        else
        {
            setBreathlessness(0)
        }
    }
    }

    // ----------------pain
    const[PainfulWalking,setPainfulWalking]=useState(0);
    const[BellyPain,setBellyPain]=useState(0)
    const[MusclePain,setMusclePain]=useState(0);
    const[HipJointPain,setHipJointPain]=useState(0)
    const[KneePain,setKneePain]=useState(0);
    const[NeckPain,setNeckPain]=useState(0);
    const[PainInAnalRegion,setPainInAnalRegion]=useState(0)
    const[PainDuringBowelMovements,setPainDuringBowelMovements]=useState(0);
    const[ChestPain,setChestPain]=useState(0)
    const[AbdominalPain,setAbdominalPain]=useState(0);
    const[BackPain,setBackPain]=useState(0);
    const[PainBehindTheEyes,setPainBehindTheEyes]=useState(0)
    const[StomachPain,setStomachPain]=useState(0);
    const[JointPain,setJointPain]=useState(0);
    function handleChangePain(e,i)
    {
    if(i==="Painful Walking")
    {
        if(e===true)
        {
            setPainfulWalking(1)
        }
        else
        {
            setPainfulWalking(0)
        }
    }
    else if(i==="Belly Pain")
    {
        if(e===true)
        {
            setBellyPain(1)
        }
        else
        {
            setBellyPain(0)
        }
    }
    else if(i==="Muscle Pain")
    {
        if(e===true)
        {
            setMusclePain(1)
        }
        else
        {
            setMusclePain(0)
        }
    }
    else if(i==="Hip Joint Pain")
    {
        if(e===true)
        {
            setHipJointPain(1)
        }
        else
        {
            setHipJointPain(0)
        }
    }
    else if(i==="Knee Pain")
    {
        if(e===true)
        {
            setKneePain(1)
        }
        else
        {
            setKneePain(0)
        }
    }
    else if(i==="Neck Pain")
    {
        if(e===true)
        {
            setNeckPain(1)
        }
        else
        {
            setNeckPain(0)
        }
    }
    else if(i==="Pain In Anal Region")
    {
        if(e===true)
        {
            setPainInAnalRegion(1)
        }
        else
        {
            setPainInAnalRegion(0)
        }
    }
    else if(i==="Pain During Bowel Movements")
    {
        if(e===true)
        {
            setPainDuringBowelMovements(1)
        }
        else
        {
            setPainDuringBowelMovements(0)
        }
    }
    else if(i==="Chest Pain")
    {
        if(e===true)
        {
            setChestPain(1)
        }
        else
        {
            setChestPain(0)
        }
    }
    else if(i==="Abdominal Pain")
    {
        if(e===true)
        {
            setAbdominalPain(1)
        }
        else
        {
            setAbdominalPain(0)
        }
    }
    else if(i==="Back Pain")
    {
        if(e===true)
        {
            setBackPain(1)
        }
        else
        {
            setBackPain(0)
        }
    }
    else if(i==="Pain Behind The Eyes")
    {
        if(e===true)
        {
            setPainBehindTheEyes(1)
        }
        else
        {
            setPainBehindTheEyes(0)
        }
    }
    else if(i==="Stomach Pain")
    {
        if(e===true)
        {
            setStomachPain(1)
        }
        else
        {
            setStomachPain(0)
        }
    }
    else if(i==="Joint Pain")
    {
        if(e===true)
        {
            setJointPain(1)
        }
        else
        {
            setJointPain(0)
        }
    }
    }

    // --------skin
    const[Blackheads,setBlackheads]=useState(0);
    const[SkinRash,setSkinRash]=useState(0)
    const[Itching,setItching]=useState(0);
    const[InternalItching,setInternalItching]=useState(0)
    const[SkinPeeling,setSkinPeeling]=useState(0);
    function handleChangeSkin(e,i)
    {
    if(i==="Blackheads")
    {
        if(e===true)
        {
            setBlackheads(1)
        }
        else
        {
            setBlackheads(0)
        }
    }
    else if(i==="Skin Rash")
    {
        if(e===true)
        {
            setSkinRash(1)
        }
        else
        {
            setSkinRash(0)
        }
    }
    else if(i==="Itching")
    {
        if(e===true)
        {
            setItching(1)
        }
        else
        {
            setItching(0)
        }
    }
    else if(i==="Internal Itching")
    {
        if(e===true)
        {
            setInternalItching(1)
        }
        else
        {
            setInternalItching(0)
        }
    }
    else if(i==="Skin Peeling")
    {
        if(e===true)
        {
            setSkinPeeling(1)
        }
        else
        {
            setSkinPeeling(0)
        }
    }
    }


    // ------------stomach
    const[SwellingOfStomach,setSwellingOfStomach]=useState(0);
    const[Indigestion,setIndigestion]=useState(0)
    const[Diarrhoea,setDiarrhoea]=useState(0);
    const[Constipation,setConstipation]=useState(0)
    const[StomachBleeding,setStomachBleeding]=useState(0);
    function handleChangeStomach(e,i)
    {
    if(i==="Swelling Of Stomach")
    {
        if(e===true)
        {
            setSwellingOfStomach(1)
        }
        else
        {
            setSwellingOfStomach(0)
        }
    }
    else if(i==="Indigestion")
    {
        if(e===true)
        {
            setIndigestion(1)
        }
        else
        {
            setIndigestion(0)
        }
    }
    else if(i==="Diarrhoea")
    {
        if(e===true)
        {
            setDiarrhoea(1)
        }
        else
        {
            setDiarrhoea(0)
        }
    }
    else if(i==="Constipation")
    {
        if(e===true)
        {
            setConstipation(1)
        }
        else
        {
            setConstipation(0)
        }
    }
    else if(i==="Stomach Bleeding")
    {
        if(e===true)
        {
            setStomachBleeding(1)
        }
        else
        {
            setStomachBleeding(0)
        }
    }
    }


    const[displayModaleError,setDisplayModaleError]=useState("none")
    const[displayModaleSuccess,setDisplayModaleSuccess]=useState("none")
    

    // const[m1,setM1]=useState("")
    // const[m2,setM2]=useState("")
    // const[m3,setM3]=useState("")
    // const[m4,setM4]=useState("")

    const[img1,setImg1]=useState("")
    const[hosp,setHosp]=useState("")
    const[m1,setM1]=useState("")
    const[m2,setM2]=useState("")
    const[m3,setM3]=useState("")
    const[m4,setM4]=useState("")
    const[info1,setInfo1]=useState("")
    const[info2,setInfo2]=useState("")
    const[info3,setInfo3]=useState("")
    const[info4,setInfo4]=useState("")
    const[rem1,setRem1]=useState("")
    const[rem2,setRem2]=useState("")
    const[rem3,setRem3]=useState("")
    const[rem4,setRem4]=useState("")
    // console.log(rem2,rem3,rem4);
    
    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();

        var ans="";
        var li=[]
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
        
        var lis1=["Loss Of Appetite", "Loss Of Balance", "Loss Of Smell", "Weight Gain", "Weight Loss", "Muscle Weakness","High Fever", 
        "Mild Fever", "Cold Hands And Feets", "Throat Irritation", "Fast Heart Rate", "Sweating","Fatigue", "Chills", "Malaise", 
        "Excessive Hunger", "Lethargy", "Phlegm", "Swelled Lymph Nodes", "Swelling Joints","Obesity", "Restlessness", "Red Spots Over Body", 
        "Stiff Neck", "Mood Swings", "Continuous Sneezing", "Acidity","Painful Walking", "Belly Pain", "Muscle Pain", "Hip Joint Pain", "Knee Pain", 
        "Neck Pain", "Pain In Anal Region","Pain During Bowel Movements", "Chest Pain", "Abdominal Pain", "Back Pain", "Pain Behind The Eyes","Stomach Pain", 
        "Joint Pain","Redness Of Eyes", "Watering From Eyes","Yellowing Of Eyes", "Blurred And Distorted Vision","Swelling Of Stomach", "Indigestion", "Diarrhoea", 
        "Constipation", "Stomach Bleeding","Cough", "Ulcers On Tongue","Patches In Throat", "Slurred Speech","Breathlessness","Anxiety", "Depression", "Altered Sensorium",
         "Lack Of Concentration", "Unsteadiness","Headache", "Irritability", "Dizziness","Abnormal Menstruation","Continuous Feel Of Urine", "Dark Urine", "Yellow Urine",
          "Polyuria","Burning Micturition","Blackheads", "Skin Rash", "Itching", "Internal Itching", "Skin Peeling","Swollen Legs", "Prominent Veins On Calf"]
        for(var i=0;i<77;i++)
        {
            if(lis[i]===1)
            {
                li.push(lis1[i]);
            }
        }
        var len=li.length;
        if(len===0)
        {
            setDisplayModaleError("block")
            setDisplayModaleSuccess("none")
        }
        else{
            setDisplayModaleSuccess("block")
            setDisplayModaleError("none")
            // handleLoading();
            for(i=0;i<len-1;i++)
            {
                ans=ans+li[i]+","
            }
            ans=ans+li[len-1];
            // console.log(ans);
            // return ;
            // Axios.get('http://localhost:3001/result',
            // {
            //     params:{
            //         ans:li,
            //       }
            // })

             axios.post("https://dikshant09-disease-prediction-api.hf.space/run/predict", {
                data: [ans]
              })
              .then((response) => String(response.data.data))
            .then((res)=>{
                // console.log(res);
                let a=(res)
                var l=[]
                var word=""
                for(i=0;i<a.length;i++)
                {
                    if(a[i]==="|")
                    {
                        l.push(word);
                        word="";
                    }
                    else{
                        word=word+a[i]
                    }
                }
                l.push(word);
                setSymptoms(li);
                setPredictions([...(new Set(l))]);
                // setPredictions(l);
                setM1(l[0]);
                setM2(l[1]);
                setM3(l[2]);
                setM4(l[3]);
                for(i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[0]))
                    {
                        setHosp(val[i].diseaseHospital)
                        setImg1(val[i].diseaseImg)
                    setInfo1(val[i].diseaseInfo);
                    setRem1(val[i].diseaseRem);
                    break;
                    }
                }
                


                for(i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[1]))
                    {
                    setInfo2(val[i].diseaseInfo);
                    setRem2(val[i].diseaseRem);
                    break;
                    }
                }
                for(i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[2]))
                    {
                    setInfo3(val[i].diseaseInfo);
                    setRem3(val[i].diseaseRem);
                    break;
                    }
                }
                for(i=0;i<val.length;i++)
                {
                    if(val[i].diseaseName===String(l[3]))
                    {
                    setInfo4(val[i].diseaseInfo);
                    setRem4(val[i].diseaseRem);
                    break;
                    }
                }
            });

            // setPredictions([m1, m2]);
            // setPredictions([m1, m2, m3, m4]);
            // console.log(m1,info1)
            // console.log(m2,info2)
            // console.log(m3,info3)
            // console.log(m4,info4)
            // handleLoading();
            // setResultDisplay("block");
        }
        setLoading(false);
    }

    // console.log('m1', m1)
    // console.log('m2', m2)
    
    // console.log(m1,info1)
    // console.log(m2,info2)
    // console.log(m3,info3)
    // console.log(m4,info4)


    if(loading) return <Spinner />

    return (
    <>
    <div className="questions">
        <div className="title">
            <h2 style={{fontSize: '3rem'}}>Check Up Form</h2>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
                  <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Body Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button11}} onClick={()=>{setChange({text1:"block",button11:"none",button12:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button12}} onClick={()=>{setChange({text1:"none",button11:"block",button12:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text1}}>
                <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>
                    <BodyDisease handleChangeBody={handleChangeBody}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Skin Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button21}} onClick={()=>{setChange({text2:"block",button21:"none",button22:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button22}} onClick={()=>{setChange({text2:"none",button21:"block",button22:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text2}}>
                  <p>
                    <SkinDisease handleChangeSkin={handleChangeSkin}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Leg Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button31}} onClick={()=>{setChange({text3:"block",button31:"none",button32:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button32}} onClick={()=>{setChange({text3:"none",button31:"block",button32:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text3}}>
                  <p>
                    <LegDisease handleChangeLegs={handleChangeLegs}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Pain Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button41}} onClick={()=>{setChange({text4:"block",button41:"none",button42:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button42}} onClick={()=>{setChange({text4:"none",button41:"block",button42:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text4}}>
                  <p>
                    <PainDisease handleChangePain={handleChangePain}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Genital Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button51}} onClick={()=>{setChange({text5:"block",button51:"none",button52:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button52}} onClick={()=>{setChange({text5:"none",button51:"block",button52:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text5}}>
                  <p>
                    <GenitalDisease handleChangeGenital={handleChangeGenital}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Stomch Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button71}} onClick={()=>{setChange({text7:"block",button71:"none",button72:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button72}} onClick={()=>{setChange({text7:"none",button71:"block",button72:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text7}}>
                  <p>
                    <StomachDisease handleChangeStomach={handleChangeStomach}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Eye Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button81}} onClick={()=>{setChange({text8:"block",button81:"none",button82:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button82}} onClick={()=>{setChange({text8:"none",button81:"block",button82:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text8}}>
                  <p>
                    <EyeDisease handleChangeEyes={handleChangeEyes}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Mouth Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button91}} onClick={()=>{setChange({text9:"block",button91:"none",button92:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button92}} onClick={()=>{setChange({text9:"none",button91:"block",button92:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text9}}>
                  <p>
                    <MouthDisease handleChangeMouth={handleChangeMouth}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="section-center">
          <article className="question">
              <div className="question-title">
              <p style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you have <span style={{color:"red"}}>Brain Related Issues</span>? if yes then select from given options.</p>
                  <button type="button" className="question-btn">
                      <span className="plus-icon"  style={{display:change.button101}} onClick={()=>{setChange({text10:"block",button101:"none",button102:"block"})}}>
                          <i className="far fa-plus-square"></i>
                      </span>
                      <span className="minus-icon" style={{display:change.button102}} onClick={()=>{setChange({text10:"none",button101:"block",button102:"none"})}}>
                          <i className="far fa-minus-square"></i>
                      </span>
                  </button>
              </div>
              <div className="question-text" style={{display:change.text10}}>
                  <p>
                    <BrainDisease handleChangeBrain={handleChangeBrain}/>
                  </p>
              </div>
          </article>
        </div>
        <div className="info-error-outer" style={{display:displayModaleError}}>
            <div className='info-error-inner'>
                <div className='info-error-inner-inner'>
                    Must check at least 1 symptom to get the result<br></br>
                    For better/accurate result provide more info
                </div>
            </div>
        </div>
        <div className="info-error-outer" style={{display:displayModaleSuccess}}>
            <div className='info-error-inner'>
                <div className='info-error-inner-inner-success'>
                    Get the result in one click<br></br>
                    For better/accurate result provide more info
                </div>
            </div>
        </div>
        <div className="info-button-outer">
            <button className='info-button' onClick={handleSubmit}>
                Submit Info
            </button>
        </div>
        {/* {
            loading ? (
                // <div className="loading-inner">
                    <Spinner />
                // </div>
            ):(
                <>
                <div className="result-inner" style={{display:resultDisplay}}>
                    <div className='result-major'>
                        <div className='result-major-left'>
                            <div className='result-major-left-up'>
                                Most Accurate Model
                            </div>
                            <div className='result-major-left-bottom'>
                                {m1}
                            </div>
                        </div>
                        <div className='result-major-right'>
                            <div className='result-major-right-up'>
                                <span style={{color:"red"}}>Info{'\u00A0'}{'\u00A0'}</span>{info1}
                            </div>
                            <div className='result-major-right-down'>
                                <span style={{color:"green"}}>Sol{'\u00A0'}{'\u00A0'}</span>{rem1}
                            </div>
                        </div>
                    </div>
                    <div className='get-remedies'>
                        <div className='get-remedies-button' onClick={()=>{props.handleRemedies({obj:{m1,info1,rem1,img1,hosp}})}}>
                            Get Remedies
                        </div>
                    </div>
                </div>
                
                </>
            )} */}
    </div>

    </>
  );
}

export default Info;