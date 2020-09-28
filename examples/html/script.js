let timeout, scrollIndex, scrollable, scrollBehavior;

scrollable = true;
scrollBehavior = false;

const fp = document.querySelector(customFullpage || 'body');
const html = document.querySelector('html');

const resetScroll = () => scrollIndex = ~~(window.scrollY/window.innerHeight);
const checkScrollBehavior = () => {
    const finalPosition = fp.offsetHeight + fp.offsetTop;
    const verticalPosition = window.scrollY;
    const initialPosition =  fp.offsetTop;
    const onElement = verticalPosition >= initialPosition && verticalPosition < finalPosition;

    if (!scrollBehavior && onElement) {
        html.style.scrollBehavior = 'smooth';
        scrollBehavior = true;
    } else if (scrollBehavior && !onElement) {
        html.style.scrollBehavior = 'inherit';
        scrollBehavior = false;
    }
}

window.onload = () => {
    resetScroll();
    checkScrollBehavior();
}

window.onwheel = async (event) => {
    checkScrollBehavior();
    if (scrollable && scrollBehavior) {
        if (event.deltaY > 0) scrollIndex++;
        else scrollIndex--;
        this.scrollTo(0, window.innerHeight * scrollIndex);
        scrollable = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        scrollable = true;
        this.scrollTo(0, window.innerHeight * scrollIndex);
    }, 50);
}

window.onscroll = () => {
    checkScrollBehavior();
}