// Number Select
function nS(name, target) {
    let Target = document.getElementById(target).value * 1;
    if (isNaN(Target) == false) {return "," + name + ":" + Target;}
    else {return "";};
};
// Number Select 2
function nSS(name, target, result) {
    let Target = document.getElementById(target).value * 1;
    let Result = document.getElementById(result).value * 1;
    
    if (isNaN(Target) == false) {return "," + name + ":[" + Target + "," + Result +"]";}
    else {return "";};
};
// Text Select n Text Input
function tST(name, target, result) {
    let Target = document.getElementById(target).value;
    let Result = document.getElementById(result).value;
    if (Target != "unset") {return Target}
    else if (Result != "") {return Result}
    else {return name;};
};
// Range
function R(name, range) {
    let Range = document.getElementById(range).value;
    if (Range != 0) {return "," + name + ":" + Range;}
    else {return "";};
};
// Check Box Byte
function Cb(name, checkbox) {
    let Check = document.getElementById(checkbox).checked;
    if (Check == true) {return "," + name + ":1b";}
    else {return "";};
};
// Check Box Short
function Cs(name, checkbox) {
    let Check = document.getElementById(checkbox).checked;
    if (Check == true) {return "," + name + ":1s";}
    else {return "";};
};
function Output() {
    let Durability = () => {
        let DurabilityP = document.getElementById("Durability").value * 1;
        if (isNaN(DurabilityP) == false && DurabilityP != 0) {
            let Content =
                ",Durability:" + DurabilityP +
                Cb("Kit", "KitSwitch");
            return Content;
        }
        else {return "";};
    };
    let Functions = () => {
        let Effects = () => {
            let Content =
                nSS("Absorption", "AbsorptionLevel", "AbsorptionDuration") +
                nS("Glowing", "GlowingDuration") +
                nSS("Regeneration", "RegenerationLevel", "RegenerationDuration") +
                R("Saturation", "SaturationLevel");
            if (Content != "") {return ",Effects:{" + Content.slice(1) + "}";}
            else {return "";};
        };
        let Enchantments = () => {
            let Content =
                Cs("LongFall", "LongFallSwitch") +
                Cs("Resistance", "ResistanceSwitch") +
                Cs("Tasty", "TastySwitch");
            if (Content != "") {return ",Enchantments:{" + Content.slice(1) + "}";}
            else {return "";};
        };
        let Content = Effects() + Enchantments();
        
        if (Content != "") {return ",Functions:{" + Content.slice(1) + "}";}
        else {return "";};
    };
    let Content = Durability() + Functions();

    if (Content != "") {
        document.getElementById("GiveOutput").innerHTML =
         "/give " + tST("PlayerName", "PlayerSelected", "PlayerName") + " " + tST("ItemId", "ItemSelected", "ItemId") + "{" + Content.slice(1) + "}";
    }
    else {
        document.getElementById("GiveOutput").innerHTML = "Nothing Here ~~";
    };
};
function Hidden(resource, target) {
    let Resource = document.getElementById(resource).value;
    if (Resource == "unset") {
        document.getElementById(target).setAttribute("hidden", true);
    }
    else {
        document.getElementById(target).removeAttribute("hidden");
    };
};
function Shown(resource, target) {
    let Resource = document.getElementById(resource).value;
    
    if (Resource == "unset") {
        document.getElementById(target).removeAttribute("hidden");
    }
    else {
        document.getElementById(target).setAttribute("hidden", true);
    };
};
function RView(range, target) {
    let Range = document.getElementById(range).value;
    
    if (Range < 10) {
        document.getElementById(target).innerHTML = "0" + Range;
    }
    else {
        document.getElementById(target).innerHTML = Range;
    };
};