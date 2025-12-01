import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';

const Dashboard = () => {
  return (
    <DashboardLayout title="Vue d'ensemble">
      <DashboardOverview />
    </DashboardLayout>
  );
};

export default Dashboard;
