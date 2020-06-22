const updateTabel = () => {
  const selectedTanggal = $("#selectHistory").val();
  const pembelian = Object.keys(pembeliandb[selectedTanggal]);
  pembelian.forEach(jam => {
    const jamBeli = Object.keys(pembeliandb[selectedTanggal][jam]).slice(0, -1);
    jamBeli.forEach(barang => {
      const total = pembeliandb[selectedTanggal][jam].total;
      const { harga, jumlah, subtotal } = pembeliandb[selectedTanggal][jam][
        barang
      ];
      $("#history").append(`<tr>
        <td>${jam}</td>
        <td>${barang}</td>
        <td>${toMoney(harga)}</td>
        <td>${jumlah}</td>
        <td>${toMoney(subtotal)}</td>
      </tr>`);
      $("#tableHistory").show();
    });
  });
};
