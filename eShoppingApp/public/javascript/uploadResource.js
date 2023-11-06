var uploadDetails = () => {

    let uploadfile = $("input[name=prodImage]")[0].files[0] // file from input

    let formData = new FormData();
    formData.append("prodImage", uploadfile);

    axios.post('/upload/resource', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        } 
    }).then((response) => {
        console.log("Response");
        console.log(response);
    })
}

/*
{
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false
*/