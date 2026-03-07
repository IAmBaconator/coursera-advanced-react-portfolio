import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "./hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import {
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      await submit("/api/contact", values);
      if (response) {
        onOpen(response.type, response.message);
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <div style={{ width: '100%', maxWidth: '28rem', padding: '2rem', textAlign: 'left' }}>
        <h1 id="contactme-section" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact me</h1>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input {...formik.getFieldProps('firstName')} id="firstName" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }} />
              {formik.errors.firstName && formik.touched.firstName && (
                <p style={{ color: 'red', fontSize: '14px', marginTop: '0.25rem' }}>{formik.errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
              <input {...formik.getFieldProps('email')} id="email" type="email" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }} />
              {formik.errors.email && formik.touched.email && (
                <p style={{ color: 'red', fontSize: '14px', marginTop: '0.25rem' }}>{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="type" style={{ display: 'block', marginBottom: '0.5rem' }}>Type of enquiry</label>
              <select {...formik.getFieldProps('type')} id="type" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }}>
                <option value="">Select type</option>
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">Open source consultancy session</option>
                <option value="other">Other</option>
              </select>
              {formik.errors.type && formik.touched.type && (
                <p style={{ color: 'red', fontSize: '14px', marginTop: '0.25rem' }}>{formik.errors.type}</p>
              )}
            </div>
            <div>
              <label htmlFor="comment" style={{ display: 'block', marginBottom: '0.5rem' }}>Your message</label>
              <textarea {...formik.getFieldProps('comment')} id="comment" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem', minHeight: '5rem' }} />
              {formik.errors.comment && formik.touched.comment && (
                <p style={{ color: 'red', fontSize: '14px', marginTop: '0.25rem' }}>{formik.errors.comment}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              style={{ padding: '0.5rem 1rem', backgroundColor: isLoading ? '#ccc' : '#319795', color: 'white', border: 'none', borderRadius: '0.25rem', cursor: isLoading ? 'not-allowed' : 'pointer' }}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </FullScreenSection>
  );
};

export default ContactMeSection;