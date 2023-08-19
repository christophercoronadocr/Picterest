export const separatorArray = async(data) => {
    let counter = 5;
    let newArray = new Array();
    let element;
    for(let i = counter; counter < 26; counter+5){
        element = new Array();
        for (let index = counter-5; index < counter; index++) {
            element.push(data[index]);
        }

        newArray.push(element);
        counter = counter + 5;

    } 
     return newArray;
}