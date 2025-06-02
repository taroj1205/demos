import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Shield, Palette } from "lucide-react";

function SettingsCardSkeleton({
  title,
  icon: Icon,
}: {
  title: string;
  icon: any;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5" />
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
      </CardContent>
    </Card>
  );
}

export default function SettingsLoading() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid gap-6">
        <SettingsCardSkeleton title="Profile Settings" icon={User} />
        <SettingsCardSkeleton title="Notification Preferences" icon={Bell} />
        <SettingsCardSkeleton title="Security & Privacy" icon={Shield} />
        <SettingsCardSkeleton
          title="Appearance & Localization"
          icon={Palette}
        />
      </div>
    </div>
  );
}
