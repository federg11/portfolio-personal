const WhatsAppButton = () => {
    const phoneNumber = "5493816343931";
    const message = "Hola! Estoy interesado en tus servicios de desarrollo web.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
        <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contactar por WhatsApp"
        >
            <i className="bi bi-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;