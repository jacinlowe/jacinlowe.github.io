
function updateHours(){
    let numlist = ['camophours', 'gafferhours', 'dophours', 'vfxhours', 'proghours']
    let timeSince = Date.parse('13 mar 2021 00:00:00 GMT')
    let timeNow = Date.now()
    let update_amount = timeSince - timeNow
    update_amount = Math.floor((update_amount/1000/60/60/60)/10)

    numlist.forEach(myfunction);
    
    function myfunction(value){

        // console.log(value)
        let new_num = parseInt(document.getElementById(value).innerHTML.replace(/,/g,''));
        
        new_num += update_amount;
        new_num = new_num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById(value).innerHTML = new_num;
        

    }
}

updateHours();

//run every 10 hours

