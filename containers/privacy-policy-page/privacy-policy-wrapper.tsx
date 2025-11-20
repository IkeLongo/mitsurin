interface PrivacyPolicyWrapperProps {
  children: React.ReactNode;
}

export function PrivacyPolicyWrapper({ children }: PrivacyPolicyWrapperProps) {
  return (
    <div className="
      [&_h1]:text-stone-900 [&_h1]:font-semibold [&_h1]:font-[montserrat] [&_h1]:text-4xl
      [&_h2]:text-stone-900 [&_h2]:font-semibold [&_h2]:font-[montserrat] [&_h2]:text-3xl
      [&_h3]:text-stone-900 [&_h3]:font-semibold [&_h3]:font-[montserrat] [&_h3]:text-2xl
      [&_h4]:text-stone-900 [&_h4]:font-semibold [&_h4]:font-[montserrat] [&_h4]:text-2xl [&_h4]:mb-4
      [&_h5]:text-stone-900 [&_h5]:font-semibold [&_h5]:font-[montserrat] [&_h5]:text-lg
      [&_h6]:text-stone-900 [&_h6]:font-semibold [&_h6]:font-[montserrat] [&_h6]:text-base
      [&_p]:text-stone-600
      [&_li]:text-stone-600
      [&_span]:text-stone-600
      [&_strong]:text-stone-900 [&_strong]:font-semibold
      [&_a]:text-blue-600 [&_a]:no-underline [&_a:hover]:underline
      [&_ul]:text-stone-600
      [&_ol]:text-stone-600
      [&_td]:text-stone-600
      [&_th]:text-stone-600
    ">
      {children}
    </div>
  );
}