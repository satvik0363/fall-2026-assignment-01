import fs from 'fs/promises';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const timestamp = new Date().toISOString();
  const formattedMessage = `[${timestamp}] ${statusMessage}\n`;
  await fs.appendFile(filePath, formattedMessage);
}
