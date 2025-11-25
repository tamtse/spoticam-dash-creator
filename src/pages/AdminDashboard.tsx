import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { Users, Activity, TrendingUp, Database, Shield, Settings, FileText, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const stats = [
    { icon: Users, label: "Total Users", value: "12,456", trend: "+8%", trendUp: true },
    { icon: Activity, label: "Active Sessions", value: "3,421", trend: "+12%", trendUp: true },
    { icon: TrendingUp, label: "Growth Rate", value: "18.5%", trend: "+3%", trendUp: true },
    { icon: Database, label: "Data Quality", value: "92%", trend: "+5%", trendUp: true },
  ];

  const userActivity = [
    { persona: "Artists", count: 2845, percentage: 23, activity: "High" },
    { persona: "Curators", count: 1234, percentage: 10, activity: "Medium" },
    { persona: "Labels", count: 567, percentage: 5, activity: "Medium" },
    { persona: "Listeners", count: 7810, percentage: 62, activity: "High" },
  ];

  const systemHealth = [
    { metric: "API Response Time", value: "120ms", status: "good" },
    { metric: "Database Load", value: "45%", status: "good" },
    { metric: "Error Rate", value: "0.3%", status: "good" },
    { metric: "Uptime", value: "99.9%", status: "excellent" },
  ];

  const pendingActions = [
    { type: "Profile Validation", count: 15, priority: "high" },
    { type: "Metadata Review", count: 8, priority: "medium" },
    { type: "User Reports", count: 3, priority: "high" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">System overview and management</p>
          </div>

          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <Tabs defaultValue="users" className="space-y-6">
              <TabsList>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="moderation">Moderation</TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* User Activity by Persona */}
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        User Activity by Persona
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userActivity.map((item, index) => (
                          <div key={index} className="p-4 rounded-lg bg-muted/50">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">{item.persona}</h4>
                              <Badge variant={item.activity === "High" ? "default" : "secondary"}>
                                {item.activity}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>{item.count} users</span>
                              <span>{item.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pending Actions */}
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Pending Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {pendingActions.map((action, index) => (
                          <div key={index} className="p-4 rounded-lg border border-border">
                            <div className="flex justify-between items-center mb-3">
                              <div>
                                <h4 className="font-semibold">{action.type}</h4>
                                <p className="text-sm text-muted-foreground">{action.count} items</p>
                              </div>
                              <Badge variant={action.priority === "high" ? "destructive" : "secondary"}>
                                {action.priority}
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline" className="w-full">
                              Review
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="system" className="space-y-6">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      System Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {systemHealth.map((item, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted/50">
                          <p className="text-sm text-muted-foreground mb-2">{item.metric}</p>
                          <p className="text-2xl font-bold mb-2">{item.value}</p>
                          <Badge variant={item.status === "excellent" ? "default" : "secondary"}>
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="w-5 h-5" />
                      Advanced Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-6 rounded-lg bg-muted/50 text-center">
                        <p className="text-muted-foreground">Analytics dashboard coming soon</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Detailed metrics on user conversion, metadata quality, and API distribution
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="moderation" className="space-y-6">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Moderation Queue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-6 rounded-lg bg-muted/50 text-center">
                        <p className="text-muted-foreground">No pending moderation items</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Quick Actions */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Manage Permissions
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    User Management
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    System Settings
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <BarChart className="w-4 h-4" />
                    Export Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
