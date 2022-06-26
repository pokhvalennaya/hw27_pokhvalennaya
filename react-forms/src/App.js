import RegistrationForm from "./components/RegistrationForm";
import UserProfileForm from "./components/UserProfileForm";

function App() {
  return (
    <div className="form-block">
      <h2 className="heading">Registration form</h2>
      <RegistrationForm />
      <h2 className="heading">User form</h2>
      <UserProfileForm />
    </div>
  );
}

export default App;
