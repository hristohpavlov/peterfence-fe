import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';
import ContactUsModal from '../components/ContactUsModal';
import { Helmet } from 'react-helmet';

const About: NextPage = () => {

    return (
        <>
            <Helmet>
                <title>About - Discover More About Acacia Wood Fencing</title>
                <meta name="description" content="We specialise in the production and supply of Use Class 4 wooden fencing and provide the greatest return on your investment. Find out more by visiting our website." />
                <link rel="canonical" href="https://peterfence.com/about" />
            </Helmet>
            <section id="hero">
                <div className={classNames("container", styles.container_center)}>
                    <h1 className={classNames("text-center m-5 p-5", styles.text_custom)}>About Us</h1>
                    <div className={classNames("divider", styles.divider)}></div>
                    <p className={classNames("mt-5 pt-5 m-5", styles.text_custom_1)}>
                        Coming from a farming background, we have been manufacturing and supplying the highest quality wooden fencing not just for the agricultural and rural communities but also for modern gardeners intending to secure property boundaries in style and with ease.
                        <br />
                        <br />
                        As a sustainable supplier, we pride ourselves on processing and cultivating only the fast-growing acacia trees, which are ideal for all exterior projects due to their natural high density and resilience to adverse weather conditions. Sourced from European forests, acacia is an ecological hardwood which stands out for its low environmental impact (its low carbon footprint) compared to its exotic competitors which are becoming more expensive due to rising shipping costs.
                        <br />
                        <br />
                        <br />
                        According to both the British Standards Institution (BSI) and the Commonwealth Standards Network (CSN), acacia is the only European wood species that falls under Use Class 4 and is accordingly suitable for outdoor use in contact with soil and fresh water since it exhibits good elasticity in terms of stiffness, flexural strength and environmental impact resistance, as per British Standard EN 335:2013. Please note, Use Class 3 woods such as chestnut and hazel can also be used outdoors but they are not to come in contact with the ground.
                        <br />
                        <br />
                        The natural durability of acacia’s heartwood against wood-destroying agents such as wood decay fungi, insects, marine borers and bacteria has been tested and assessed (considered in BS EN 350:2016). In fact, it is the chemical substances found in acacia trees – polyphenols (more specifically, flavonoids) and radical scavengers that give the wood its natural durability and make it resistant to biological degradation.
                        <br />
                        <br />
                        <br />
                        Acacia’s natural durability, mechanical strength and aesthetic qualities make it perfect for creating outdoor green spaces, decking, gardening, horticulture, viticulture, arboriculture, agriculture, equestrian fencing, hunting and other outdoor sports facilities, interior carpentry, flooring, wall panels, coverings and cladding.
                        <br />
                        <br />
                        The use of acacia wood ensures the maximum service life of your product.
                        <br />
                        The lifespan of acacia is minimum 30 years when in contact with the ground.
                        <br />
                        <br />
                        <b>PETERFENCE</b> provides you with peace of mind through robust quality assurance processes, control plans, Production Part Approval Process (PPAP) documentation and quality certified manufacturing. Our reputation rests on the quality of the service we offer, so we consistently deliver thorough support with tact and confidence.
                        <br />
                        <br />
                        If have decided to collaborate with us, please do not hesitate to contact us for more information. Thank you.
                    </p>
                    <div className={classNames("divider", styles.divider)}></div>
                    <br />
                    <div className="text-center">
                        <ContactUsModal></ContactUsModal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;