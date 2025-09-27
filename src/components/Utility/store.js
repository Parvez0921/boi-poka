const getStoredData =()=>{
    const storedDataStrng = localStorage.getItem('readList');

    if(storedDataStrng){
        const storedData = JSON.parse(storedDataStrng);
        return storedData;
    }
    else{
        return [];
    }

}

const addToStoredData =(id)=>{
    const strData = getStoredData();

    if(strData.includes(id)){
        alert('ase to bhai');
    }
    else{
        strData.push(id);
    console.log(strData);
    const data = JSON.stringify(strData);
    localStorage.setItem('readList', data);
    }
}
export {addToStoredData};