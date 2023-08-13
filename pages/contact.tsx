import dynamic from "next/dynamic";

const ContactView = dynamic(() => import("@features/contact/view"));

const ContactPage = () => {
	return <ContactView />;
};

export default ContactPage;
