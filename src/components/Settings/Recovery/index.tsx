import NotLoggedIn from "@/components/Shared/NotLoggedIn";
import PageLayout from "@/components/Shared/PageLayout";
import { useAccountStore } from "@/store/persisted/useAccountStore";
import RecoverySettingsForm from "./Form";

const RecoverySettings = () => {
  const { currentAccount } = useAccountStore();

  if (!currentAccount) {
    return <NotLoggedIn />;
  }

  return (
    <PageLayout title="Recovery settings">
      <RecoverySettingsForm />
    </PageLayout>
  );
};

export default RecoverySettings;
