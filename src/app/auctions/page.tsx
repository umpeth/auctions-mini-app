import Link from "next/link";
import SimpleLayout from "@/components/SimpleLayout";
import { ResponsiveBreadcrumb } from "@/components/ui/responsive-breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Auctions" }];

export default function AuctionsPage() {
  return (
    <SimpleLayout title="Auctions">
      <div className="container mx-auto px-2 sm:px-4">
        <ResponsiveBreadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/auctions/active" className="block">
            <Card className="h-full hover:bg-gray-50 transition-colors">
              <CardHeader>
                <CardTitle>Active Auctions</CardTitle>
                <CardDescription>
                  View and bid on currently active auctions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/auctions/ended" className="block">
            <Card className="h-full hover:bg-gray-50 transition-colors">
              <CardHeader>
                <CardTitle>Ended Auctions</CardTitle>
                <CardDescription>
                  View the history and results of completed auctions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/auctions/new" className="block">
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              Create New Auction
            </Button>
          </Link>
        </div>
      </div>
    </SimpleLayout>
  );
}
