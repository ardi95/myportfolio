export const calculateYearMonthDifference = (experienceAt) => {
  // Buat objek Date dari string tanggal
  const startDate = new Date(experienceAt);
  const currentDate = new Date();

  // Hitung perbedaan tahun dan bulan
  let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
  let monthDiff = currentDate.getMonth() - startDate.getMonth();

  // Jika perbedaan bulan negatif, kurangi satu tahun dan tambahkan 12 bulan
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  return {
    years: yearDiff,
    months: monthDiff,
  };
};
