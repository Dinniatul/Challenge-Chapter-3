function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log("sebelum di filter");
  console.table(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  // melakukan perulangan sepanjang array

  const panjang = cars.length;
  console.log("panjang array: ", panjang);
  for (let i = 0; i < panjang - 1; i++) {
    //jika atribut pada cars ke-i itu available, maka push kedalam result
    if (cars[i].available === true) {
      console.log("cars ke - " + i + "available , PUSH!");
      result.push(cars[i]);
    } else {
      console.log("cars ke - " + i + "tidak available, tidak di PUSH");
    }
  }

  console.log("sesudah di filter : ");
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
