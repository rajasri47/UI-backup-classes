
var http = require("http");

var fs = require("fs");

var server = http.createServer((req, res) => {
    // fs.readFile("sample.txt", (error, data) => {
    //     if (error) {
    //         res.end("error while readign file ")
    //     } else {
    //         res.end(data);
    //     }

    fs.r
    // });    
    var userInfo = {
        name: 'TEENA',
        age: 10,
        gender: 'fEMALE',
        location: 'Hyderabad'
    }
    // fs.writeFile("abc.txt", JSON.stringify(userInfo), (error) => {
    //     if (error) {
    //         res.end("error while writting cotnent to  file ")
    //     } else {
    //         res.end("DAta been written to file");
    //     }
    // });
    fs.appendFile("abc.txt", JSON.stringify(userInfo), (error) => {
        if (error) {
            res.end("error while writting cotnent to  file ")
        } else {
            fs.writeFile("testing.txt", "hello all", (error) => {
                res.end("DAta been written to file");
            })
            
        }
    });
});


server.listen(8081, () => {
    console.log("Server is listing at 8081");
})