import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ApplicationBreadcrumbProps {
  first?: string;
  second: string;
  third?: string;
  title: string;
}

export function ApplicationBreadcrumb({
  first,
  second,
  title,
  third,
}: ApplicationBreadcrumbProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{first ? first : "Home"}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {second && !third && (
            <BreadcrumbItem>
              <BreadcrumbPage>{second}</BreadcrumbPage>
            </BreadcrumbItem>
          )}

          {second && third && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{second}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {third && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{third}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
