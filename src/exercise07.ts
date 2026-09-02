import fs from 'fs';
import path from 'path';

export type Gradebook = {[studentName: string]: {[subjectName: string]: number} }


export function calculateSubjectAverage(subject: string): number {
  const filePath = path.resolve('data/gradebook.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const gradebook: Gradebook = JSON.parse(raw);
  let totalScore = 0;
  let studentCount = 0;

  Object.values(gradebook).forEach((studentGrades) => {
    if (subject in studentGrades) {totalScore += studentGrades[subject]; studentCount += 1;}});
  return studentCount === 0 ? 0 : totalScore / studentCount;}
