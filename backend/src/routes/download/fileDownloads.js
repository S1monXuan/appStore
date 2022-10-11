import readdir from 'fs/promises';
export const fileByName = async (fileURL, filename) => {
    const matchedFiles = [];
    
    const files = await readdir(fileURL);
    for( const file of files) {
        if(file.includes(filename)){
            matchedFiles.push(file);
        }
    }
    return matchedFiles
}