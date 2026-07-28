import { randomUUID } from "crypto";

export function generateFileName(originalName: string) {
  const extension = originalName.split(".").pop();

  return `${randomUUID()}.${extension}`;
}

export function getFolder(folder?: string) {
  if (!folder) return "misc";

  return folder;
}