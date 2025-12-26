"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 dark:text-gray-300 mb-4">
      <ol className="flex gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {segments.map((seg, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");

          return (
            <li key={href} className="flex gap-2">
              <span>/</span>
              <Link href={href} className="hover:underline capitalize">
                {seg}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}