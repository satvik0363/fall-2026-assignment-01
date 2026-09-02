export function transcribeDNA(dna: string): string {
  let output = '';
  for (let i: number = 0; i < dna.length; i++) {
    if (dna[i] == 'A') output += 'U';
    else if (dna[i] == 'T') output += 'A';
    else if (dna[i] == 'C') output += 'G';
    else if (dna[i] == 'G') output += 'C';
    else {
      throw new Error("Not a valid DNA letter");
    }
  }
  return output;
}
