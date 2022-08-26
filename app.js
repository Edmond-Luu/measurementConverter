const titleText = document.querySelector("#titleText");
const numInput = document.querySelector("#numInput");
const convertButton = document.querySelector("#convertButton");
const switchButton = document.querySelector("#switchButton");
const selectorBox = document.querySelector("#selector");
const results = document.querySelector("#results");
const selectTopic = document.querySelector("#selectTopic");
const selectFrom = document.querySelector("#selectFrom");
const selectTo = document.querySelector("#selectTo");
const h2Mode = document.querySelector('#h2Mode');
const fromUnit = document.querySelector('#fromUnit');

const leftUnit = document.createElement("h3");
const data = document.createElement("h3");

//Creating length unit options
const inches = document.createElement("option");
inches.value = "inches";
inches.text = "Inches";
const feet = document.createElement("option");
feet.value = "feet";
feet.text = "Feet";
const yards = document.createElement("option");
yards.value = "yards";
yards.text = "Yards";
const miles = document.createElement("option");
miles.value = "miles";
miles.text = "Miles";
const millimeters = document.createElement("option");
millimeters.value = "millimeters";
millimeters.text = "Millimeters";
const centimeters = document.createElement("option");
centimeters.value = "centimeters";
centimeters.text = "Centimeters";
const meters = document.createElement("option");
meters.value = "meters";
meters.text = "Meters";
const kilometers = document.createElement("option");
kilometers.value = "kilometers";
kilometers.text = "Kilometers";

//Creating volume unit options
const fOunces = document.createElement("option");
fOunces.value = "fOunces";
fOunces.text = "Fl. Ounces";
const cups = document.createElement("option");
cups.value = "cups";
cups.text = "Cups";
const pints = document.createElement("option");
pints.value = "pints";
pints.text = "Pints";
const quarts = document.createElement("option");
quarts.value = "quarts";
quarts.text = "Quarts"
const gallons = document.createElement("option");
gallons.value = "gallons";
gallons.text = "Gallons";
const milliliters = document.createElement("option");
milliliters.value = "milliliters";
milliliters.text = "Milliliters"
const liters = document.createElement("option");
liters.value = "liters";
liters.text = "Liters";

//Creating mass unit options
const ounces = document.createElement("option");
ounces.value = "ounces";
ounces.text = "Ounces";
const pounds = document.createElement("option");
pounds.value = "pounds";
pounds.text = "Pounds";
const grams = document.createElement("option");
grams.value = "grams";
grams.text = "Grams";
const kilograms = document.createElement("option");
kilograms.value = "kilograms";
kilograms.text = "Kilograms"
const tons = document.createElement("option");
tons.value = "tons";
tons.text = "Tons";


//Creating area unit options
const sqInches = document.createElement("option");
sqInches.value = "sqInches";
sqInches.text = "Square Inches";
const sqFeet = document.createElement("option");
sqFeet.value = "sqFeet";
sqFeet.text = "Square Feet";
const acres = document.createElement("option");
acres.value = "acres";
acres.text = "Acres"
const sqMiles = document.createElement("option");
sqMiles.value = "sqMiles";
sqMiles.text = "Square Miles";
const sqCentimeters = document.createElement("option");
sqCentimeters.value = "sqCentimeters";
sqCentimeters.text = "Square Centimeters";
const sqMeters = document.createElement("option");
sqMeters.value = "sqMeters";
sqMeters.text = "Square Meters";
const hectares = document.createElement("option");
hectares.value = "hectares";
hectares.text = "Hectares";
const sqKilometers = document.createElement("option");
sqKilometers.value = "sqKilometers";
sqKilometers.text = "Square Kilometers";

//Creating pressure unit options
const poundsPerSqInch = document.createElement("option");
poundsPerSqInch.value = "poundsPerSqInch";
poundsPerSqInch.text = "Pounds per Square Inch";
const millibars = document.createElement("option");
millibars.value = "millibars";
millibars.text = "Millibars";
const bars = document.createElement("option");
bars.value = "bars";
bars.text = "Bars"

//Creating temperature unit options
const fahrenheit = document.createElement("option");
fahrenheit.value = "fahrenheit";
fahrenheit.text = "Fahrenheit";
const celsius = document.createElement("option");
celsius.value = "celsius";
celsius.text = "Celsius";
const kelvin = document.createElement("option");
kelvin.value = "kelvin";
kelvin.text = "Kelvin"


