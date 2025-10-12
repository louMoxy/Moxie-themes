import MailerLiteForm from './MailerLiteForm';
import FlyingPaperPlane from './FlyingPaperPlane';
import { Badge } from 'lucide-react';

export const Newseletter = () => {

  return (
    <section id="newsletter" className="relative overflow-hidden bg-off-white py-20 px-6">
      {/* Bubbly background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-10 right-0 w-56 h-56 bg-yellow/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-8 w-48 h-48 bg-teal/30 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute -bottom-12 right-10 w-36 h-36 bg-purple/30 rounded-full blur-3xl animate-float" />
        
        {/* Scattered badge icons in background */}
        <div className="absolute inset-0">
          <div className="absolute top-52 left-52 animate-float-rotate-slow">
            <Badge className="w-20 h-20 text-pink fill-pink/60" />
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white drop-shadow-sm">New</span>
          </div>
          <div className="absolute top-32 right-64 animate-float-rotate">
            <Badge className="w-16 h-16 text-pink fill-pink/60" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-sm">SEO</span>
          </div>
          <div className="absolute top-40 left-80 animate-float-rotate-slower">
            <Badge className="w-24 h-24 text-teal fill-teal/60" />
            <span className="absolute inset-0 flex items-center justify-center text-base font-bold text-white drop-shadow-sm">Behind</span>
          </div>
          <div className="absolute top-16 right-80 animate-float-rotate-slow">
            <Badge className="w-14 h-14 text-purple fill-purple/60" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-sm">Gifs</span>
          </div>
          <div className="absolute bottom-24 left-20 animate-float-rotate">
            <Badge className="w-32 h-32 text-pink fill-pink/60" />
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white drop-shadow-sm">Templates</span>
          </div>
          <div className="absolute bottom-16 right-16 animate-float-rotate-slower">
            <Badge className="w-28 h-28 text-pink fill-pink/60" />
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white drop-shadow-sm">Fixes</span>
          </div>
          <div className="absolute bottom-32 right-68 animate-float-rotate-slow">
            <Badge className="w-28 h-28 text-teal fill-teal/60" />
            <span className="absolute inset-0 flex items-center justify-center text-s font-bold text-white drop-shadow-sm">Scenes</span>
          </div>
          <div className="absolute top-24 left-32 animate-float-rotate">
            <Badge className="w-26 h-26 text-purple fill-purple/60" />
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white drop-shadow-sm">Included</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        
        {/* Two column layout */}
        <div className="relative grid md:grid-cols-4 items-stretch">
          {/* Content card */}
          <div className="relative z-10 col-span-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-2xl p-6 md:p-10 md:-mr-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal text-center mb-8">
            Join the Moxie List
          </h2>
            <p className="font-body text-charcoal text-lg md:text-xl leading-relaxed text-center mb-8">
              Want first dibs on new Shopify templates, SEO fixes, and cheeky behind-the-scenes stuff?
            </p>

            <div className="mt-2 max-w-md mx-auto">
              <MailerLiteForm />
            </div>
          </div>

          {/* Flying paper plane */}
          <div className="relative h-full min-h-full" style={{width: '400%', marginLeft: '-50%'}}>
            <FlyingPaperPlane />
          </div>
        </div>
      </div>

      {/* keyframes for floating blobs and rotating badges */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-12px) }
          100% { transform: translateY(0) }
        }
        @keyframes floatRotate {
          0% { transform: translateY(0) rotate(0deg) }
          25% { transform: translateY(-8px) rotate(90deg) }
          50% { transform: translateY(-16px) rotate(180deg) }
          75% { transform: translateY(-8px) rotate(270deg) }
          80% { transform: translateY(0) rotate(360deg) }
          100% { transform: translateY(0) rotate(0deg) }
        }
        @keyframes floatRotateSlow {
          0% { transform: translateY(0) rotate(0deg) }
          25% { transform: translateY(-6px) rotate(45deg) }
          50% { transform: translateY(-12px) rotate(90deg) }
          75% { transform: translateY(-6px) rotate(135deg) }
          90% { transform: translateY(0) rotate(180deg) }
          100% { transform: translateY(0) rotate(0deg) }
        }
        @keyframes floatRotateSlower {
          0% { transform: translateY(0) rotate(0deg) }
          33% { transform: translateY(-4px) rotate(30deg) }
          66% { transform: translateY(-8px) rotate(60deg) }
          80% { transform: translateY(0) rotate(90deg) }
          100% { transform: translateY(0) rotate(0deg) }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-slower { animation: float 10s ease-in-out infinite; }
        .animate-float-rotate { animation: floatRotate 8s ease-in-out infinite; }
        .animate-float-rotate-slow { animation: floatRotateSlow 12s ease-in-out infinite; }
        .animate-float-rotate-slower { animation: floatRotateSlower 16s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
export default Newseletter;