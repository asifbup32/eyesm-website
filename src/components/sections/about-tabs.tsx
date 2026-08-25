"use client";

import {
  Leaf,
  UsersThree,
  Books,
  Recycle,
  Brain,
  Sparkle,
  Target,
  Eye,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { about, whatWeDo, mission, vision, values, pillars, type PillarKey } from "@/lib/site-data";

const pillarIcons: Record<
  PillarKey,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  environment: Leaf,
  youth: UsersThree,
  education: Books,
  sustainability: Recycle,
  mindset: Brain,
};

const tabItems = [
  { value: "about", label: "About Us" },
  { value: "values", label: "Our Values" },
  { value: "mission", label: "Our Mission" },
  { value: "area", label: "Area of Work" },
];

export function AboutTabs() {
  return (
    <Tabs
      defaultValue="about"
      orientation="vertical"
      className="flex-col gap-8 md:flex-row md:gap-10"
    >
      <TabsList
        variant="line"
        className="h-fit w-full shrink-0 flex-row gap-1 overflow-x-auto p-0 md:w-52 md:flex-col md:gap-1.5 md:overflow-visible"
      >
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="h-auto w-full shrink-0 justify-start rounded-xl border-0 px-4 py-3 text-left text-sm font-medium text-foreground/70 data-active:bg-primary/10 data-active:text-primary data-active:shadow-none data-active:after:hidden"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-w-0 flex-1">
        <TabsContent value="about" keepMounted className="mt-0">
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-foreground">
              {about.intro}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {about.body}
            </p>
            <div className="flex gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <Sparkle className="mt-0.5 size-6 shrink-0 text-primary" weight="fill" aria-hidden="true" />
              <p className="text-base font-medium leading-relaxed text-foreground">
                {about.belief}
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                What We Do
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {whatWeDo}
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="values" keepMounted className="mt-0">
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-3">
                <CheckCircle
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  weight="fill"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mission" keepMounted className="mt-0">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Target className="size-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {mission}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent/15">
                <Eye className="size-5" style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {vision}
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="area" keepMounted className="mt-0">
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.key];
              return (
                <div
                  key={pillar.key}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <div
                    className="flex size-10 items-center justify-center rounded-xl"
                    style={{
                      background: `color-mix(in oklab, ${pillar.color} 16%, transparent)`,
                    }}
                  >
                    <Icon className="size-5" style={{ color: pillar.iconColor }} />
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