selectTopic.addEventListener('change', () => {
    selectFrom.innerText = "";
    selectTo.innerText = "";
    results.innerText = "";
    const topic = selectTopic.value;

    switch (topic) {
        case 'leng':
            selectFrom.append(inches, feet, yards, miles);
            selectTo.append(millimeters, centimeters, meters, kilometers);
            fromUnitText.innerText = "in.";
            break;
        case 'vol':
            selectFrom.append(fOunces, cups, pints, quarts, gallons);
            selectTo.append(milliliters, liters);
            fromUnitText.innerText = "fl oz.";
            break;
        case 'mass':
            selectFrom.append(ounces, pounds);
            selectTo.append(grams, kilograms, tons);
            fromUnitText.innerText = "oz.";
            break;
        case 'area':
            selectFrom.append(sqInches, sqFeet, acres, sqMiles);
            selectTo.append(sqCentimeters, sqMeters, hectares, sqKilometers);
            fromUnitText.innerText = "sq in.";
            break;
        case 'pres':
            selectFrom.append(poundsPerSqInch);
            selectTo.append(millibars, bars);
            fromUnitText.innerText = "psi.";
            break;
        case 'temp':
            selectFrom.append(fahrenheit);
            selectTo.append(celsius, kelvin);
            fromUnitText.innerText = "°F";
            break;
    }
})


selectFrom.addEventListener('change', () => {
    selectTo.innerText = "";
    fromUnit.innerText = "";
    results.innerText = "";
    const fromValue = selectFrom.value;
    leftUnit.setAttribute("id", "fromUnitText");
    switch (fromValue) {
        case 'inches':
        case 'feet':
        case 'yards':
        case 'miles':
            selectTo.append(millimeters, centimeters, meters, kilometers);
            break;

        case 'millimeters':
        case 'centimeters':
        case 'meters':
        case 'kilometers':
            selectTo.append(inches, feet, yards, miles);
            break;

        case 'fOunces':
        case 'cups':
        case 'pints':
        case 'quarts':
        case 'gallons':
            selectTo.append(milliliters, liters);
            break;

        case 'milliliters':
        case 'liters':
            selectTo.append(fOunces, cups, pints, quarts, gallons);
            break;

        case 'ounces':
        case 'pounds':
            selectTo.append(grams, kilograms, tons);
            break;

        case 'grams':
        case 'kilograms':
        case 'tons':
            selectTo.append(ounces, pounds);
            break;

        case 'sqInches':
        case 'sqFeet':
        case 'acres':
        case 'sqMiles':
            selectTo.append(sqCentimeters, sqMeters, hectares, sqKilometers);
            break;

        case 'sqCentimeters':
        case 'sqMeters':
        case 'hectares':
        case 'sqKilometers':
            selectTo.append(sqInches, sqFeet, acres, sqMiles);
            break;

        case 'poundsPerSqInch':
            selectTo.append(millibars, bars);
            break;

        case 'millibars':
        case 'bars':
            selectTo.append(poundsPerSqInch);
            break;

        case 'fahrenheit':
            selectTo.append(celsius, kelvin);
            break;

        case 'celsius':
        case 'kelvin':
            selectTo.append(fahrenheit);
            break;
    }
    switch (fromValue) {
        case 'inches':
            leftUnit.innerText = "in.";
            break;
        case 'feet':
            leftUnit.innerText = "ft.";
            break;
        case 'yards':
            leftUnit.innerText = "yd.";
            break;
        case 'miles':
            leftUnit.innerText = "mi.";
            break;
        case 'millimeters':
            leftUnit.innerText = "mm";
            break;
        case 'centimeters':
            leftUnit.innerText = "cm";
            break;
        case 'meters':
            leftUnit.innerText = "m";
            break;
        case 'kilometers':
            leftUnit.innerText = "km";
            break;
        case 'fOunces':
            leftUnit.innerText = "fl oz.";
            break;
        case 'cups':
            leftUnit.innerText = "c.";
            break;
        case 'pints':
            leftUnit.innerText = "pt.";
            break;
        case 'quarts':
            leftUnit.innerText = "qt.";
            break;
        case 'gallons':
            leftUnit.innerText = "gal.";
            break;
        case 'milliliters':
            leftUnit.innerText = "mL";
            break;
        case 'liters':
            leftUnit.innerText = "L";
            break;
        case 'ounces':
            leftUnit.innerText = "oz.";
            break;
        case 'pounds':
            leftUnit.innerText = "lb.";
            break;
        case 'grams':
            leftUnit.innerText = "g";
            break;
        case 'kilograms':
            leftUnit.innerText = "kg";
            break;
        case 'tons':
            leftUnit.innerText = "mt";
            break;
        case 'sqInches':
            leftUnit.innerText = "sq in.";
            break;
        case 'sqFeet':
            leftUnit.innerText = "sq ft.";
            break;
        case 'acres':
            leftUnit.innerText = "ac.";
            break;
        case 'sqMiles':
            leftUnit.innerText = "sq mi.";
            break;
        case 'sqCentimeters':
            leftUnit.innerText = "sq cm";
            break;
        case 'sqMeters':
            leftUnit.innerText = "sq m";
            break;
        case 'Hectares':
            leftUnit.innerText = "ha";
            break;
        case 'sqKilometers':
            leftUnit.innerText = "sq km";
            break;
        case 'poundsPerSqInch':
            leftUnit.innerText = "psi.";
            break;
        case 'millibars':
            leftUnit.innerText = "mbar";
            break;
        case 'bars':
            leftUnit.innerText = "bar";
            break;
        case 'fahrenheit':
            leftUnit.innerText = "°F";
            break;
        case 'celsius':
            leftUnit.innerText = "°C";
            break;
        case 'kelvin':
            leftUnit.innerText = "K";
            break;
    }
    fromUnit.append(leftUnit);
})

