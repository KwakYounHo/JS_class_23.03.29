import qs     from 'qs'
import bcrypt from 'bcrypt'

export function User(formData) {
  this.formData     = qs.parse(formData);
  this.PW           = bcrypt.hashSync(this.formData.PW,10);
  this.forDBKeys    = Object.keys(this.formData);
  this.forDBValues  = Object.values(this.formData);
  this.forDBKeys.splice(1,1);
  this.forDBValues.splice(1,1);
  this._forDBKeys   = this.forDBKeys.join() + ',PW';
  this._forDBValues = this.forDBValues.map(e=>{return `\'${e}\'`}).join() + `,'${this.PW}'`;
}