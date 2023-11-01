function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  //Fungsi Reset
  function resetForm() {
    document.getElementById("jari-jari").value = "";
    document.getElementById("luasPersegi").value = "";
    document.getElementById("kelilingPersegi").value = "";
    document.getElementById("luas").value = "";
    document.getElementById("keliling").value = "";
    document.getElementById("jari-jari").value = "";
    document.getElementById("panjang").value = "";
    document.getElementById("lebar").value = "";
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
}

  //Fungsi Persegi Panjang
  function hitungLuasDanKelilingPersegiPanjang() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;

    var luas = panjang * lebar;
    var keliling = 2 * (parseInt(panjang) + parseInt(lebar));

    document.getElementById("luasPersegi").value = luas;
    document.getElementById("kelilingPersegi").value = keliling;
  }


  //Fungsi Segitiga
  function hitungLuasDanKeliling() {
      var alas = document.getElementById("alas").value;
      var tinggi = document.getElementById("tinggi").value;
      var sisi1 = document.getElementById("sisi1").value;
      var sisi2 = document.getElementById("sisi2").value;
      var sisi3 = document.getElementById("sisi3").value;

      var luas = (alas * tinggi) / 2;
      var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);

      document.getElementById("luasSegitiga").value = luas;
      document.getElementById("kelilingSegitiga").value = keliling;
    }


  //Fungsi Lingkaran
  function hitungLuasDanKelilingLingkaran() {
    var jariJari = document.getElementById("jari-jari").value;

    var luas = Math.PI * jariJari * jariJari;
    var keliling = 2 * Math.PI * jariJari;

    document.getElementById("luas").value = luas;
    document.getElementById("keliling").value = keliling;
  }

  


