'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import SiteFooter from '../../components/SiteFooter';
import Link from '../../components/Link';
import Navbar from '../../components/Navbar';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Using FormSubmit.co for reliable email delivery without backend infrastructure
      const response = await fetch("https://formsubmit.co/ajax/raadj@tapintothecloud.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        // Scroll to top of form area to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Added scale-down-laptop class to wrapper
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#081A57] pt-[80px] scale-down-laptop">
      
      {/* Universal Navigation */}
      <Navbar variant="solid" />

      <main className="flex-grow">
        
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="inline-block bg-[#081A57] text-white px-8 py-3 text-2xl md:text-3xl lg:text-4xl font-black font-sans uppercase tracking-tight mb-4 shadow-xl">
              Contact Tap-IT
            </div>
            {/* OPTIMIZATION: Updated sizing to match 2xl styles on lg screens (zoomed) */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans uppercase text-[#081A57] tracking-tight">
              Let's make IT simple.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column: Visual */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto rounded-2xl overflow-hidden shadow-2xl group">
               <img 
                 src="https://storage.googleapis.com/tap-it-assets-eu/f1%20amsterdam.jpeg" 
                 alt="F1 Car on Track" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#081A57]/90 via-transparent to-transparent"></div>
               
               {/* Overlay Text */}
               <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                  <div className="w-12 h-1 bg-[#3A6EFF] mb-6"></div>
                  <h3 className="text-3xl font-bold font-sans uppercase mb-2 leading-none">Speed. Control.</h3>
                  <h3 className="text-3xl font-bold font-sans uppercase text-[#3A6EFF] leading-none">Victory.</h3>
                  <p className="mt-4 text-blue-100 max-w-sm text-sm md:text-base">
                    Just like in F1, your IT infrastructure needs to be precise, reliable, and ready to perform under pressure.
                  </p>
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-1/2">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 border border-[#3A6EFF]/20 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold font-sans uppercase text-[#081A57] mb-4">Request Received</h3>
                  <p className="text-gray-600 max-w-sm mb-8 leading-relaxed">
                    Thank you for contacting Tap-IT. We have received your details and an expert will be in touch with you shortly (usually within 24 hours).
                  </p>
                  <Link href="/" className="bg-[#081A57] text-white px-8 py-3 rounded font-bold font-sans uppercase tracking-wider hover:bg-[#3A6EFF] transition-colors">
                    Return Home
                  </Link>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {/* Hidden Configuration Fields for FormSubmit */}
                  <input type="hidden" name="_subject" value="New Inquiry from Tap-IT Website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="first_name"
                        className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Email */}
                     <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57]"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Users */}
                     <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        Users (#)
                      </label>
                      <input 
                        type="number" 
                        name="number_of_users"
                        className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57]"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Current IT */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        Current IT Setup
                      </label>
                      <input 
                        type="text" 
                        name="current_it_setup"
                        placeholder="e.g. MSP, Internal, Hybrid"
                        className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57] placeholder-gray-400"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#081A57]">
                        Message
                      </label>
                      <span className="text-[10px] text-gray-400 font-medium">0 / 180</span>
                    </div>
                    <textarea 
                      name="message"
                      rows={6}
                      className="w-full bg-gray-50 border-b-2 border-transparent focus:border-[#3A6EFF] hover:bg-gray-100 transition-colors px-4 py-3 outline-none font-medium text-[#081A57] resize-none"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#3A6EFF] text-white py-5 rounded font-bold font-sans uppercase tracking-widest hover:bg-[#081A57] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          Sending... <Loader2 className="animate-spin" size={20} />
                        </>
                      ) : (
                        <>
                          Tap into the Cloud - Start Your Review <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      By submitting this form, you agree to our privacy policy. We typically respond within 24 hours.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default ContactPage;