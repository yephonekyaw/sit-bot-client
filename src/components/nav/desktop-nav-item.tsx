import { cn } from "@/lib/utils";
import type { DesktopNavItemProps } from "@/types/nav.types";
import { ChevronRight, FileText } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { isItemActive } from "@/utils/nav.utils";

const DesktopNavItem = ({
  item,
  level,
  hasChildren,
  className,
}: DesktopNavItemProps) => {
  const Icon = item.icon ?? FileText;
  const isTopLevel = level === 0;
  const location = useLocation();
  
  // Use our custom active state logic that handles nested routes
  const isActive = isItemActive(item, location.pathname);

  if (hasChildren) {
    // For items with children, render as a div since they don't navigate anywhere
    return (
      <div
        className={cn(
          "group flex items-center gap-3 px-4 py-[10px] rounded-full transition-all duration-200 ease-out select-none cursor-pointer",
          "relative overflow-hidden",
          isTopLevel ? "text-sm font-medium" : "text-sm font-medium",
          isActive
            ? "bg-gradient-to-r from-blue-50 to-blue-50/80 text-blue-700 border border-blue-200/50"
            : "text-gray-700",
          !isActive &&
            "hover:bg-gray-100 hover:text-gray-900 hover:border-gray-200/50 hover:border-solid",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
          className
        )}
      >
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent" />
        )}
        <div
          className={cn(
            "p-2 rounded-full transition-all duration-200 flex items-center justify-center",
            isActive ? "bg-blue-100" : "bg-gray-100 group-hover:bg-blue-100"
          )}
        >
          <Icon
            className={cn(
              "h-4 w-4 shrink-0 transition-all duration-200 stroke-2",
              isActive
                ? "text-blue-600"
                : "text-gray-500 group-hover:text-blue-600"
            )}
          />
        </div>
        <span className="text-nowrap relative z-10">{item.label}</span>
        <ChevronRight
          className={cn(
            "h-3.5 w-3.5 text-gray-400 transition-all duration-200 ease-out",
            isActive
              ? "text-blue-500"
              : "group-hover:text-gray-600 group-hover:scale-110",
            isTopLevel ? "group-hover:rotate-90" : "group-hover:rotate-90"
          )}
        />
      </div>
    );
  }

  // For items without children, use NavLink for navigation
  return (
    <NavLink
      to={item.href}
      className={cn(
        "group flex items-center gap-3 px-4 py-[10px] rounded-full transition-all duration-200 ease-out select-none",
        "relative overflow-hidden",
        isTopLevel ? "text-sm font-medium" : "text-sm font-medium",
        isActive
          ? "bg-gradient-to-r from-blue-50 to-blue-50/80 text-blue-700 border border-blue-200/50"
          : "text-gray-700",
        !isActive &&
          "hover:bg-gray-100 hover:text-gray-900 hover:border-gray-200/50 hover:border-solid",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
        className
      )}
    >
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent" />
      )}
      <div
        className={cn(
          "p-2 rounded-full transition-all duration-200 flex items-center justify-center",
          isActive ? "bg-blue-100" : "bg-gray-100 group-hover:bg-blue-100"
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4 shrink-0 transition-all duration-200 stroke-2",
            isActive
              ? "text-blue-600"
              : "text-gray-500 group-hover:text-blue-600"
          )}
        />
      </div>
      <span className="text-nowrap relative z-10">{item.label}</span>
    </NavLink>
  );
};

export default DesktopNavItem;
