try {
    calloutimages = document.querySelectorAll(".calloutimage");
        for (var i = 0; i < calloutimages.length; i++) {
            callouttype = calloutimages[i].id;
            try {
                calloutimg = document.createElement("img");
                calloutimg.src = "./callouts/"+callouttype+".svg";
                calloutimg.style.width = '30px';
                calloutimg.style.height = '30px';
                calloutimages[i].appendChild(calloutimg);

            }
            catch(err) {
                console.log("ERROR: Callout image not found.")
            }
        }
}

catch(err) {
    console.log("No callouts found.")
}


