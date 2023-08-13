import dynamic from "next/dynamic";

const AboutUsView = dynamic(() => import("@features/aboutUs/view"));

const AboutUsPage = () => {
	return <AboutUsView />;
};

export default AboutUsPage;
