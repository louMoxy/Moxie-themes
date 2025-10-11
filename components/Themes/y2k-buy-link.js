import { useEffect } from 'react';

export const Y2KBuyLink = ({ children }) => {
    useEffect(() => {
        // Load ThriveCart script dynamically
        const script = document.createElement('script');
        script.src = '//tinder.thrivecart.com/embed/v2/thrivecart.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on component unmount
            const existingScript = document.querySelector('script[src="//tinder.thrivecart.com/embed/v2/thrivecart.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    const modalOpts = JSON.stringify({
        style_modal_width: "40",
        style_content_border_radius: "0.5",
        attr_modal_background: "on",
        style_modal_background_color: "#000000",
        style_modal_background_opacity: "40",
        attr_modal_blur: "off",
        attr_content_shadow: "off"
    });


    return (
        <>
            <div 
                className="builder-v2-widget tc-v2-widget-embeddable_button tc-v2-embeddable-trigger"
                data-widget-layout="embeddable_button"
                data-thrivecart-account="luckynightstudio"
                data-thrivecart-tpl="v2"
                data-thrivecart-product="26"
                data-thrivecart-modal="on"
                data-thrivecart-modal-opts={modalOpts}
            >
                <div 
                    data-size="auto" 
                    data-style="rounded" 
                    data-align="center" 
                    data-block="embeddable_button" 
                    className="builder-v2-block builder-v2-block-embeddable_button"
                >
                    <button 
                        className="tc-v2-embeddable-trigger-el button bg-pink text-white px-8 py-4 rounded-xl! font-bold text-xl hover:bg-pink/90 transition-colors flex items-center justify-center gap-3 cursor-pointer" 
                    >
                            {children}
                    </button>
                </div>
            </div>
        </>
    );
};