function openPopup() {
    var _width = '630';
    var _height = '630';
    var _left = Math.ceil((window.screen.width - _width)/2);
    var _top = Math.ceil((window.screen.height - _height)/2);
    window.open('notice.html', 'popup-test', 'width='+ _width+', height='+ _height+',left='+ _left+', top='+_top);
}
function openOrder_check(){
    if(localStorage.getItem('pon')==null){
        alert("주문하신 정보가 없습니다.");
    }
    if(localStorage.getItem('pon').length==11){
        window.open("order.html", 'popup-test', 'width=650, height=650')
    }
}
function gomove(target){
    var result = confirm("이동하면 주문이 최소됩니다 이동하시겠습니까?");
    if(result == true){
        window.localStorage.clear();
        location.href = "index.html"+target;
    }
}
function goHome(){
    location.href = "/index.html";
}
function goOder(){
    location.href = "project_f(last).html";
}