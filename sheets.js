// import xlsx from "xlsx";
let xlsx = require("xlsx");
let wb1 = xlsx.readFile("excel test file.ods"); //, { cellDates: true }
let wb2 = xlsx.readFile("BULKMATIC CLOSING REPORT-2020.08.03.xlsx");
let ws = wb1.Sheets["Sheet1"];
let ws = wb2.Sheets["BULKMATIC"];

let data = xlsx.utils.sheet_to_json(ws);

const newData = data.map(function (record) {
  record.NetDate = record.TodaysDate - record.Date;
  return record;
});

let newWB = xlsx.utils.book_new();
let newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB, newWS, "Created Data");

xlsx.writeFile(newWB, "CreatedDataFile.ods");
console.log(newData);
