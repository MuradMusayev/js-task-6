// Task-01
// Massiv elementinin dəyərini dəyişin.
// Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

// Task-02
// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
// Massiv elementlərin düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// //Episode 4: New Hope
// //Episode 5: Empire strikes back
// //Episode 6: Return of the Jdi

// Task-03
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək üçün proqram tərtib edin.
//  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran getAnnualSalary() funksiyasını yazın.
// - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
// Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və salary massivi əsasında həmin rüb üçün şöbənin bütün
// işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
// Rüb - 3 aylıq bir müddətdir.

// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];
// firstQuarter = 0;
// secondQuarter = 0;
// thirdQuarter = 0;
// forthQuarter = 0;
// for (let i = 0; i < salary.length; i++) {
//   for (let j = 0; j < 3; j++) {
//     firstQuarter += salary[i][j];
//   }
//   for (let j = 3; j < 6; j++) {
//     secondQuarter += salary[i][j];
//   }
//   for (let j = 6; j < 9; j++) {
//     thirdQuarter += salary[i][j];
//   }
//   for (let j = 9; j < 12; j++) {
//     forthQuarter += salary[i][j];
//   }
// }
// console.log(firstQuarter);
// console.log(secondQuarter);
// console.log(thirdQuarter);
// console.log(forthQuarter);

// Task-04
// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın.
// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.(Split)

// let arr = prompt("", "5,3,4,7,1").split(",");
// result = arr[0];
// console.log(arr);
// for (let i = 1; i < arr.length; i++) {
//   if (result > arr[i]) {
//     result = arr[i];
//   }
// }
// console.log(result);

// Task-05
// Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.(split,join)(replaceAll(",",";"))
// '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)

// let str = "32, 31, 34, 36, 31".split(",")
// let result = str.join(";")
// console.log(result);
