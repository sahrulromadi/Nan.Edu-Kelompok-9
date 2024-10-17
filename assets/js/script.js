$(document).ready(function () {
  // untuk navbar
  $(window).on("scroll", function () {
    const navbar = $("header");
    // jika scroll lebih dari 5 pixel
    if ($(this).scrollTop() > 5) {
      navbar.css("opacity", "0.9"); // ubah opacity
    } else {
      navbar.css("opacity", "1"); // kembalikan opacity
    }
  });

  // untuk contact
  $("#contactForm").on("submit", function (event) {
    // mencegah form dikirim secara default
    event.preventDefault();

    // ambil elemen berdasarkan id
    const name = $("#name").val();
    const phone = $("#phone").val();
    const email = $("#email").val();
    const message = $("#message").val();

    // alert yang muncul
    alert(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    );

    // reload page
    location.reload();
  });

  // untuk login dan register
  $(".needs-validation").on("submit", function (event) {
    // cek validasi apakah semua input dalam form valid sesuai aturan HTML
    if (!this.checkValidity()) {
      // mencegah tindakan default dari event listener submit
      event.preventDefault();
      event.stopPropagation(); // stop propagation untuk menghindari event lebih lanjut
    }
    // class dari bootstrap untuk menampilkan elemen validasi
    $(this).addClass("was-validated");
  });

  // untuk FAQ
  // ambil semua pertanyaan dengan class faq-item
  $(".faq-item").each(function () {
    const $q = $(this); // simpan referensi
    const $answer = $q.find(".faq-answer");
    const $icon = $q.find(".faq-question i");

    // sembunyikan jawaban pada awal
    $answer.hide();

    // event listener ketika faq-item diklik
    $q.on("click", function () {
      if ($answer.is(":hidden")) {
        $answer.slideDown(); // tampilkan jawaban + transisi
        $icon.removeClass("bi-plus").addClass("bi-dash"); // ganti icon
      } else {
        $answer.slideUp(); // sembunyikan jawaban + transisi
        $icon.removeClass("bi-dash").addClass("bi-plus"); // ganti icon
      }
    });
  });
});
