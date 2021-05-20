const fs = require("fs")
/*  if the folder has files then rmdir will not work */ 
/*
fs.rmdir("folder1", (err) => {
    if(err) {
        console.log("directory not remove ", err);
    }else {
        console.log("dir removed..");
    }
})
*/ 

fs.readdir('./folder', (err, files) => {
    if(err) {
        console.log(`Error ${err}`);
    }else {
        for(let file of files) {
            fs.unlink("./folder/" + file, (err) => {
                if(err) {
                    console.log("File cannot be deleted : ", err);
                }else {
                    console.log("Files deleted... ");
                }
            })
        }
    }
})