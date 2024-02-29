Vi_input = document.getElementById("Vi");
angle_input = document.getElementById("angle");
Vix_input = document.getElementById("Vix");

dome = document.getElementById("dome")

function CIHV(){
    if(Vi_input.value != "" & angle_input.value != ""){
        Vi = Vi_input.value;
        θ = angle_input.value;

        Vix = (Vi * Math.cos(θ * Math.PI / 180)).toFixed(2)

        dome.innerHTML = ` ${Vix} m/s `;
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function CVi(){
    if(Vix_input.value != "" & angle_input.value != ""){
        Vix = Vix_input.value;
        θ = angle_input.value;

        Vi = (Vix / Math.cos(θ * Math.PI / 180)).toFixed(2)

        dome.innerHTML = ` ${Vi} m/s `;
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}

function CAngle(){
    if(Vix_input.value != "" & Vi_input.value != ""){
        Vix = Vix_input.value;
        Vi = Vi_input.value;

        θ = (Math.acos(Vix / Vi)*57.3).toFixed(2);

        dome.innerHTML = ` ${θ}° `;
    }else{
        dome.innerHTML = 'ERROR..'
        console.log("Error")
    }
}