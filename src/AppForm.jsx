import React from "react";
import { Formik, Field } from "formik/";
import styles from './styles.css'

const ContactForm = () => {

  const sendEmail = async (object) => {

    let response = await fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(object),
    });
    let result = await response.json();
    alert(result.status);
    console.log(object)
  };

  return (
    <Formik
      initialValues={{
        businessName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        businessPhone: '',
        website: '',
        howLongInBusiness: '',
        firstName: '',
        secondName: '',
        title: '',
        mobilePhone: '',
        email: '',
        benefit: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false)
          console.log(values)
          sendEmail(values)
          resetForm()
        }, 400)
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className={styles.apply__form}>
          <form onSubmit={handleSubmit}>
            <h3 className={styles.applyHeaders}>BUSINESS INFORMATION</h3>
            <div className={styles.businessInfo}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="text"> Business name</label>
                <Field
                  type="businessName"
                  name="businessName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.businessName && errors.businessName && (
                  <div className={styles.form__errors}>
                    {errors.businessName}
                  </div>
                )}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px 20px',
                  alignItems: 'stretch',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                  }}
                >
                  <label htmlFor="text">Street Address </label>
                  <Field
                    type="streetAddress"
                    name="streetAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.streetAddress && errors.streetAddress && (
                    <div className={styles.form__errors}>
                      {errors.streetAddress}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                  }}
                >
                  <label htmlFor="text">Street Address 2 </label>
                  <Field
                    type="streetAddress2"
                    name="streetAddress2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.streetAddress2 && errors.streetAddress2 && (
                    <div className={styles.form__errors}>
                      {errors.streetAddress2}
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '2 1 0',
                  }}
                >
                  <label htmlFor="text">City </label>
                  <Field
                    type="city"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.city && errors.city && (
                    <div className={styles.form__errors}>{errors.city}</div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 0',
                  }}
                >
                  <label htmlFor="text">State </label>
                  <Field
                    type="state"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.state && errors.state && (
                    <div className={styles.form__errors}>{errors.state}</div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 0',
                  }}
                >
                  <label htmlFor="text">Zip </label>
                  <Field
                    type="number"
                    name="zipCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.zipCode && errors.zipCode && (
                    <div className={styles.form__errors}>{errors.zipCode}</div>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 0',
                  }}
                >
                  <label htmlFor="phone">Business Phone </label>
                  <Field
                    type="number"
                    name="businessPhone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.businessPhone && errors.businessPhone && (
                    <div className={styles.form__errors}>
                      {errors.businessPhone}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '2 1 0',
                  }}
                >
                  <label htmlFor="text">Website </label>
                  <Field
                    type="website"
                    name="website"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.website && errors.website && (
                    <div className={styles.form__errors}>{errors.website}</div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 0',
                  }}
                >
                  <label htmlFor="text">How long in business </label>
                  <Field
                    type="howLongInBusiness"
                    name="howLongInBusiness"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.howLongInBusiness && errors.howLongInBusiness && (
                    <div className={styles.form__errors}>
                      {errors.howLongInBusiness}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <h3 className={styles.applyHeaders}>CONTACT PERSON</h3>
            <div className={styles.contactPersonInfo}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 0',
                  }}
                >
                  <label htmlFor="text">First Name </label>
                  <Field
                    type="name"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className={styles.form__errors}>
                      {errors.firstName}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '2 1 0',
                  }}
                >
                  <label htmlFor="text">Second name </label>
                  <Field
                    type="name"
                    name="secondName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.secondName && errors.secondName && (
                    <div className={styles.form__errors}>
                      {errors.secondName}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 0',
                  }}
                >
                  <label htmlFor="text">Title </label>
                  <Field
                    type="name"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.title && errors.title && (
                    <div className={styles.form__errors}>{errors.title}</div>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '40px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 2 0',
                  }}
                >
                  <label htmlFor="phone">Mobile phone </label>
                  <Field
                    type="number"
                    name="mobilePhone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.mobilePhone && errors.mobilePhone && (
                    <div className={styles.form__errors}>
                      {errors.mobilePhone}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '2 1 0',
                  }}
                >
                  <label htmlFor="email">Email </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <div className={styles.form__errors}>{errors.email}</div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className={styles.applyHeaders}>DEALERSHIP INFORMATION</h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px 15px',
                }}
              >
                <div id="my-radio-group-business-type">Type of business</div>
                <div
                  role="group"
                  aria-labelledby="my-radio-group-business-type"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                  }}
                >
                  <label>
                    <Field
                      className="radioButton"
                      type="radio"
                      name="typeOfBusiness"
                      value="OEM Dealership"
                    />
                    OEM Dealership
                  </label>
                  <label>
                    <Field
                      className="radioButton"
                      type="radio"
                      name="typeOfBusiness"
                      value="Parts & Accessories Store"
                    />
                    Parts & Accessories Store
                  </label>
                  <label>
                    <Field
                      className="radioButton"
                      type="radio"
                      name="typeOfBusiness"
                      value="Service Shop"
                    />
                    Service Shop
                  </label>
                  <label>
                    <input
                      className="radioButton"
                      type="radio"
                      name="typeOfBusiness"
                      value="Internet"
                    />
                    Internet
                  </label>
                  <label>
                    <Field
                      className="radioButton"
                      type="radio"
                      name="typeOfBusiness"
                      value="Amazon Seller"
                    />
                    Amazon Seller
                  </label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div id="checkbox-group-interested-brands">
                    What brands are you interested in?
                  </div>
                  <div
                    role="group"
                    aria-labelledby="checkbox-group-interested-brands"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                    }}
                  >
                    <label>
                      <Field type="checkbox" name="brands" value="Shoei" />
                      Shoei
                    </label>
                    <label>
                      <Field type="checkbox" name="brands" value="HJC" />
                      HJC
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="brands"
                        value="Alpinestars"
                      />
                      Alpinestars
                    </label>
                    <label>
                      <Field type="checkbox" name="brands" value="Cortech" />
                      Cortech
                    </label>
                    <label>
                      <Field type="checkbox" name="brands" value="Tourmaster" />
                      Tourmaster
                    </label>
                    <label>
                      <Field type="checkbox" name="brands" value="Noru" />
                      Noru
                    </label>
                    <label>
                      <Field type="checkbox" name="brands" value="Molecule" />
                      Molecule
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="brands"
                        value="Transitions"
                      />
                      Transitions
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div id="checkbox-group-authorized">
                    Are you currently an authorized dealer with other
                    aftermarket distributors? if yes, please indicate which
                    companies
                  </div>
                  <div
                    role="group"
                    aria-labelledby="checkbox-group-authorized"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                    }}
                  >
                    <label>
                      <Field
                        type="checkbox"
                        name="dealerAt"
                        value="Parts Unlimited"
                      />
                      Parts Unlimited
                    </label>
                    <label>
                      <Field type="checkbox" name="dealerAt" value="Tucker" />
                      Tucker
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="dealerAt"
                        value="Western Power Sports"
                      />
                      Western Power Sports
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="dealerAt"
                        value="Sullivan`s"
                      />
                      Sullivan`s
                    </label>
                    <label>
                      <Field type="checkbox" name="dealerAt" value="Other" />
                      Other
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div id="my-radio-group-way-of-selling">
                    Wil you sell Helmet House products using the Internet? If
                    yes, please indicate what percentage of products gets sold
                    via e-commerce
                  </div>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group-way-of-selling"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                    }}
                  >
                    <label>
                      <Field
                        type="radio"
                        name="percentageViaEcom"
                        value="0-25%"
                      />
                      0-25%
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="percentageViaEcom"
                        value="25-50%"
                      />
                      25-50%
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="percentageViaEcom"
                        value="50-75%"
                      />
                      50-75%
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="percentageViaEcom"
                        value="75-100%"
                      />
                      75-100%
                    </label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  paddingBottom: '1rem',
                }}
              >
                <p>
                  <label htmlFor="text">
                    Tell us why you business would be benefit from selling
                    Helmet House products.
                  </label>
                </p>
                <Field
                  style={{ minHeight: '3rem' }}
                  name="benefit"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <div>
              <p>
                *Receipt of this form does not constitute an offer of dealership
                by Helmet House LLC
              </p>
              <p>
                **Incomplete forms will not be considered, please be as thorough
                as possible
              </p>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;

