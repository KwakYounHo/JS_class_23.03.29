import fs from 'fs';
export default async function (fileName,encode) {
  await fs.readFileSync(fileName,encode)
}