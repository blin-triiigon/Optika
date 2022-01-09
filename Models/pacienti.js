const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientScehma = new Schema({
  emri: String,
  ditelindja: String,
  vendbanimi: String,
  tel: String,
  nrk: String,
  anamneza: String,
  vod: String,
  vos: String,
  tod: String,
  tos: String,
  kod: String,
  kos: String,
  sp_od: String,
  sp_os: String,
  spm_od: String,
  spm_os: String,
  icd: String,
  diagnoza: String,
  mendimi: String,
  terapia: String,
  data: String,
  spl_o: String,
  spl_a: String,
  spl_bp: String,
  spl_f: String,
  spl_b: String,
  spl_p: String,
  sph_od: String,
  cyl_od: String,
  axis_od: String,
  prima_basis_od: String,
  add_od: String,
  sph_os: String,
  cyl_os: String,
  axis_os: String,
  prima_basis_os: String,
  add_os: String,
  spa_o: String,
  spa_ar: String,
  spa_bp: String,
  sph_od1: String,
  cyl_od1: String,
  axis_od1: String,
  prima_basis_od1: String,
  add_od1: String,
  sph_os1: String,
  cyl_os1: String,
  axis_os1: String,
  prima_basis_os1: String,
  add_os1: String,
  glass: String,
});

module.exports = mongoose.model("patient", patientScehma);