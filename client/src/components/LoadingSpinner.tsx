import { Heart } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  message?: string;
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
};

export function LoadingSpinner({ size = "md", message }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4" data-testid="loading-spinner">
      <div className="relative">
        <Heart 
          className={`${sizeClasses[size]} text-romantic-rose animate-heart-beat`}
          fill="currentColor"
        />
        <div className="absolute inset-0 animate-ping">
          <Heart 
            className={`${sizeClasses[size]} text-romantic-rose/30`}
            fill="currentColor"
          />
        </div>
      </div>
      {message && (
        <p className="font-montserrat text-muted-foreground text-sm animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}

export function PageLoading() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-romantic-cream to-white dark:from-zinc-900 dark:to-zinc-950"
      data-testid="page-loading"
    >
      <LoadingSpinner size="lg" message="Carregando nossa história..." />
    </div>
  );
}

export function SectionLoading() {
  return (
    <div className="py-20 flex items-center justify-center" data-testid="section-loading">
      <LoadingSpinner size="md" />
    </div>
  );
}
