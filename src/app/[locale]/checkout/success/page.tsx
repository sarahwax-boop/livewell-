import SuccessClient from "@/components/SuccessClient";
import type { Locale } from "@/i18n/routing";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function SuccessPage({ params }: Props) {
  await params;
  return <SuccessClient />;
}
