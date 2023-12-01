function performOperations() {
  var baseyear = parseFloat(document.getElementById("baseyear").value);
  var finalyear = parseFloat(document.getElementById("finalyear").value);
  var durationofuse = parseFloat(document.getElementById("durationofuse").value);
  var avgannualmilleage = parseFloat(document.getElementById("avergaeannualmilleage").value);
  var fuelcosts = parseFloat(document.getElementById("fuelcosts").value);
  var co2costs = parseFloat(document.getElementById("co2costs").value);
  var adbluecosts = parseFloat(document.getElementById("adbluecosts").value);
  var electricitycosts = parseFloat(document.getElementById("electricitycosts").value);
  var h2costs = parseFloat(document.getElementById("h2costs").value);
  var infcostsofelestations = parseFloat(document.getElementById("infele").value);
  var infcostsofhydstations = parseFloat(document.getElementById("infhyd").value);
  var energycosts = parseFloat(document.getElementById("energycosts").value);
  var maintainancecosts = parseFloat(document.getElementById("maintainancecosts").value);
  var wheelscosts = parseFloat(document.getElementById("wheels").value);
  var taxes = parseFloat(document.getElementById("taxes").value);
  var insurance = parseFloat(document.getElementById("insurance").value);
  var great = parseFloat(document.getElementById("great").value);
  var distanceshare = parseFloat(document.getElementById("distanceshare").value);
  var co2consumption = parseFloat(document.getElementById("co2consumption").value);
  var drivepower = parseFloat(document.getElementById("drivepowerinkw").value);
  var rangeinkm = parseFloat(document.getElementById("rangeinkm").value);
  var reserveinkm = parseFloat(document.getElementById("reserveinkm").value);
  var consumption = parseFloat(document.getElementById("consumption").value);
  var costoftruck = parseFloat(document.getElementById("costoftruck").value);
  var perofdep = parseFloat(document.getElementById("perofdep").value);


  if (isNaN(baseyear) || isNaN(finalyear) || isNaN(durationofuse) || isNaN(avgannualmilleage) ||
    isNaN(fuelcosts) || isNaN(co2costs) || isNaN(adbluecosts) || isNaN(electricitycosts) ||
    isNaN(h2costs) || isNaN(infcostsofelestations) || isNaN(infcostsofhydstations) ||
    isNaN(energycosts) || isNaN(maintainancecosts) || isNaN(wheelscosts) || isNaN(taxes) ||
    isNaN(insurance) || isNaN(great) || isNaN(distanceshare) || isNaN(co2consumption) ||
    isNaN(drivepower) || isNaN(rangeinkm) || isNaN(reserveinkm) || isNaN(consumption) ||
    isNaN(costoftruck) || isNaN(perofdep)) {
  alert("Please enter valid numbers for all fields.");
  return;
    }

  var tcoDep = costoftruck*(1 -(perofdep/100));

  var tcoOper = energycosts + maintainancecosts + wheelscosts + taxes + insurance + (great*distanceshare);

  var depTerm = costoftruck - tcoDep;

  var tcoInf = infcostsofelestations + infcostsofhydstations;

  var tcoenergycostsperkm  = energycosts/(durationofuse*avgannualmilleage);

  var tcoco2costsperkm = (co2costs/100)/(durationofuse*avgannualmilleage);

  var tcomainta = maintainancecosts/(durationofuse*avgannualmilleage);

  var tcowheels = wheelscosts/(durationofuse*avgannualmilleage);

  var tcotaxes = taxes/(durationofuse*avgannualmilleage);

  var tcoinsuran = insurance /(durationofuse*avgannualmilleage);

  var tcoco2consumption = co2consumption/(durationofuse*avgannualmilleage);

  var tcototaloperperkm = tcoenergycostsperkm + tcoco2costsperkm + tcomainta + tcowheels + tcotaxes + tcoinsuran + tcoco2consumption;

  var tottco = tcoDep + tcoOper + tcoInf;

  var co2ghg = (co2consumption*avgannualmilleage)/100;

  var co2ghgOpertime = co2ghg/durationofuse;

  document.getElementById("result").innerHTML = "Total Depreciation: " + tcoDep.toFixed(2) +
  "<br>Total Operational Costs: " + tcoOper.toFixed(2) +
  "<br>Depreciation Term: " + depTerm.toFixed(2) +
  "<br>Total Infrastructure Costs: " + tcoInf.toFixed(2) +
  "<br>Energy Costs per km: " + tcoenergycostsperkm.toFixed(2) +
  "<br>CO2 Costs per km: " + tcoco2costsperkm.toFixed(2) +
  "<br>Maintenance Costs per km: " + tcomainta.toFixed(2) +
  "<br>Wheels Costs per km: " + tcowheels.toFixed(2) +
  "<br>Taxes per km: " + tcotaxes.toFixed(2) +
  "<br>Insurance per km: " + tcoinsuran.toFixed(2) +
  "<br>CO2 Consumption per km: " + tcoco2consumption.toFixed(2) +
  "<br>Total Operational Costs per km: " + tcototaloperperkm.toFixed(2) +
  "<br>Total Cost of Ownership: " + tottco.toFixed(2) +
  "<br>CO2 Emissions (g CO2/km): " + co2ghg.toFixed(2) +
  "<br>CO2 Emissions per Operational Time (g CO2/hour): " + co2ghgOpertime.toFixed(2);





    
}
