import { ReactNode } from "react";
export default function Section({ id, title, subtitle, children }:{
  id?: string; title: string; subtitle?: string; children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl opacity-80">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
