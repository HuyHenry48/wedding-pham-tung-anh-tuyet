if (window.console) {
  console.warn(
    "⚠️ CẢNH BÁO QUAN TRỌNG: \n" +
      "=========================================\n" +
      "Mọi hoạt động của bạn trên trang web này đều được ghi hình lại. \n" +
      "Chúng tôi sử dụng công nghệ để theo dõi và ghi nhận địa chỉ IP của bạn. \n" +
      "Chúng tôi nghiêm túc về việc bảo vệ quyền sở hữu trí tuệ và các tài sản trí tuệ. \n" +
      "Vui lòng không thực hiện hành vi ăn cắp mã nguồn hoặc bất kỳ hành vi vi phạm nào. \n" +
      "Bất kỳ hành vi ăn cắp thông tin, mã nguồn hay tài nguyên nào đều có thể dẫn đến:\n" +
      "- Hành động pháp lý từ chúng tôi hoặc đối tác. \n" +
      "- Việc báo cáo đến cơ quan chức năng và chính quyền. \n" +
      "- Các hình phạt theo luật pháp hiện hành.\n" +
      "Chúng tôi hy vọng bạn sẽ tôn trọng công sức và sự sáng tạo của những người đã phát triển trang web này. \n" +
      "Cảm ơn bạn đã hợp tác và tôn trọng bản quyền. \n" +
      "========================================="
  );
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".chure").forEach(function (element) {
    element.textContent = owiData.chure;
  });

  document.querySelectorAll(".codau").forEach(function (element) {
    element.textContent = owiData.codau;
  });

  document.querySelector("#quote").textContent = owiData.quote;

  if (document.querySelector(".nhagaimap")) {
    document.querySelector(".nhagaimap").onclick = function () {
      window.open(owiData.nhagai.map);
    };
  }

  if (document.querySelector(".nhatraimap")) {
    document.querySelector(".nhatraimap").onclick = function () {
      window.open(owiData.nhatrai.map);
    };
  }

  document.querySelectorAll("#nhagaitime").forEach(function (element) {
    element.textContent = owiData.nhagai.time;
  });
  document.querySelectorAll("#nhagaiduonglich").forEach(function (element) {
    element.textContent = owiData.nhagai.duonglich;
  });
  document.querySelectorAll("#nhagaiamlich").forEach(function (element) {
    element.textContent = owiData.nhagai.amlich;
  });

    document.querySelectorAll("#nhagaitimevuquy").forEach(function (element) {
    element.textContent = owiData.nhagai.timevuquy;
  });
  document.querySelectorAll("#nhagaiduonglichvuquy").forEach(function (element) {
    element.textContent = owiData.nhagai.duonglichvuquy;
  });
  document.querySelectorAll("#nhagaiamlichvuquy").forEach(function (element) {
    element.textContent = owiData.nhagai.amlichvuquy;
  });


  document.querySelectorAll("#nhatraitime").forEach(function (element) {
    element.textContent = owiData.nhatrai.time;
  });
  document.querySelectorAll("#nhatraiduonglich").forEach(function (element) {
    element.textContent = owiData.nhatrai.duonglich;
  });
  document.querySelectorAll("#nhatraiamlich").forEach(function (element) {
    element.textContent = owiData.nhatrai.amlich;
  });

  document.querySelectorAll("#nhatraitimethanhhon").forEach(function (element) {
    element.textContent = owiData.nhatrai.timethanhhon;
  });
  document.querySelectorAll("#nhatraiduonglichthanhhon").forEach(function (element) {
    element.textContent = owiData.nhatrai.duonglichthanhhon;
  });
  document.querySelectorAll("#nhatraiamlichthanhhon").forEach(function (element) {
    element.textContent = owiData.nhatrai.amlichthanhhon;
  });

  //change image
  document.querySelector("#SECTION1>.ladi-section-background").style.backgroundImage = "url(" + owiData.imgs.header + ")";
  document.querySelector("#IMAGE407 > .ladi-image > .ladi-image-background").style.backgroundImage = "url(" + owiData.imgs.header + ")";
  document.querySelector("#IMAGE408 > .ladi-image > .ladi-image-background").style.backgroundImage = "url(" + owiData.imgs.save_the_date + ")";
  document.querySelector("#IMAGE410>.ladi-image>.ladi-image-background").style.backgroundImage = "url(" + owiData.imgs.save_the_date_2 + ")";

  document.querySelector("#SECTION354>.ladi-section-background").style.backgroundImage = "url(" + owiData.imgs.calendar1 + ")";
  document.querySelector("#SECTION358>.ladi-section-background").style.backgroundImage = "url(" + owiData.imgs.calendar1 + ")";
  document.querySelector("#IMAGE412>.ladi-image>.ladi-image-background").style.backgroundImage = "url(" + owiData.imgs.calendar2 + ")";
  document.querySelector("#IMAGE413>.ladi-image>.ladi-image-background").style.backgroundImage = "url(" + owiData.imgs.calendar3 + ")";
  document.querySelector("#IMAGE414 > .ladi-image > .ladi-image-background").style.backgroundImage = "url(" + owiData.imgs.calendar4 + ")";

  
  document.querySelector("#COUNTDOWN345").setAttribute("data-date-end", new Date(owiData.ngaybatdau).getTime().toString());

  
});
