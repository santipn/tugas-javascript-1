const bhsIndonesia = 97
const bhsInggris = 90
const matematika = 94
const ipa = 88

let nilai = (bhsIndonesia + bhsInggris + matematika + ipa)/4

let gradeNilai;
if (nilai >=90 && nilai <=100) {
    gradeNilai = "A";
} else if (nilai >=80 && nilai <=89) {
    gradeNilai = "B";
} else if (nilai >= 70 && nilai <=79) {
    gradeNilai = "C";
} else if (nilai >= 60 && nilai<=69) {
    gradeNilai = "D";
} else if (nilai >=0 && nilai <=59) {
    gradeNilai = "E";
} else {
    gradeNilai = "Di luar batas";
}

console.log('Nilai rata-rata adalah : '+nilai, 'Grade : '+gradeNilai);
