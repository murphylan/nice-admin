"use client";

import PageContainer from "@/components/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useTopLoader } from "nextjs-toploader";
import { Suspense } from "react";

const KanbanPage = () => {
  const loader = useTopLoader();
  return (
    <PageContainer scrollable={false}>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="KanbanPage"
            description="Manage products (Server side table functionalities.)"
          />
          <Link
            href="/product/new"
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <IconPlus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <Suspense
        // key={key}
        //   fallback={
        //   }
        >
          KanbanPage
        </Suspense>
      </div>
    </PageContainer>
  );
};

export default KanbanPage;
