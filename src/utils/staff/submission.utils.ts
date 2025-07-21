import { FileText, ImageIcon, File, type LucideIcon } from "lucide-react";

export const getFileIcon = (mimeType: string): LucideIcon => {
  if (mimeType.startsWith("image/")) return ImageIcon;
  if (mimeType === "application/pdf") return FileText;
  return File;
};

export const getConfidenceColor = (score: number) => {
  if (score >= 0.8) return "text-green-600";
  if (score >= 0.6) return "text-yellow-600";
  return "text-red-600";
};
