import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-800',
        className
      )}
      {...props}
    />
  );
}

// Preset skeleton components for common patterns
function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-lg border bg-white p-6 dark:bg-gray-900', className)} {...props}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-8 w-20" />
      <Skeleton className="mt-2 h-4 w-32" />
    </div>
  );
}

function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="rounded-lg border bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="flex border-b px-4 py-3">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="ml-8 h-4 w-32" />
        <Skeleton className="ml-auto h-4 w-24" />
        <Skeleton className="ml-8 h-4 w-20" />
        <Skeleton className="ml-8 h-4 w-16" />
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center border-b px-4 py-4 last:border-0">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="ml-8 h-8 w-8 rounded-full" />
          <div className="ml-3 space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-36" />
          </div>
          <Skeleton className="ml-auto h-4 w-20" />
          <Skeleton className="ml-8 h-6 w-16 rounded-full" />
          <Skeleton className="ml-8 h-8 w-8 rounded" />
        </div>
      ))}
    </div>
  );
}

function SkeletonList({ items = 4 }: { items?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg border bg-white p-4 dark:bg-gray-900">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
      ))}
    </div>
  );
}

function SkeletonChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-lg border bg-white p-6 dark:bg-gray-900', className)} {...props}>
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-8 w-24" />
      </div>
      <div className="flex h-64 items-end gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton
            key={i}
            className="flex-1"
            style={{ height: `${Math.random() * 60 + 20}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        {['一月', '二月', '三月', '四月'].map((month) => (
          <Skeleton key={month} className="h-3 w-8" />
        ))}
      </div>
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonTable, SkeletonList, SkeletonChart };
