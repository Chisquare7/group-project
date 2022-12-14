import React from "react";
import styles from "./press.module.scss";
import { Link } from "react-router-dom";
import pressCardone from "../myAssets/pressCardone.png";
import pressCardtwo from "../myAssets/pressCardtwo.png";
import pressCardthree from "../myAssets/pressCardthree.png";
import pressSmcardOne from "../myAssets/pressSmcardOne.png";
import pressSmcardTwo from "../myAssets/pressSmcardTwo.png";
import pressSmcard from "../myAssets/pressSmcard.png";
import headDot from "../myAssets/headDot.png";
import arrowLeft from "../myAssets/arrow__left.png";
import whiteArrowleft from "../myAssets/whiteArrowleft.png";
import logoText from "../myAssets/logoText.png";
import bannerImage from "../myAssets/bannerImage.png";
import cardlogo from "../myAssets/cardlogo.png";

const index = () => {
  return (
		<div>
			<section className={styles.section__one}>
				<div className={styles.sect__container}>
					<div className={styles.hero__heading}>
						<h1 className={styles.hero__head}>
							<span className={styles.hero__inline}>News</span>room
							<span>
								<img src={headDot} alt="Full stop" />
							</span>
						</h1>
					</div>
					<div className={styles.hero__subhead}>
						<p className={styles.hero__subtext}>
							Get access to our news, Updates, and Notifications
						</p>
					</div>
				</div>
			</section>
			<section
				className={styles.section__two}
				style={{
					backgroundImage: `url(${bannerImage})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: 250,
					width: "100%",
				}}
			>
				<div className={styles.sect__container}>
					<div className={styles.banner__flex}>
						<div className={styles.left__ban}>
							<div className={styles.ban__heading}>
								<h2 className={styles.ban__head}>Article of the day</h2>
							</div>
							<div className={styles.ban__subhead}>
								<p className={styles.ban__subtext}>
									Aspect based sentiment analysis using multi-criteria
									decision-making and deep learning under COVID-19 pandemic
								</p>
							</div>
						</div>
						<div className={styles.right__ban}>
							<div className={styles.banner__details}>
								<Link className={styles.banner__read} to="/PressArticle">
									Read more
								</Link>
								<span>
									<img
										src={whiteArrowleft}
										alt="Arrow action to another"
										className={styles.arrowpoint}
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.section__three}>
				<div className={styles.sect__container}>
					<div className={styles.three__center}>
						<div className={styles.three__left}>
							<img src={logoText} alt="Scrybe Text" />
						</div>
						<div className={styles.three__right}>
							<div className={styles.three__top}>
								<p className={styles.three__heading}>
									An AI powered tool tailored for customers success and
									satisfaction
								</p>
							</div>
							<div className={styles.three__bottom}>
								<div className={styles.three__flex}>
									<div className={styles.three__each}>
										<p className={styles.three__head}>2022</p>
										<p className={styles.three__text}>Founded</p>
									</div>
									<div className={styles.three__each}>
										<p className={styles.three__head}>20+</p>
										<p className={styles.three__text}>Active Users</p>
									</div>
								</div>
								<div className={styles.three__flex}>
									<div className={styles.three__each}>
										<p className={styles.three__head}>200+</p>
										<p className={styles.three__text}>Employees</p>
									</div>
									<div className={styles.three__each}>
										<p className={styles.three__head}>Headquartered</p>
										<p className={styles.three__text}>in Abuja Nigeria</p>
									</div>
								</div>
								<div className={styles.three__sep}>
									<p className={styles.three__head}>Get in touch</p>
									<p className={styles.three__text}>info@scrybe.co.za</p>
								</div>
							</div>
						</div>
						<div className={styles.three__desktop}>
							<div className={styles.three__top}>
								<p className={styles.three__heading}>
									An AI powered tool tailored for customers success and
									satisfaction
								</p>
							</div>
							<div className={styles.three__bottom}>
								<div className={styles.three__flex}>
									<div className={styles.three__each}>
										<p className={styles.three__head}>2022</p>
										<p className={styles.three__text}>Founded</p>
									</div>
									<div className={styles.three__each}>
										<p className={styles.three__head}>20+</p>
										<p className={styles.three__text}>Active Users</p>
									</div>
									<div className={styles.three__each}>
										<p className={styles.three__head}>Get in touch</p>
										<p className={styles.three__text}>info@scrybe.co.za</p>
									</div>
								</div>
								<div className={styles.three__flexed}>
									<div className={styles.three__sep}>
										<p className={styles.three__head}>200+</p>
										<p className={styles.three__text}>Employees</p>
									</div>
									<div className={styles.three__sep}>
										<p className={styles.three__head}>Headquartered</p>
										<p className={styles.three__text}>in Abuja Nigeria</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.section__four}>
				<div className={styles.sect__container}>
					<div className={styles.four__heading}>
						<h2 className={styles.four__head}>Featured</h2>
					</div>
					<div className={styles.four__cards}>
						<div
							className={styles.card__container}
							style={{
								backgroundImage: `url(${pressCardone})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								height: 180,
								width: 180,
							}}
						>
							<div className={styles.card__content}>
								<div className={styles.card__heading}>
									<h3 className={styles.card__head}>
										Pricing <br /> Update
									</h3>
								</div>
								<div className={styles.card__subhead}>
									<p className={styles.card__subtext}>
										Scrybre was birthed from the need to provide a more...
									</p>
								</div>
								<div className={styles.banner__details}>
									<a className={styles.banner__read} href="/">
										Learn more
									</a>
									<span>
										<img
											src={whiteArrowleft}
											alt="Arrow action to another"
											className={styles.arrowpoint}
										/>
									</span>
								</div>
							</div>
						</div>
						<div
							className={styles.card__container}
							style={{
								backgroundImage: `url(${pressCardtwo})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								height: 180,
								width: 180,
							}}
						>
							<div className={styles.card__content}>
								<div className={styles.card__heading}>
									<h3 className={styles.card__head}>The Partnership</h3>
								</div>
								<div className={styles.card__logo}>
									<img src={cardlogo} alt="Logo of scrybe and hotel ng" />
								</div>
								<div className={styles.banner__details}>
									<a className={styles.banner__read} href="/">
										Learn more
									</a>
									<span>
										<img
											src={whiteArrowleft}
											alt="Arrow action to another"
											className={styles.arrowpoint}
										/>
									</span>
								</div>
							</div>
						</div>
						<div
							className={styles.card__container}
							style={{
								backgroundImage: `url(${pressCardthree})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								height: 180,
								width: 180,
							}}
						>
							<div className={styles.card__content}>
								<div className={styles.card__heading}>
									<h3 className={styles.card__head}>Our Success Story</h3>
								</div>
								<div className={styles.card__subhead}>
									<p className={styles.card__subtext}>
										Scrybre was birthed from the need to provide a more...
									</p>
								</div>
								<div className={styles.banner__details}>
									<a className={styles.banner__read} href="/">
										Learn more
									</a>
									<span>
										<img
											src={whiteArrowleft}
											alt="Arrow action to another"
											className={styles.arrowpoint}
										/>
									</span>
								</div>
							</div>
						</div>
						<div
							className={styles.card__container}
							style={{
								backgroundImage: `url(${pressCardone})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								height: 180,
								width: 180,
							}}
						>
							<div className={styles.card__content}>
								<div className={styles.card__heading}>
									<h3 className={styles.card__head}>
										Pricing <br /> Update
									</h3>
								</div>
								<div className={styles.card__subhead}>
									<p className={styles.card__subtext}>
										Scrybre was birthed from the need to provide a more...
									</p>
								</div>
								<div className={styles.banner__details}>
									<a className={styles.banner__read} href="/">
										Learn more
									</a>
									<span>
										<img
											src={whiteArrowleft}
											alt="Arrow action to another"
											className={styles.arrowpoint}
										/>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.section__five}>
				<div className={styles.sect__container}>
					<div className={styles.five__top}>
						<div className={styles.five__links}>
							<a href="/" className={styles.point__link}>
								Latest news
							</a>
						</div>
						<div className={styles.five__pointlinks}>
							<a href="/" className={styles.point__link}>
								Brand guideline
							</a>
						</div>
					</div>
					<div className={styles.five__desktop}>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardOne}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Twitter users commend the rising transcription and sentiment
									analysis tool- Scrybe.
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									We&apos;ve seen scrybers take to twitt..
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardTwo}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Aspect based sentiment analysis using multi-criteria
									decision-making
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									The covid-19 pandemic has had a significant impact on the
									global a
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcard}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Twitter users commend the rising transcription and sentiment
									analysis tool- Scrybe.
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									We&apos;ve seen scrybers take to twitt..
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcard}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Twitter users commend the rising transcription and sentiment
									analysis tool- Scrybe.
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									We&apos;ve seen scrybers take to twitt..
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardTwo}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Aspect based sentiment analysis using multi-criteria
									decision-making
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									The covid-19 pandemic has had a significant impact on the
									global a
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardOne}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Twitter users commend the rising transcription and sentiment
									analysis tool- Scrybe.
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									We&apos;ve seen scrybers take to twitt..
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardTwo}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Aspect based sentiment analysis using multi-criteria
									decision-making
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									The covid-19 pandemic has had a significant impact on the
									global a
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardTwo}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Aspect based sentiment analysis using multi-criteria
									decision-making
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									The covid-19 pandemic has had a significant impact on the
									global a
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
					</div>
					<div className={styles.five__bottom}>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardOne}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Social Media sentiment analysis using twitter datasets
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									Several hundreds of thousands of raw data are...
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
						<div className={styles.five__articles}>
							<div className={styles.article__icon}>
								<img
									src={pressSmcardTwo}
									alt="Icon of Press cards"
									className={styles.each__icon}
								/>
							</div>
							<div className={styles.five__heading}>
								<h3 className={styles.five__head}>
									Social Media sentiment analysis using twitter datasets
								</h3>
							</div>
							<div className={styles.five__subtext}>
								<p className={styles.five__texts}>
									Several hundreds of thousands of raw data are...
								</p>
							</div>
							<div className={styles.more__details}>
								<a className={styles.read__more} href="/">
									Read more
								</a>
								<span>
									<img
										src={arrowLeft}
										alt="Arrow action to another"
										className={styles.arrowleft}
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default index;
