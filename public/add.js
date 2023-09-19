const uploadButton = document.querySelector("input[type=file]");

uploadButton.addEventListener("change", async (event) => {
    try {

    let fileImage =  event.target.files[0];
    if(!fileImage){
        return alert("no file selected")
    }

    const formData = new FormData();
    formData.append("image", fileImage);
   
 let server =  await fetch('http://localhost:9222/api/store-image', {
        method : 'POST',
        headers: {
           Accept: "application/octet-stream"
        },
        body: formData,
    })

        if(server.status == 200){
        const response = await server.json()
            console.log(response.fileName)
            
            alert("success") 


        }
    } catch(err) {
        console.log(err)
     } 
});