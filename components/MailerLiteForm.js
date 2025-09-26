import { useEffect } from 'react';

export default function MailerLiteForm() {
  useEffect(() => {
    // Load MailerLite script
    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Load the form data
    const fetchScript = document.createElement('script');
    fetchScript.innerHTML = 'fetch("https://assets.mailerlite.com/jsonp/1818319/forms/166532815937078992/takel")';
    document.body.appendChild(fetchScript);

    return () => {
      // Cleanup scripts on unmount
      document.body.removeChild(script);
      document.body.removeChild(fetchScript);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://assets.mlcdn.com/fonts.css?version=1758802");
        
        /* LOADER */
        .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }

        .g-recaptcha {
          transform: scale(1);
          -webkit-transform: scale(1);
          transform-origin: 0 0;
          -webkit-transform-origin: 0 0;
          height: ;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 11px;
          height: 11px;
          margin: 1px;
          border-radius: 50%;
          border: 4px solid #fff;
          border-color: #ffffff #ffffff #ffffff transparent;
          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
        }
        
        @keyframes ml-form-embedSubmitLoad {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        #mlb2-31362985.ml-form-embedContainer {
          box-sizing: border-box;
          display: table;
          margin: 0 auto;
          position: static;
          width: 100% !important;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper {
          background-color: transparent;
          border-width: 0px;
          border-color: transparent;
          border-radius: 4px;
          border-style: solid;
          box-sizing: border-box;
          display: inline-block !important;
          margin: 0;
          padding: 0;
          position: relative;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper.embedForm { 
          max-width: 100%; 
          width: 100%; 
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody {
          padding: 0;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
          margin: 0;
          width: 100%;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent {
          margin: 0 0 20px 0;
          width: 100%;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
          margin: 0 0 10px 0;
          width: 100%;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
          background-color: #ffffff !important;
          color: #222222 !important;
          border-color: rgba(34, 34, 34, 0.2) !important;
          border-radius: 8px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'DM Sans', Arial, Helvetica, sans-serif !important;
          font-size: 16px !important;
          height: auto;
          line-height: 21px !important;
          margin-bottom: 0;
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;
          padding: 12px 16px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
          transition: border-color 0.3s ease !important;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:focus {
          outline: none !important;
          border-color: #9B5DE5 !important;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
          margin: 0 0 20px 0;
          float: left;
          width: 100%;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
          background-color: #9B5DE5 !important;
          border: none !important;
          border-radius: 8px !important;
          box-shadow: none !important;
          color: #ffffff !important;
          cursor: pointer;
          font-family: 'DM Sans', Arial, Helvetica, sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          line-height: 21px !important;
          height: auto;
          padding: 12px 24px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: background-color 0.3s ease !important;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
          background-color: #7B4DD5 !important;
        }

        #mlb2-31362985.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
          display: none;
        }

        .ml-form-successBody {
          display: none;
        }

        .ml-form-successBody.show {
          display: block;
        }

        .ml-form-successContent h4 {
          color: #9B5DE5;
          font-family: 'Bricolage Grotesque', Arial, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .ml-form-successContent p {
          color: #222222;
          font-family: 'DM Sans', Arial, Helvetica, sans-serif;
          font-size: 16px;
          text-align: center;
          margin: 0;
        }
      `}</style>

      <div id="mlb2-31362985" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-31362985">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{marginBottom: '0px'}}>
              </div>

              <form 
                className="ml-block-form" 
                action="https://assets.mailerlite.com/jsonp/1818319/forms/166532815937078992/subscribe" 
                data-code="" 
                method="post" 
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input 
                        aria-label="email" 
                        aria-required="true" 
                        type="email" 
                        className="form-control" 
                        data-inputmask="" 
                        name="fields[email]" 
                        placeholder="Your email address" 
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">Subscribe</button>
                  <button disabled style={{display: 'none'}} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad"></div>
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{display: 'none'}}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          function ml_webform_success_31362985() {
            var $ = ml_jQuery || jQuery;
            $('.ml-subscribe-form-31362985 .row-success').show();
            $('.ml-subscribe-form-31362985 .row-form').hide();
          }
        `
      }} />
    </>
  );
}