selectTo.addEventListener('change', () => {
    results.innerText = "";
});


switchButton.addEventListener('click', () => {
    const fromUnitText = document.querySelector('#fromUnitText');
    results.innerText = "";
    switch (h2Mode.innerText) {
        case "Imperial 🇺🇸 → Metric 🌏":
            h2Mode.innerText = "Metric 🌏 → Imperial 🇺🇸"
            break;
        case "Metric 🌏 → Imperial 🇺🇸":
            h2Mode.innerText = "Imperial 🇺🇸 → Metric 🌏"
            break;
    }

    const placeholderFromOpt = selectFrom.innerHTML;
    const placeholderToOpt = selectTo.innerHTML;
    const placeholderFromSel = selectFrom.value;
    const placeholderToSel = selectTo.value;
    selectFrom.innerHTML = placeholderToOpt;
    selectTo.innerHTML = placeholderFromOpt;
    selectFrom.value = placeholderToSel;
    selectTo.value = placeholderFromSel;

    switch (selectFrom.value) {
        case 'millimeters':
            fromUnitText.innerText = 'mm';
            break;
        case 'centimeters':
            fromUnitText.innerText = 'cm';
            break;
        case 'meters':
            fromUnitText.innerText = 'm';
            break;
        case 'kilometers':
            fromUnitText.innerText = 'km';
            break;
        case 'inches':
            fromUnitText.innerText = 'in.';
            break;
        case 'feet':
            fromUnitText.innerText = 'ft.';
            break;
        case 'yards':
            fromUnitText.innerText = 'yd.';
            break;
        case 'miles':
            fromUnitText.innerText = 'mi.';
            break;
        case 'milliliters':
            fromUnitText.innerText = 'mL';
            break;
        case 'liters':
            fromUnitText.innerText = 'mL';
            break;
        case 'fOunces':
            fromUnitText.innerText = 'fl oz.';
            break;
        case 'cups':
            fromUnitText.innerText = 'c.';
            break;
        case 'pints':
            fromUnitText.innerText = 'pt.';
            break;
        case 'quarts':
            fromUnitText.innerText = 'qt.';
            break;
        case 'gallons':
            fromUnitText.innerText = 'gal.';
            break;
        case 'grams':
            fromUnitText.innerText = 'g';
            break;
        case 'kilograms':
            fromUnitText.innerText = 'kg';
            break;
        case 'tons':
            fromUnitText.innerText = 'mt';
            break;
        case 'ounces':
            fromUnitText.innerText = 'oz.';
            break;
        case 'pounds':
            fromUnitText.innerText = 'lb.';
            break;
        case 'sqCentimeters':
            fromUnitText.innerText = 'sq cm';
            break;
        case 'sqMeters':
            fromUnitText.innerText = 'sq m';
            break;
        case 'hectares':
            fromUnitText.innerText = 'ha';
            break;
        case 'sqKilometers':
            fromUnitText.innerText = 'sq km';
            break;
        case 'sqInches':
            fromUnitText.innerText = 'sq in.';
            break;
        case 'sqFeet':
            fromUnitText.innerText = 'sq ft.';
            break;
        case 'acres':
            fromUnitText.innerText = 'ac.';
            break;
        case 'sqMiles':
            fromUnitText.innerText = 'sq mi.';
            break;
        case 'poundsPerSqInch':
            fromUnitText.innerText = 'psi.';
            break;
        case 'millibars':
            fromUnitText.innerText = 'mbar';
            break;
        case 'bars':
            fromUnitText.innerText = 'bar';
            break;
        case 'fahrenheit':
            fromUnitText.innerText = '°F';
            break;
        case 'celsius':
            fromUnitText.innerText = '°C';
            break;
        case 'kelvin':
            fromUnitText.innerText = 'K';
            break;
    }

})


