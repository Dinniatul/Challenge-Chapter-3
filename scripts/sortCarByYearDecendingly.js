function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log("sebelum Descdending :");
  console.table(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  const panjang = cars.length;
  console.log("panjang array: ", panjang);

  for (let i = 0; i < panjang - 1; i++) {
    //looping membandingan index
    for (let j = 0; j < panjang - 1; j++) {
      //algo bbs
      if (result[j].year < result[j + 1].year) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  console.log("Sesudah Descending :");
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
