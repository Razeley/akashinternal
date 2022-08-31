import React, { useState, useEffect, useCallback, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



const HouseServices = ({jobInfo}) => { 
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
    const [ industry, setIndustry ] = useState('');
    const [ companies, setCompanies ] = useState([]);
    const [ addressPlaques, setAddressPlaques ] = useState([]);
    const [ appliances, setAppliances ] = useState([]);
    const [ cabinets, setCabinets ] = useState([]);
    const [ ceilingTexture, setCeilingTexture ] = useState([]);
    const [ centralVac, setCentralVac ] = useState([]);
    const [ cleaners, setCleaners ] = useState([]);
    const [ concreteFlat, setConcreteFlat ] = useState([]);
    const [ concreteSupply, setConcreteSupply ] = useState([]);
    const [ concreteSupplyFlat, setConcreteSupplyFlat ] = useState([]);
    const [ countertops, setCountertops ] = useState([]);
    const [ cribbing, setCribbing ] = useState([]);
    const [ drywall, setDrywall ] = useState([]);
    const [ elect, setElect ] = useState([]);
    const [ engineering, setEngineering ] = useState([]);
    const [ excavateBackfill, setExcavateBackfill ] = useState([]);
    const [ excavateDigging, setExcavateDigging ] = useState([]); 
    const [ finishLabour, setFinishLabour ] = useState([]);
    const [ finishMaterial, setFinishMaterial ] = useState([]);
    const [ fireplace, setFireplace ] = useState([]);
    const [ flooring, setFlooring ] = useState([]);
    const [ framingFrostWall, setFramingFrosWall ] = useState([]);
    const [ framingLabour, setFramingLabour ] = useState([]);
    const [ framingLumber, setFramingLumber ] = useState([]);
    const [ furnaceCleaning, setFurnaceCleaning ] = useState([]);
    const [ garageDoor, setGarageDoor ] = useState([]);
    const [ garbage, setGarbage ] = useState([]);
    const [ generalContractor, setGeneralContractor ] = useState([]);
    const [ extHandrails, setExtHandRails ] = useState([]);
    const [ intHandRails, setIntHandRails ] = useState([]);
    const [ hvac, setHvac ] = useState([]);
    const [ joist, setJoist ] = useState([]);
    const [ landscapping, setLandscapping ] = useState([]);
    const [ lighting, setLighting ] = useState([]);
    const [ mirrors, setMirrors ] = useState([]);
    const [ municipality, setMunicipality ] = useState([]);
    const [ other, setOther ] = useState([]);
    const [ painting, setPainting ] = useState([]);
    const [ parging, setParging ] = useState([]);
    const [ piles, setPiles ] = useState([]);
    const [ plumbing, setPlumbing ] = useState([]);
    const [ roofing, setRoofing ] = useState([]);
    const [ showerGlass, setShowerGlass ] = useState([]);
    const [ glassAndMirror, setGlassAndMirror ] = useState([]);
    const [ siding, setSiding ] = useState([]);
    const [ stairsConcrete, setStairsConcrete ] = useState([]);
    const [ stairsOther, setStairsOther ] = useState([]);
    const [ stairsWood, setStairsWood ] = useState([]);
    const [ stakeout, setStakeout ] = useState([]);
    const [ stone, setStone ] = useState([]);
    const [ survey, setSurvey ] = useState([]);
    const [ tempFence, setTempFence ] = useState([]);
    const [ tempHeat, setTempHeat ] = useState([]);
    const [ tempSideWalk, setTempSideWalk ] = useState([]);
    const [ truss, setTruss ] = useState([]);
    const [ trussJoist, setTrussJoist ] = useState([]);
    const [ tubRepair, setTubRepair ] = useState([]); 
    const [ utility, setUtility ] = useState([]);
    const [ weepingTile, setWeepingTile ] = useState([]);
    const [ window, setWindow ] = useState([]);
    const [ windowWells, setWindowWells ] = useState([]);
    const [ wireShelves, setWireShelves ] = useState([]);
    const [ serviceNo, setServiceNo ] = useState('');

    
    const [ addressPlaquesHouse, setAddressPlaquesHouse ] = useState({
      House_No: '',
      address_Contact_No: '',
      address_Notes: '',
      address_Assigned: '',
    });
    const [ appliancesHouse, setAppliancesHouse ] = useState({
      House_No: '',
      appliances_Contact_No: '',
      appliances_Notes: '',
      appliances_Assigned: '',
    });
    const [ cabinetsHouse, setCabinetsHouse ] = useState({
      House_No: '',
      cabinets_Contact_No: '',
      cabinets_Notes: '',
      cabinets_Assigned: '',
    });
    const [ ceilingTextureHouse, setCeilingTextureHouse ] = useState({
      House_No: '',
      ceilingText_Contact_No: '',
      ceilingText_Notes: '',
      ceilingText_Assigned: '',
    });
    const [ centralVacHouse, setCentralVacHouse ] = useState({
      House_No: '',
      centralVac_Contact_No: '',
      centralVac_Notes: '',
      centralVac_Assigned: '',
    });
    const [ cleanersHouse, setCleanersHouse ] = useState({
      House_No: '',
      cleaners_Contact_No: '',
      cleaners_Notes: '',
      cleaners_Assigned: '',
    });
    const [ concreteFlatHouse, setConcreteFlatHouse ] = useState({
      House_No: '',
      concreteF_Contact_No: '',
      concreteF_Notes: '',
      concreteF_Assigned: '',
    });
    const [ concreteSupplyHouse, setConcreteSupplyHouse ] = useState({
      House_No: '',
      concreteS_Contact_No: '',
      concreteS_Notes: '',
      concreteS_Assigned: '',
    });
    const [ concreteSupplyFlatHouse, setConcreteSupplyFlatHouse ] = useState({
      House_No: '',
      concreteSF_Contact_No: '',
      concreteSF_Notes: '',
      concreteSF_Assigned: '',
    });
    const [ countertopsHouse, setCountertopsHouse ] = useState({
      House_No: '',
      countertops_Contact_No: '',
      countertops_Notes: '',
      countertops_Assigned: '',
    });
    const [ cribbingHouse, setCribbingHouse ] = useState({
      House_No: '',
      cribbing_Contact_No: '',
      cribbing_Notes: '',
      cribbing_Assigned: '',
    });
    const [ drywallHouse, setDrywallHouse ] = useState({
      House_No: '',
      drywall_Contact_No: '',
      drywall_Notes: '',
      drywall_Assigned: '',
    });
    const [ electHouse, setElectHouse ] = useState({
      House_No: '',
      elec_Contact_No: '',
      elec_Notes: '',
      elec_Assigned: '',
    });
    const [ engineeringHouse, setEngineeringHouse ] = useState({
      House_No: '',
      eng_Contact_No: '',
      eng_Notes: '',
      eng_Assigned: '',
    });
    const [ excavateBackfillHouse, setExcavateBackfillHouse ] = useState({
      House_No: '',
      excavate1_Contact_No: '',
      excavate1_Notes: '',
      excavate1_Assigned: '',
    });
    const [ excavateDiggingHouse, setExcavateDiggingHouse ] = useState({
      House_No: '',
      excavate2_Contact_No: '',
      excavate2_Notes: '',
      excavate2_Assigned: '',
    }); 
    const [ finishLabourHouse, setFinishLabourHouse ] = useState({
      House_No: '',
      finishingL_Contact_No: '',
      finishingL_Notes: '',
      finishingL_Assigned: '',
    });
    const [ finishMaterialHouse, setFinishMaterialHouse ] = useState({
      House_No: '',
      finishingM_Contact_No: '',
      finishingM_Notes: '',
      finishingM_Assigned: '',
    });
    const [ fireplaceHouse, setFireplaceHouse ] = useState({
      House_No: '',
      fireplace_Contact_No: '',
      fireplace_Notes: '',
      fireplace_Assigned: '',
    });
    const [ flooringHouse, setFlooringHouse ] = useState({
      House_No: '',
      flooring_Contact_No: '',
      flooring_Notes: '',
      flooring_Assigned: '',
    });
    const [ framingFrostWallHouse, setFramingFrosWallHouse ] = useState({
      House_No: '',
      framingFrost_Contact_No: '',
      framingFrost_Notes: '',
      framingFrost_Assigned: '',
    });
    const [ framingLabourHouse, setFramingLabourHouse ] = useState({
      House_No: '',
      framingLab_Contact_No: '',
      framingLab_Notes: '',
      framingLab_Assigned: '',
    });
    const [ framingLumberHouse, setFramingLumberHouse ] = useState({
      House_No: '',
      framingLumb_Contact_No: '',
      framingLumb_Notes: '',
      framingLumb_Assigned: '',
    });
    const [ furnaceCleaningHouse, setFurnaceCleaningHouse ] = useState({
      House_No: '',
      furnace_Contact_No: '',
      furnace_Notes: '',
      furnace_Assigned: '',
    });
    const [ garageDoorHouse, setGarageDoorHouse ] = useState({
      House_No: '',
      garage_Contact_No: '',
      garage_Notes: '',
      garage_Assigned: '',
    });
    const [ garbageHouse, setGarbageHouse ] = useState({
      House_No: '',
      garbage_Contact_No: '',
      garbage_Notes: '',
      garbage_Assigned: '',
    });
    const [ generalContractorHouse, setGeneralContractorHouse ] = useState({
      House_No: '',
      generalCon_Contact_No: '',
      generalCon_Notes: '',
      generalCon_Assigned: '',
    });
    const [ extHandrailsHouse, setExtHandRailsHouse ] = useState({
      House_No: '',
      handrailExt_Contact_No: '',
      handrailExt_Notes: '',
      handrailExt_Assigned: '',
    });
    const [ intHandRailsHouse, setIntHandRailsHouse ] = useState({
      House_No: '',
      handrailInt_Contact_No: '',
      handrailInt_Notes: '',
      handrailInt_Assigned: '',
    });
    const [ hvacHouse, setHvacHouse ] = useState({
      House_No: '',
      hvac_Contact_No: '',
      hvac_Notes: '',
      hvac_Assigned: '',
    });
    const [ joistHouse, setJoistHouse ] = useState({
      House_No: '',
      joist_Contact_No: '',
      joist_Notes: '',
      joist_Assigned: '',
    });
    const [ landscappingHouse, setLandscappingHouse ] = useState({
      House_No: '',
      landscapping_Contact_No: '',
      landscapping_Notes: '',
      landscapping_Assigned: '',
    });
    const [ lightingHouse, setLightingHouse ] = useState({
      House_No: '',
      lighting_Contact_No: '',
      lighting_Notes: '',
      lighting_Assigned: '',
    });
    const [ mirrorsHouse, setMirrorsHouse ] = useState({
      House_No: '',
      mirrors_Contact_No: '',
      mirrors_Notes: '',
      mirrors_Assigned: '',
    });
    const [ municipalityHouse, setMunicipalityHouse ] = useState({
      House_No: '',
      municipality_Contact_No: '',
      municipality_Notes: '',
      municipality_Assigned: '',
    });
    const [ otherHouse, setOtherHouse ] = useState({
      House_No: '',
      other_Contact_No: '',
      other_Notes: '',
      other_Assigned: '',
    });
    const [ paintingHouse, setPaintingHouse ] = useState({
      House_No: '',
      painting_Contact_No: '',
      painting_Notes: '',
      painting_Assigned: '',
    });
    const [ pargingHouse, setPargingHouse ] = useState({
      House_No: '',
      parging_Contact_No: '',
      parging_Notes: '',
      parging_Assigned: '',
    });
    const [ pilesHouse, setPilesHouse ] = useState({
      House_No: '',
      piles_Contact_No: '',
      piles_Notes: '',
      piles_Assigned: '',
    });
    const [ plumbingHouse, setPlumbingHouse ] = useState({
      House_No: '',
      plumbing_Contact_No: '',
      plumbing_Notes: '',
      plumbing_Assigned: '',
    });
    const [ roofingHouse, setRoofingHouse ] = useState({
      House_No: '',
      roofing_Contact_No: '',
      roofing_Notes: '',
      roofing_Assigned: '',
    });
    const [ showerGlassHouse, setShowerGlassHouse ] = useState({
      House_No: '',
      showerGlass_Contact_No: '',
      showerGlass_Notes: '',
      showerGlass_Assigned: '',
    });
    const [ glassAndMirrorHouse, setGlassAndMirrorHouse ] = useState({
      House_No: '',
      showerGM_Contact_No: '',
      showerGM_Notes: '',
      showerGM_Assigned: '',
    });
    const [ sidingHouse, setSidingHouse ] = useState({
      House_No: '',
      siding_Contact_No: '',
      siding_Notes: '',
      siding_Assigned: '',
    });
    const [ stairsConcreteHouse, setStairsConcreteHouse ] = useState({
      House_No: '',
      stairsC_Contact_No: '',
      stairsC_Notes: '',
      stairsC_Assigned: '',
    });
    const [ stairsOtherHouse, setStairsOtherHouse ] = useState({
      House_No: '',
      stairsO_Contact_No: '',
      stairsO_Notes: '',
      stairsO_Assigned: '',
    });
    const [ stairsWoodHouse, setStairsWoodHouse ] = useState({
      House_No: '',
      stairsW_Contact_No: '',
      stairsW_Notes: '',
      stairsW_Assigned: '',
    });
    const [ stakeoutHouse, setStakeoutHouse ] = useState({
      House_No: '',
      stakeout_Contact_No: '',
      stakeout_Notes: '',
      stakeout_Assigned: '',
    });
    const [ stoneHouse, setStoneHouse ] = useState({
      House_No: '',
      stone_Contact_No: '',
      stone_Notes: '',
      stone_Assigned: '',
    });
    const [ surveyHouse, setSurveyHouse ] = useState({
      House_No: '',
      survey_Contact_No: '',
      survey_Notes: '',
      survey_Assigned: '',
    });
    const [ tempFenceHouse, setTempFenceHouse ] = useState({
      House_No: '',
      tempFence_Contact_No: '',
      tempFence_Notes: '',
      tempFence_Assigned: '',
    });
    const [ tempHeatHouse, setTempHeatHouse ] = useState({
      House_No: '',
      tempHeat_Contact_No: '',
      tempHeat_Notes: '',
      tempHeat_Assigned: '',
    });
    const [ tempSideWalkHouse, setTempSideWalkHouse ] = useState({
      House_No: '',
      tempSidewalk_Contact_No: '',
      tempSidewalk_Notes: '',
      tempSidewalk_Assigned: '',
    });
    const [ trussHouse, setTrussHouse ] = useState({
      House_No: '',
      truss_Contact_No: '',
      truss_Notes: '',
      truss_Assigned: '',
    });
    const [ trussJoistHouse, setTrussJoistHouse ] = useState({
      House_No: '',
      trussJoist_Contact_No: '',
      trussJoist_Notes: '',
      trussJoist_Assigned: '',
    });
    const [ tubRepairHouse, setTubRepairHouse ] = useState({
      House_No: '',
      tub_Contact_No: '',
      tub_Notes: '',
      tub_Assigned: '',
    }); 
    const [ utilityHouse, setUtilityHouse ] = useState({
      House_No: '',
      utility_Contact_No: '',
      utility_Notes: '',
      utility_Assigned: '',
    });
    const [ weepingTileHouse, setWeepingTileHouse ] = useState({
      House_No: '',
      weepingTile_Contact_No: '',
      weepingTile_Notes: '',
      weepingTile_Assigned: '',
    });
    const [ windowHouse, setWindowHouse ] = useState({
      House_No: '',
      window_Contact_No: '',
      window_Notes: '',
      window_Assigned: '',
    });
    const [ windowWellsHouse, setWindowWellsHouse ] = useState({
      House_No: '',
      windowWell_Contact_No: '',
      windowWell_Notes: '',
      windowWell_Assigned: '',
    });
    const [ wireShelvesHouse, setWireShelvesHouse ] = useState({
      House_No: '',
      wireShelves_Contact_No: '',
      wireShelves_Notes: '',
      wireShelves_Assigned: '',
    });

const houseNo = jobInfo.House_No;


useEffect(()=> {
  setAddressPlaquesHouse({
    serviceNo: '',
    House_No: '',
    address_Contact_No: '',
    address_Notes: '',
    address_Assigned: '',
  });
  setAppliancesHouse({
    serviceNo: '',
    House_No: '',
    appliances_Contact_No: '',
    appliances_Notes: '',
    appliances_Assigned: '',
  });
  setCabinetsHouse({
    serviceNo: '',
    House_No: '',
    cabinets_Contact_No: '',
    cabinets_Notes: '',
    cabinets_Assigned: '',
  });
  setCeilingTextureHouse({
    serviceNo: '',
    House_No: '',
    ceilingText_Contact_No: '',
    ceilingText_Notes: '',
    ceilingText_Assigned: '',
  });
  setCentralVacHouse({
    serviceNo: '',
    House_No: '',
    centralVac_Contact_No: '',
    centralVac_Notes: '',
    centralVac_Assigned: '',
  });
  setCleanersHouse({
    House_No: '',
    cleaners_Contact_No: '',
    cleaners_Notes: '',
    cleaners_Assigned: '',
  });
  setConcreteFlatHouse({
    House_No: '',
    concreteF_Contact_No: '',
    concreteF_Notes: '',
    concreteF_Assigned: '',
  });
  setConcreteSupplyHouse({
    House_No: '',
    concreteS_Contact_No: '',
    concreteS_Notes: '',
    concreteS_Assigned: '',
  });
  setConcreteSupplyFlatHouse({
    House_No: '',
    concreteSF_Contact_No: '',
    concreteSF_Notes: '',
    concreteSF_Assigned: '',
  });
  setCountertopsHouse({
    House_No: '',
    countertops_Contact_No: '',
    countertops_Notes: '',
    countertops_Assigned: '',
  });
  setCribbingHouse({
    House_No: '',
    cribbing_Contact_No: '',
    cribbing_Notes: '',
    cribbing_Assigned: '',
  });
  setDrywallHouse({
    House_No: '',
    drywall_Contact_No: '',
    drywall_Notes: '',
    drywall_Assigned: '',
  });
  setElectHouse({
    House_No: '',
    elec_Contact_No: '',
    elec_Notes: '',
    elec_Assigned: '',
  });
  setEngineeringHouse({
    House_No: '',
    eng_Contact_No: '',
    eng_Notes: '',
    eng_Assigned: '',
  });
  setExcavateBackfillHouse({
    House_No: '',
    excavate1_Contact_No: '',
    excavate1_Notes: '',
    excavate1_Assigned: '',
  });
  setExcavateDiggingHouse({
    House_No: '',
    excavate2_Contact_No: '',
    excavate2_Notes: '',
    excavate2_Assigned: '',
  });
  setFinishLabourHouse({
    House_No: '',
    finishingL_Contact_No: '',
    finishingL_Notes: '',
    finishingL_Assigned: '',
  });
  setFinishMaterialHouse({
    House_No: '',
    finishingM_Contact_No: '',
    finishingM_Notes: '',
    finishingM_Assigned: '',
  });
  setFireplaceHouse({
    House_No: '',
    fireplace_Contact_No: '',
    fireplace_Notes: '',
    fireplace_Assigned: '',
  });
  setFlooringHouse({
    House_No: '',
    flooring_Contact_No: '',
    flooring_Notes: '',
    flooring_Assigned: '',
  });
  setFramingFrosWallHouse({
    House_No: '',
    framingFrost_Contact_No: '',
    framingFrost_Notes: '',
    framingFrost_Assigned: '',
  });
  setFireplaceHouse({
    House_No: '',
    fireplace_Contact_No: '',
    fireplace_Notes: '',
    fireplace_Assigned: '',
  });
  setFramingLabourHouse({
    House_No: '',
    framingLab_Contact_No: '',
    framingLab_Notes: '',
    framingLab_Assigned: '',
  });
  setFramingLumberHouse({
    House_No: '',
    framingLumb_Contact_No: '',
    framingLumb_Notes: '',
    framingLumb_Assigned: '',
  });
  setFurnaceCleaningHouse({
    House_No: '',
    furnace_Contact_No: '',
    furnace_Notes: '',
    furnace_Assigned: '',
  });
  setGarageDoorHouse({
    House_No: '',
    garage_Contact_No: '',
    garage_Notes: '',
    garage_Assigned: '',
  });
  setGarbageHouse({
    House_No: '',
    garbage_Contact_No: '',
    garbage_Notes: '',
    garbage_Assigned: '',
  });
  setGeneralContractorHouse({
    House_No: '',
    generalCon_Contact_No: '',
    generalCon_Notes: '',
    generalCon_Assigned: '',
  });
  setExtHandRailsHouse({
    House_No: '',
    handrailExt_Contact_No: '',
    handrailExt_Notes: '',
    handrailExt_Assigned: '',
  });
  setIntHandRailsHouse({
    House_No: '',
    handrailInt_Contact_No: '',
    handrailInt_Notes: '',
    handrailInt_Assigned: '',
  });
  setHvacHouse({
    House_No: '',
    hvac_Contact_No: '',
    hvac_Notes: '',
    hvac_Assigned: '',
  });
  setJoistHouse({
    House_No: '',
    joist_Contact_No: '',
    joist_Notes: '',
    joist_Assigned: '',
  });
  setLandscappingHouse({
    House_No: '',
    landscapping_Contact_No: '',
    landscapping_Notes: '',
    landscapping_Assigned: '',
  });
  setLightingHouse({
    House_No: '',
    lighting_Contact_No: '',
    lighting_Notes: '',
    lighting_Assigned: '',
  });
  setMirrorsHouse({
    House_No: '',
    mirrors_Contact_No: '',
    mirrors_Notes: '',
    mirrors_Assigned: '',
  });
  setMunicipalityHouse({
    House_No: '',
    municipality_Contact_No: '',
    municipality_Notes: '',
    municipality_Assigned: '',
  });
  setOtherHouse({
    House_No: '',
    other_Contact_No: '',
    other_Notes: '',
    other_Assigned: '',
  });
  setPaintingHouse({
    House_No: '',
    painting_Contact_No: '',
    painting_Notes: '',
    painting_Assigned: '',
  });
  setPargingHouse({
    House_No: '',
    parging_Contact_No: '',
    parging_Notes: '',
    parging_Assigned: '',
  });
  setPilesHouse({
    House_No: '',
    piles_Contact_No: '',
    piles_Notes: '',
    piles_Assigned: '',
  });
  setPlumbingHouse({
    House_No: '',
    plumbing_Contact_No: '',
    plumbing_Notes: '',
    plumbing_Assigned: '',
  });
  setRoofingHouse({
    House_No: '',
    roofing_Contact_No: '',
    roofing_Notes: '',
    roofing_Assigned: '',
  });
  setShowerGlassHouse({
    House_No: '',
    showerGlass_Contact_No: '',
    showerGlass_Notes: '',
    showerGlass_Assigned: '',
  });
  setGlassAndMirrorHouse({
    House_No: '',
    showerGM_Contact_No: '',
    showerGM_Notes: '',
    showerGM_Assigned: '',
  });
  setSidingHouse({
    House_No: '',
    siding_Contact_No: '',
    siding_Notes: '',
    siding_Assigned: '',
  });
  setStairsConcreteHouse({
    House_No: '',
    stairsC_Contact_No: '',
    stairsC_Notes: '',
    stairsC_Assigned: '',
  });
  setStairsOtherHouse({
    House_No: '',
    stairsO_Contact_No: '',
    stairsO_Notes: '',
    stairsO_Assigned: '',
  });
  setStairsWoodHouse({
    House_No: '',
    stairsW_Contact_No: '',
    stairsW_Notes: '',
    stairsW_Assigned: '',
  });
  setStakeoutHouse({
    House_No: '',
    stakeout_Contact_No: '',
    stakeout_Notes: '',
    stakeout_Assigned: '',
  });
  setStoneHouse({
    House_No: '',
    stone_Contact_No: '',
    stone_Notes: '',
    stone_Assigned: '',
  });
  setSurveyHouse({
    House_No: '',
    survey_Contact_No: '',
    survey_Notes: '',
    survey_Assigned: '',
  });
  setTempFenceHouse({
    House_No: '',
    tempFence_Contact_No: '',
    tempFence_Notes: '',
    tempFence_Assigned: '',
  });
  setTempHeatHouse({
    House_No: '',
    tempHeat_Contact_No: '',
    tempHeat_Notes: '',
    tempHeat_Assigned: '',
  });
  setTempSideWalkHouse({
    House_No: '',
    tempSidewalk_Contact_No: '',
    tempSidewalk_Notes: '',
    tempSidewalk_Assigned: '',
  });
  setTrussHouse({
    House_No: '',
    truss_Contact_No: '',
    truss_Notes: '',
    truss_Assigned: '',
  });
  setTrussJoistHouse({
    House_No: '',
    trussJoist_Contact_No: '',
    trussJoist_Notes: '',
    trussJoist_Assigned: '',
  });
  setTubRepairHouse({
    House_No: '',
    tub_Contact_No: '',
    tub_Notes: '',
    tub_Assigned: '',
  });
  setUtilityHouse({
    House_No: '',
    utility_Contact_No: '',
    utility_Notes: '',
    utility_Assigned: '',
  });
  setWeepingTileHouse({
    House_No: '',
    weepingTile_Contact_No: '',
    weepingTile_Notes: '',
    weepingTile_Assigned: '',
  });
  setWindowHouse({
    House_No: '',
    window_Contact_No: '',
    window_Notes: '',
    window_Assigned: '',
  });
  setWindowWellsHouse({
    House_No: '',
    windowWell_Contact_No: '',
    windowWell_Notes: '',
    windowWell_Assigned: '',
  });
  setWireShelvesHouse({
    House_No: '',
    wireShelves_Contact_No: '',
    wireShelves_Notes: '',
    wireShelves_Assigned: '',
  });
  loadHouseWorkData();
}, [houseNo]);
  const loadHouseWorkData = async (event) => {
//    event.preventDefault();
    return await axios
    .get('/houseServices2', {
      params : {
        House_No : houseNo
      }
    })
    .then((response) => { setCompanies(response.data);
      setAddressPlaquesHouse({
   //   House_No: response.data[0].House_No,
      address_Contact_No: response.data[0].address_Contact_No,
      address_Notes: response.data[0].address_Notes,
      address_Assigned: response.data[0].address_Assigned});
      setAppliancesHouse({
      House_No: response.data[0].House_No,
      appliances_Contact_No: response.data[0].appliances_Contact_No,
      appliances_Notes: response.data[0].appliances_Notes,
      appliances_Assigned: response.data[0].appliances_Assigned});
      setCabinetsHouse({
      House_No: response.data[0].House_No,
      cabinets_Contact_No: response.data[0].cabinets_Contact_No,
      cabinets_Notes: response.data[0].cabinets_Notes,
      cabinets_Assigned: response.data[0].cabinets_Assigned});
      setCeilingTextureHouse({
      House_No: response.data[0].House_No,
      ceilingText_Contact_No: response.data[0].ceilingText_Contact_No,
      ceilingText_Notes: response.data[0].ceilingText_Notes,
      ceilingText_Assigned: response.data[0].ceilingText_Assigned});
      setCentralVacHouse({
      House_No: response.data[0].House_No,
      centralVac_Contact_No: response.data[0].centralVac_Contact_No,
      centralVac_Notes: response.data[0].centralVac_Notes,
      centralVac_Assigned: response.data[0].centralVac_Assigned});
      setCleanersHouse({
        House_No: response.data[0].House_No,
        cleaners_Contact_No: response.data[0].cleaners_Contact_No,
        cleaners_Notes: response.data[0].cleaners_Notes,
        cleaners_Assigned: response.data[0].cleaners_Assigned,});
        setConcreteFlatHouse({
          House_No: response.data[0].House_No,
          concreteF_Contact_No: response.data[0].concreteF_Contact_No,
          concreteF_Notes: response.data[0].concreteF_Notes,
          concreteF_Assigned: response.data[0].concreteF_Assigned,
        });
        setConcreteSupplyHouse({
          House_No: response.data[0].House_No,
          concreteS_Contact_No: response.data[0].concreteS_Contact_No,
          concreteS_Notes: response.data[0].concreteS_Notes,
          concreteS_Assigned: response.data[0].concreteS_Assigned,
        });
        setConcreteSupplyFlatHouse({
          House_No: response.data[0].House_No,
          concreteSF_Contact_No: response.data[0].concreteSF_Contact_No,
          concreteSF_Notes: response.data[0].concreteSF_Notes,
          concreteSF_Assigned: response.data[0].concreteSF_Assigned,
        });
        setCountertopsHouse({
          House_No: response.data[0].House_No,
          countertops_Contact_No: response.data[0].countertops_Contact_No,
          countertops_Notes: response.data[0].countertops_Notes,
          countertops_Assigned: response.data[0].countertops_Assigned,
        });
        setCribbingHouse({
          House_No: response.data[0].House_No,
          cribbing_Contact_No: response.data[0].cribbing_Contact_No,
          cribbing_Notes: response.data[0].cribbing_Notes,
          cribbing_Assigned: response.data[0].cribbing_Assigned,
        });
        setDrywallHouse({
          House_No: response.data[0].House_No,
          drywall_Contact_No: response.data[0].drywall_Contact_No,
          drywall_Notes: response.data[0].drywall_Notes,
          drywall_Assigned: response.data[0].drywall_Assigned,
        });
        setElectHouse({
          House_No: response.data[0].House_No,
          elec_Contact_No: response.data[0].elec_Contact_No,
          elec_Notes: response.data[0].elec_Notes,
          elec_Assigned: response.data[0].elec_Assigned,
        });
        setEngineeringHouse({
          House_No: response.data[0].House_No,
          eng_Contact_No: response.data[0].eng_Contact_No,
          eng_Notes: response.data[0].eng_Notes,
          eng_Assigned: response.data[0].eng_Assigned,
        });
        setExcavateBackfillHouse({
          House_No: response.data[0].House_No,
          excavate1_Contact_No: response.data[0].excavate1_Contact_No,
          excavate1_Notes: response.data[0].excavate1_Notes,
          excavate1_Assigned: response.data[0].excavate1_Assigned,
        });
        setExcavateDiggingHouse({
          House_No: response.data[0].House_No,
          excavate2_Contact_No: response.data[0].excavate2_Contact_No,
          excavate2_Notes: response.data[0].excavate2_Notes,
          excavate2_Assigned: response.data[0].excavate2_Assigned,
        });
        setFinishLabourHouse({
          House_No: response.data[0].House_No,
          finishingL_Contact_No: response.data[0].finishingL_Contact_No,
          finishingL_Notes: response.data[0].finishingL_Notes,
          finishingL_Assigned: response.data[0].finishingL_AssignedfinishingL_Assigned,
        });
        setFinishMaterialHouse({
          House_No: response.data[0].House_No,
          finishingM_Contact_No: response.data[0].finishingM_Contact_No,
          finishingM_Notes: response.data[0].finishingM_Notes,
          finishingM_Assigned: response.data[0].finishingM_Assigned,
        });
        setFireplaceHouse({
          House_No: response.data[0].House_No,
          fireplace_Contact_No: response.data[0].fireplace_Contact_No,
          fireplace_Notes: response.data[0].fireplace_Notes,
          fireplace_Assigned: response.data[0].fireplace_Assigned,
        });
        setFlooringHouse({
          House_No: response.data[0].House_No,
          flooring_Contact_No: response.data[0].flooring_Contact_No,
          flooring_Notes: response.data[0].flooring_Notes,
          flooring_Assigned: response.data[0].flooring_Assigned,
        });
        setFramingFrosWallHouse({
          House_No: response.data[0].House_No,
          framingFrost_Contact_No: response.data[0].framingFrost_Contact_No,
          framingFrost_Notes: response.data[0].framingFrost_Notes,
          framingFrost_Assigned: response.data[0].framingFrost_Assigned,
        });
        setFramingLabourHouse({
          House_No: response.data[0].House_No,
          framingLab_Contact_No: response.data[0].framingLab_Contact_No,
          framingLab_Notes: response.data[0].framingLab_Notes,
          framingLab_Assigned: response.data[0].framingLab_Assigned,
        });
        setFramingLumberHouse({
          House_No: response.data[0].House_No,
          framingLumb_Contact_No: response.data[0].framingLumb_Contact_No,
          framingLumb_Notes: response.data[0].framingLumb_Notes,
          framingLumb_Assigned: response.data[0].framingLumb_Assigned,
        });
        setFurnaceCleaningHouse({
          House_No: response.data[0].House_No,
          furnace_Contact_No: response.data[0].furnace_Contact_No,
          furnace_Notes: response.data[0].furnace_Notes,
          furnace_Assigned: response.data[0].furnace_Assigned,
        });
        setGarageDoorHouse({
          House_No: response.data[0].House_No,
          garage_Contact_No: response.data[0].garage_Contact_No,
          garage_Notes: response.data[0].garage_Notes,
          garage_Assigned: response.data[0].garage_Assigned,
        });
        setGarbageHouse({
          House_No: response.data[0].House_No,
          garbage_Contact_No: response.data[0].garbage_Contact_No,
          garbage_Notes: response.data[0].garbage_Notes,
          garbage_Assigned: response.data[0].garbage_Assigned,
        });
        setGeneralContractorHouse({
          House_No: response.data[0].House_No,
          generalCon_Contact_No: response.data[0].generalCon_Contact_No,
          generalCon_Notes: response.data[0].generalCon_Notes,
          generalCon_Assigned: response.data[0].generalCon_Assigned,
        });
        setExtHandRailsHouse({
          House_No: response.data[0].House_No,
          handrailExt_Contact_No: response.data[0].handrailExt_Contact_No,
          handrailExt_Notes: response.data[0].handrailExt_Notes,
          handrailExt_Assigned: response.data[0].handrailExt_Assigned,
        });
        setIntHandRailsHouse({
          House_No: response.data[0].House_No,
          handrailInt_Contact_No: response.data[0].handrailInt_Contact_No,
          handrailInt_Notes: response.data[0].handrailInt_Notes,
          handrailInt_Assigned: response.data[0].handrailInt_Assigned,
        });
        setHvacHouse({
          House_No: response.data[0].House_No,
          hvac_Contact_No: response.data[0].hvac_Contact_No,
          hvac_Notes: response.data[0].hvac_Notes,
          hvac_Assigned: response.data[0].hvac_Assigned,
        });
        setJoistHouse({
          House_No: response.data[0].House_No,
          joist_Contact_No: response.data[0].joist_Contact_No,
          joist_Notes: response.data[0].joist_Notes,
          joist_Assigned: response.data[0].joist_Assigned,
        });
        setLandscappingHouse({
          House_No: response.data[0].House_No,
          landscapping_Contact_No: response.data[0].landscapping_Contact_No,
          landscapping_Notes: response.data[0].landscapping_Notes,
          landscapping_Assigned: response.data[0].landscapping_Assigned,
        });
        setLightingHouse({
          House_No: response.data[0].House_No,
          lighting_Contact_No: response.data[0].lighting_Contact_No,
          lighting_Notes: response.data[0].lighting_Notes,
          lighting_Assigned: response.data[0].lighting_Assigned,
        });
        setMirrorsHouse({
          House_No: response.data[0].House_No,
          mirrors_Contact_No: response.data[0].mirrors_Contact_No,
          mirrors_Notes: response.data[0].mirrors_Notes,
          mirrors_Assigned: response.data[0].mirrors_Assigned,
        });
        setMunicipalityHouse({
          House_No: response.data[0].House_No,
          municipality_Contact_No: response.data[0].municipality_Contact_No,
          municipality_Notes: response.data[0].municipality_Notes,
          municipality_Assigned: response.data[0].municipality_Assigned,
        });
        setOtherHouse({
          House_No: response.data[0].House_No,
          other_Contact_No: response.data[0].other_Contact_No,
          other_Notes: response.data[0].other_Notes,
          other_Assigned: response.data[0].other_Assigned,
        });
        setPaintingHouse({
          House_No: response.data[0].House_No,
          painting_Contact_No: response.data[0].painting_Contact_No,
          painting_Notes: response.data[0].painting_Notes,
          painting_Assigned: response.data[0].painting_Assigned,
        });
        setPargingHouse({
          House_No: response.data[0].House_No,
          parging_Contact_No: response.data[0].parging_Contact_No,
          parging_Notes: response.data[0].parging_Notes,
          parging_Assigned: response.data[0].parging_Assigned,
        });
        setPilesHouse({
          House_No: response.data[0].House_No,
          piles_Contact_No: response.data[0].piles_Contact_No,
          piles_Notes: response.data[0].piles_Notes,
          piles_Assigned: response.data[0].piles_Assigned,
        });
        setPlumbingHouse({
          House_No: response.data[0].House_No,
          plumbing_Contact_No: response.data[0].plumbing_Contact_No,
          plumbing_Notes: response.data[0].plumbing_Notes,
          plumbing_Assigned: response.data[0].plumbing_Assigned,
        });
        setRoofingHouse({
          House_No: response.data[0].House_No,
          roofing_Contact_No: response.data[0].roofing_Contact_No,
          roofing_Notes: response.data[0].roofing_Notes,
          roofing_Assigned: response.data[0].roofing_Assigned,
        });
        setShowerGlassHouse({
          House_No: response.data[0].House_No,
          showerGlass_Contact_No: response.data[0].showerGlass_Contact_No,
          showerGlass_Notes: response.data[0].showerGlass_Notes,
          showerGlass_Assigned: response.data[0].showerGlass_Assigned,
        });
        setGlassAndMirrorHouse({
          House_No: response.data[0].House_No,
          showerGM_Contact_No: response.data[0].showerGM_Contact_No,
          showerGM_Notes: response.data[0].showerGM_Notes,
          showerGM_Assigned: response.data[0].showerGM_Assigned,
        });
        setSidingHouse({
          House_No: response.data[0].House_No,
          siding_Contact_No: response.data[0].siding_Contact_No,
          siding_Notes: response.data[0].siding_Notes,
          siding_Assigned: response.data[0].siding_Assigned,
        });
        setStairsConcreteHouse({
          House_No: response.data[0].House_No,
          stairsC_Contact_No: response.data[0].stairsC_Contact_No,
          stairsC_Notes: response.data[0].stairsC_Notes,
          stairsC_Assigned: response.data[0].stairsC_Assigned,
        });
        setStairsOtherHouse({
          House_No: response.data[0].House_No,
          stairsO_Contact_No: response.data[0].stairsO_Contact_No,
          stairsO_Notes: response.data[0].stairsO_Notes,
          stairsO_Assigned: response.data[0].stairsO_Assigned,
        });
        setStairsWoodHouse({
          House_No: response.data[0].House_No,
          stairsW_Contact_No: response.data[0].stairsW_Contact_No,
          stairsW_Notes: response.data[0].stairsW_Notes,
          stairsW_Assigned: response.data[0].stairsW_Assigned,
        });
        setStakeoutHouse({
          House_No: response.data[0].House_No,
          stakeout_Contact_No: response.data[0].stakeout_Contact_No,
          stakeout_Notes: response.data[0].stakeout_Notes,
          stakeout_Assigned: response.data[0].stakeout_Assigned,
        });
        setStoneHouse({
          House_No: response.data[0].House_No,
          stone_Contact_No: response.data[0].stone_Contact_No,
          stone_Notes: response.data[0].stone_Notes,
          stone_Assigned: response.data[0].stone_Assigned,
        });
        setSurveyHouse({
          House_No: response.data[0].House_No,
          survey_Contact_No: response.data[0].survey_Contact_No,
          survey_Notes: response.data[0].survey_Notes,
          survey_Assigned: response.data[0].survey_Assigned,
        });
        setTempFenceHouse({
          House_No: response.data[0].House_No,
          tempFence_Contact_No: response.data[0].tempFence_Contact_No,
          tempFence_Notes: response.data[0].tempFence_Notes,
          tempFence_Assigned: response.data[0].tempFence_Assigned,
        });
        setTempHeatHouse({
          House_No: response.data[0].House_No,
          tempHeat_Contact_No: response.data[0].tempHeat_Contact_No,
          tempHeat_Notes: response.data[0].tempHeat_Notes,
          tempHeat_Assigned: response.data[0].tempHeat_Assigned,
        });
        setTempSideWalkHouse({
          House_No: response.data[0].House_No,
          tempSidewalk_Contact_No: response.data[0].tempSidewalk_Contact_No,
          tempSidewalk_Notes: response.data[0].tempSidewalk_Notes,
          tempSidewalk_Assigned: response.data[0].tempSidewalk_Assigned,
        });
        setTrussHouse({
          House_No: response.data[0].House_No,
          truss_Contact_No: response.data[0].truss_Contact_No,
          truss_Notes: response.data[0].truss_Notes,
          truss_Assigned: response.data[0].truss_Assigned,
        });
        setTrussJoistHouse({
          House_No: response.data[0].House_No,
          trussJoist_Contact_No: response.data[0].trussJoist_Contact_No,
          trussJoist_Notes: response.data[0].trussJoist_Notes,
          trussJoist_Assigned: response.data[0].trussJoist_Assigned,
        });
        setTubRepairHouse({
          House_No: response.data[0].House_No,
          tub_Contact_No: response.data[0].tub_Contact_No,
          tub_Notes: response.data[0].tub_Notes,
          tub_Assigned: response.data[0].tub_Assigned,
        });
        setUtilityHouse({
          House_No: response.data[0].House_No,
          utility_Contact_No: response.data[0].utility_Contact_No,
          utility_Notes: response.data[0].utility_Notes,
          utility_Assigned: response.data[0].utility_Assigned,
        });
        setWeepingTileHouse({
          House_No: response.data[0].House_No,
          weepingTile_Contact_No: response.data[0].weepingTile_Contact_No,
          weepingTile_Notes: response.data[0].weepingTile_Notes,
          weepingTile_Assigned: response.data[0].weepingTile_Assigned,
        });
        setWindowHouse({
          House_No: response.data[0].House_No,
          window_Contact_No: response.data[0].window_Contact_No,
          window_Notes: response.data[0].window_Notes,
          window_Assigned: response.data[0].window_Assigned,
        });
        setWindowWellsHouse({
          House_No: response.data[0].House_No,
          windowWell_Contact_No: response.data[0].windowWell_Contact_No,
          windowWell_Notes: response.data[0].windowWell_Notes,
          windowWell_Assigned: response.data[0].windowWell_Assigned,
        });
        setWireShelvesHouse({
          House_No: response.data[0].House_No,
          wireShelves_Contact_No: response.data[0].wireShelves_Contact_No,
          wireShelves_Notes: response.data[0].wireShelves_Notes,
          wireShelves_Assigned: response.data[0].wireShelves_Assigned,
        });
    });
  }; console.log(appliancesHouse);

const isRunned = useRef(false);

    useEffect(() => {
        !isRunned.current &&
            axios.get('/houseservicecompanies')
            .then((response) => {setCompanies(response.data); 
              setAddressPlaques(response.data.filter((data)=> data.Scope_of_Work.includes("Address Plaques")));
              setAppliances(response.data.filter((data)=> data.Scope_of_Work.includes("Appliances")));
              setCabinets(response.data.filter((data)=> data.Scope_of_Work.includes("Cabinets")));
              setCeilingTexture(response.data.filter((data)=> data.Scope_of_Work.includes("Ceiling Texture Repair")));
              setCentralVac(response.data.filter((data)=> data.Scope_of_Work.includes("Central Vac")));
              setCleaners(response.data.filter((data)=> data.Scope_of_Work.includes("Cleaners")));
              setConcreteFlat(response.data.filter((data)=> data.Scope_of_Work == "Concrete - Flatwork"));
              setConcreteSupply(response.data.filter((data)=> data.Scope_of_Work == "Concrete - Supply"));
              setConcreteSupplyFlat(response.data.filter((data)=> data.Scope_of_Work.includes("CSF")));
              setCountertops(response.data.filter((data)=> data.Scope_of_Work.includes("Countertops")));
              setCribbing(response.data.filter((data)=> data.Scope_of_Work.includes("Cribbing")));
              setDrywall(response.data.filter((data)=> data.Scope_of_Work.includes("Drywall")));
              setElect(response.data.filter((data)=> data.Scope_of_Work.includes("Electrical")));
              setEngineering(response.data.filter((data)=> data.Scope_of_Work.includes("Engineering")));
              setExcavateBackfill(response.data.filter((data)=> data.Scope_of_Work.includes("Excavating thu Backfill")));
              setExcavateDigging(response.data.filter((data)=> data.Scope_of_Work.includes("Excavation - Digging Only")));
              setFinishLabour(response.data.filter((data)=> data.Scope_of_Work.includes("Finishing - Labour")));
              setFinishMaterial(response.data.filter((data)=> data.Scope_of_Work.includes("Finishing - Material")));
              setFireplace(response.data.filter((data)=> data.Scope_of_Work.includes("Fireplace")));
              setFlooring(response.data.filter((data)=> data.Scope_of_Work.includes("Flooring")));
              setFramingFrosWall(response.data.filter((data)=> data.Scope_of_Work.includes("Framing - Frost Walls")));
              setFramingLabour(response.data.filter((data)=> data.Scope_of_Work.includes("Framing - Labour")));
              setFramingLumber(response.data.filter((data)=> data.Scope_of_Work.includes("Framing - Lumber")));
              setFurnaceCleaning(response.data.filter((data)=> data.Scope_of_Work.includes("Furnace Cleaning")));
              setGarageDoor(response.data.filter((data)=> data.Scope_of_Work.includes("Garage Door")));
              setGarbage(response.data.filter((data)=> data.Scope_of_Work.includes("Garbage removal")));
              setGeneralContractor(response.data.filter((data)=> data.Scope_of_Work.includes("General Contractor")));
              setExtHandRails(response.data.filter((data)=> data.Scope_of_Work.includes("Hand Rails - Exterior")));
              setIntHandRails(response.data.filter((data)=> data.Scope_of_Work.includes("Hand Rails - Interior")));
              setHvac(response.data.filter((data)=> data.Scope_of_Work.includes("HVAC")));
              setJoist(response.data.filter((data)=> data.Scope_of_Work.includes("Joist")));
              setLandscapping(response.data.filter((data)=> data.Scope_of_Work.includes("Landscaping")));
              setLighting(response.data.filter((data)=> data.Scope_of_Work.includes("Lighting Supplier")));
              setMirrors(response.data.filter((data)=> data.Scope_of_Work.includes("Mirrors")));
              setMunicipality(response.data.filter((data)=> data.Scope_of_Work.includes("Municipality")));
              setOther(response.data.filter((data)=> data.Scope_of_Work.includes("Other")));
              setPainting(response.data.filter((data)=> data.Scope_of_Work.includes("Painting")));
              setParging(response.data.filter((data)=> data.Scope_of_Work.includes("Parging")));
              setPiles(response.data.filter((data)=> data.Scope_of_Work.includes("Piles")));
              setPlumbing(response.data.filter((data)=> data.Scope_of_Work.includes("Plumbing")));
              setRoofing(response.data.filter((data)=> data.Scope_of_Work.includes("Roofing")));
              setShowerGlass(response.data.filter((data)=> data.Scope_of_Work.includes("Shower Glass")));
              setGlassAndMirror(response.data.filter((data)=> data.Scope_of_Work.includes("Shower Glass and Mirrors")));
              setSiding(response.data.filter((data)=> data.Scope_of_Work.includes("Siding")));
              setStairsConcrete(response.data.filter((data)=> data.Scope_of_Work.includes("Stairs - Concrete")));
              setStairsOther(response.data.filter((data)=> data.Scope_of_Work.includes("Stairs - Other")));
              setStairsWood(response.data.filter((data)=> data.Scope_of_Work.includes("Stairs - Wood")));
              setStakeout(response.data.filter((data)=> data.Scope_of_Work.includes("Stakeout")));
              setStone(response.data.filter((data)=> data.Scope_of_Work.includes("Stone")));
              setSurvey(response.data.filter((data)=> data.Scope_of_Work.includes("Survey")));
              setTempFence(response.data.filter((data)=> data.Scope_of_Work.includes("Temp Fencing")));
              setTempHeat(response.data.filter((data)=> data.Scope_of_Work.includes("Temp Heat")));
              setTempSideWalk(response.data.filter((data)=> data.Scope_of_Work.includes("Temp Sidewalk or Access")));
              setTruss(response.data.filter((data)=> data.Scope_of_Work.includes("Truss")));
              setTrussJoist(response.data.filter((data)=> data.Scope_of_Work.includes("TJ")));
              setTubRepair(response.data.filter((data)=> data.Scope_of_Work.includes("Tub Repair")));
              setUtility(response.data.filter((data)=> data.Scope_of_Work.includes("Utility")));
              setWeepingTile(response.data.filter((data)=> data.Scope_of_Work.includes("Weeping Tile")));
              setWindow(response.data.filter((data)=> data.Scope_of_Work.includes("Windows")));
              setWindowWells(response.data.filter((data)=> data.Scope_of_Work.includes("Window Wells")));
              setWireShelves(response.data.filter((data)=> data.Scope_of_Work.includes("Wire Shelves")));
                            });
        return () => {
            isRunned.current = true;
        };
    }, []);



const handleChange = async (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;
          
  const newaddressPlaquesHouse = {...addressPlaquesHouse};
  newaddressPlaquesHouse[fieldName] = fieldValue;

  const newappliancesHouse = {...appliancesHouse};
  newappliancesHouse[fieldName] = fieldValue;

  const newcabinetsHouse = {...cabinetsHouse};
  newcabinetsHouse[fieldName] = fieldValue;

  const newceilingTextureHouse = {...ceilingTextureHouse};
  newceilingTextureHouse[fieldName] = fieldValue;

  const newcentralVacHouse = {...centralVacHouse};
  newcentralVacHouse[fieldName] = fieldValue;

  const newcleanersHouse = {...cleanersHouse};
  newcleanersHouse[fieldName] = fieldValue;

  const newconcreteFlatHouse = {...concreteFlatHouse};
  newconcreteFlatHouse[fieldName] = fieldValue;

  const newconcreteSupplyHouse = {...concreteSupplyHouse};
  newconcreteSupplyHouse[fieldName] = fieldValue;

  const newconcreteSupplyFlatHouse = {...concreteSupplyFlatHouse};
  newconcreteSupplyFlatHouse[fieldName] = fieldValue;

  const newcountertopsHouse = {...countertopsHouse};
  newcountertopsHouse[fieldName] = fieldValue;

  const newcribbingHouse = {...cribbingHouse};
  newcribbingHouse[fieldName] = fieldValue;

  const newdrywallHouse = {...drywallHouse};
  newdrywallHouse[fieldName] = fieldValue;

  const newelectHouse = {...electHouse};
  newelectHouse[fieldName] = fieldValue;

  const newengineeringHouse = {...engineeringHouse};
  newengineeringHouse[fieldName] = fieldValue;

  const newexcavateBackfillHouse = {...excavateBackfillHouse};
  newexcavateBackfillHouse[fieldName] = fieldValue;

  const newexcavateDiggingHouse = {...excavateDiggingHouse};
  newexcavateDiggingHouse[fieldName] = fieldValue;

  const newfinishLabourHouse = {...finishLabourHouse};
  newfinishLabourHouse[fieldName] = fieldValue;

  const newfinishMaterialHouse = {...finishMaterialHouse};
  newfinishMaterialHouse[fieldName] = fieldValue;

  const newfireplaceHouse = {...fireplaceHouse};
  newfireplaceHouse[fieldName] = fieldValue;

  const newflooringHouse = {...flooringHouse};
  newflooringHouse[fieldName] = fieldValue;

  const newframingFrostWallHouse = {...framingFrostWallHouse};
  newframingFrostWallHouse[fieldName] = fieldValue;

  const newframingLabourHouse = {...framingLabourHouse};
  newframingLabourHouse[fieldName] = fieldValue;

  const newframingLumberHouse = {...framingLumberHouse};
  newframingLumberHouse[fieldName] = fieldValue;

  const newfurnaceCleaningHouse = {...furnaceCleaningHouse};
  newfurnaceCleaningHouse[fieldName] = fieldValue;

  const newgarageDoorHouse = {...garageDoorHouse};
  newgarageDoorHouse[fieldName] = fieldValue;

  const newgarbageHouse = {...garbageHouse};
  newgarbageHouse[fieldName] = fieldValue;

  const newgeneralContractorHouse = {...generalContractorHouse};
  newgeneralContractorHouse[fieldName] = fieldValue;

  const newextHandrailsHouse = {...extHandrailsHouse};
  newextHandrailsHouse[fieldName] = fieldValue;

  const newintHandRailsHouse = {...intHandRailsHouse};
  newintHandRailsHouse[fieldName] = fieldValue;

  const newhvacHouse = {...hvacHouse};
  newhvacHouse[fieldName] = fieldValue;

  const newjoistHouse = {...joistHouse};
  newjoistHouse[fieldName] = fieldValue;

  const newlandscappingHouse = {...landscappingHouse};
  newlandscappingHouse[fieldName] = fieldValue;

  const newlightingHouse = {...lightingHouse};
  newlightingHouse[fieldName] = fieldValue;

  const newmirrorsHouse = {...mirrorsHouse};
  newmirrorsHouse[fieldName] = fieldValue;

  const newmunicipalityHouse = {...municipalityHouse};
  newmunicipalityHouse[fieldName] = fieldValue;

  const newotherHouse = {...otherHouse};
  newotherHouse[fieldName] = fieldValue;

  const newpaintingHouse = {...paintingHouse};
  newpaintingHouse[fieldName] = fieldValue;

  const newpargingHouse = {...pargingHouse};
  newpargingHouse[fieldName] = fieldValue;

  const newpilesHouse = {...pilesHouse};
  newpilesHouse[fieldName] = fieldValue;

  const newplumbingHouse = {...plumbingHouse};
  newplumbingHouse[fieldName] = fieldValue;

  const newroofingHouse = {...roofingHouse};
  newroofingHouse[fieldName] = fieldValue;

  const newshowerGlassHouse = {...showerGlassHouse};
  newshowerGlassHouse[fieldName] = fieldValue;

  const newglassAndMirrorHouse = {...glassAndMirrorHouse};
  newglassAndMirrorHouse[fieldName] = fieldValue;

  const newsidingHouse = {...sidingHouse};
  newsidingHouse[fieldName] = fieldValue;

  const newstairsConcreteHouse = {...stairsConcreteHouse};
  newstairsConcreteHouse[fieldName] = fieldValue;

  const newstairsOtherHouse = {...stairsOtherHouse};
  newstairsOtherHouse[fieldName] = fieldValue;

  const newstairsWoodHouse = {...stairsWoodHouse};
  newstairsWoodHouse[fieldName] = fieldValue;

  const newstakeoutHouse = {...stakeoutHouse};
  newstakeoutHouse[fieldName] = fieldValue;

  const newstoneHouse = {...stoneHouse};
  newstoneHouse[fieldName] = fieldValue;

  const newsurveyHouse = {...surveyHouse};
  newsurveyHouse[fieldName] = fieldValue;

  const newtempFenceHouse = {...tempFenceHouse};
  newtempFenceHouse[fieldName] = fieldValue;

  const newtempHeatHouse = {...tempHeatHouse};
  newtempHeatHouse[fieldName] = fieldValue;

  const newtempSideWalkHouse = {...tempSideWalkHouse};
  newtempSideWalkHouse[fieldName] = fieldValue;

  const newtrussHouse = {...trussHouse};
  newtrussHouse[fieldName] = fieldValue;

  const newtrussJoistHouse = {...trussJoistHouse};
  newtrussJoistHouse[fieldName] = fieldValue;

  const newtubRepairHouse = {...tubRepairHouse};
  newtubRepairHouse[fieldName] = fieldValue;

  const newutilityHouse = {...utilityHouse};
  newutilityHouse[fieldName] = fieldValue;

  const newweepingTileHouse = {...weepingTileHouse};
  newweepingTileHouse[fieldName] = fieldValue;

  const newwindowHouse = {...windowHouse};
  newwindowHouse[fieldName] = fieldValue;

  const newwindowWellsHouse = {...windowWellsHouse};
  newwindowWellsHouse[fieldName] = fieldValue;

  const newwireShelvesHouse = {...wireShelvesHouse};
  newwireShelvesHouse[fieldName] = fieldValue;

  setAddressPlaquesHouse(newaddressPlaquesHouse);
  setAppliancesHouse(newappliancesHouse);
  setCabinetsHouse(newcabinetsHouse);
  setCeilingTextureHouse(newceilingTextureHouse);
  setCentralVacHouse(newcentralVacHouse);
  setCleanersHouse(newcleanersHouse);
  setConcreteFlatHouse(newconcreteFlatHouse);
  setConcreteSupplyHouse(newconcreteSupplyHouse);
  setConcreteSupplyFlatHouse(newconcreteSupplyFlatHouse);
  setCountertopsHouse(newcountertopsHouse);
  setCribbingHouse(newcribbingHouse);
  setDrywallHouse(newdrywallHouse);
  setElectHouse(newelectHouse);
  setEngineeringHouse(newengineeringHouse);
  setExcavateBackfillHouse(newexcavateBackfillHouse);
  setExcavateDiggingHouse(newexcavateDiggingHouse);
  setFinishLabourHouse(newfinishLabourHouse);
  setFinishMaterialHouse(newfinishMaterialHouse);
  setFireplaceHouse(newfireplaceHouse);
  setFlooringHouse(newflooringHouse);
  setFramingFrosWallHouse(newframingFrostWallHouse);
  setFramingLabourHouse(newframingLabourHouse);
  setFramingLumberHouse(newframingLumberHouse);
  setFurnaceCleaningHouse(newfurnaceCleaningHouse);
  setGarageDoorHouse(newgarageDoorHouse);
  setGarbageHouse(newgarbageHouse);
  setGeneralContractorHouse(newgeneralContractorHouse);
  setExtHandRailsHouse(newextHandrailsHouse);
  setIntHandRailsHouse(newintHandRailsHouse);
  setHvacHouse(newhvacHouse);
  setJoistHouse(newjoistHouse);
  setLandscappingHouse(newlandscappingHouse);
  setLightingHouse(newlightingHouse);
  setMirrorsHouse(newmirrorsHouse);
  setMunicipalityHouse(newmunicipalityHouse);
  setOtherHouse(newotherHouse);
  setPaintingHouse(newpaintingHouse);
  setPargingHouse(newpargingHouse);
  setPilesHouse(newpilesHouse);
  setPlumbingHouse(newplumbingHouse);
  setRoofingHouse(newroofingHouse);
  setShowerGlassHouse(newshowerGlassHouse);
  setGlassAndMirrorHouse(newglassAndMirrorHouse);
  setSidingHouse(newsidingHouse);
  setStairsConcreteHouse(newstairsConcreteHouse);
  setStairsOtherHouse(newstairsOtherHouse);
  setStairsWoodHouse(newstairsWoodHouse);
  setStakeoutHouse(newstakeoutHouse);
  setStoneHouse(newstoneHouse);
  setSurveyHouse(newsurveyHouse);
  setTempFenceHouse(newtempFenceHouse);
  setTempHeatHouse(newtempHeatHouse);
  setTempSideWalkHouse(newtempSideWalkHouse);
  setTrussHouse(newtrussHouse);
  setTrussJoistHouse(newtrussJoistHouse);
  setTubRepairHouse(newtubRepairHouse);
  setUtilityHouse(newutilityHouse);
  setWeepingTileHouse(newweepingTileHouse);
  setWindowHouse(newwindowHouse);
  setWindowWellsHouse(newwindowWellsHouse);
  setWireShelvesHouse(newwireShelvesHouse);
};    


const handleAddressPlaqueSubmint = async (event) => {
  event.preventDefault();
  await axios.put('/addressplaques', {
//  house_services_No: serviceNo, 
  House_No: houseNo,
  address_Contact_No: addressPlaquesHouse.address_Contact_No,
  address_Notes: addressPlaquesHouse.address_Notes,
  address_Assigned: addressPlaquesHouse.address_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleAppliancesSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/appliances', { 
  House_No: houseNo,
  appliances_Contact_No: appliancesHouse.appliances_Contact_No,
  appliances_Notes: appliancesHouse.appliances_Notes,
  appliances_Assigned: appliancesHouse.appliances_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleCabinetsSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/cabinets', {
  House_No: houseNo,
  cabinets_Contact_No: cabinetsHouse.cabinets_Contact_No,
  cabinets_Notes: cabinetsHouse.cabinets_Notes,
  cabinets_Assigned: cabinetsHouse.cabinets_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleCeilingTextSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/ceilingText', {
  House_No: houseNo,
  ceilingText_Contact_No: ceilingTextureHouse.ceilingText_Contact_No,
  ceilingText_Notes: ceilingTextureHouse.ceilingText_Notes,
  ceilingText_Assigned: ceilingTextureHouse.ceilingText_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleCentralVacSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/centralVac', { 
  House_No: houseNo,
  centralVac_Contact_No: centralVacHouse.centralVac_Contact_No,
  centralVac_Notes: centralVacHouse.centralVac_Notes,
  centralVac_Assigned: centralVacHouse.centralVac_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleCleanersSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/cleaners', { 
  House_No: houseNo,
  cleaners_Contact_No: cleanersHouse.cleaners_Contact_No,
  cleaners_Notes: cleanersHouse.cleaners_Notes,
  cleaners_Assigned: cleanersHouse.cleaners_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleConcreteFSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/concreteF', {
    House_No: houseNo,
    concreteF_Contact_No: concreteFlatHouse.concreteF_Contact_No,
    concreteF_Notes: concreteFlatHouse.concreteF_Notes,
    concreteF_Assigned: concreteFlatHouse.concreteF_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleConcreteSSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/concreteS', {
    House_No: houseNo,
    concreteS_Contact_No: concreteSupplyHouse.concreteS_Contact_No,
    concreteS_Notes: concreteSupplyHouse.concreteS_Notes,
    concreteS_Assigned: concreteSupplyHouse.concreteS_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleConcreteSFSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/concreteSF', {
    House_No: houseNo,
    concreteSF_Contact_No: concreteSupplyFlatHouse.concreteSF_Contact_No,
    concreteSF_Notes: concreteSupplyFlatHouse.concreteSF_Notes,
    concreteSF_Assigned: concreteSupplyFlatHouse.concreteSF_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleCountertopsSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/countertops', {
    House_No: houseNo,
    countertops_Contact_No: countertopsHouse.countertops_Contact_No,
    countertops_Notes: countertopsHouse.countertops_Notes,
    countertops_Assigned: countertopsHouse.countertops_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleCribbingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/cribbing', {
    House_No: houseNo,
    cribbing_Contact_No: cribbingHouse.cribbing_Contact_No,
    cribbing_Notes: cribbingHouse.cribbing_Notes,
    cribbing_Assigned: cribbingHouse.cribbing_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleDrywallSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/drywall', {
    House_No: houseNo,
    drywall_Contact_No: drywallHouse.drywall_Contact_No,
    drywall_Notes: drywallHouse.drywall_Notes,
    drywall_Assigned: drywallHouse.drywall_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleElecSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/elec', {
    House_No: houseNo,
    elec_Contact_No: electHouse.elec_Contact_No,
    elec_Notes: electHouse.elec_Notes,
    elec_Assigned: electHouse.elec_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleEngSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/eng', {
    House_No: houseNo,
    eng_Contact_No: engineeringHouse.eng_Contact_No,
    eng_Notes: engineeringHouse.eng_Notes,
    eng_Assigned: engineeringHouse.eng_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleExcavate1Submit = async (event) => {
  event.preventDefault();
  await axios.put('/excavate1', {
    House_No: houseNo,
    excavate1_Contact_No: excavateBackfillHouse.excavate1_Contact_No,
    excavate1_Notes: excavateBackfillHouse.excavate1_Notes,
    excavate1_Assigned: excavateBackfillHouse.excavate1_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleExcavate2Submit = async (event) => {
  event.preventDefault();
  await axios.put('/excavate2', {
    House_No: houseNo,
    excavate2_Contact_No: excavateDiggingHouse.excavate2_Contact_No,
    excavate2_Notes: excavateDiggingHouse.excavate2_Notes,
    excavate2_Assigned: excavateDiggingHouse.excavate2_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFinishingLSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/finishingL', {
    House_No: houseNo,
    finishingL_Contact_No: finishLabourHouse.finishingL_Contact_No,
    finishingL_Notes: finishLabourHouse.finishingL_Notes,
    finishingL_Assigned: finishLabourHouse.finishingL_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFinishingMSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/finishingM', {
    House_No: houseNo,
    finishingM_Contact_No: finishMaterialHouse.finishingM_Contact_No,
    finishingM_Notes: finishMaterialHouse.finishingM_Notes,
    finishingM_Assigned: finishMaterialHouse.finishingM_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFireplaceSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/fireplace', {
    House_No: houseNo,
    fireplace_Contact_No: fireplaceHouse.fireplace_Contact_No,
    fireplace_Notes: fireplaceHouse.fireplace_Notes,
    fireplace_Assigned: fireplaceHouse.fireplace_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFlooringSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/flooring', {
    House_No: houseNo,
    flooring_Contact_No: flooringHouse.flooring_Contact_No,
    flooring_Notes: flooringHouse.flooring_Notes,
    flooring_Assigned: flooringHouse.flooring_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFramingFrostSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/framingFrost', {
    House_No: houseNo,
    framingFrost_Contact_No: framingFrostWallHouse.framingFrost_Contact_No,
    framingFrost_Notes: framingFrostWallHouse.framingFrost_Notes,
    framingFrost_Assigned: framingFrostWallHouse.framingFrost_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFramingLabSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/framingLab', {
    House_No: houseNo,
    framingLab_Contact_No: framingLabourHouse.framingLab_Contact_No,
    framingLab_Notes: framingLabourHouse.framingLab_Notes,
    framingLab_Assigned: framingLabourHouse.framingLab_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFramingLumbSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/framingLumb', {
    House_No: houseNo,
    framingLumb_Contact_No: framingLumberHouse.framingLumb_Contact_No,
    framingLumb_Notes: framingLumberHouse.framingLumb_Notes,
    framingLumb_Assigned: framingLumberHouse.framingLumb_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleFurnaceSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/furnace', {
    House_No: houseNo,
    furnace_Contact_No: furnaceCleaningHouse.furnace_Contact_No,
    furnace_Notes: furnaceCleaningHouse.furnace_Notes,
    furnace_Assigned: furnaceCleaningHouse.furnace_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleGarageSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/garage', {
    House_No: houseNo,
    garage_Contact_No: garageDoorHouse.garage_Contact_No,
    garage_Notes: garageDoorHouse.garage_Notes,
    garage_Assigned: garageDoorHouse.garage_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleGarbageSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/garbage', {
    House_No: houseNo,
    garbage_Contact_No: garbageHouse.garbage_Contact_No,
    garbage_Notes: garbageHouse.garbage_Notes,
    garbage_Assigned: garbageHouse.garbage_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleGeneralConSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/generalCon', {
    House_No: houseNo,
    generalCon_Contact_No: generalContractorHouse.generalCon_Contact_No,
    generalCon_Notes: generalContractorHouse.generalCon_Notes,
    generalCon_Assigned: generalContractorHouse.generalCon_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleHandrailExtSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/handrailExt', {
    House_No: houseNo,
    handrailExt_Contact_No: extHandrailsHouse.handrailExt_Contact_No,
    handrailExt_Notes: extHandrailsHouse.handrailExt_Notes,
    handrailExt_Assigned: extHandrailsHouse.handrailExt_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleHandrailIntSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/handrailInt', {
    House_No: houseNo,
    handrailInt_Contact_No: intHandRailsHouse.handrailInt_Contact_No,
    handrailInt_Notes: intHandRailsHouse.handrailInt_Notes,
    handrailInt_Assigned: intHandRailsHouse.handrailInt_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleHvacSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/hvac', {
    House_No: houseNo,
    hvac_Contact_No: hvacHouse.hvac_Contact_No,
    hvac_Notes: hvacHouse.hvac_Notes,
    hvac_Assigned: hvacHouse.hvac_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleJoistSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/joist', {
    House_No: houseNo,
    joist_Contact_No: joistHouse.joist_Contact_No,
    joist_Notes: joistHouse.joist_Notes,
    joist_Assigned: joistHouse.joist_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleLandscappingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/landscapping', {
    House_No: houseNo,
    landscapping_Contact_No: landscappingHouse.landscapping_Contact_No,
    landscapping_Notes: landscappingHouse.landscapping_Notes,
    landscapping_Assigned: landscappingHouse.landscapping_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleLightingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/lighting', {
    House_No: houseNo,
    lighting_Contact_No: lightingHouse.lighting_Contact_No,
    lighting_Notes: lightingHouse.lighting_Notes,
    lighting_Assigned: lightingHouse.lighting_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleMirrorsSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/mirrors', {     
    House_No: houseNo,
    mirrors_Contact_No: mirrorsHouse.mirrors_Contact_No,
    mirrors_Notes: mirrorsHouse.mirrors_Notes,
    mirrors_Assigned: mirrorsHouse.mirrors_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleMunicipalitySubmit = async (event) => {
  event.preventDefault();
  await axios.put('/municipality', {     
    House_No: houseNo,
    municipality_Contact_No: municipalityHouse.municipality_Contact_No,
    municipality_Notes: municipalityHouse.municipality_Notes,
    municipality_Assigned: municipalityHouse.municipality_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleOtherSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/other', {     
    House_No: houseNo,
    other_Contact_No: otherHouse.other_Contact_No,
    other_Notes: otherHouse.other_Notes,
    other_Assigned: otherHouse.other_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handlePaintingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/painting', {     
    House_No: houseNo,
    painting_Contact_No: paintingHouse.painting_Contact_No,
    painting_Notes: paintingHouse.painting_Notes,
    painting_Assigned: paintingHouse.painting_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handlePargingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/parging', {     
    House_No: houseNo,
    parging_Contact_No: pargingHouse.parging_Contact_No,
    parging_Notes: pargingHouse.parging_Notes,
    parging_Assigned: pargingHouse.parging_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handlePilesSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/piles', {     
    House_No: houseNo,
    piles_Contact_No: pilesHouse.piles_Contact_No,
    piles_Notes: pilesHouse.piles_Notes,
    piles_Assigned: pilesHouse.piles_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handlePlumbingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/plumbing', {     
    House_No: houseNo,
    plumbing_Contact_No: plumbingHouse.plumbbing_Contact_No,
    plumbing_Notes: plumbingHouse.plumbing_Notes,
    plumbing_Assigned: plumbingHouse.plumbing_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleRoofingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/roofing', {     
    House_No: houseNo,
    roofing_Contact_No: roofingHouse.roofing_Contact_No,
    roofing_Notes: roofingHouse.roofing_Notes,
    roofing_Assigned: roofingHouse.roofing_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleShowerGlassSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/showerGlass', {     
    House_No: houseNo,
    showerGlass_Contact_No: showerGlassHouse.showerGlass_Contact_No,
    showerGlass_Notes: showerGlassHouse.showerGlass_Notes,
    showerGlass_Assigned: showerGlassHouse.showerGlass_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleGlassAndMirrorSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/showerGM', {     
    House_No: houseNo,
    showerGM_Contact_No: glassAndMirrorHouse.showerGM_Contact_No,
    showerGM_Notes: glassAndMirrorHouse.showerGM_Notes,
    showerGM_Assigned: glassAndMirrorHouse.showerGM_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleSidingSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/siding', {     
    House_No: houseNo,
    siding_Contact_No: sidingHouse.siding_Contact_No,
    siding_Notes: sidingHouse.siding_Notes,
    siding_Assigned: sidingHouse.siding_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleStairsConcreteSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/stairsC', {     
    House_No: houseNo,
    stairsC_Contact_No: stairsConcreteHouse.stairsC_Contact_No,
    stairsC_Notes: stairsConcreteHouse.stairsC_Notes,
    stairsC_Assigned: stairsConcreteHouse.stairsC_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleStairsOtherSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/stairsO', {     
    House_No: houseNo,
    stairsO_Contact_No: stairsOtherHouse.stairsO_Contact_No,
    stairsO_Notes: stairsOtherHouse.stairsO_Notes,
    stairsO_Assigned: stairsOtherHouse.stairsO_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleStairsWoodSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/stairsW', {     
    House_No: houseNo,
    stairsW_Contact_No: stairsWoodHouse.stairsW_Contact_No,
    stairsW_Notes: stairsWoodHouse.stairsW_Notes,
    stairsW_Assigned: stairsWoodHouse.stairsW_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleStakeoutSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/stakeout', {     
    House_No: houseNo,
    stakeout_Contact_No: stakeoutHouse.stakeout_Contact_No,
    stakeout_Notes: stakeoutHouse.stakeout_Notes,
    stakeout_Assigned: stakeoutHouse.stakeout_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleStoneSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/stone', {     
    House_No: houseNo,
    stone_Contact_No: stoneHouse.stone_Contact_No,
    stone_Notes: stoneHouse.stone_Notes,
    stone_Assigned: stoneHouse.stone_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleSurveySubmit = async (event) => {
  event.preventDefault();
  await axios.put('/survey', {     
    House_No: houseNo,
    survey_Contact_No: surveyHouse.survey_Contact_No,
    survey_Notes: surveyHouse.survey_Notes,
    survey_Assigned: surveyHouse.survey_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleTempFenceSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/tempFence', {     
    House_No: houseNo,
    tempFence_Contact_No: tempFenceHouse.tempFence_Contact_No,
    tempFence_Notes: tempFenceHouse.tempFence_Notes,
    tempFence_Assigned: tempFenceHouse.tempFence_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleTempHeatSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/tempHeat', {     
    House_No: houseNo,
    tempHeat_Contact_No: tempHeatHouse.tempHeat_Contact_No,
    tempHeat_Notes: tempHeatHouse.tempHeat_Notes,
    tempHeat_Assigned: tempHeatHouse.tempHeat_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleTempSideWalkSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/tempSidewalk', {     
    House_No: houseNo,
    tempSidewalk_Contact_No: tempSideWalkHouse.tempSidewalk_Contact_No,
    tempSidewalk_Notes: tempSideWalkHouse.tempSidewalk_Notes,
    tempSidewalk_Assigned: tempSideWalkHouse.tempSidewalk_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleTrussSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/truss', {     
    House_No: houseNo,
    truss_Contact_No: trussHouse.truss_Contact_No,
    truss_Notes: trussHouse.truss_Notes,
    truss_Assigned: trussHouse.truss_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleTrussJoistSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/trussJoist', {     
    House_No: houseNo,
    trussJoist_Contact_No: trussJoistHouse.trussJoist_Contact_No,
    trussJoist_Notes: trussJoistHouse.trussJoist_Notes,
    trussJoist_Assigned: trussJoistHouse.trussJoist_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleTubRepairSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/tub', {     
    House_No: houseNo,
    tub_Contact_No: tubRepairHouse.tub_Contact_No,
    tub_Notes: tubRepairHouse.tub_Notes,
    tub_Assigned: tubRepairHouse.tub_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleUtilitySubmit = async (event) => {
  event.preventDefault();
  await axios.put('/utility', {     
    House_No: houseNo,
    utility_Contact_No: utilityHouse.utility_Contact_No,
    utility_Notes: utilityHouse.utility_Notes,
    utility_Assigned: utilityHouse.utility_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleWeepingTileSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/weepingTile', {     
    House_No: houseNo,
    weepingTile_Contact_No: weepingTileHouse.weepingTile_Contact_No,
    weepingTile_Notes: weepingTileHouse.weepingTile_Notes,
    weepingTile_Assigned: weepingTileHouse.weepingTile_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleWindowSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/window', {     
    House_No: houseNo,
    window_Contact_No: windowHouse.window_Contact_No,
    window_Notes: windowHouse.window_Notes,
    window_Assigned: windowHouse.window_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleWindowWellsSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/windowWell', {     
    House_No: houseNo,
    windowWell_Contact_No: windowWellsHouse.windowWell_Contact_No,
    windowWell_Notes: windowWellsHouse.windowWell_Notes,
    windowWell_Assigned: windowWellsHouse.windowWell_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};

const handleWireShelvesSubmit = async (event) => {
  event.preventDefault();
  await axios.put('/wireShelves', {     
    House_No: houseNo,
    wireShelves_Contact_No: wireShelvesHouse.wireShelves_Contact_No,
    wireShelves_Notes: wireShelvesHouse.wireShelves_Notes,
    wireShelves_Assigned: wireShelvesHouse.wireShelves_Assigned,
}).then();setSnackbar({ children: 'Change saved', severity: 'success' });};



    return(
            <Box             
                sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
              }}>
                <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Service"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <TextField
                    id="outlined-read-only-input"
                    defaultValue="Company"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 

                         <TextField
                    id="outlined-read-only-input"
                    defaultValue="Assigned"
                    sx={{ width: '11%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Notes"
                    sx={{ width: '34%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Update"
                    sx={{ width: '15%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                </Stack>
                <form onSubmit={handleAddressPlaqueSubmint} > 
                <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Address Plaques"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='address_Contact_No'
                id='address_Contact_No'
                sx={{ width: '20%' }}
                value={addressPlaquesHouse.address_Contact_No || '' || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option>
               {addressPlaques.length > 0 && addressPlaques.map(addressPlaques => {
                return <option  key={addressPlaques.Contacts_No} 
               value={addressPlaques.Contacts_No}>  
               {addressPlaques.Company_Operating_Name}         
                </option>; 
             })}         
              </Select>
              <Select
                name='address_Assigned'
                id='address_Assigned'
                sx={{ width: '11%' }}
                value={addressPlaquesHouse.address_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="address_Notes"
                    name="address_Notes"
                    value={addressPlaquesHouse.address_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleAppliancesSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Appliances"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='appliances_Contact_No'
                id='appliances_Contact_No'
                sx={{ width: '20%' }}
                value={appliancesHouse.appliances_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {appliances.length > 0 && appliances.map(appliances => {
               return <option  key={appliances.Contacts_No} 
              value={appliances.Contacts_No}>  
              {appliances.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='appliances_Assigned'
                id='appliances_Assigned'
                sx={{ width: '11%' }}
                value={appliancesHouse.appliances_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="appliances_Notes"
                    name="appliances_Notes"
                    value={appliancesHouse.appliances_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleCabinetsSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Cabinets"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='cabinets_Contact_No'
                id='cabinets_Contact_No'
                sx={{ width: '20%' }}
                value={cabinetsHouse.cabinets_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
//                onClick={(e) => {setIndustry('Cabinets'); handleClick(e);}}
                native
              ><option>Select a company</option> 
              {cabinets.length > 0 && cabinets.map(cabinets => {
               return <option  key={cabinets.Contacts_No} 
              value={cabinets.Contacts_No}>  
              {cabinets.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='cabinets_Assigned'
                id='cabinets_Assigned'
                sx={{ width: '11%' }}
                value={cabinetsHouse.cabinets_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="cabinets_Notes"
                    name="cabinets_Notes"
                    value={cabinetsHouse.cabinets_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleCeilingTextSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Ceiling Texture Repair"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='ceilingText_Contact_No'
                id='Contact_No'
                sx={{ width: '20%' }}
                value={ceilingTextureHouse.ceilingText_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
//                onClick={(e) => {setIndustry('Ceiling Texture Repair'); handleClick(e);}}
                native
              ><option>Select a company</option> 
              {ceilingTexture.length > 0 && ceilingTexture.map(ceilingTexture => {
               return <option  key={ceilingTexture.Contacts_No} 
              value={ceilingTexture.Contacts_No}>  
              {ceilingTexture.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='ceilingText_Assigned'
                id='Assigned'
                sx={{ width: '11%' }}
                value={ceilingTextureHouse.ceilingText_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="Notes"
                    name="ceilingText_Notes"
                    value={ceilingTextureHouse.ceilingText_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleCentralVacSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Central Vac"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='centralVac_Contact_No'
                id='Contact_No'
                sx={{ width: '20%' }}
                value={centralVacHouse.centralVac_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
 //               onClick={(e) => {setIndustry('Central Vac'); handleClick(e);}}
                native
              ><option>Select a company</option> 
              {centralVac.length > 0 && centralVac.map(centralVac => {
               return <option  key={centralVac.Contacts_No} 
              value={centralVac.Contacts_No}>  
              {centralVac.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='centralVac_Assigned'
                id='Assigned'
                sx={{ width: '11%' }}
                value={centralVacHouse.centralVac_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="Notes"
                    name="centralVac_Notes"
                    value={centralVacHouse.centralVac_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleCleanersSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Cleaners"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='cleaners_Contact_No'
                id='Contact_No'
                sx={{ width: '20%' }}
                value={cleanersHouse.cleaners_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {cleaners.length > 0 && cleaners.map(cleaners => {
               return <option  key={cleaners.Contacts_No} 
              value={cleaners.Contacts_No}>  
              {cleaners.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='cleaners_Assigned'
                id='Assigned'
                sx={{ width: '11%' }}
                value={cleanersHouse.cleaners_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="Notes"
                    name="cleaners_Notes"
                    value={cleanersHouse.cleaners_Notes || ''}
                    onChange={(e) => handleChange(e) }
                    sx={{ width: '34%' }}
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleConcreteFSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Concrete - Flatwork"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='concreteF_Contact_No'
                id='concreteF_Contact_No'
                sx={{ width: '20%' }}
                value={concreteFlatHouse.concreteF_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {concreteFlat.length > 0 && concreteFlat.map(concreteFlat => {
               return <option  key={concreteFlat.Contacts_No} 
              value={concreteFlat.Contacts_No}>  
              {concreteFlat.Company_Operating_Name}         
               </option>; 
            })}  
              </Select>
              <Select
                name='concreteF_Assigned'
                id='concreteF_Assigned'
                sx={{ width: '11%' }}
                value={concreteFlatHouse.concreteF_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="Notes"
                    name="concreteF_Notes"
                    value={concreteFlatHouse.concreteF_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleConcreteSSubmit}>
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Concrete - Supply"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='concreteS_Contact_No'
                id='Contact_No'
                sx={{ width: '20%' }}
                value={concreteSupplyHouse.concreteS_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {concreteSupply.length > 0 && concreteSupply.map(concreteSupply => {
               return <option  key={concreteSupply.Contacts_No} 
              value={concreteSupply.Contacts_No}>  
              {concreteSupply.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='concreteS_Assigned'
                id='concreteS_Assigned'
                sx={{ width: '11%' }}
                value={concreteSupplyHouse.concreteS_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="Notes"
                    name="concreteS_Notes"
                    value={concreteSupplyHouse.concreteS_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleConcreteSFSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Concrete - Supply and Flatwork"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='concreteSF_Contact_No'
                id='Contact_No'
                sx={{ width: '20%' }}
                value={concreteSupplyFlatHouse.concreteSF_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {concreteSupplyFlat.length > 0 && concreteSupplyFlat.map(concreteSupplyFlat => {
               return <option  key={concreteSupplyFlat.Contacts_No} 
              value={concreteSupplyFlat.Contacts_No}>  
              {concreteSupplyFlat.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='concreteSF_Assigned'
                id='Assigned'
                sx={{ width: '11%' }}
                value={concreteSupplyFlatHouse.concreteSF_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="concreteSF_Notes"
                    name="concreteSF_Notes"
                    value={concreteSupplyFlatHouse.concreteSF_Notes || ''}
                    onChange={(e) => handleChange(e) }
                    sx={{ width: '34%' }}
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleCountertopsSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Countertops"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='countertops_Contact_No'
                id='countertops_Contact_No'
                sx={{ width: '20%' }}
                value={countertopsHouse.countertops_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {countertops.length > 0 && countertops.map(countertops => {
               return <option  key={countertops.Contacts_No} 
              value={countertops.Contacts_No}>  
              {countertops.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='countertops_Assigned'
                id='Assigned'
                sx={{ width: '11%' }}
                value={countertopsHouse.countertops_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="Notes"
                    name="countertops_Notes"
                    value={countertopsHouse.countertops_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleCribbingSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Cribbing"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='cribbing_Contact_No'
                id='cribbing_Contact_No'
                sx={{ width: '20%' }}
                value={cribbingHouse.cribbing_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {cribbing.length > 0 && cribbing.map(cribbing => {
               return <option  key={cribbing.Contacts_No} 
              value={cribbing.Contacts_No}>  
              {cribbing.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='cribbing_Assigned'
                id='cribbing_Assigned'
                sx={{ width: '11%' }}
                value={cribbingHouse.cribbing_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="cribbing_Notes"
                    name="cribbing_Notes"
                    value={cribbingHouse.cribbing_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleDrywallSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Drywall"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='drywall_Contact_No'
                id='drywall_Contact_No'
                sx={{ width: '20%' }}
                value={drywallHouse.drywall_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {drywall.length > 0 && drywall.map(drywall => {
               return <option  key={drywall.Contacts_No} 
              value={drywall.Contacts_No}>  
              {drywall.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='drywall_Assigned'
                id='drywall_Assigned'
                sx={{ width: '11%' }}
                value={drywallHouse.drywall_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="drywall_Notes"
                    name="drywall_Notes"
                    value={drywallHouse.drywall_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleElecSubmit}>
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Electrical"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='elec_Contact_No'
                id='elec_Contact_No'
                sx={{ width: '20%' }}
                value={electHouse.elec_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {elect.length > 0 && elect.map(elect => {
               return <option  key={elect.Contacts_No} 
              value={elect.Contacts_No}>  
              {elect.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='Assigned'
                id='Assigned'
                sx={{ width: '11%' }}
                value={electHouse.elec_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="elec_Notes"
                    name="elec_Notes"
                    value={electHouse.elec_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form  onSubmit={handleEngSubmit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Engineering"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='eng_Contact_No'
                id='eng_Contact_No'
                sx={{ width: '20%' }}
                value={engineeringHouse.eng_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {engineering.length > 0 && engineering.map(engineering => {
               return <option  key={engineering.Contacts_No} 
              value={engineering.Contacts_No}>  
              {engineering.Company_Operating_Name}         
               </option>; 
            })}  
              </Select>
              <Select
                name='eng_Assigned'
                id='eng_Assigned'
                sx={{ width: '11%' }}
                value={engineeringHouse.eng_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="eng_Notes"
                    name="eng_Notes"
                    value={engineeringHouse.eng_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleExcavate1Submit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Excavating thu Backfill"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='excavate1_Contact_No'
                id='excavate1_Contact_No'
                sx={{ width: '20%' }}
                value={excavateBackfillHouse.excavate1_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {excavateBackfill.length > 0 && excavateBackfill.map(excavateBackfill => {
               return <option  key={excavateBackfill.Contacts_No} 
              value={excavateBackfill.Contacts_No}>  
              {excavateBackfill.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='excavate1_Assigned'
                id='excavate1_Assigned'
                sx={{ width: '11%' }}
                value={excavateBackfillHouse.excavate1_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="excavate1_Notes"
                    name="excavate1_Notes"
                    value={excavateBackfillHouse.excavate1_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleExcavate2Submit} >
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Excavation - Digging Only"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='excavate2_Contact_No'
                id='excavate2_Contact_No'
                sx={{ width: '20%' }}
                value={excavateDiggingHouse.excavate2_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {excavateDigging.length > 0 && excavateDigging.map(excavateDigging => {
               return <option  key={excavateDigging.Contacts_No} 
              value={excavateDigging.Contacts_No}>  
              {excavateDigging.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='excavate2_Assigned'
                id='excavate2_Assigned'
                sx={{ width: '11%' }}
                value={excavateDiggingHouse.excavate2_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="excavate2_Notes"
                    name="excavate2_Notes"
                    value={excavateDiggingHouse.excavate2_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFinishingLSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Finishing - Labour"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='finishingL_Contact_No'
                id='finishingL_Contact_No'
                sx={{ width: '20%' }}
                value={finishLabourHouse.finishingL_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {finishLabour.length > 0 && finishLabour.map(finishLabour => {
               return <option  key={finishLabour.Contacts_No} 
              value={finishLabour.Contacts_No}>  
              {finishLabour.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='finishingL_Assigned'
                id='finishingL_Assigned'
                sx={{ width: '11%' }}
                value={finishLabourHouse.finishingL_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="finishingL_Notes"
                    name="finishingL_Notes"
                    value={finishLabourHouse.finishingL_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFinishingMSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Finishing - Material"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='finishingM_Contact_No'
                id='finishingM_Contact_No'
                sx={{ width: '20%' }}
                value={finishMaterialHouse.finishingM_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {finishMaterial.length > 0 && finishMaterial.map(finishMaterial => {
               return <option  key={finishMaterial.Contacts_No} 
              value={finishMaterial.Contacts_No}>  
              {finishMaterial.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='finishingM_Assigned'
                id='finishingM_Assigned'
                sx={{ width: '11%' }}
                value={finishMaterialHouse.finishingM_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="finishingM_Notes"
                    name="finishingM_Notes"
                    value={finishMaterialHouse.finishingM_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFireplaceSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Fireplace"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='fireplace_Contact_No'
                id='fireplace_Contact_No'
                sx={{ width: '20%' }}
                value={fireplaceHouse.fireplace_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {fireplace.length > 0 && fireplace.map(fireplace => {
               return <option  key={fireplace.Contacts_No} 
              value={fireplace.Contacts_No}>  
              {fireplace.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='fireplace_Assigned'
                id='fireplace_Assigned'
                sx={{ width: '11%' }}
                value={fireplaceHouse.fireplace_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="fireplace_Notes"
                    name="fireplace_Notes"
                    value={fireplaceHouse.fireplace_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFlooringSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Flooring"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='flooring_Contact_No'
                id='flooring_Contact_No'
                sx={{ width: '20%' }}
                value={flooringHouse.flooring_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {flooring.length > 0 && flooring.map(flooring => {
               return <option  key={flooring.Contacts_No} 
              value={flooring.Contacts_No}>  
              {flooring.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='flooring_Assigned'
                id='flooring_Assigned'
                sx={{ width: '11%' }}
                value={flooringHouse.flooring_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="flooring_Notes"
                    name="flooring_Notes"
                    value={flooringHouse.flooring_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFramingFrostSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Framing - Frost Walls"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='framingFrost_Contact_No'
                id='framingFrost_Contact_No'
                sx={{ width: '20%' }}
                value={framingFrostWallHouse.framingFrost_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {framingFrostWall.length > 0 && framingFrostWall.map(framingFrostWall => {
               return <option  key={framingFrostWall.Contacts_No} 
              value={framingFrostWall.Contacts_No}>  
              {framingFrostWall.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='framingFrost_Assigned'
                id='framingFrost_Assigned'
                sx={{ width: '11%' }}
                value={framingFrostWallHouse.framingFrost_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="framingFrost_Notes"
                    name="framingFrost_Notes"
                    value={framingFrostWallHouse.framingFrost_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form  onSubmit={handleFramingLabSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Framing - Labour"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='framingLab_Contact_No'
                id='framingLab_Contact_No'
                sx={{ width: '20%' }}
                value={framingLabourHouse.framingLab_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {framingLabour.length > 0 && framingLabour.map(framingLabour => {
               return <option  key={framingLabour.Contacts_No} 
              value={framingLabour.Contacts_No}>  
              {framingLabour.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='framingLab_Assigned'
                id='framingLab_Assigned'
                sx={{ width: '11%' }}
                value={framingLabourHouse.framingLab_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="framingLab_Notes"
                    name="framingLab_Notes"
                    value={framingLabourHouse.framingLab_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFramingLumbSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Framing - Lumber"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='framingLumb_Contact_No'
                id='framingLumb_Contact_No'
                sx={{ width: '20%' }}
                value={framingLumberHouse.framingLumb_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {framingLumber.length > 0 && framingLumber.map(framingLumber => {
               return <option  key={framingLumber.Contacts_No} 
              value={framingLumber.Contacts_No}>  
              {framingLumber.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='framingLumb_Assigned'
                id='framingLumb_Assigned'
                sx={{ width: '11%' }}
                value={framingLumberHouse.framingLumb_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="framingLumb_Notes"
                    name="framingLumb_Notes"
                    value={framingLumberHouse.framingLumb_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleFurnaceSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Furnace Cleaning"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='furnace_Contact_No'
                id='furnace_Contact_No'
                sx={{ width: '20%' }}
                value={furnaceCleaningHouse.furnace_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {furnaceCleaning.length > 0 && furnaceCleaning.map(furnaceCleaning => {
               return <option  key={furnaceCleaning.Contacts_No} 
              value={furnaceCleaning.Contacts_No}>  
              {furnaceCleaning.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='furnace_Assigned'
                id='furnace_Assigned'
                sx={{ width: '11%' }}
                value={furnaceCleaningHouse.furnace_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="furnace_Notes"
                    name="furnace_Notes"
                    value={furnaceCleaningHouse.furnace_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleGarageSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Garage Door"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='garage_Contact_No'
                id='garage_Contact_No'
                sx={{ width: '20%' }}
                value={garageDoorHouse.garage_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {garageDoor.length > 0 && garageDoor.map(garageDoor => {
               return <option  key={garageDoor.Contacts_No} 
              value={garageDoor.Contacts_No}>  
              {garageDoor.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='garage_Assigned'
                id='garage_Assigned'
                sx={{ width: '11%' }}
                value={garageDoorHouse.garage_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="garage_Notes"
                    name="garage_Notes"
                    value={garageDoorHouse.garage_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleGarbageSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Garbage removal"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='garbage_Contact_No'
                id='garbage_Contact_No'
                sx={{ width: '20%' }}
                value={garbageHouse.garbage_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {garbage.length > 0 && garbage.map(garbage => {
               return <option  key={garbage.Contacts_No} 
              value={garbage.Contacts_No}>  
              {garbage.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='garbage_Assigned'
                id='garbage_Assigned'
                sx={{ width: '11%' }}
                value={garbageHouse.garbage_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="garbage_Notes"
                    name="garbage_Notes"
                    value={garbageHouse.garbage_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleGeneralConSubmit}  > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="General Contractor"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='generalCon_Contact_No'
                id='generalCon_Contact_No'
                sx={{ width: '20%' }}
                value={generalContractorHouse.generalCon_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {generalContractor.length > 0 && generalContractor.map(generalContractor => {
               return <option  key={generalContractor.Contacts_No} 
              value={generalContractor.Contacts_No}>  
              {generalContractor.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='generalCon_Assigned'
                id='generalCon_Assigned'
                sx={{ width: '11%' }}
                value={generalContractorHouse.generalCon_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="generalCon_Notes"
                    name="generalCon_Notes"
                    value={generalContractorHouse.generalCon_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleHandrailExtSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Hand Rails - Exterior"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='handrailExt_Contact_No'
                id='handrailExt_Contact_No'
                sx={{ width: '20%' }}
                value={extHandrailsHouse.handrailExt_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {extHandrails.length > 0 && extHandrails.map(extHandrails => {
               return <option  key={extHandrails.Contacts_No} 
              value={extHandrails.Contacts_No}>  
              {extHandrails.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='handrailExt_Assigned'
                id='handrailExt_Assigned'
                sx={{ width: '11%' }}
                value={extHandrailsHouse.handrailExt_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="handrailExt_Notes"
                    name="handrailExt_Notes"
                    value={extHandrailsHouse.handrailExt_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleHandrailIntSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Hand Rails - Interior"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='handrailInt_Contact_No'
                id='handrailInt_Contact_No'
                sx={{ width: '20%' }}
                value={intHandRailsHouse.handrailInt_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {intHandRails.length > 0 && intHandRails.map(intHandRails => {
               return <option  key={intHandRails.Contacts_No} 
              value={intHandRails.Contacts_No}>  
              {intHandRails.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='handrailInt_Assigned'
                id='handrailInt_Assigned'
                sx={{ width: '11%' }}
                value={intHandRailsHouse.handrailInt_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="handrailInt_Notes"
                    name="handrailInt_Notes"
                    value={intHandRailsHouse.handrailInt_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleHvacSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="HVAC"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='hvac_Contact_No'
                id='hvac_Contact_No'
                sx={{ width: '20%' }}
                value={hvacHouse.hvac_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {hvac.length > 0 && hvac.map(hvac => {
               return <option  key={hvac.Contacts_No} 
              value={hvac.Contacts_No}>  
              {hvac.Company_Operating_Name}         
               </option>; 
            })}  
              </Select>
              <Select
                name='hvac_Assigned'
                id='hvac_Assigned'
                sx={{ width: '11%' }}
                value={hvacHouse.hvac_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="hvac_Notes"
                    name="hvac_Notes"
                    value={hvacHouse.hvac_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleJoistSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Joist"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='joist_Contact_No'
                id='joist_Contact_No'
                sx={{ width: '20%' }}
                value={joistHouse.joist_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {joist.length > 0 && joist.map(joist => {
               return <option  key={joist.Contacts_No} 
              value={joist.Contacts_No}>  
              {joist.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='joist_Assigned'
                id='joist_Assigned'
                sx={{ width: '11%' }}
                value={joistHouse.joist_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="joist_Notes"
                    name="joist_Notes"
                    value={joistHouse.joist_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleLandscappingSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Landscaping"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='landscapping_Contact_No'
                id='landscapping_Contact_No'
                sx={{ width: '20%' }}
                value={landscappingHouse.landscapping_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {landscapping.length > 0 && landscapping.map(landscapping => {
               return <option  key={landscapping.Contacts_No} 
              value={landscapping.Contacts_No}>  
              {landscapping.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='landscapping_Assigned'
                id='landscapping_Assigned'
                sx={{ width: '11%' }}
                value={landscappingHouse.landscapping_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="landscapping_Notes"
                    name="landscapping_Notes"
                    value={landscappingHouse.landscapping_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleLightingSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Lighting Supplier"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='lighting_Contact_No'
                id='lighting_Contact_No'
                sx={{ width: '20%' }}
                value={lightingHouse.lighting_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {lighting.length > 0 && lighting.map(lighting => {
               return <option  key={lighting.Contacts_No} 
              value={lighting.Contacts_No}>  
              {lighting.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='lighting_Assigned'
                id='lighting_Assigned'
                sx={{ width: '11%' }}
                value={lightingHouse.lighting_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="lighting_Notes"
                    name="lighting_Notes"
                    value={lightingHouse.lighting_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleMirrorsSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Mirrors"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='mirrors_Contact_No'
                id='mirrors_Contact_No'
                sx={{ width: '20%' }}
                value={mirrorsHouse.mirrors_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {mirrors.length > 0 && mirrors.map(mirrors => {
               return <option  key={mirrors.Contacts_No} 
              value={mirrors.Contacts_No}>  
              {mirrors.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='mirrors_Assigned'
                id='mirrors_Assigned'
                sx={{ width: '11%' }}
                value={mirrorsHouse.mirrors_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="mirrors_Notes"
                    name="mirrors_Notes"
                    value={mirrorsHouse.mirrors_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleMunicipalitySubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Municipality"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='municipality_Contact_No'
                id='municipality_Contact_No'
                sx={{ width: '20%' }}
                value={municipalityHouse.municipality_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {municipality.length > 0 && municipality.map(municipality => {
               return <option  key={municipality.Contacts_No} 
              value={municipality.Contacts_No}>  
              {municipality.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='municipality_Assigned'
                id='municipality_Assigned'
                sx={{ width: '11%' }}
                value={municipalityHouse.municipality_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="municipality_Notes"
                    name="municipality_Notes"
                    value={municipalityHouse.municipality_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handlePaintingSubmit}>  
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Painting"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='painting_Contact_No'
                id='painting_Contact_No'
                sx={{ width: '20%' }}
                value={paintingHouse.painting_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {painting.length > 0 && painting.map(painting => {
               return <option  key={painting.Contacts_No} 
              value={painting.Contacts_No}>  
              {painting.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='painting_Assigned'
                id='painting_Assigned'
                sx={{ width: '11%' }}
                value={paintingHouse.painting_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="painting_Notes"
                    name="painting_Notes"
                    value={paintingHouse.painting_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handlePargingSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Parging"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='parging_Contact_No'
                id='parging_Contact_No'
                sx={{ width: '20%' }}
                value={pargingHouse.parging_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {parging.length > 0 && parging.map(parging => {
               return <option  key={parging.Contacts_No} 
              value={parging.Contacts_No}>  
              {parging.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='parging_Assigned'
                id='parging_Assigned'
                sx={{ width: '11%' }}
                value={pargingHouse.parging_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="parging_Notes"
                    name="parging_Notes"
                    value={pargingHouse.parging_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handlePilesSubmit}>                   
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Piles"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='piles_Contact_No'
                id='piles_Contact_No'
                sx={{ width: '20%' }}
                value={pilesHouse.piles_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {piles.length > 0 && piles.map(piles => {
               return <option  key={piles.Contacts_No} 
              value={piles.Contacts_No}>  
              {piles.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='piles_Assigned'
                id='piles_Assigned'
                sx={{ width: '11%' }}
                value={pilesHouse.piles_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="piles_Notes"
                    name="piles_Notes"
                    value={pilesHouse.piles_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handlePlumbingSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Plumbing and Nat gas"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='plumbing_Contact_No'
                id='plumbing_Contact_No'
                sx={{ width: '20%' }}
                value={plumbingHouse.plumbing_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {plumbing.length > 0 && plumbing.map(plumbing => {
               return <option  key={plumbing.Contacts_No} 
              value={plumbing.Contacts_No}>  
              {plumbing.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='plumbing_Assigned'
                id='plumbing_Assigned'
                sx={{ width: '11%' }}
                value={plumbingHouse.plumbing_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="plumbing_Notes"
                    name="plumbing_Notes"
                    value={plumbingHouse.plumbing_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleRoofingSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Roofing"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='roofing_Contact_No'
                id='roofing_Contact_No'
                sx={{ width: '20%' }}
                value={roofingHouse.roofing_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {roofing.length > 0 && roofing.map(roofing => {
               return <option  key={roofing.Contacts_No} 
              value={roofing.Contacts_No}>  
              {roofing.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='roofing_Assigned'
                id='roofing_Assigned'
                sx={{ width: '11%' }}
                value={roofingHouse.roofing_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="roofing_Notes"
                    name="roofing_Notes"
                    value={roofingHouse.roofing_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleShowerGlassSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Shower Glass"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='showerGlass_Contact_No'
                id='showerGlass_Contact_No'
                sx={{ width: '20%' }}
                value={showerGlassHouse.showerGlass_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {showerGlass.length > 0 && showerGlass.map(showerGlass => {
               return <option  key={showerGlass.Contacts_No} 
              value={showerGlass.Contacts_No}>  
              {showerGlass.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='showerGlass_Assigned'
                id='showerGlass_Assigned'
                sx={{ width: '11%' }}
                value={showerGlassHouse.showerGlass_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="showerGlass_Notes"
                    name="showerGlass_Notes"
                    value={showerGlassHouse.showerGlass_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleGlassAndMirrorSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Shower Glass and Mirrors"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='showerGM_Contact_No'
                id='showerGM_Contact_No'
                sx={{ width: '20%' }}
                value={glassAndMirrorHouse.showerGM_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {glassAndMirror.length > 0 && glassAndMirror.map(glassAndMirror => {
               return <option  key={glassAndMirror.Contacts_No} 
              value={glassAndMirror.Contacts_No}>  
              {glassAndMirror.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='showerGM_Assigned'
                id='showerGM_Assigned'
                sx={{ width: '11%' }}
                value={glassAndMirrorHouse.showerGM_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="showerGM_Notes"
                    name="showerGM_Notes"
                    value={glassAndMirrorHouse.showerGM_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleSidingSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Siding"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='siding_Contact_No'
                id='siding_Contact_No'
                sx={{ width: '20%' }}
                value={sidingHouse.siding_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {siding.length > 0 && siding.map(siding => {
               return <option  key={siding.Contacts_No} 
              value={siding.Contacts_No}>  
              {siding.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='siding_Assigned'
                id='siding_Assigned'
                sx={{ width: '11%' }}
                value={sidingHouse.siding_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="siding_Notes"
                    name="siding_Notes"
                    value={sidingHouse.siding_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleStairsConcreteSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Stairs - Concrete"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='stairsC_Contact_No'
                id='stairsC_Contact_No'
                sx={{ width: '20%' }}
                value={stairsConcreteHouse.stairsC_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {stairsConcrete.length > 0 && stairsConcrete.map(stairsConcrete => {
               return <option  key={stairsConcrete.Contacts_No} 
              value={stairsConcrete.Contacts_No}>  
              {stairsConcrete.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='stairsC_Assigned'
                id='stairsC_Assigned'
                sx={{ width: '11%' }}
                value={stairsConcreteHouse.stairsC_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="stairsC_Notes"
                    name="stairsC_Notes"
                    value={stairsConcreteHouse.stairsC_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleStairsOtherSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Stairs - Other"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='stairsO_Contact_No'
                id='stairsO_Contact_No'
                sx={{ width: '20%' }}
                value={stairsOtherHouse.stairsO_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {stairsOther.length > 0 && stairsOther.map(stairsOther => {
               return <option  key={stairsOther.Contacts_No} 
              value={stairsOther.Contacts_No}>  
              {stairsOther.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='stairsO_Assigned'
                id='stairsO_Assigned'
                sx={{ width: '11%' }}
                value={stairsOtherHouse.stairsO_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="stairsO_Notes"
                    name="stairsO_Notes"
                    value={stairsOtherHouse.stairsO_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleStairsWoodSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Stairs - Wood"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='stairsW_Contact_No'
                id='stairsW_Contact_No'
                sx={{ width: '20%' }}
                value={stairsWoodHouse.stairsW_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {stairsWood.length > 0 && stairsWood.map(stairsWood => {
               return <option  key={stairsWood.Contacts_No} 
              value={stairsWood.Contacts_No}>  
              {stairsWood.Company_Operating_Name}         
               </option>; 
            })}    
              </Select>
              <Select
                name='stairsW_Assigned'
                id='stairsW_Assigned'
                sx={{ width: '11%' }}
                value={stairsWoodHouse.stairsW_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="stairsW_Notes"
                    name="stairsW_Notes"
                    value={stairsWoodHouse.stairsW_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleStakeoutSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Stakeout"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='stakeout_Contact_No'
                id='stakeout_Contact_No'
                sx={{ width: '20%' }}
                value={stakeoutHouse.stakeout_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {stakeout.length > 0 && stakeout.map(stakeout => {
               return <option  key={stakeout.Contacts_No} 
              value={stakeout.Contacts_No}>  
              {stakeout.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='stakeout_Assigned'
                id='stakeout_Assigned'
                sx={{ width: '11%' }}
                value={stakeoutHouse.stakeout_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="stakeout_Notes"
                    name="stakeout_Notes"
                    value={stakeoutHouse.stakeout_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleStoneSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Stone"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='stone_Contact_No'
                id='stone_Contact_No'
                sx={{ width: '20%' }}
                value={stoneHouse.stone_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {stone.length > 0 && stone.map(stone => {
               return <option  key={stone.Contacts_No} 
              value={stone.Contacts_No}>  
              {stone.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='stone_Assigned'
                id='stone_Assigned'
                sx={{ width: '11%' }}
                value={stoneHouse.stone_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="stone_Notes"
                    name="stone_Notes"
                    value={stoneHouse.stone_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleSurveySubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Survey"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='survey_Contact_No'
                id='survey_Contact_No'
                sx={{ width: '20%' }}
                value={surveyHouse.survey_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {survey.length > 0 && survey.map(survey => {
               return <option  key={survey.Contacts_No} 
              value={survey.Contacts_No}>  
              {survey.Company_Operating_Name}         
               </option>; 
            })}   
              </Select>
              <Select
                name='survey_Assigned'
                id='survey_Assigned'
                sx={{ width: '11%' }}
                value={surveyHouse.survey_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="survey_Notes"
                    name="survey_Notes"
                    value={surveyHouse.survey_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleTempFenceSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Temp Fencing"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='tempFence_Contact_Noo'
                id='tempFence_Contact_No'
                sx={{ width: '20%' }}
                value={tempFenceHouse.tempFence_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {tempFence.length > 0 && tempFence.map(tempFence => {
               return <option  key={tempFence.Contacts_No} 
              value={tempFence.Contacts_No}>  
              {tempFence.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='tempFence_Assigned'
                id='tempFence_Assigned'
                sx={{ width: '11%' }}
                value={tempFenceHouse.tempFence_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="tempFence_Notes"
                    name="tempFence_Notes"
                    value={tempFenceHouse.tempFence_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleTempHeatSubmit} > 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Temp Heat"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='tempHeat_Contact_No'
                id='tempHeat_Contact_No'
                sx={{ width: '20%' }}
                value={tempHeatHouse.tempHeat_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {tempHeat.length > 0 && tempHeat.map(tempHeat => {
               return <option  key={tempHeat.Contacts_No} 
              value={tempHeat.Contacts_No}>  
              {tempHeat.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='tempHeat_Assigned'
                id='tempHeat_Assigned'
                sx={{ width: '11%' }}
                value={tempHeatHouse.tempHeat_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="tempHeat_Notes"
                    name="tempHeat_Notes"
                    value={tempHeatHouse.tempHeat_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleTempSideWalkSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Temp Sidewalk or Access"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='tempSidewalk_Contact_No'
                id='tempSidewalk_Contact_No'
                sx={{ width: '20%' }}
                value={tempSideWalkHouse.tempSidewalk_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {tempSideWalk.length > 0 && tempSideWalk.map(tempSideWalk => {
               return <option  key={tempSideWalk.Contacts_No} 
              value={tempSideWalk.Contacts_No}>  
              {tempSideWalk.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='tempSidewalk_Assigned'
                id='tempSidewalk_Assigned'
                sx={{ width: '11%' }}
                value={tempSideWalkHouse.tempSidewalk_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="tempSidewalk_Notes"
                    name="tempSidewalk_Notes"
                    value={tempSideWalkHouse.tempSidewalk_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleTrussSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Truss"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='truss_Contact_No'
                id='truss_Contact_No'
                sx={{ width: '20%' }}
                value={trussHouse.truss_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {truss.length > 0 && truss.map(truss => {
               return <option  key={truss.Contacts_No} 
              value={truss.Contacts_No}>  
              {truss.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='truss_Assigned'
                id='truss_Assigned'
                sx={{ width: '11%' }}
                value={trussHouse.truss_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="truss_Notes"
                    name="truss_Notes"
                    value={trussHouse.truss_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleTrussJoistSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Truss and Joist"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='trussJoist_Contact_No'
                id='trussJoist_Contact_No'
                sx={{ width: '20%' }}
                value={trussJoistHouse.trussJoist_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {trussJoist.length > 0 && trussJoist.map(trussJoist => {
               return <option  key={trussJoist.Contacts_No} 
              value={trussJoist.Contacts_No}>  
              {trussJoist.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='trussJoist_Assigned'
                id='trussJoist_Assigned'
                sx={{ width: '11%' }}
                value={trussJoistHouse.trussJoist_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="trussJoist_Notes"
                    name="trussJoist_Notes"
                    value={trussJoistHouse.trussJoist_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form> 
                    <form onSubmit={handleTubRepairSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Tub Repair"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='tub_Contact_No'
                id='tub_Contact_No'
                sx={{ width: '20%' }}
                value={tubRepairHouse.tub_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {tubRepair.length > 0 && tubRepair.map(tubRepair => {
               return <option  key={tubRepair.Contacts_No} 
              value={tubRepair.Contacts_No}>  
              {tubRepair.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='tub_Assigned'
                id='tub_Assigned'
                sx={{ width: '11%' }}
                value={tubRepairHouse.tub_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="tub_Notes"
                    name="tub_Notes"
                    value={tubRepairHouse.tub_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleUtilitySubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Utility"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='utility_Contact_No'
                id='utility_Contact_No'
                sx={{ width: '20%' }}
                value={utilityHouse.utility_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {utility.length > 0 && utility.map(utility => {
               return <option  key={utility.Contacts_No} 
              value={utility.Contacts_No}>  
              {utility.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='utility_Assigned'
                id='utility_Assigned'
                sx={{ width: '11%' }}
                value={utilityHouse.utility_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="utility_Notes"
                    name="utility_Notes"
                    value={utilityHouse.utility_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleWeepingTileSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Weeping Tile"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='weepingTile_Contact_No'
                id='weepingTile_Contact_No'
                sx={{ width: '20%' }}
                value={weepingTileHouse.weepingTile_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {weepingTile.length > 0 && weepingTile.map(weepingTile => {
               return <option  key={weepingTile.Contacts_No} 
              value={weepingTile.Contacts_No}>  
              {weepingTile.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='weepingTile_Assigned'
                id='weepingTile_Assigned'
                sx={{ width: '11%' }}
                value={weepingTileHouse.weepingTile_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="weepingTile_Notes"
                    name="weepingTile_Notes"
                    value={weepingTileHouse.weepingTile_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleWindowWellsSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Window Wells"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='windowWell_Contact_No'
                id='windowWell_Contact_No'
                sx={{ width: '20%' }}
                value={windowWellsHouse.windowWell_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {windowWells.length > 0 && windowWells.map(windowWells => {
               return <option  key={windowWells.Contacts_No} 
              value={windowWells.Contacts_No}>  
              {windowWells.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='windowWell_Assigned'
                id='windowWell_Assigned'
                sx={{ width: '11%' }}
                value={windowWellsHouse.windowWell_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="windowWell_Notes"
                    name="windowWell_Notes"
                    value={windowWellsHouse.windowWell_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleWindowSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Windows"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='window_Contact_No'
                id='window_Contact_No'
                sx={{ width: '20%' }}
                value={windowHouse.window_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {window.length > 0 && window.map(window => {
               return <option  key={window.Contacts_No} 
              value={window.Contacts_No}>  
              {window.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='window_Assigned'
                id='window_Assigned'
                sx={{ width: '11%' }}
                value={windowHouse.window_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="window_Notes"
                    name="window_Notes"
                    value={windowHouse.window_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleWireShelvesSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Wire Shelves"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='wireShelves_Contact_No'
                id='wireShelves_Contact_No'
                sx={{ width: '20%' }}
                value={wireShelvesHouse.wireShelves_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option> 
              {wireShelves.length > 0 && wireShelves.map(wireShelves => {
               return <option  key={wireShelves.Contacts_No} 
              value={wireShelves.Contacts_No}>  
              {wireShelves.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='wireShelves_Assigned'
                id='wireShelves_Assigned'
                sx={{ width: '11%' }}
                value={wireShelvesHouse.wireShelves_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="wireShelves_Notes"
                    name="wireShelves_Notes"
                    value={wireShelvesHouse.wireShelves_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    <form onSubmit={handleOtherSubmit}> 
                    <Stack direction='row'>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Other (See Notes)"
                    sx={{ width: '20%' }}
                    InputProps={{
                    readOnly: true,
                     }}
        /> 
                        <Select
                name='other_Contact_No'
                id='other_Contact_No'
                sx={{ width: '20%' }}
                value={otherHouse.other_Contact_No || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>Select a company</option>tempSideWalktempHeat
              {other.length > 0 && other.map(other => {
               return <option  key={other.Contacts_No} 
              value={other.Contacts_No}>  
              {other.Company_Operating_Name}         
               </option>; 
            })}     
              </Select>
              <Select
                name='other_Assigned'
                id='other_Assigned'
                sx={{ width: '11%' }}
                value={otherHouse.other_Assigned || ''}
                onChange={(e) => handleChange(e) }
                size="small"
                native
              ><option>N/A</option> 
              <option>Yes</option>
              <option>No</option>    
              </Select>
              <TextField
                    id="other_Notes"
                    name="other_Notes"
                    value={otherHouse.other_Notes || ''}
                    sx={{ width: '34%' }}
                    onChange={(e) => handleChange(e) }
        /> 
                <Button 
                sx={{ width: '15%' }}
                type="submit"
                variant="outlined">Update</Button>
                    </Stack>
                    </form>
                    {!!snackbar && (       
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
            </Box>
    )
}

export default HouseServices;