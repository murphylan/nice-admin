import { RecentSales } from "./_components/RecentSales";

export default async function Sales() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await await delay(1000);
  return <RecentSales />;
}
