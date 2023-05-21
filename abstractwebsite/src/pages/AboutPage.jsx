import AboutBlock from "../components/AboutBlock"
import first from "../../public/images/first.png"
import second from "../../public/images/second.png"
import third from "../../public/images/third.png"
import fourth from "../../public/images/fourth.png"
import fifth from "../../public/images/fifth.png"
import sixth from "../../public/images/sixth.png"
const AboutPage = () => {
  return (
    <>
        <div className="grid w-4/5 gap-y-24 py-24 mx-auto md:grid-cols-2 md:gap-x-14">

        <AboutBlock img={first} title="using abstract" para="Abstract lets you manage, version, and document your designs in one place." />
        <AboutBlock img={second} title="manage your account" para="Configure your account settings, such as your email, profile details, and password." />
        <AboutBlock img={third} title="manage organizations, teams, and projects" para="Use Abstract organizations, teams, and projects to organize your people and your work." />
        <AboutBlock img={fourth} title="manage billing" para="Change subscriptions and payment details." />
        <AboutBlock img={fifth} title="authenticate to abstract" para="Set up and configure SSO, SCIM, and Just-in-Time provisioning." />
        <AboutBlock img={sixth} title="abstract support" para="Get in touch with a human." />
        </div>
      
    </>
  )
}

export default AboutPage
