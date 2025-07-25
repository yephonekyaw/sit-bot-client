import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  Timer,
  FileText
} from "lucide-react";

// File upload constants
export const SUPPORTED_FILE_TYPES = {
  'application/pdf': {
    extension: '.pdf',
    description: 'PDF Document',
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  'image/jpeg': {
    extension: '.jpg',
    description: 'JPEG Image',
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  'image/jpg': {
    extension: '.jpg',
    description: 'JPG Image',
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  'image/png': {
    extension: '.png',
    description: 'PNG Image',
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  'image/webp': {
    extension: '.webp',
    description: 'WebP Image',
    maxSize: 10 * 1024 * 1024, // 10MB
  },
} as const;

// Deadline status configurations
export const DEADLINE_STATUS_CONFIGS = {
  completed: {
    label: "Completed",
    color: "bg-emerald-100 text-emerald-700",
    icon: CheckCircle,
    iconColor: "text-emerald-600",
  },
  overdue: {
    label: "Overdue",
    color: "bg-red-100 text-red-700",
    icon: XCircle,
    iconColor: "text-red-600",
  },
  urgent: {
    label: "Due Soon",
    color: "bg-orange-100 text-orange-700",
    icon: AlertTriangle,
    iconColor: "text-orange-600",
  },
  upcoming: {
    label: "Upcoming",
    color: "bg-blue-100 text-blue-700",
    icon: Timer,
    iconColor: "text-blue-600",
  },
  pending: {
    label: "Pending",
    color: "bg-gray-100 text-gray-700",
    icon: Clock,
    iconColor: "text-gray-600",
  },
} as const;

// Filter options for submissions page
export const SUBMISSION_FILTER_OPTIONS = [
  { value: "all", label: "All Requirements" },
  { value: "completed", label: "Completed" },
  { value: "pending", label: "In Review" },
  { value: "rejected", label: "Rejected" },
  { value: "not-submitted", label: "Not Submitted" },
  { value: "overdue", label: "Overdue" },
] as const;

// Statistics card configurations
export const STATS_CARD_CONFIGS = {
  total: {
    title: "Total Requirements",
    icon: FileText,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  completed: {
    title: "Completed",
    icon: CheckCircle,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  pending: {
    title: "In Review",
    icon: Clock,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  overdue: {
    title: "Overdue",
    icon: AlertTriangle,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
} as const;

// Upload guidelines
export const UPLOAD_GUIDELINES = [
  "Ensure the certificate is clearly visible and readable",
  "File should be in PDF format or high-quality image (JPG, PNG, WebP)",
  "Maximum file size is 10MB",
  "Make sure all text and details are legible",
  "Certificate should show your full name as registered in university",
  "Include completion date and issuing organization details",
] as const;

// Submission success messages
export const SUBMISSION_MESSAGES = {
  success: {
    title: "Certificate submitted successfully!",
    description: "Your certificate is now under review.",
  },
  error: {
    title: "Submission failed",
    description: "Please check your file and try again.",
  },
  fileTypeError: {
    title: "Unsupported file type",
    description: "Please upload PDF, JPG, PNG, or WebP files only.",
  },
  fileSizeError: {
    title: "File too large",
    description: "Maximum file size is 10MB.",
  },
} as const;

// Days before deadline to show urgent warning
export const URGENT_DEADLINE_DAYS = 7;

// Maximum file size in bytes
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Accepted file extensions for file input
export const ACCEPTED_FILE_EXTENSIONS = ".pdf,.jpg,.jpeg,.png,.webp";

// Default pagination settings
export const DEFAULT_PAGE_SIZE = 10;

// Deadline calculation helpers
export const calculateDaysUntilDeadline = (deadline: string): number => {
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getDeadlineStatus = (
  deadline: string, 
  hasApprovedSubmission: boolean = false
): keyof typeof DEADLINE_STATUS_CONFIGS => {
  if (hasApprovedSubmission) {
    return "completed";
  }
  
  const daysUntil = calculateDaysUntilDeadline(deadline);
  
  if (daysUntil < 0) {
    return "overdue";
  }
  
  if (daysUntil <= URGENT_DEADLINE_DAYS) {
    return "urgent";
  }
  
  if (daysUntil > URGENT_DEADLINE_DAYS) {
    return "upcoming";
  }
  
  return "pending";
};

// File size formatter
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default {
  SUPPORTED_FILE_TYPES,
  DEADLINE_STATUS_CONFIGS,
  SUBMISSION_FILTER_OPTIONS,
  STATS_CARD_CONFIGS,
  UPLOAD_GUIDELINES,
  SUBMISSION_MESSAGES,
  URGENT_DEADLINE_DAYS,
  MAX_FILE_SIZE,
  ACCEPTED_FILE_EXTENSIONS,
  DEFAULT_PAGE_SIZE,
  calculateDaysUntilDeadline,
  getDeadlineStatus,
  formatFileSize,
};