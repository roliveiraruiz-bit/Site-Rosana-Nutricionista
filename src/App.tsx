/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { LeadMagnet } from './components/LeadMagnet';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <LeadMagnet />
      <Footer />
    </div>
  );
}