convertButton.addEventListener('click', () => {
    results.innerText = "";
    const fromValue = selectFrom.value;
    const toValue = selectTo.value;

    let userInput = numInput.value;
    let mmet = 1;
    let inc = 1;
    let mLit = 1;
    let fOu = 1;
    let gram = 1;
    let oun = 1;
    let sqC = 1;
    let sqIn = 1;
    let ppsi = 1;
    let mba = 1;
    let fahr = 1;
    let cel = 1;

    switch (fromValue) {
        case "inches":
        case "feet":
        case "yards":
        case "miles":
            switch (fromValue) {
                case "inches":
                    mmet = userInput * 25.4;
                    break;
                case "feet":
                    mmet = userInput * 304.8;
                    break;
                case "yards":
                    mmet = userInput * 914.4;
                    break;
                case "miles":
                    mmet = userInput * 1609000;
                    break;
            }

        case "millimeters":
        case "centimeters":
        case "meters":
        case "kilometers":
            switch (fromValue) {
                case "millimeters":
                    inc = userInput / 25.4;
                    fromUnit.append(leftUnit);
                    break;
                case "centimeters":
                    inc = userInput / 2.54;
                    fromUnit.append(leftUnit);
                    break;
                case "meters":
                    inc = userInput * 39.37;
                    fromUnit.append(leftUnit);
                    break;
                case "kilometers":
                    inc = userInput * 39370;
                    fromUnit.append(leftUnit);
                    break;
            }
        case "fOunces":
        case "cups":
        case "pints":
        case "quarts":
        case "gallons":
            switch (fromValue) {
                case "fOunces":
                    mLit = userInput * 29.5735;
                    fromUnit.append(leftUnit);
                    break;
                case "cups":
                    mLit = userInput * 236.588;
                    fromUnit.append(leftUnit);
                    break;
                case "pints":
                    mLit = userInput * 473.176;
                    fromUnit.append(leftUnit);
                    break;
                case "quarts":
                    mLit = userInput * 946.353;
                    fromUnit.append(leftUnit);
                    break;
                case "gallons":
                    mLit = userInput * 3785.41;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "grams":
        case "kilograms":
        case "tons":
            switch (fromValue) {
                case "grams":
                    oun = userInput / 28.35;;
                    fromUnit.append(leftUnit);
                    break;
                case "kilograms":
                    oun = userInput * 35.274;;
                    fromUnit.append(leftUnit);
                    break;
                case "tons":
                    oun = userInput * 35274;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "ounces":
        case "pounds":
            switch (fromValue) {
                case "ounces":
                    gram = userInput * 28.35;
                    fromUnit.append(leftUnit);
                    break;
                case "pounds":
                    gram = userInput * 453.592;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "sqCentimeters":
        case "sqMeters":
        case "hectares":
        case "sqKilometers":
            switch (fromValue) {
                case "sqCentimeters":
                    sqIn = userInput / 6.452;
                    fromUnit.append(leftUnit);
                    break;
                case "sqMeters":
                    sqIn = userInput * 1550;
                    fromUnit.append(leftUnit);
                    break;
                case "hectares":
                    sqIn = userInput * 15500031;
                    fromUnit.append(leftUnit);
                    break;
                case "sqKilometers":
                    sqIn = userInput * 1550003100.0062;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "sqInches":
        case "sqFeet":
        case "acres":
        case "sqMiles":
            switch (fromValue) {
                case "sqInches":
                    sqC = userInput * 6.4516;
                    fromUnit.append(leftUnit);
                    break;
                case "sqFeet":
                    sqC = userInput * 929.03;
                    fromUnit.append(leftUnit);
                    break;
                case "acres":
                    sqC = userInput * 40468564.224;
                    fromUnit.append(leftUnit);
                    break;
                case "sqMiles":
                    sqC = userInput * 25899881100;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "millibars":
        case "bars":
            switch (fromValue) {
                case "millibars":
                    ppsi = userInput / 68.9476;
                    fromUnit.append(leftUnit);
                    break;
                case "bars":
                    ppsi = userInput * 14.5038;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "poundsPerSqInch":
            mba = userInput * 68.9476;
            break;

        case "celsius":
        case "kelvin":
            switch (fromValue) {
                case "celsius":
                    fahr = ((userInput * 9) / 5) + 32;
                    fromUnit.append(leftUnit);
                    break;
                case "kelvin":
                    fahr = (((userInput - 273.15) * 9) / 5) + 32;
                    fromUnit.append(leftUnit);
                    break;
            }

        case "fahrenheit":
            cel = ((userInput - 32) * 5) / 9;
            break;
    }

    const fet = inc / 12;
    const yar = fet / 3;
    const mil = fet / 5280;
    const cmet = mmet / 10;
    const mete = cmet / 100;
    const kmet = mete / 1000;
    const lite = mLit / 1000;
    const cup = fOu / 8;
    const pin = fOu / 16;
    const qua = fOu / 32;
    const gal = fOu / 128;
    const pou = oun / 16;
    const kilG = gram / 1000;
    const mTon = kilG / 1000;
    const sqFe = sqIn / 144;
    const acre = sqIn / 6272640;
    const sqMi = sqIn / 4014489599.4792;
    const sqM = sqC / 10000;
    const hec = sqC / 100000000;
    const sqK = hec / 100;
    const bar = mba / 1000;
    const kel = cel + 273.15;

    switch (toValue) {
        case 'millimeters':
            data.innerText = `${mmet} mm`;
            break;
        case 'centimeters':
            data.innerText = `${cmet} cm`;
            break;
        case 'meters':
            data.innerText = `${mete} m`;
            break;
        case 'kilometers':
            data.innerText = `${kmet} km`;
            break;
        case 'inches':
            data.innerText = `${inc} in.`;
            break;
        case 'feet':
            data.innerText = `${fet} ft.`;
            break;
        case 'yards':
            data.innerText = `${yar} yd.`;
            break;
        case 'miles':
            data.innerText = `${mil} mi.`;
            break;
        case 'milliliters':
            data.innerText = `${mLit} mL`;
            break;
        case 'liters':
            data.innerText = `${lite} mL`;
            break;
        case 'fOunces':
            data.innerText = `${fOu} fl oz.`;
            break;
        case 'cups':
            data.innerText = `${cup} c.`;
            break;
        case 'pints':
            data.innerText = `${pin} pt.`;
            break;
        case 'quarts':
            data.innerText = `${qua} qt.`;
            break;
        case 'gallons':
            data.innerText = `${gal} gal.`;
            break;
        case 'grams':
            data.innerText = `${gram} g`;
            break;
        case 'kilograms':
            data.innerText = `${kilG} kg`;
            break;
        case 'tons':
            data.innerText = `${mTon} mt`;
            break;
        case 'ounces':
            data.innerText = `${oun} oz.`;
            break;
        case 'pounds':
            data.innerText = `${pou} lb.`;
            break;
        case 'sqCentimeters':
            data.innerText = `${sqC} sq cm`;
            break;
        case 'sqMeters':
            data.innerText = `${sqM} sq m`;
            break;
        case 'hectares':
            data.innerText = `${hec} ha`;
            break;
        case 'sqKilometers':
            data.innerText = `${sqK} sq km`;
            break;
        case 'sqInches':
            data.innerText = `${sqIn} sq in.`;
            break;
        case 'sqFeet':
            data.innerText = `${sqFe} sq ft.`;
            break;
        case 'acres':
            data.innerText = `${acre} ac.`;
            break;
        case 'sqMiles':
            data.innerText = `${sqMi} sq mi.`;
            break;
        case 'poundsPerSqInch':
            data.innerText = `${ppsi} psi.`;
            break;
        case 'millibars':
            data.innerText = `${mba} mbar`;
            break;
        case 'bars':
            data.innerText = `${bar} bar`;
            break;
        case 'fahrenheit':
            data.innerText = `${fahr} °F`;
            break;
        case 'celsius':
            data.innerText = `${cel} °C`;
            break;
        case 'kelvin':
            data.innerText = `${kel} K`;
            break;
    }
    results.append(data);

    if (!numInput.value) {
        numInput.value = "0";
    }
});

