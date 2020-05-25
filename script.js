var pastScroll;
var control = true;
var fp = document.querySelector('body');


window.onload = () => {
    pastScroll = 0;
}

window.onwheel = async (event) => {
    this.scrollTo(0,pastScroll);
    if(control){
        control = false;
        console.log("Scrolling ...");
        if(event.deltaY > 0) 
            pastScroll = pastScroll + window.innerHeight ;
        else 
            pastScroll = (pastScroll - window.innerHeight) < 0 ? 0 : pastScroll - window.innerHeight;
        this.scrollTo(0,pastScroll);
    }
    else {
        await sleep(100);
        control = true;
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}