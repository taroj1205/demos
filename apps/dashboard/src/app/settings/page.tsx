import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Mail,
  Phone,
  Building,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

// Force dynamic rendering
export const dynamic = "force-dynamic";

// Mock settings data
async function getSettingsData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    profile: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      company: "Acme Corp",
      bio: "Product manager with 5+ years of experience in building user-centric applications.",
      avatar: "https://avatar.vercel.sh/john",
    },
    notifications: {
      email: true,
      push: false,
      sms: true,
      marketing: false,
    },
    security: {
      twoFactor: true,
      loginAlerts: true,
      sessionTimeout: 30,
    },
    appearance: {
      theme: "light",
      language: "en",
      timezone: "UTC-8",
    },
  };
}

async function ProfileSettings() {
  const data = await getSettingsData();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <CardTitle>Profile Settings</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-6">
          <div className="relative h-20 w-20 rounded-full bg-gray-100 overflow-hidden">
            <img
              src={data.profile.avatar}
              alt={data.profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <Button variant="outline" size="sm">
              Change Avatar
            </Button>
            <p className="text-sm text-muted-foreground">
              JPG, PNG or GIF. Max size 2MB.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue={data.profile.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={data.profile.email} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" defaultValue={data.profile.phone} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" defaultValue={data.profile.company} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            defaultValue={data.profile.bio}
            placeholder="Tell us about yourself..."
            rows={3}
          />
        </div>

        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
}

async function NotificationSettings() {
  const data = await getSettingsData();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <CardTitle>Notification Preferences</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Email Notifications</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive updates via email
              </p>
            </div>
            <Badge variant={data.notifications.email ? "default" : "secondary"}>
              {data.notifications.email ? "Enabled" : "Disabled"}
            </Badge>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Push Notifications</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Browser push notifications
              </p>
            </div>
            <Badge variant={data.notifications.push ? "default" : "secondary"}>
              {data.notifications.push ? "Enabled" : "Disabled"}
            </Badge>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">SMS Notifications</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Important alerts via SMS
              </p>
            </div>
            <Badge variant={data.notifications.sms ? "default" : "secondary"}>
              {data.notifications.sms ? "Enabled" : "Disabled"}
            </Badge>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Marketing Emails</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Product updates and tips
              </p>
            </div>
            <Badge
              variant={data.notifications.marketing ? "default" : "secondary"}
            >
              {data.notifications.marketing ? "Enabled" : "Disabled"}
            </Badge>
          </div>
        </div>

        <Button variant="outline">
          <Save className="mr-2 h-4 w-4" />
          Update Preferences
        </Button>
      </CardContent>
    </Card>
  );
}

async function SecuritySettings() {
  const data = await getSettingsData();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5" />
          <CardTitle>Security & Privacy</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-medium">Two-Factor Authentication</span>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant={data.security.twoFactor ? "default" : "secondary"}
              >
                {data.security.twoFactor ? "Enabled" : "Disabled"}
              </Badge>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-medium">Login Alerts</span>
              <p className="text-sm text-muted-foreground">
                Get notified of new logins
              </p>
            </div>
            <Badge
              variant={data.security.loginAlerts ? "default" : "secondary"}
            >
              {data.security.loginAlerts ? "Enabled" : "Disabled"}
            </Badge>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-medium">Session Timeout</span>
              <p className="text-sm text-muted-foreground">
                Auto logout after {data.security.sessionTimeout} minutes
              </p>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              id="current-password"
              type="password"
              placeholder="Enter current password"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>

        <Button>
          <Save className="mr-2 h-4 w-4" />
          Update Security
        </Button>
      </CardContent>
    </Card>
  );
}

async function AppearanceSettings() {
  const data = await getSettingsData();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Palette className="h-5 w-5" />
          <CardTitle>Appearance & Localization</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <select
              id="theme"
              defaultValue={data.appearance.theme}
              className="w-full p-2 border rounded-md"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <select
              id="language"
              defaultValue={data.appearance.language}
              className="w-full p-2 border rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <select
              id="timezone"
              defaultValue={data.appearance.timezone}
              className="w-full p-2 border rounded-md"
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>
        </div>

        <Button variant="outline">
          <Save className="mr-2 h-4 w-4" />
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
}

// Loading skeletons
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

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid gap-6">
        <Suspense
          fallback={
            <SettingsCardSkeleton title="Profile Settings" icon={User} />
          }
        >
          <ProfileSettings />
        </Suspense>

        <Suspense
          fallback={
            <SettingsCardSkeleton
              title="Notification Preferences"
              icon={Bell}
            />
          }
        >
          <NotificationSettings />
        </Suspense>

        <Suspense
          fallback={
            <SettingsCardSkeleton title="Security & Privacy" icon={Shield} />
          }
        >
          <SecuritySettings />
        </Suspense>

        <Suspense
          fallback={
            <SettingsCardSkeleton
              title="Appearance & Localization"
              icon={Palette}
            />
          }
        >
          <AppearanceSettings />
        </Suspense>
      </div>
    </div>
  );
}
