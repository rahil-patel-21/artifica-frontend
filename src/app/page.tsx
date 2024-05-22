// Imports
import Dashboard from "./components/Dashboard/Dashboard";
import DefaultLayout from "./components/Dashboard/Layouts/DefaultLayout";

export default function Home() {
  return (
    <>
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  </>
  );
}
