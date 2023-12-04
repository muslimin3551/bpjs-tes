document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".collapse").forEach((collapse) => {
    collapse.addEventListener("show.bs.collapse", function () {
      // Close other collapses when one is opened
      document.querySelectorAll(".collapse").forEach((otherCollapse) => {
        if (otherCollapse !== collapse) {
          bootstrap.Collapse.getInstance(otherCollapse)?.hide();
        }
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll(".btn-tab-berita");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      tabButtons.forEach(function (btn) {
        btn.classList.remove("btn-tab-berita-active");
      });

      this.classList.add("btn-tab-berita-active");
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var tabItems = document.querySelectorAll('.estimasi-tab');

  tabItems.forEach(function (item) {
      item.addEventListener('click', function () {
          tabItems.forEach(function (tab) {
              tab.classList.remove('estimasi-tab-active');
          });

          this.classList.add('estimasi-tab-active');
      });
  });
});

function calculateJHT() {
  // Get input values
  var upah = parseFloat(document.getElementById('upah').value.replace(/[^0-9.-]+/g,"")) || 0;
  var lamaBerkerja = parseInt(document.getElementById('lama_berkerja').value) || 0;
  var saldoAwal = parseFloat(document.getElementById('saldo_awal').value.replace(/[^0-9.-]+/g,"")) || 0;

  // Perform the JHT calculation (customize this based on your formula)
  var jht = upah * lamaBerkerja + saldoAwal;

  // Display the result
  document.getElementById('result').textContent = 'Rp. ' + jht.toLocaleString();
}

function calculateJP() {
  // Get input values
  var tanggalLahir = new Date(document.getElementById('tanggal_lahir').value);
  var jumlahUpah = parseFloat(document.getElementById('jumlah_upah').value.replace(/[^0-9.-]+/g, "")) || 0;
  var kenaikanUpah = parseFloat(document.getElementById('kenaikan_upah').value) || 0;

  // Calculate retirement age
  var retirementAge = 65;

  // Calculate contribution period
  var currentDate = new Date();
  var contributionPeriod = retirementAge - (tanggalLahir.getFullYear() - currentDate.getFullYear());

  // Calculate tahun pensiun
  var tahunPensiun = currentDate.getFullYear() + contributionPeriod;

  // Calculate manfaat
  var manfaat = jumlahUpah * (1 + kenaikanUpah / 100);

  // Display the result
  var resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
      <div class="row">
          <div class="col-md-6">
              <p>Usia Pensiun:</p>
          </div>
          <div class="col-md-6">
              <p>Masa Iuran:</p>
          </div>
      </div>
      <div class="row">
          <div class="col-md-6">
              <p><strong>${retirementAge}</strong></p>
          </div>
          <div class="col-md-6">
              <p><strong>${contributionPeriod} Tahun</strong></p>
          </div>
      </div>
      <div class="row">
          <div class="col-md-6">
              <p>Tahun Pensiun:</p>
          </div>
          <div class="col-md-6">
              <p>Manfaat:</p>
          </div>
      </div>
      <div class="row">
          <div class="col-md-6">
              <p><strong>${tahunPensiun}</strong></p>
          </div>
          <div class="col-md-6">
              <p><strong>${manfaat.toLocaleString()}</strong></p>
          </div>
      </div>
  `;
}