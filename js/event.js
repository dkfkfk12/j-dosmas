function openPopup() {
    var _width = '830';
    var _height = '730';
    var _left = Math.ceil((window.screen.width - _width)/2);
    var _top = Math.ceil((window.screen.height - _height)/2);
    window.open('notice.html', 'popup-test', 'width='+ _width+', height='+ _height+',left='+ _left+', top='+_top);
}