import { useEffect } from "react";

export default function BookingTest() {
  useEffect(() => {
    // Load the exact script as specified
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    
    console.log('Script loaded');
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Booking Calendar Test</h1>
      <div style={{ width: '100%', minHeight: '600px', border: '1px solid #ccc' }}>
        <iframe 
          src="https://api.leadconnectorhq.com/widget/booking/ykymX0zOQuZv29WUv5S7" 
          style={{
            width: '100%',
            border: 'none',
            overflow: 'hidden',
            minHeight: '600px'
          }}
          scrolling="no" 
          id="ykymX0zOQuZv29WUv5S7_1754793283209"
        />
      </div>
      
      <p>If you see this but no calendar above, there might be an embedding issue.</p>
    </div>
  );
}