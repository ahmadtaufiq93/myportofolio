// ================= CONTACT FORM =================
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alertBox.classList.remove("d-none");
            contactForm.reset();

            setTimeout(() => {
              alertBox.classList.add("d-none");
            }, 4000);
          } else {
            alert("Terjadi kesalahan. Silakan coba lagi.");
          }
        })
        .catch(() => {
          alert("Koneksi gagal. Silakan periksa koneksi Anda.");
        });
    });
  }
});


// ================= PROJECT LIST =================
document.addEventListener("DOMContentLoaded", function () {

  const IMG_PATH = "img/logo.jpg";

  const projects = [
    {
      title: "Website Toko Online",
      desc: "Sistem e-commerce dengan fitur keranjang dan checkout.",
      image: IMG_PATH,
      link: "toko.html", // ✅ LINK KE TOKO ONLINE
    },
    {
      title: "Aplikasi To-Do List",
      desc: "Aplikasi manajemen tugas sederhana dan efisien.",
      image: IMG_PATH,
      link: "#",
    },
    {
      title: "Landing Page Produk",
      desc: "Desain landing page untuk promosi produk digital.",
      image: IMG_PATH,
      link: "#",
    },
    {
      title: "Dashboard Admin",
      desc: "Dashboard interaktif untuk mengelola data pengguna.",
      image: IMG_PATH,
      link: "#",
    },
    {
      title: "Portofolio Pribadi",
      desc: "Website pribadi untuk menampilkan pengalaman dan karya.",
      image: IMG_PATH,
      link: "#",
    },
    {
      title: "Aplikasi Cuaca",
      desc: "Aplikasi yang menampilkan prakiraan cuaca dengan API.",
      image: IMG_PATH,
      link: "#",
    },
  ];

  const container = document.getElementById("project-list");
  if (!container) return;

  projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.desc}</p>
          <a href="${project.link}" class="btn btn-outline-primary mt-auto">
            Lihat Detail
          </a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
});
