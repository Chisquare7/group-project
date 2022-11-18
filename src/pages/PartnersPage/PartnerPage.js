import React from 'react'
import heroIcon from "../../myAssets/hero__image.png";
import layoutIcon from "../../myAssets/layout__three-hero.png";
import footIcon from "../../myAssets/footer__init.png";
import google from "../../myAssets/google.png";
import microsoft from "../../myAssets/microsoft.png";
import hotel from "../../myAssets/hotel.png";
import payooneer from "../../myAssets/payooneer.png";

const PartnerPage = () => {
  return (
		<div>
			<section className="first__sect">
				<div className="sect__container">
					<div>
						<div className="first__sect-right">
							<img src={heroIcon} alt="Hero icon of the page" />
						</div>
						<div className="first__sect-left">
							<div className="first__heading">
								<h1 className="first__sect-head">
									Grow with us, Become a Partner
								</h1>
							</div>
							<div className="first__subhead">
								<p className="first__sect-subtext">
									Once you become a partner, we recognize you officially as a
									VIP User of Srcybe with added features and benefits.
									Let&apos;s work together. Join our community of partners to
									grow your business and solve the problems of others.{" "}
									<span className="first__inline">
										<a href="/" className="first__inline-text">
											Learn more
										</a>
									</span>
								</p>
							</div>
							<div className="first__sect-input">
								<input
									type="email"
									placeholder="Email address"
									className="first__input-field"
								/>
								<input
									type="submit"
									value="Become a Partner"
									className="first__input-btn"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="second__sect">
				<div className="sect__container">
					<div className="second__sect-content">
						<div className="second__each">
							<img src={google} alt="google-icon" />
						</div>
						<div className="second__each">
							<img src={microsoft} alt="microsoft-icon" />
						</div>
						<div className="second__each">
							<img src={hotel} alt=" hotel-icon" />
						</div>
						<div className="second__each">
							<img src={payooneer} alt="payooneer" />
						</div>
					</div>
				</div>
			</section>
			<section className="third__section">
				<div className="sect__container">
					<div>
						<img src={layoutIcon} alt="Layout three section hero icon" />
					</div>
					<div>
						<h2>Why Join Our Partner Program</h2>
						<div>
							<div>
								<div />
								<div>
									<h4>Service Offering </h4>
									<div>
										<p>
											Increase the value of your customer service, get VIP
											access to the most intelligent tool to help your business
											grow
										</p>
									</div>
								</div>
							</div>
							<div>
								<div />
								<div>
									<h4>VIP training & Onboarding </h4>
									<div>
										<p>
											Full access to our learning library, for your entire team
											to receive product training and our premium onboarding
											packages
										</p>
									</div>
								</div>
							</div>
							<div>
								<div />
								<div>
									<h4>Marketing Support</h4>
									<p>
										We will work together to create awareness of your
										company/agency through opportunity, event
										invitation/partnership, co-marketing initiatives, etc.
									</p>
								</div>
							</div>
							<div>
								<div />
								<div>
									<h4>Shared Revenue</h4>
									<p>
										A special reward for each referral, measured with an
										industry-leading revenue share
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p>
							For more inquiries and questions on our partner&apos;s program,
							send a mail to partner@scrybe.com
						</p>
					</div>
				</div>
			</section>
			<section className="fourth__section">
				<div className="sect__container">
					<div>
						<div>
							<h3>Help more companies discover the power of Scrybe</h3>
						</div>
						<div>
							<button type="button">Join our Premium Partners Today</button>
						</div>
					</div>
				</div>
			</section>
			<section className="fifth__section">
				<div className="sect__container">
					<div>
						<div>
							<h2>Partner with Scrybe</h2>
							<div>
								<p>
									Drop details below and we get back to you as soon as possible
								</p>
							</div>
						</div>
						<div>
							<form>
								<div>
									<div>
										<div>
											<label htmlFor="company__name">
												Company Name
												<input
													type="text"
													id="company__name"
													placeholder="Enter your company name"
												/>
											</label>
										</div>
										<div>
											<label htmlFor="company__email">
												Company Email
												<input
													type="email"
													id="company__email"
													placeholder="Enter your company email"
												/>
											</label>
										</div>
									</div>
									<div>
										<div>
											<label htmlFor="employees__number">
												Number of Employees
												<input
													type="number"
													id="employees__number"
													placeholder="E.g:  24"
												/>
											</label>
										</div>
										<div>
											<label htmlFor="customer__number">
												Number of Customers
												<input
													type="number"
													id="customer__number"
													placeholder="E.g:  24"
												/>
											</label>
										</div>
									</div>
									<div>
										<label htmlFor="customer__address">
											Company Address
											<input
												type="text"
												id="customer__address"
												placeholder="Enter your company address"
											/>
										</label>
									</div>
									<div>
										<div>
											<label htmlFor="city">
												City
												<input type="text" id="city" placeholder="City" />
											</label>
										</div>
										<div>
											<label htmlFor="state">
												State/Province
												<input
													type="text"
													id="state"
													placeholder="State/Province"
												/>
											</label>
										</div>
									</div>
									<div>
										<input type="submit" id="submit__btn" value="SUBMIT" />
									</div>
								</div>
							</form>
						</div>
					</div>
					<div>
						<div>
							<div>
								<h5>Getting Started is Easy</h5>
								<div>
									<p>
										Wr are confident that you will get the best value from our
										products
									</p>
								</div>
								<div>
									<button type="button">Try for Free</button>
									<button type="submit">Schedule a Demo</button>
								</div>
							</div>
							<div>
								<img src={footIcon} alt="Icon before the footer" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PartnerPage