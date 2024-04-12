(function flexible(window, document) {
  function resetFontSize() {
    const size = (document.documentElement.clientWidth / 1920) * 37.5;
    document.documentElement.style.fontSize = size + 'px';
  }

  // reset root font size on page show or resize
  window.addEventListener('pageshow', resetFontSize);
  window.addEventListener('resize', resetFontSize);
})(window, document);
function redirectToHome() {
  // 检查浏览器历史记录中是否有上一页
  if (history.length > 1) {
    // 如果有上一页，则直接跳转到上一页
    history.back();
  } else {
    // 如果没有上一页，则跳转到首页
    window.location.href = "../index.html";
  }
}
function hrefToTermsOfUse(){
  window.location.href="../Terms_of_service.html"
}
function hrefToPrivacyPolicy(){
  window.location.href="../Privacy_Policy.html"
}
function hrefToRoku() {
  window.location.href = "../index.html?sccrollToRoku=true"
}

function changeOfIssueDivStatus(document, documentImg, documentSolution) {
  // 获取元素的计算后样式
  var computedStyle = window.getComputedStyle(documentSolution);

  // 检查元素的display属性
  var displayValue = computedStyle.getPropertyValue('display');
  if (displayValue === 'none') {
    document.style.color = 'rgba(33, 112, 253, 1)'
    documentSolution.style.display = "block"
    documentImg.src = "./img/Frame2.png"
  } else {
    document.style.color = 'rgba(51, 51, 51, 1)'
    documentSolution.style.display = "none"
    documentImg.src = "./img/Frame.png"
  }
}

function question1() {
  var text = document.getElementById('questionText1');
  var img = document.getElementById('questionImg1')
  var solution=document.getElementById('questionSolution1')
  changeOfIssueDivStatus(text, img,solution)
}

function question2(){
  var text = document.getElementById('questionText2');
  var img = document.getElementById('questionImg2')
  var solution=document.getElementById('questionSolution2')
  changeOfIssueDivStatus(text, img,solution)
}
function question3(){
  var text = document.getElementById('questionText3');
  var img = document.getElementById('questionImg3')
  var solution=document.getElementById('questionSolution3')
  changeOfIssueDivStatus(text, img,solution)
}
function question4(){
  var text = document.getElementById('questionText4');
  var img = document.getElementById('questionImg4')
  var solution=document.getElementById('questionSolution4')
  changeOfIssueDivStatus(text, img,solution)
}
function question5(){
  var text = document.getElementById('questionText5');
  var img = document.getElementById('questionImg5')
  var solution=document.getElementById('questionSolution5')
  changeOfIssueDivStatus(text, img,solution)
}