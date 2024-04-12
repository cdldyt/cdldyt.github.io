(function flexible(window, document) {
  function resetFontSize() {
    const size = (document.documentElement.clientWidth / 1920) * 37.5;
    document.documentElement.style.fontSize = size + 'px';
  }

  // reset root font size on page show or resize
  window.addEventListener('pageshow', resetFontSize);
  window.addEventListener('resize', resetFontSize);
})(window, document);
var timeoutId;
function showHiddenContent() {
  var hiddenDiv = document.getElementById("group_5");
  hiddenDiv.style.display = "block";
  cancelHidden();
}

window.onload = function () {
  // 获取 URL 中的参数
  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get('sccrollToRoku');
  if (paramValue === "true") {
    scrollToRoku()
  }
  var qrcode = new QRCode("qrcode");

  // 设置二维码内容为 URL 地址
  var url = "https://example.com";
  qrcode.makeCode(url);
  swiper = new Swiper('#swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true, // Enable loop mode
    uniqueNavElements: true,
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Enable autoplay even when user interacts with slider
    },
    centeredSlides: true,
  });
}
function hiddenContent() {
  timeoutId = setTimeout(function () {
    var hiddenDiv = document.getElementById("group_5");
    hiddenDiv.style.display = "none";
  }
    , 1000)
}

function cancelHidden() {
  clearTimeout(timeoutId);
}

function scrollToRoku() {
  var targetElement = document.getElementById('roku_group');
  var targetOffsetTop = targetElement.offsetTop;
  var head = document.getElementById('group_2')
  window.scrollTo({
    top: targetOffsetTop - head.offsetHeight,
    behavior: 'smooth'
  });
}
function hrefToRokuFaq() {
  window.location.href = "./lanhu_rokutvfaq/roku_faq.html"
}

function hrefToTermsOfUse(){
  window.location.href="./Terms_of_service.html"
}
function hrefToPrivacyPolicy(){
  window.location.href="./Privacy_Policy.html"
}
function scrollToTop() {
  var targetElement = document.getElementById('group_1');
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

function showQRCode() {
  var popup = document.getElementById('popup');
  var listener = function (event) {
    // 获取鼠标的当前位置
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // 设置弹窗的位置
    popup.style.left = mouseX + 'px';
    popup.style.top = mouseY + 'px';
    console.log(event + "---------------------" + mouseY + "-------------" + mouseX)
  };
  document.onmousemove = listener
  // 显示弹窗
  popup.style.display = 'block';
}
function dismissQRCode() {
  // 隐藏弹窗
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  document.onmousemove = null;
}